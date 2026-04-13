const fs = require('fs');
const path = require('path');

const srcDir = 'd:\\Projects\\small_ecom\\stitch_vibrant_creator_platform_prd';
const destDir = 'd:\\Projects\\small_ecom\\instashop\\src\\app';

const mapping = {
  'admin_announcements': '(admin)/admin/announcements/page.tsx',
  'admin_plan_config': '(admin)/admin/plan-config/page.tsx',
  'all_users_admin': '(admin)/admin/users/page.tsx',
  'billing_plans': '(dashboard)/dashboard/settings/billing/page.tsx',
  'coupon_management': '(dashboard)/dashboard/coupons/page.tsx',
  'customer_crm': '(dashboard)/dashboard/customers/page.tsx',
  'customer_storefront_vibrant': 'store/[storeSlug]/page.tsx',
  'instashop_landing_page_vibrant': 'landing-vibrant/page.tsx', 
  'lead_management': '(dashboard)/dashboard/leads/page.tsx',
  'manage_stores_admin': '(admin)/admin/stores/page.tsx',
  'onboarding_wizard_vibrant': '(dashboard)/onboarding/page.tsx',
  'order_details': '(dashboard)/dashboard/orders/[id]/page.tsx',
  'order_management': '(dashboard)/dashboard/orders/page.tsx',
  'platform_analytics_admin': '(admin)/admin/analytics/page.tsx',
  'product_management_list': '(dashboard)/dashboard/products/page.tsx',
  'seller_dashboard_vibrant': '(dashboard)/dashboard/page.tsx',
  'sign_in': 'sign-in/page.tsx',
  'sign_up': 'sign-up/page.tsx',
  'store_analytics': '(dashboard)/dashboard/analytics/page.tsx',
  'store_settings': '(dashboard)/dashboard/settings/store/page.tsx',
  'storefront_about_us': 'store/[storeSlug]/about/page.tsx',
  'storefront_contact': 'store/[storeSlug]/contact/page.tsx',
  'theme_customizer': '(dashboard)/dashboard/settings/theme/page.tsx',
  'track_order': 'track-order/page.tsx',
  'vibrant_creator': 'vibrant/page.tsx',
  'whatsapp_settings': '(dashboard)/dashboard/settings/whatsapp/page.tsx'
};

// basic HTML to JSX conversion
function convertToJSX(html) {
   let jsx = html;
   
   // Extract body content
   const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
   if (bodyMatch) {
       jsx = bodyMatch[1];
   }

   // Convert class to className
   jsx = jsx.replace(/class=/g, 'className=');
   jsx = jsx.replace(/for=/g, 'htmlFor=');
   jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}'); // convert comments
   
   // Self close void tags
   const voidTags = ['img', 'input', 'br', 'hr', 'link', 'meta'];
   voidTags.forEach(tag => {
       const regex = new RegExp(`<${tag}([^>]*?)(?<!/)>`, 'gi');
       jsx = jsx.replace(regex, `<${tag}$1 />`);
   });

   // Svg properties
   const svgProps = ['stroke-width', 'stroke-linecap', 'stroke-linejoin', 'fill-rule', 'clip-rule', 'stroke-miterlimit'];
   svgProps.forEach(prop => {
       const camel = prop.split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
       jsx = jsx.replace(new RegExp(prop + '=', 'g'), camel + '=');
   });
   
   return `export default function Page() {\n  return (\n    <div className="vibrant-wrapper">\n${jsx}\n    </div>\n  );\n}\n`;
}

console.log("Starting code conversion...");

Object.keys(mapping).forEach(folder => {
    const htmlFile = path.join(srcDir, folder, 'code.html');
    if (fs.existsSync(htmlFile)) {
        const html = fs.readFileSync(htmlFile, 'utf8');
        const jsx = convertToJSX(html);
        const destPath = path.join(destDir, mapping[folder]);
        fs.mkdirSync(path.dirname(destPath), { recursive: true });
        
        // Write the converted file
        fs.writeFileSync(destPath, jsx);
        console.log('Generated', destPath);
    } else {
        console.warn('File not found', htmlFile);
    }
});

console.log("Done.");
