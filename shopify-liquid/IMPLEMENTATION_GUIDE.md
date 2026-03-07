# Shopify Liquid Implementation Guide
## Kimhab Ork E-Commerce Pages Conversion

This guide provides comprehensive instructions for converting your Next.js React pages to Shopify Liquid templates for use on the Shopify platform.

---

## Overview

This conversion package includes Liquid templates for all major pages of your Kimhab Ork e-commerce site:

- **index.liquid** - Home page with hero, features, and call-to-action sections
- **page.about.liquid** - About Us page with company story, values, and FAQs
- **page.contact.liquid** - Contact Us page with form, contact info, and FAQs
- **page.care-guides.liquid** - Comprehensive fabric care instructions
- **page.responsibility.liquid** - Sustainability and ethical practices page

---

## What is Liquid?

Liquid is Shopify's template language that allows you to:
- **Output dynamic data** using `{{ variable }}`
- **Create logic** using `{% if %}`, `{% for %}`, `{% case %}` tags
- **Filter output** using pipes: `{{ variable | filter }}`
- **Access Shopify objects** like `shop`, `product`, `collection`, `page`

### Key Syntax

```liquid
{# Output variables #}
{{ product.title }}

{# Logic #}
{% if product.available %}
  In Stock
{% endif %}

{# Loops #}
{% for item in items %}
  {{ item.name }}
{% endfor %}

{# Filters #}
{{ product.price | money }}
{{ product.title | upcase }}

{# Comments #}
{% comment %} This is a comment {% endcomment %}
```

---

## File Structure

```
shopify-liquid/
├── templates/
│   ├── index.liquid
│   ├── page.about.liquid
│   ├── page.contact.liquid
│   ├── page.care-guides.liquid
│   └── page.responsibility.liquid
├── locales/
│   └── en.default.json
└── IMPLEMENTATION_GUIDE.md
```

---

## Installation Instructions

### Step 1: Access Your Shopify Theme Editor

1. Go to your Shopify admin dashboard
2. Navigate to **Sales Channels** > **Online Store** > **Themes**
3. Find your active theme and click **Edit**

### Step 2: Upload Template Files

#### Method A: Using Shopify Theme Kit (Recommended)

```bash
# Install Theme Kit if you haven't already
# Visit: https://shopify.dev/docs/themes/tools/theme-kit

# Clone your theme
theme download --password=[your-api-password] --store=[your-store].myshopify.com --themeid=[theme-id]

# Copy template files to your local theme folder
# cp shopify-liquid/templates/* your-theme/templates/
# cp shopify-liquid/locales/en.default.json your-theme/locales/

# Upload changes
theme upload
```

#### Method B: Manual Upload via Admin

1. In the theme editor, go to **Assets**
2. For each template file:
   - Click **Add a new file**
   - Select **Create a blank template**
   - Copy-paste the Liquid code
   - Name it appropriately (e.g., `index.liquid`, `page.about.liquid`)

### Step 3: Configure Page URLs

For page templates to work, you need to:

1. Create the corresponding pages in Shopify:
   - **Settings** > **Online Store** > **Pages**
   - Create pages for: About, Contact, Care Guides, Responsibility
   - Note their handles (e.g., `about`, `contact`, `care-guides`, `responsibility`)

2. Assign templates to pages:
   - Select a page
   - In the **Template** section, choose the corresponding Liquid template

---

## Key Differences from React

### 1. Translations/i18n

**React Version:**
```typescript
'pages.home.hero.title' // Direct imports from language files
```

**Liquid Version:**
```liquid
{{ 'pages.home.hero.title' | t: default: 'Fallback Text' }}
```

The Liquid `t` filter uses the `en.default.json` file for translations.

### 2. Component Import/Include

**React Version:**
```typescript
import { FeatureCard } from '@/components/feature-card'
// Used as: <FeatureCard {...props} />
```

**Liquid Version:**
Use Liquid `include` or `render`:
```liquid
{% render 'feature-card', title: 'Title', description: 'Desc' %}
```

### 3. Styling

**React Version:**
Tailwind CSS classes applied directly

**Liquid Version:**
Tailwind CSS classes work the same in Liquid:
```liquid
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
```

### 4. Dynamic Data Binding

**React Version:**
```typescript
{features.map((feature) => (
  <div key={feature.id}>{feature.title}</div>
))}
```

**Liquid Version:**
```liquid
{% for feature in features %}
  <div>{{ feature.title }}</div>
{% endfor %}
```

---

## Important Configuration Steps

### 1. Update Navigation Links

In Liquid templates, navigation links should point to Shopify page URLs:

```liquid
{# Instead of /about #}
<a href="/pages/about">About Us</a>

{# For products/collections #}
<a href="/products/product-handle">Product</a>
<a href="/collections/collection-handle">Collection</a>

{# For Shopify policies #}
<a href="/policies/privacy-policy">Privacy</a>
<a href="/policies/terms-of-service">Terms</a>
```

### 2. Form Handling

Replace the contact form with Shopify's native contact form:

```liquid
{% render 'contact-form' %}

{# Or use the Shopify contact form action: #}
<form method="POST" action="/contact#contact-form">
  <input type="hidden" name="contact[tags]" value="inquiry">
  <input type="text" name="contact[name]" placeholder="Name" required>
  <input type="email" name="contact[email]" placeholder="Email" required>
  <textarea name="contact[body]" placeholder="Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### 3. Theme Customization

Update Tailwind classes to match your theme colors. Modify the CSS in your theme's `base.css`:

```css
:root {
  --color-primary: #[your-color];
  --color-foreground: #[your-text-color];
  --color-background: #[your-bg-color];
  --color-muted: #[your-muted-color];
}
```

---

## Creating Additional Pages

### Template Naming Convention

- **Public pages**: `page.[handle].liquid`
- **Product template**: `product.[name].liquid`
- **Collection template**: `collection.[name].liquid`
- **Blog template**: `blog.[handle].liquid`
- **Article template**: `article.liquid`

### Example: Creating a New Page

1. Create a page in Shopify admin
2. Create a Liquid file: `page.your-page.liquid`
3. Add your HTML and Liquid code:

```liquid
{% comment %} Page Handle: your-page {% endcomment %}

<main>
  <h1>{{ page.title }}</h1>
  <div>{{ page.content }}</div>
</main>
```

---

## Common Shopify Liquid Objects

### Shop Object
```liquid
{{ shop.name }}           {# Store name #}
{{ shop.email }}          {# Store email #}
{{ shop.phone }}          {# Store phone #}
{{ shop.currency }}       {# Store currency #}
```

### Page Object
```liquid
{{ page.title }}          {# Page title #}
{{ page.content }}        {# Page content #}
{{ page.handle }}         {# Page handle (URL slug) #}
{{ page.published_at }}   {# Publication date #}
```

### Product Object
```liquid
{{ product.title }}
{{ product.price | money }}
{{ product.featured_image }}
{% for variant in product.variants %}
  {{ variant.title }} - {{ variant.price | money }}
{% endfor %}
```

### Collection Object
```liquid
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
```

---

## Styling Guidelines

### Tailwind CSS Classes (All Supported)

The templates use standard Tailwind CSS classes that work directly in Shopify:

```liquid
{# Layout #}
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

{# Typography #}
<h1 class="font-serif text-4xl md:text-6xl font-bold">

{# Spacing #}
<div class="py-12 md:py-16 px-6 md:px-8 lg:px-10">

{# Colors #}
<div class="bg-primary text-primary-foreground">

{# Responsive #}
<div class="flex flex-col md:flex-row gap-4">
```

### CSS Variables

Define semantic design tokens in your theme's CSS:

```css
/* In your theme's base.css or custom CSS */
:root {
  --color-primary: #your-primary-color;
  --color-foreground: #your-text-color;
  --color-background: #your-bg-color;
  --color-muted: #your-muted-color;
  --color-border: #your-border-color;
}
```

---

## Customization Examples

### Adding Product Cards

```liquid
{% for product in collection.products limit:4 %}
  <div class="p-6 rounded-lg bg-muted border border-border/40">
    <img src="{{ product.featured_image | img_url: '300x300' }}" alt="{{ product.title }}">
    <h3 class="font-semibold text-lg text-foreground mb-2">{{ product.title }}</h3>
    <p class="text-foreground/75 text-sm mb-4">{{ product.description | strip_html | truncatewords: 15 }}</p>
    <p class="text-primary font-semibold mb-4">{{ product.price | money }}</p>
    <a href="{{ product.url }}" class="text-primary hover:text-primary/80 font-semibold text-sm">
      View Product →
    </a>
  </div>
{% endfor %}
```

### Adding Customer Reviews/Testimonials

```liquid
{% for metafield in page.metafields.custom.testimonials %}
  <div class="p-6 rounded-lg bg-muted">
    <div class="flex gap-1 mb-3">
      {% for i in (1..5) %}
        <span class="text-yellow-400">★</span>
      {% endfor %}
    </div>
    <p class="text-foreground/75 mb-4 italic">{{ metafield.value }}</p>
    <p class="font-semibold text-foreground">{{ metafield.author }}</p>
  </div>
{% endfor %}
```

---

## Performance Tips

### 1. Image Optimization

Use Shopify's image filters:
```liquid
{# Specify size and format #}
{{ product.featured_image | img_url: '600x600' }}
{{ product.featured_image | img_url: '600x600', format: 'webp' }}
```

### 2. Lazy Loading

```liquid
<img src="{{ image | img_url: '300x300' }}" alt="..." loading="lazy">
```

### 3. Minify HTML

Use Shopify's liquid filter to remove whitespace:
```liquid
{% render 'component' | strip_newlines %}
```

---

## Troubleshooting

### Problem: Variables Not Showing
**Solution:** Ensure you're using the correct Shopify object structure:
```liquid
{# Wrong #}
{{ store.name }}

{# Correct #}
{{ shop.name }}
```

### Problem: Form Not Submitting
**Solution:** Ensure form has correct attributes:
```liquid
<form method="POST" action="/contact#contact-form">
  <input type="hidden" name="contact[tags]" value="inquiry">
  {# Form fields required #}
</form>
```

### Problem: Links Not Working
**Solution:** Use correct Shopify URL structure:
```liquid
{# Pages #}
/pages/page-handle

{# Products #}
/products/product-handle

{# Collections #}
/collections/collection-handle

{# Policies #}
/policies/privacy-policy
```

---

## Testing Checklist

- [ ] All pages load without errors
- [ ] Navigation links work correctly
- [ ] Contact form submits successfully
- [ ] Images load properly
- [ ] Responsive design works on mobile/tablet
- [ ] Tailwind CSS classes apply correctly
- [ ] Translations display correctly
- [ ] SEO meta tags are present
- [ ] Performance is acceptable
- [ ] All buttons/CTAs are functional

---

## Resources

- **Shopify Liquid Reference:** https://shopify.dev/docs/api/liquid
- **Shopify Theme Guide:** https://shopify.dev/docs/themes
- **Tailwind CSS:** https://tailwindcss.com
- **Theme Kit:** https://shopify.dev/docs/themes/tools/theme-kit
- **Shopify Community:** https://community.shopify.com

---

## Support

For questions or issues:

1. Check the [Shopify Liquid Documentation](https://shopify.dev/docs/api/liquid)
2. Review the template comments in the `.liquid` files
3. Test in a development theme first before pushing to production
4. Use Shopify's theme debugger to identify issues

---

## Migration Checklist

- [ ] All template files uploaded to Shopify
- [ ] Page handles configured correctly
- [ ] Navigation links updated
- [ ] Contact form configured
- [ ] Theme colors customized
- [ ] Images migrated
- [ ] SEO metadata added
- [ ] Translation strings configured
- [ ] Testing completed
- [ ] Backup of original theme created

---

**Version:** 1.0
**Last Updated:** 2026
**Brand:** Kimhab Ork
