# Language Toggle System Documentation

## Overview
This Beauty Group website now has a fully functional **English/Bangla language toggle system** that allows users to switch between English and Bangla languages. The language preference is saved in the browser's localStorage and persists across page refreshes.

## Features Implemented

### ✅ Language Toggle Buttons
- Beautiful, modern toggle buttons in the navbar (ENG/BNG)
- Active button is highlighted with pink color (#ff5e7e)
- Buttons are responsive and work on all devices
- Located in the sticky navbar for easy access

### ✅ Translation System
- Comprehensive translation dictionary with 100+ translations
- Covers all navbar items, buttons, and common UI elements
- Service-specific translations for all beauty service pages
- Blog and contact page translations

### ✅ Persistent Language Selection
- Language preference is saved in browser's localStorage
- Users' language choice persists across page refreshes
- Key: `selectedLanguage` (stores 'en' or 'bn')

### ✅ Dynamic Content Translation
- All elements with `data-i18n` attributes are automatically translated
- Placeholder text updates with `data-i18n-placeholder` attributes
- Language toggle buttons update their active state

## How to Use

### For Users
1. Click the **ENG** button to view the site in English (default)
2. Click the **BNG** button to view the site in Bangla
3. Your language preference will be remembered for future visits

### For Developers

#### Adding New Translations
1. Open [JS/translations.js](../JS/translations.js)
2. Add your translation key to both `en` and `bn` objects:

```javascript
translations = {
    en: {
        'my-new-key': 'English text here',
        // ... more translations
    },
    bn: {
        'my-new-key': 'বাংলা টেক্সট এখানে',
        // ... more translations
    }
}
```

#### Using Translations in HTML
Add the `data-i18n` attribute to any element you want to translate:

```html
<!-- For element text content -->
<h1 data-i18n="my-new-key">English text here</h1>

<!-- For input placeholders -->
<input type="text" data-i18n-placeholder="placeholder-key" placeholder="Enter name">

<!-- For button text -->
<button data-i18n="button-key">Click me</button>
```

#### Using Translations in JavaScript
Access translations programmatically:

```javascript
// Get a translation
const translatedText = window.languageManager.getTranslation('my-key');

// Set a specific language
window.languageManager.setLanguage('bn');

// Get current language
const currentLang = window.languageManager.currentLanguage;
```

## File Structure

### Core Files
- **JS/translations.js** - Translation dictionary and LanguageManager class
- **JS/script.js** - Updated with language manager initialization
- **Css/style.css** - Added `.language-toggle` and `.lang-btn` styles

### Updated HTML Files
All the following files have been updated with translation script and language toggle buttons:

#### Service Pages
- services/aromatherapy.html
- services/cosme-dermat-treatment.html
- services/fusion-therapy.html
- services/haircut-blow-dry.html
- services/head-massage.html
- services/papaya-sesame-body-wrap.html
- services/salt-scrub-manicure.html
- services/salt-scrub-pedicure.html
- services/spa-facial-haircut.html
- services/spa-manicure.html
- services/spa-pedicure.html
- services/swedish-massage.html

#### Main Pages
- index.html
- blog/blogPage.html
- blog/about.html
- blogDetails/blog-details-1.html
- blogDetails/blog-details-2.html
- blogDetails/blog-details-3.html
- contact/contact.html

## Current Translations Available

### Navbar Items
- Home, Herbal, Treatment
- Our Services (with dropdown items)
- Pages (About Us, Contact, Blog)

### Service Pages
- Service titles and descriptions for all beauty services
- "What is", "Benefits", "Duration", etc.

### Blog & Contact
- Contact form labels
- Blog navigation
- Comment sections

### Common UI Elements
- Contact button
- Back button
- Language toggle labels

## CSS Styling for Language Toggle

```css
.language-toggle {
    display: inline-flex;
    gap: 0;
    background: #f5f5f5;
    border-radius: 6px;
    padding: 2px;
    border: 1px solid #ddd;
}

.lang-btn {
    background: transparent;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 600;
    color: #666;
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: 4px;
}

.lang-btn.active {
    background: #ff5e7e;
    color: white;
    box-shadow: 0 2px 4px rgba(255, 94, 126, 0.2);
}
```

## How It Works

1. **Initialization**: When the page loads, `translations.js` is included
2. **LanguageManager**: A LanguageManager class is instantiated
3. **Load Preference**: The saved language preference is loaded from localStorage
4. **Apply Translations**: All elements with `data-i18n` attributes are translated
5. **Listen for Changes**: Button clicks trigger language changes
6. **Save Preference**: New language preference is saved to localStorage

## Best Practices

### Do's ✅
- Use `data-i18n` attributes for all user-facing text
- Add translations for all new features before deployment
- Use semantic keys that describe the content
- Keep translations accurate and culturally appropriate
- Test translations on all pages

### Don'ts ❌
- Don't hardcode text in HTML without translation keys
- Don't modify translations.js values directly on the HTML
- Don't forget to add both English and Bangla translations
- Don't use special characters that might break in localStorage

## Translation Naming Convention

Use descriptive keys in kebab-case:
- `nav-home` for navigation items
- `contact-form` for form-related items
- `service-benefits` for service descriptions
- `blog-title` for blog content

## Example: Adding a New Page

1. Create your HTML file
2. Add translation script to `<head>`:
```html
<script src="../JS/translations.js"></script>
```

3. Add language toggle buttons where needed:
```html
<div class="language-toggle">
    <button class="lang-btn active" id="langBtnEng" onclick="window.languageManager.setLanguage('en')">ENG</button>
    <button class="lang-btn" id="langBtnBng" onclick="window.languageManager.setLanguage('bn')">BNG</button>
</div>
```

4. Add `data-i18n` attributes to elements:
```html
<h1 data-i18n="my-page-title">My Page Title</h1>
<p data-i18n="my-page-description">Description text</p>
```

5. Add translations to JS/translations.js:
```javascript
'my-page-title': 'My Page Title',
'my-page-description': 'Description text',
```
for English and
```javascript
'my-page-title': 'আমার পৃষ্ঠা শিরোনাম',
'my-page-description': 'বর্ণনা পাঠ্য',
```
for Bangla

## Troubleshooting

### Translations not appearing?
- Check that `data-i18n` attribute is spelled correctly
- Verify the translation key exists in translations.js
- Check browser console for errors
- Clear localStorage and reload: `localStorage.clear()`

### Buttons not working?
- Ensure translations.js is loaded before the button element
- Check that `window.languageManager` is defined
- Verify button IDs are `langBtnEng` and `langBtnBng`

### Language not persisting?
- Check if localStorage is enabled in browser
- Verify the key is `selectedLanguage`
- Check browser's Application tab in DevTools

## Future Enhancements

Possible improvements for the translation system:
- [ ] Add more languages (Spanish, French, etc.)
- [ ] Implement RTL (Right-to-Left) text direction for Bangla
- [ ] Add language selector in footer
- [ ] Create admin panel for managing translations
- [ ] Auto-detect user's browser language
- [ ] Add SEO hreflang tags for each language

## Support

For questions or issues with the translation system, refer to this documentation or check the translations.js file for examples of how translations are structured.

---

**Last Updated:** December 2025
**System Status:** ✅ Fully Functional
**Languages Supported:** English, Bangla
