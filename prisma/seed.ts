import { config } from "dotenv";
config({ path: ".env.local" });

import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL || "";
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const db = new PrismaClient({ adapter });

async function main() {
  console.log("🌱 Starting seed...\n");

  // ── 1. SUPER ADMIN ────────────────────────────────────────────
  const adminPassword = await bcrypt.hash("Admin@1234", 12);
  const admin = await db.user.upsert({
    where: { email: "admin@instashop.in" },
    update: {},
    create: {
      email: "admin@instashop.in",
      password: adminPassword,
      name: "InstaShop Admin",
      role: "SUPER_ADMIN",
    },
  });
  console.log("✅ Admin created:", admin.email);

  // ── 2. STORE OWNER ────────────────────────────────────────────
  const ownerPassword = await bcrypt.hash("Seller@1234", 12);
  const owner = await db.user.upsert({
    where: { email: "priya@fashionbee.in" },
    update: {},
    create: {
      email: "priya@fashionbee.in",
      password: ownerPassword,
      name: "Priya Sharma",
      phone: "9876543210",
      role: "STORE_OWNER",
    },
  });
  console.log("✅ Store owner created:", owner.email);

  // ── 3. STORE ──────────────────────────────────────────────────
  const existingStore = await db.store.findUnique({ where: { slug: "fashionbee" } });
  if (existingStore) {
    console.log("ℹ️  Store already exists, skipping...");
    return;
  }

  const store = await db.store.create({
    data: {
      userId: owner.id,
      name: "FashionBee",
      slug: "fashionbee",
      tagline: "Trendy Clothes for Modern Women 🐝",
      description: "FashionBee is your go-to Instagram boutique for the latest ethnic and western fusion wear. Curated styles, affordable prices.",
      whatsappNumber: "9876543210",
      instagramHandle: "fashionbee_india",
      theme: "VIBRANT",
      accentColor: "#f9cc61",
      plan: "STARTER",
      planExpiresAt: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days from now
      isOpen: true,
      isVerified: true,
      onboardingDone: true,
      onboardingStep: 5,
      seoTitle: "FashionBee — Trendy Ethnic & Western Wear",
      seoDescription: "Shop the latest ethnic and western fusion wear from FashionBee. Free delivery on orders above ₹599.",
    },
  });
  console.log("✅ Store created:", store.slug);

  // ── 4. CATEGORIES ─────────────────────────────────────────────
  const categories = await Promise.all([
    db.category.create({ data: { storeId: store.id, name: "Kurtas & Kurtis", slug: "kurtas", order: 1 } }),
    db.category.create({ data: { storeId: store.id, name: "Co-ord Sets", slug: "coord-sets", order: 2 } }),
    db.category.create({ data: { storeId: store.id, name: "Accessories", slug: "accessories", order: 3 } }),
  ]);
  console.log("✅ Categories created:", categories.map((c) => c.name).join(", "));

  // ── 5. PRODUCTS ───────────────────────────────────────────────
  const products = await Promise.all([
    db.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[0].id,
        name: "Floral Anarkali Kurti",
        description: "A gorgeous floral anarkali kurti in breathable cotton. Perfect for casual and festive occasions. Available in S, M, L, XL.",
        price: 899,
        discountPrice: 699,
        stock: 24,
        lowStockAlert: 5,
        trackStock: true,
        status: "ACTIVE",
        isFeatured: true,
        tags: "kurti,anarkali,floral,cotton",
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=500&fit=crop",
              publicId: "seed_kurti_1",
              order: 0,
            },
          ],
        },
        variants: {
          create: [
            { name: "Size", value: "S", price: 699, stock: 6 },
            { name: "Size", value: "M", price: 699, stock: 8 },
            { name: "Size", value: "L", price: 699, stock: 6 },
            { name: "Size", value: "XL", price: 749, stock: 4 },
          ],
        },
      },
    }),
    db.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[1].id,
        name: "Pastel Co-ord Set",
        description: "A chic pastel matching top and palazzo set. Light fabric, perfect for brunches and casual outings. Sizes XS–XL.",
        price: 1199,
        discountPrice: 999,
        stock: 15,
        trackStock: true,
        status: "ACTIVE",
        isFeatured: true,
        tags: "coord set,palazzo,pastel,summer",
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
              publicId: "seed_coord_1",
              order: 0,
            },
          ],
        },
      },
    }),
    db.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[0].id,
        name: "Block Print Cotton Kurti",
        description: "Hand-block printed cotton kurti from Rajasthani artisans. Comfortable fit, vibrant print. Free size (38–42).",
        price: 649,
        stock: 30,
        trackStock: true,
        status: "ACTIVE",
        tags: "block print,handmade,kurti,rajasthani",
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
              publicId: "seed_kurti_2",
              order: 0,
            },
          ],
        },
      },
    }),
    db.product.create({
      data: {
        storeId: store.id,
        categoryId: categories[2].id,
        name: "Beaded Jhumka Earrings",
        description: "Hand-crafted beaded jhumka earrings in gold and multicolor. Lightweight and perfect for all occasions.",
        price: 299,
        stock: 50,
        trackStock: true,
        status: "ACTIVE",
        tags: "jhumka,earrings,handmade,accessories",
        images: {
          create: [
            {
              url: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=400&fit=crop",
              publicId: "seed_earrings_1",
              order: 0,
            },
          ],
        },
      },
    }),
  ]);
  console.log("✅ Products created:", products.map((p) => p.name).join(", "));

  // ── 6. CUSTOMERS ──────────────────────────────────────────────
  const customers = await Promise.all([
    db.customer.create({
      data: {
        storeId: store.id,
        name: "Anjali Mehta",
        phone: "9871234560",
        email: "anjali@example.com",
        address: "12, MG Road, Koramangala",
        city: "Bangalore",
        state: "Karnataka",
        pincode: "560034",
        tag: "VIP",
        totalOrders: 3,
        totalSpent: 2797,
        notes: "Loves ethnic wear. Always pays via UPI.",
      },
    }),
    db.customer.create({
      data: {
        storeId: store.id,
        name: "Sneha Kapoor",
        phone: "9988776655",
        email: "sneha@example.com",
        address: "5B, Bandra West",
        city: "Mumbai",
        state: "Maharashtra",
        pincode: "400050",
        tag: "REPEAT",
        totalOrders: 1,
        totalSpent: 999,
      },
    }),
    db.customer.create({
      data: {
        storeId: store.id,
        name: "Ritu Desai",
        phone: "9765432187",
        address: "77, Civil Lines",
        city: "Jaipur",
        state: "Rajasthan",
        pincode: "302006",
        tag: "NEW",
        totalOrders: 1,
        totalSpent: 649,
      },
    }),
  ]);
  console.log("✅ Customers created:", customers.map((c) => c.name).join(", "));

  // ── 7. ORDERS ─────────────────────────────────────────────────
  const order1 = await db.order.create({
    data: {
      orderNumber: "IS-2025-00001",
      storeId: store.id,
      customerId: customers[0].id,
      customerName: customers[0].name,
      customerPhone: customers[0].phone,
      customerEmail: customers[0].email ?? undefined,
      shippingAddress: customers[0].address ?? "12, MG Road, Koramangala",
      city: customers[0].city ?? "Bangalore",
      state: customers[0].state ?? "Karnataka",
      pincode: customers[0].pincode ?? "560034",
      status: "DELIVERED",
      paymentMethod: "UPI",
      paymentStatus: "PAID",
      subtotal: 699,
      discountAmount: 0,
      shippingCharge: 49,
      total: 748,
      trackingId: "DTDC123456789IN",
      courierName: "DTDC",
      items: {
        create: [
          {
            productId: products[0].id,
            productName: products[0].name,
            variantInfo: "Size: M",
            imageUrl: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=500&fit=crop",
            quantity: 1,
            unitPrice: 699,
            totalPrice: 699,
          },
        ],
      },
      timeline: {
        create: [
          { status: "CONFIRMED", note: "Order placed via WhatsApp" },
          { status: "PACKED", note: "Packed and ready to ship" },
          { status: "SHIPPED", note: "Handed over to DTDC" },
          { status: "DELIVERED", note: "Delivered successfully" },
        ],
      },
    },
  });

  const order2 = await db.order.create({
    data: {
      orderNumber: "IS-2025-00002",
      storeId: store.id,
      customerId: customers[1].id,
      customerName: customers[1].name,
      customerPhone: customers[1].phone,
      shippingAddress: customers[1].address ?? "5B, Bandra West",
      city: customers[1].city ?? "Mumbai",
      state: customers[1].state ?? "Maharashtra",
      pincode: customers[1].pincode ?? "400050",
      status: "SHIPPED",
      paymentMethod: "COD",
      paymentStatus: "PENDING",
      subtotal: 999,
      discountAmount: 0,
      shippingCharge: 0,
      total: 999,
      trackingId: "BD987654321IN",
      courierName: "BlueDart",
      items: {
        create: [
          {
            productId: products[1].id,
            productName: products[1].name,
            imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=500&fit=crop",
            quantity: 1,
            unitPrice: 999,
            totalPrice: 999,
          },
        ],
      },
      timeline: {
        create: [
          { status: "CONFIRMED", note: "Order confirmed" },
          { status: "PACKED", note: "Ready to ship" },
          { status: "SHIPPED", note: "Handed to BlueDart" },
        ],
      },
    },
  });

  const order3 = await db.order.create({
    data: {
      orderNumber: "IS-2025-00003",
      storeId: store.id,
      customerId: customers[2].id,
      customerName: customers[2].name,
      customerPhone: customers[2].phone,
      shippingAddress: customers[2].address ?? "77, Civil Lines",
      city: customers[2].city ?? "Jaipur",
      state: customers[2].state ?? "Rajasthan",
      pincode: customers[2].pincode ?? "302006",
      status: "PENDING",
      paymentMethod: "UPI",
      paymentStatus: "PAID",
      subtotal: 649,
      discountAmount: 0,
      shippingCharge: 49,
      total: 698,
      items: {
        create: [
          {
            productId: products[2].id,
            productName: products[2].name,
            imageUrl: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop",
            quantity: 1,
            unitPrice: 649,
            totalPrice: 649,
          },
        ],
      },
      timeline: {
        create: [{ status: "CONFIRMED", note: "UPI payment received" }],
      },
    },
  });

  console.log("✅ Orders created:", [order1, order2, order3].map((o) => o.orderNumber).join(", "));

  // ── 8. COUPON ─────────────────────────────────────────────────
  await db.coupon.create({
    data: {
      storeId: store.id,
      code: "WELCOME50",
      discountType: "FLAT",
      discountValue: 50,
      minOrderValue: 499,
      isActive: true,
    },
  });
  console.log("✅ Coupon created: WELCOME50 (₹50 off on ₹499+)");

  // ── 9. ANALYTICS (seed 7 days) ────────────────────────────────
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const date = new Date(today);
    date.setDate(today.getDate() - i);
    date.setHours(0, 0, 0, 0);
    await db.storeAnalytics.upsert({
      where: { storeId_date: { storeId: store.id, date } },
      update: {},
      create: {
        storeId: store.id,
        date,
        pageViews: Math.floor(Math.random() * 80) + 20,
        orderCount: Math.floor(Math.random() * 5) + 1,
        revenue: Math.round((Math.random() * 2000 + 500) * 100) / 100,
        newCustomers: Math.floor(Math.random() * 3),
      },
    });
  }
  console.log("✅ Analytics seeded for last 7 days");

  // ── 10. LEADS ─────────────────────────────────────────────────
  await db.lead.createMany({
    data: [
      { storeId: store.id, name: "Kavya Nair", phone: "9945678901", source: "Instagram DM", status: "HOT", notes: "Interested in the Co-ord Set. Asked about sizes." },
      { storeId: store.id, name: "Meera Joshi", phone: "9812345670", source: "WhatsApp", status: "WARM", notes: "Saw the floral kurti story. Wants delivery to Pune." },
    ],
    skipDuplicates: true,
  });
  console.log("✅ Leads seeded");

  console.log("\n🎉 Seed complete!\n");
  console.log("─────────────────────────────────────────");
  console.log("🔑 Login credentials:");
  console.log("  Admin:  admin@instashop.in / Admin@1234");
  console.log("  Seller: priya@fashionbee.in / Seller@1234");
  console.log("  Store:  /store/fashionbee");
  console.log("─────────────────────────────────────────\n");
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(async () => { await db.$disconnect(); await pool.end(); });
