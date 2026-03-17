# Shopify Liquid Quick Reference
## Kimhab Ork Template Conversion

Quick lookup guide for common Liquid syntax and Shopify-specific functionality.

---

## Basic Syntax

### Output Variables
```liquid
{{ product.title }}
{{ shop.name }}
{{ page.content }}
```

### Comments
```liquid
{% comment %} This is a comment {% endcomment %}
```

### Whitespace Control
```liquid
{%- if true -%}
  No extra whitespace
{%- endif -%}
```

---

## Tags (Logic)

### If / Else / Elsif
```liquid
{% if product.available %}
  In Stock
{% elsif product.quantity > 0 %}
  Limited Stock
{% else %}
  Out of Stock
{% endif %}
```

### For Loop
```liquid
{% for item in collection.products %}
  {{ item.title }}
{% endfor %}

{% for item in items limit:5 offset:0 %}
  {{ item.title }}
{% endfor %}
```

### Case / When
```liquid
{% case product.type %}
  {% when 'Shirt' %}
    Shirt Category
  {% when 'Dress' %}
    Dress Category
  {% else %}
    Other
{% endcase %}
```

### Assign / Capture
```liquid
{% assign my_var = 'hello' %}
{{ my_var }}

{% capture my_string %}
  Complex content here
{% endcapture %}
{{ my_string }}
```

### Unless
```liquid
{% unless product.available %}
  Out of Stock
{% endunless %}
```

---

## Filters

### String Filters
```liquid
{{ 'hello world' | upcase }}              {# HELLO WORLD #}
{{ 'HELLO' | downcase }}                  {# hello #}
{{ 'hello' | capitalize }}                {# Hello #}
{{ 'hello world' | replace: 'world', 'shopify' }}  {# hello shopify #}
{{ 'hello world' | truncate: 5 }}         {# he... #}
{{ 'hello' | split: '' | join: '-' }}     {# h-e-l-l-o #}
```

### Whitespace Filters
```liquid
{{ product.description | strip_html }}   {# Remove HTML tags #}
{{ product.description | strip_newlines }}{# Remove newlines #}
{{ product.description | url_encode }}   {# URL encode #}
```

### Money Filter
```liquid
{{ product.price | money }}               {# $10.00 #}
{{ product.compare_at_price | money_with_currency }}
```

### Image Filters
```liquid
{{ product.featured_image | img_url: '300x300' }}
{{ product.featured_image | img_url: '300x300', format: 'webp' }}
```

### Date Filters
```liquid
{{ order.created_at | date: '%B %d, %Y' }}   {# January 01, 2024 #}
{{ order.created_at | date: '%Y-%m-%d' }}    {# 2024-01-01 #}
```

### Array Filters
```liquid
{% assign sorted = items | sort: 'price' %}
{% assign grouped = items | group_by: 'type' %}
{% assign first = array | first %}
{% assign last = array | last %}
```

### Chaining Filters
```liquid
{{ product.title | downcase | replace: ' ', '-' }}
```

---

## Shopify Objects

### Shop
```liquid
{{ shop.name }}           {# Store name #}
{{ shop.email }}          {# Store email #}
{{ shop.phone }}          {# Store phone #}
{{ shop.currency }}       {# Currency code #}
{{ shop.url }}            {# Store URL #}
```

### Page
```liquid
{{ page.title }}          {# Page title #}
{{ page.handle }}         {# URL slug #}
{{ page.content }}        {# Page body content #}
{{ page.published_at }}   {# Publication date #}
{{ page.author }}         {# Page author #}
{{ page.metafields.* }}   {# Custom metafields #}
```

### Product
```liquid
{{ product.title }}
{{ product.handle }}
{{ product.description }}
{{ product.price | money }}          {# Current price #}
{{ product.compare_at_price | money }}{# Original price #}
{{ product.available }}              {# true/false #}
{{ product.featured_image | img_url: '300x300' }}
{{ product.variants }}               {# All variants #}
```

### Collection
```liquid
{{ collection.title }}
{{ collection.handle }}
{{ collection.description }}
{% for product in collection.products %}
  {{ product.title }}
{% endfor %}
```

### Customer
```liquid
{% if customer %}
  Welcome, {{ customer.first_name }}!
  {{ customer.email }}
  {{ customer.orders_count }}
{% endif %}
```

### Cart
```liquid
{{ cart.item_count }}
{{ cart.total_price | money }}
{% for item in cart.items %}
  {{ item.product.title }}
  {{ item.quantity }}
  {{ item.price | money }}
{% endfor %}
```

---

## Common Patterns

### Menu/Navigation Loop
```liquid
{% for link in linklists.main-menu.links %}
  <a href="{{ link.url }}" class="nav-link">
    {{ link.title }}
  </a>
{% endfor %}
```

### Product Card
```liquid
<div class="product-card">
  <img src="{{ product.featured_image | img_url: '300x300' }}" alt="{{ product.title }}">
  <h3>{{ product.title }}</h3>
  <p>{{ product.price | money }}</p>
  <a href="{{ product.url }}">View Product</a>
</div>
```

### Contact Form
```liquid
<form method="POST" action="/contact#contact-form">
  <input type="text" name="contact[name]" placeholder="Name" required>
  <input type="email" name="contact[email]" placeholder="Email" required>
  <textarea name="contact[body]" placeholder="Message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Conditional Content
```liquid
{% if product.available %}
  <button>Add to Cart</button>
{% else %}
  <p>Out of Stock</p>
{% endif %}
```

### Include/Render Component
```liquid
{% render 'product-card', product: product %}
{% include 'section-header', title: page.title %}
```

### Translate Text
```liquid
{{ 'pages.home.hero.title' | t: default: 'Fallback Text' }}
```

---

## URL Structure

### Collections
```
/collections/all
/collections/[handle]
```

### Products
```
/products/[handle]
```

### Pages
```
/pages/[handle]
```

### Policies
```
/policies/privacy-policy
/policies/terms-of-service
/policies/refund-policy
/policies/shipping-policy
```

### Customer
```
/account
/account/login
/account/register
/account/reset-password
/account/orders
```

### Cart
```
/cart
```

### Contact
```
/contact
```

---

## Tailwind CSS Quick Classes

### Layout
```liquid
<div class="flex items-center justify-between gap-4">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<div class="flex flex-col md:flex-row">
```

### Spacing
```liquid
<div class="p-4 m-2 px-6 py-8">    {# Padding & Margin #}
<div class="mt-4 mb-6 ml-2 mr-8">  {# Individual sides #}
<div class="gap-4">                 {# Gap between flex/grid items #}
```

### Typography
```liquid
<h1 class="text-4xl md:text-6xl font-bold">
<p class="text-foreground/75 text-sm leading-relaxed">
<span class="text-primary font-semibold">
```

### Colors
```liquid
<div class="bg-primary text-primary-foreground">
<div class="bg-muted border border-border/40">
<div class="text-foreground/75">
```

### Responsive
```liquid
class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
class="text-lg md:text-xl lg:text-2xl"
class="hidden md:block"  {# Show only on medium+ screens #}
class="block md:hidden"  {# Hide on medium+ screens #}
```

### Hover/Interactive
```liquid
class="hover:bg-primary/90 transition-all"
class="hover:text-primary/80"
class="hover:shadow-lg"
```

---

## Debugging

### Check if Variable Exists
```liquid
{% if variable %}
  {{ variable }}
{% else %}
  Variable doesn't exist
{% endif %}
```

### Output for Testing
```liquid
{{ product | json }}  {# Output full object as JSON #}
```

### Debug Array/Loop
```liquid
{% for item in items %}
  {{ item.title }} - Index: {{ forloop.index }}
{% endfor %}
```

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| Variable shows nothing | Check object structure: `{{ shop.name }}` not `{{ store.name }}` |
| Form not submitting | Ensure form action is `/contact#contact-form` |
| Images not loading | Use `{{ image | img_url: '300x300' }}` for proper sizing |
| Styles not applying | Verify Tailwind classes exist and CSS is loaded |
| Loop not working | Check object is array: `{% for item in array %}` |
| Translation not showing | Verify key exists in `en.default.json` |

---

## File Structure Reminder

```
shopify-liquid/
├── templates/
│   ├── index.liquid           # Home page
│   ├── page.about.liquid      # About page
│   ├── page.contact.liquid    # Contact page
│   ├── page.care-guides.liquid# Care guides
│   └── page.responsibility.liquid# Responsibility
├── locales/
│   └── en.default.json        # Translations
└── IMPLEMENTATION_GUIDE.md    # Detailed guide
```

---

## Useful Links

- [Shopify Liquid Docs](https://shopify.dev/docs/api/liquid)
- [Shopify Objects Reference](https://shopify.dev/docs/api/liquid/objects)
- [Shopify Filters Reference](https://shopify.dev/docs/api/liquid/filters)
- [Theme Kit Documentation](https://shopify.dev/docs/themes/tools/theme-kit)

---

**Quick Tip:** Use the Shopify Admin theme debugger (Inspector tool) to test Liquid code in real-time!
