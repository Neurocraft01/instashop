import {
  Role,
  PlanType,
  StoreTheme,
  BannerType,
  ProductStatus,
  CustomerTag,
  LeadStatus,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  DiscountType,
} from "@/generated/prisma";

export type {
  Role,
  PlanType,
  StoreTheme,
  BannerType,
  ProductStatus,
  CustomerTag,
  LeadStatus,
  OrderStatus,
  PaymentMethod,
  PaymentStatus,
  DiscountType,
};

// ─── API Response ────────────────────────────────────────────────────────────
export type ApiResponse<T = unknown> = {
  success: boolean;
  data?: T;
  error?: string;
};

// ─── Store ────────────────────────────────────────────────────────────────────
export type StoreWithStats = {
  id: string;
  name: string;
  slug: string;
  tagline?: string | null;
  description?: string | null;
  logoUrl?: string | null;
  bannerUrl?: string | null;
  bannerType: BannerType;
  whatsappNumber?: string | null;
  instagramHandle?: string | null;
  theme: StoreTheme;
  accentColor: string;
  isOpen: boolean;
  closedMessage?: string | null;
  isActive: boolean;
  isVerified: boolean;
  plan: PlanType;
  planExpiresAt?: Date | null;
  upiId?: string | null;
  upiQrUrl?: string | null;
  customDomain?: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count?: {
    products: number;
    orders: number;
    customers: number;
  };
};

// ─── Product ──────────────────────────────────────────────────────────────────
export type ProductImage = {
  id: string;
  url: string;
  publicId: string;
  order: number;
};

export type ProductVariant = {
  id: string;
  name: string;
  value: string;
  price?: number | null;
  stock?: number | null;
  sku?: string | null;
};

export type ProductWithDetails = {
  id: string;
  storeId: string;
  categoryId?: string | null;
  name: string;
  description?: string | null;
  price: number;
  discountPrice?: number | null;
  images: ProductImage[];
  videoUrl?: string | null;
  stock?: number | null;
  lowStockAlert?: number | null;
  trackStock: boolean;
  status: ProductStatus;
  isFeatured: boolean;
  tags?: string | null;
  variants: ProductVariant[];
  createdAt: Date;
  updatedAt: Date;
  category?: { id: string; name: string; slug: string } | null;
};

// ─── Order ────────────────────────────────────────────────────────────────────
export type OrderItem = {
  id: string;
  productId: string;
  variantId?: string | null;
  productName: string;
  variantInfo?: string | null;
  imageUrl?: string | null;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type OrderTimeline = {
  id: string;
  status: OrderStatus;
  note?: string | null;
  createdAt: Date;
};

export type OrderWithDetails = {
  id: string;
  orderNumber: string;
  storeId: string;
  customerId?: string | null;
  customerName: string;
  customerPhone: string;
  customerEmail?: string | null;
  shippingAddress: string;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  subtotal: number;
  discountAmount: number;
  shippingCharge: number;
  total: number;
  couponId?: string | null;
  notes?: string | null;
  customerNote?: string | null;
  trackingId?: string | null;
  courierName?: string | null;
  items: OrderItem[];
  timeline: OrderTimeline[];
  createdAt: Date;
  updatedAt: Date;
  customer?: { tag: CustomerTag } | null;
};

// ─── Customer ─────────────────────────────────────────────────────────────────
export type CustomerWithStats = {
  id: string;
  storeId: string;
  name: string;
  phone: string;
  email?: string | null;
  address?: string | null;
  city?: string | null;
  state?: string | null;
  pincode?: string | null;
  tag: CustomerTag;
  notes?: string | null;
  totalOrders: number;
  totalSpent: number;
  createdAt: Date;
  updatedAt: Date;
};

// ─── Lead ─────────────────────────────────────────────────────────────────────
export type LeadWithDetails = {
  id: string;
  storeId: string;
  name: string;
  phone: string;
  email?: string | null;
  message?: string | null;
  source?: string | null;
  status: LeadStatus;
  notes?: string | null;
  convertedToOrderId?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

// ─── Coupon ───────────────────────────────────────────────────────────────────
export type CouponWithStats = {
  id: string;
  storeId: string;
  code: string;
  discountType: DiscountType;
  discountValue: number;
  minOrderValue?: number | null;
  maxUses?: number | null;
  usedCount: number;
  expiresAt?: Date | null;
  isActive: boolean;
  createdAt: Date;
};

// ─── Cart ─────────────────────────────────────────────────────────────────────
export type CartItem = {
  productId: string;
  variantId?: string;
  name: string;
  imageUrl?: string;
  price: number;
  quantity: number;
  variantInfo?: string;
};

// ─── Analytics ────────────────────────────────────────────────────────────────
export type AnalyticsData = {
  totalRevenue: number;
  totalOrders: number;
  avgOrderValue: number;
  newCustomers: number;
  revenueChange: number;
  ordersChange: number;
  avgOrderChange: number;
  customersChange: number;
  revenueChart: { date: string; revenue: number; orders: number }[];
  statusBreakdown: { status: string; count: number }[];
  topProducts: { id: string; name: string; imageUrl?: string; orders: number; revenue: number }[];
  customerInsights: { newCustomers: number; repeatCustomers: number };
};

// ─── Plan limits ──────────────────────────────────────────────────────────────
export const PLAN_LIMITS = {
  FREE: { products: 10, orders: 50, coupons: 3 }, // Free 10 days Trial
  STARTER: { products: 100, orders: 500, coupons: 10 },
  GROWTH: { products: 500, orders: 2000, coupons: 50 },
  PRO: { products: Infinity, orders: Infinity, coupons: Infinity },
} as const;

export const PLAN_PRICES = {
  FREE: 0,
  STARTER: 199,
  GROWTH: 499,
  PRO: 999,
} as const;
