# Shopify Liquid Template Conversion
## Kimhab Ork E-Commerce Pages

This directory contains a complete conversion of your Next.js React e-commerce pages into Shopify Liquid templates, ready to deploy on the Shopify platform.

---

## 📁 Contents

### Templates
- **index.liquid** - Home/storefront page with hero section, features, and CTAs
- **page.about.liquid** - About Us page with company story, values, and FAQs
- **page.contact.liquid** - Contact Us page with form, contact info, and FAQs  
- **page.care-guides.liquid** - Comprehensive fabric care instructions
- **page.responsibility.liquid** - Sustainability and ethical practices page

### Documentation
- **IMPLEMENTATION_GUIDE.md** - Complete step-by-step setup and deployment guide
- **QUICK_REFERENCE.md** - Quick lookup guide for Liquid syntax and common patterns
- **README.md** - This file

### Localization
- **locales/en.default.json** - English translation strings for all pages

---

## 🚀 Quick Start

### 1. Clone or Download
```bash
# Copy the shopify-liquid folder to your project
cp -r shopify-liquid/ your-theme/
```

### 2. Upload to Shopify

#### Option A: Using Shopify Theme Kit (Recommended)
```bash
# Install Theme Kit: https://shopify.dev/docs/themes/tools/theme-kit

# Clone your theme locally
theme download --password=[api-password] --store=[store].myshopify.com --themeid=[theme-id]

# Copy template files
cp shopify-liquid/templates/* your-theme/templates/
cp shopify-liquid/locales/en.default.json your-theme/locales/

# Upload to Shopify
theme upload
```

#### Option B: Manual Upload
1. Go to Shopify Admin > Sales Channels > Online Store > Themes
2. Click **Edit** on your theme
3. Create new template files and copy-paste the Liquid code from each file

### 3. Create Pages
1. Go to Shopify Admin > Settings > Online Store > Pages
2. Create pages with these handles (URL-friendly names):
   - `about` → Use template `page.about.liquid`
   - `contact` → Use template `page.contact.liquid`
   - `care-guides` → Use template `page.care-guides.liquid`
   - `responsibility` → Use template `page.responsibility.liquid`

### 4. Customize
- Update theme colors in your CSS variables
- Customize translation strings in `locales/en.default.json`
- Adjust navigation links to match your Shopify setup
- Configure contact form integration

---

## 📋 Key Features

### ✅ What's Included
- Fully responsive design (mobile-first)
- Tailwind CSS styling
- Multi-language support (i18n)
- Contact form integration
- Dynamic content rendering
- Semantic HTML structure
- Accessibility features (ARIA labels, alt text)
- Performance optimized

### 📝 What You Need to Do
- [ ] Upload templates to Shopify
- [ ] Create corresponding pages in Shopify Admin
- [ ] Update navigation links
- [ ] Configure custom colors/fonts
- [ ] Test on different devices
- [ ] Deploy to production

---

## 🔧 Customization

### Change Brand Colors
In your theme's CSS file, update:
```css
:root {
  --color-primary: #your-primary-color;
  --color-foreground: #your-text-color;
  --color-background: #your-bg-color;
  --color-muted: #your-muted-color;
}
```

### Add/Edit Translations
Edit `locales/en.default.json`:
```json
{
  "pages": {
    "home": {
      "hero": {
        "title": "Your Custom Title"
      }
    }
  }
}
```

### Add Product Recommendations
```liquid
{% for product in collection.products limit:4 %}
  <div class="product-card">
    <img src="{{ product.featured_image | img_url: '300x300' }}" alt="{{ product.title }}">
    <h3>{{ product.title }}</h3>
    <p>{{ product.price | money }}</p>
    <a href="{{ product.url }}">View</a>
  </div>
{% endfor %}
```

---

## 📚 Documentation Guide

### For Complete Setup Instructions
→ Read **IMPLEMENTATION_GUIDE.md**

Covers:
- Detailed installation steps
- File structure explanation
- Shopify URL conventions
- Form handling
- Troubleshooting guide
- Performance tips

### For Quick Liquid Lookup
→ Read **QUICK_REFERENCE.md**

Includes:
- Basic Liquid syntax
- Common filters
- Shopify objects reference
- Tailwind CSS classes
- Common patterns
- Debugging tips

---

## 🌐 URL Structure

Once deployed, your pages will be accessible at:

```
https://your-store.myshopify.com/pages/about
https://your-store.myshopify.com/pages/contact
https://your-store.myshopify.com/pages/care-guides
https://your-store.myshopify.com/pages/responsibility
```

---

## 🔄 Page Details

### Home Page (index.liquid)
**Features:**
- Hero section with primary CTA
- Feature cards (4 columns on desktop)
- "Learn More" section with page previews
- Legal & support links
- Bottom CTA gradient section

**Content:** Dynamic hero title, description, features, links

---

### About Page (page.about.liquid)
**Features:**
- Company story section
- Core values display
- FAQ-style benefits
- Call-to-action

**Sections:**
- Hero with gradient background
- Our Story
- Our Values (4 cards)
- Why Choose Us (Expandable FAQs)
- Bottom CTA

---

### Contact Page (page.contact.liquid)
**Features:**
- Contact information cards
- Integrated contact form
- FAQ section

**Form Fields:**
- Name (required)
- Email (required)
- Subject (required)
- Message (required)

---

### Care Guides (page.care-guides.liquid)
**Features:**
- 5 collapsible fabric care sections
- General care tips (storage, washing, drying, ironing)
- Stain removal guidance
- Detailed care instructions per fabric type

**Fabric Types Covered:**
- Cotton
- Silk
- Denim
- Knitwear & Cashmere
- Leather

---

### Responsibility (page.responsibility.liquid)
**Features:**
- Company commitment statement
- Three pillars of responsibility
- Detailed practices section
- Certifications showcase
- Call-to-action

---

## 🎨 Design System

### Color Tokens
```
- Primary: Main brand color
- Foreground: Text color
- Background: Page background
- Muted: Secondary/muted color
- Border: Border/divider color
```

### Typography
- **Headings:** font-serif (Playfair Display style)
- **Body:** font-sans (Raleway style)
- **Mono:** font-mono (Code/technical)

### Spacing Scale
Uses standard Tailwind scale: 4px, 8px, 12px, 16px, 24px, 32px, 48px, etc.

### Responsive Breakpoints
- Mobile: 0px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## ✨ Best Practices

### Content Management
- Use Shopify Admin to edit page content
- Leverage metafields for dynamic content
- Keep translations synchronized
- Use meaningful page handles

### Performance
- Optimize images before uploading
- Use `img_url` filter for responsive images
- Minimize inline CSS
- Load external resources asynchronously

### Security
- Never expose sensitive information in Liquid
- Use form security tokens
- Validate customer input
- Follow Shopify security guidelines

### Accessibility
- Include alt text for all images
- Use semantic HTML (main, header, section, etc.)
- Maintain proper heading hierarchy
- Test with screen readers

---

## 🐛 Troubleshooting

### Templates Not Showing
**Problem:** Liquid files uploaded but pages show default template
**Solution:** Assign the correct template to each page in Shopify Admin

### Forms Not Working
**Problem:** Contact form not submitting
**Solution:** Verify form action is `/contact#contact-form` and method is POST

### Styles Not Applying
**Problem:** Tailwind classes not showing
**Solution:** Ensure Tailwind CSS is included in your theme's CSS file

### Variables Empty
**Problem:** {{ variable }} shows nothing
**Solution:** Check object names - use `{{ shop.name }}` not `{{ store.name }}`

→ See **IMPLEMENTATION_GUIDE.md** for more troubleshooting

---

## 📊 File Statistics

| File | Lines | Type |
|------|-------|------|
| index.liquid | 197 | Template |
| page.about.liquid | 225 | Template |
| page.contact.liquid | 202 | Template |
| page.care-guides.liquid | 318 | Template |
| page.responsibility.liquid | 179 | Template |
| en.default.json | 209 | Localization |
| IMPLEMENTATION_GUIDE.md | 491 | Documentation |
| QUICK_REFERENCE.md | 416 | Documentation |

**Total:** 5 complete page templates + comprehensive documentation

---

## 🔗 Resources

- [Shopify Liquid Documentation](https://shopify.dev/docs/api/liquid)
- [Shopify Theme Guide](https://shopify.dev/docs/themes)
- [Theme Kit](https://shopify.dev/docs/themes/tools/theme-kit)
- [Tailwind CSS](https://tailwindcss.com)
- [Shopify Community](https://community.shopify.com)

---

## 📝 Customization Checklist

Before deploying to production:

- [ ] Update all Shopify page URLs to match your store structure
- [ ] Customize brand colors to match your theme
- [ ] Update contact form email/phone
- [ ] Review and customize all translation strings
- [ ] Add your logo/images
- [ ] Configure navigation menus
- [ ] Test on mobile/tablet devices
- [ ] Test all interactive elements (forms, links)
- [ ] Check image load times
- [ ] Verify SEO meta tags
- [ ] Set up analytics tracking
- [ ] Deploy to production
- [ ] Monitor for errors

---

## 💡 Tips & Tricks

### Speed Up Development
1. Use Shopify CLI for local development
2. Use Theme Inspector browser extension
3. Test in a development theme first
4. Keep CSS variables organized

### Enhance Functionality
1. Add product collections
2. Include customer reviews
3. Integrate email capture
4. Add live chat support

### Improve Performance
1. Lazy load images
2. Minify CSS/JS
3. Use CDN for assets
4. Cache dynamic content

---

## 🎯 Next Steps

1. **Setup:** Follow IMPLEMENTATION_GUIDE.md step-by-step
2. **Customize:** Update colors, content, and settings
3. **Test:** Verify all pages and functionality
4. **Deploy:** Push to production
5. **Monitor:** Track performance and user behavior

---

## 📞 Support

For issues or questions:

1. Check the [Shopify Liquid Docs](https://shopify.dev/docs/api/liquid)
2. Review comments in the template files
3. Consult the QUICK_REFERENCE.md for syntax help
4. See IMPLEMENTATION_GUIDE.md troubleshooting section
5. Visit [Shopify Community Forums](https://community.shopify.com)

---

## 📄 License

These templates are provided as-is for the Kimhab Ork brand. Customize and deploy as needed for your Shopify store.

---

## 🏷️ Version Info

- **Version:** 1.0
- **Updated:** 2026
- **Brand:** Kimhab Ork
- **Type:** Shopify Liquid Template Package
- **Status:** Production Ready

---

**Happy templating! 🎨**

For questions or support, refer to the comprehensive guides included in this package.
