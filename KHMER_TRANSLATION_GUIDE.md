# Khmer Translation Guide for Shopify Liquid Templates

## Overview
All Shopify Liquid templates for the Kimhab Ork website have been translated from English to Khmer (ខ្មែរ). This guide explains how the translations are implemented and how to maintain them.

## Language Files

### Files Created:
1. **locales/km.json** - Khmer language translations
2. **locales/km.default.json** - Default Khmer language configuration

## Translation Implementation

All templates use Shopify's Liquid translation filter (`| t:`) to access translations:

```liquid
{{ 'pages.custom_made.hero_desc' | t: default: 'English text' }}
```

This means:
- If the Khmer translation exists in `km.json`, it displays the Khmer text
- If no translation is found, it shows the English default text provided in the template

## Khmer Language Structure

The translations are organized as follows:
```
km.json
├── general (common UI elements)
├── header (navigation and branding)
├── footer (footer links and info)
└── pages (page-specific content)
    ├── home
    ├── about
    ├── care_guides
    ├── custom_made
    ├── helps
    ├── orders
    ├── size_guide
    ├── contact
    ├── privacy_policy
    ├── terms_conditions
    ├── sales_conditions
    ├── legal_notes
    ├── cookie_policy
    └── collections
        ├── evasion
        └── mono
```

## Pages Translated

### Main Pages:
- ✅ Home (index.liquid)
- ✅ About Us (page.about.liquid)
- ✅ Custom Made Services (page.custom-made.liquid)
- ✅ Care Guides (page.care-guides.liquid)
- ✅ Help & FAQs (page.helps.liquid)
- ✅ Orders (page.orders.liquid)
- ✅ Size Guide (page.size-guide.liquid)
- ✅ Contact (page.contact.liquid)

### Legal Pages:
- ✅ Privacy Policy (page.privacy-policy.liquid)
- ✅ Terms & Conditions (page.terms-conditions.liquid)
- ✅ Sales Conditions (page.sales-conditions.liquid)
- ✅ Legal Notes (page.legal-notes.liquid)
- ✅ Cookie Policy (page.cookie-policy.liquid)

### Collection Pages:
- ✅ Evasion Collection (page.evasion.liquid)
- ✅ Mono Collection (page.mono.liquid)

## How to Enable Khmer Language in Shopify

1. **In Shopify Admin:**
   - Go to Settings → Languages and regions
   - Click "Add language"
   - Select Khmer
   - Upload the `km.json` file as the language file
   - Set default language or make it optional

2. **Testing in Theme:**
   - In the theme code editor, the translations are available
   - Test by changing the `| t:` filter to use the Khmer locale
   - Preview with the language set to Khmer

## Translation Keys Reference

### Common Keys Used Across Pages:

```
general.*
├── search - ស្វាគមន៍
├── menu - ម៉េនុយ
├── close - បិទ
├── home - ទំព័រដើម
└── etc.

header.*
├── title - Kimhab Ork
├── tagline - ម៉ាក់សម្លៀកបំពាក់នារីលម្អិត
└── etc.

footer.*
├── about - អំពីយើងខ្ញុំ
├── contact - ទាក់ទងយើងខ្ញុំ
└── etc.
```

### Page-Specific Keys:

Each page uses keys following this pattern:
```
pages.[page_name].[content_section]_[type]
```

Example:
- `pages.custom_made.hero_desc` - Custom Made page hero description
- `pages.care_guides.care_01_title` - First care guide section title
- `pages.contact.form_name` - Contact form name field label

## Adding New Translations

To add a new translation key:

1. **In the template (Liquid file):**
   ```liquid
   {{ 'pages.page_name.new_key' | t: default: 'English text' }}
   ```

2. **In km.json:**
   ```json
   "pages": {
     "page_name": {
       "new_key": "ខ្មែរអត្ថបទ"
     }
   }
   ```

## Khmer Locale Code

- **Language Code:** `km`
- **Locale:** `km` (no country code for general Khmer)
- **Script:** Khmer Unicode (U+1780–U+17FF)

## Unicode Encoding

All Khmer text is properly encoded in UTF-8. Make sure:
- Files are saved as UTF-8
- The Shopify Liquid template system supports UTF-8 (it does)
- Browser is set to UTF-8 encoding

## Current Translation Coverage

| Section | Status | Keys |
|---------|--------|------|
| General | ✅ Complete | 6 keys |
| Header | ✅ Complete | 5 keys |
| Footer | ✅ Complete | 8 keys |
| Home Page | ✅ Complete | 8 keys |
| About Page | ✅ Complete | 13 keys |
| Care Guides | ✅ Complete | 13 keys |
| Custom Made | ✅ Complete | 23 keys |
| Help & FAQs | ✅ Complete | 10 keys |
| Orders | ✅ Complete | 9 keys |
| Size Guide | ✅ Complete | 5 keys |
| Contact | ✅ Complete | 10 keys |
| Legal Pages | ✅ Complete | 24 keys |
| Collections | ✅ Complete | 8 keys |

**Total:** 142 translation keys

## Maintenance Notes

1. **Updating Translations:**
   - Edit the km.json file directly
   - Test changes in Shopify theme preview
   - Push changes to live theme when verified

2. **Adding New Pages:**
   - Add corresponding keys to km.json under `pages.[page_name]`
   - Use consistent naming conventions
   - Always provide default English text in templates

3. **Quality Assurance:**
   - Review translated text for accuracy
   - Test display on various screen sizes
   - Verify text fit in UI components
   - Check special characters display correctly

## Browser Requirements

- Modern browsers with UTF-8 support (all modern browsers)
- Khmer Unicode font support (system fonts or web fonts)
- JavaScript enabled for some interactive features

## Support for Khmer

To ensure proper Khmer display:
1. Include Khmer font in theme CSS if needed
2. Set proper character encoding in HTML head
3. Ensure Shopify theme supports UTF-8

## Notes

- Khmer translations maintain the structure and meaning of English content
- All HTML tags and Liquid syntax are preserved
- Responsive design remains unchanged across languages
- Navigation and links work the same way in both languages
