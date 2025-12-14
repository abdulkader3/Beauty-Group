# Frequently Asked Questions - Language Toggle System

## User FAQs

### Q1: How do I change the website language?
**A:** Click the language buttons in the sticky navbar at the top of the page:
- Click **ENG** to view in English
- Click **BNG** to view in Bangla (Bengali)

The active button will be highlighted in pink.

### Q2: Will my language choice be remembered?
**A:** Yes! Your language preference is automatically saved in your browser. When you visit the website again, it will remember your choice.

### Q3: Why is the website still showing in English when I click Bangla?
**A:** 
- Make sure JavaScript is enabled in your browser
- Try refreshing the page (F5 or Ctrl+R)
- Clear browser cache and reload
- Try a different browser

### Q4: Is the translation complete?
**A:** The translation system covers:
- ✅ All navigation menus
- ✅ All service pages
- ✅ Contact forms
- ✅ Blog pages
- ✅ Common buttons and labels

Some content may still be in English only if it hasn't been marked for translation yet.

### Q5: What if I find an untranslated word?
**A:** Please report it so it can be added. Note the untranslated text and which page it appears on.

### Q6: Does the language toggle work on mobile?
**A:** Yes! The language buttons are responsive and work on all mobile devices. Just tap the ENG or BNG button.

### Q7: Can I use keyboard shortcuts to change language?
**A:** Currently, you need to click the buttons. Keyboard shortcuts could be added in the future.

### Q8: Which browsers support the language toggle?
**A:** All modern browsers support it:
- Chrome
- Firefox
- Safari
- Edge
- Opera

### Q9: What if I switch languages in the middle of filling a form?
**A:** The form data will remain unchanged. Only the labels and placeholders will translate. Be careful not to lose your data.

### Q10: Is there a mobile app for this website?
**A:** This is a responsive website that works on mobile. You can bookmark it to your home screen for quick access.

---

## Developer FAQs

### Q1: How do I add a new translation?

**A:** Edit `JS/translations.js` and add your key to both language objects:

```javascript
// In the en: { ... } section
'my-new-key': 'English text here',

// In the bn: { ... } section
'my-new-key': 'বাংলা টেক্সট এখানে',
```

Then use it in HTML:
```html
<p data-i18n="my-new-key">English text here</p>
```

### Q2: What if I only have English translation?

**A:** You need BOTH English and Bangla translations. If you don't have a Bangla translation yet:
1. Use the same English text for now:
   ```javascript
   'my-key': 'English text',  // English
   'my-key': 'English text',  // Temporarily use English in Bangla
   ```
2. Get it translated later and update

### Q3: How do I test translations?

**A:** 
1. Open DevTools console (F12)
2. Run: `window.languageManager.getTranslation('your-key')`
3. Or: `window.languageManager.setLanguage('bn')` to see Bangla

### Q4: Where should I put the translation script in new HTML files?

**A:** In the `<head>` section:
```html
<head>
    <!-- ... other meta tags ... -->
    <script src="../JS/translations.js"></script>
</head>
```

Make sure the path is correct relative to your file location.

### Q5: How do I add the language toggle buttons to a new page?

**A:** Copy this code to your navbar or language section:
```html
<div class="language-toggle">
    <button class="lang-btn active" id="langBtnEng" onclick="window.languageManager.setLanguage('en')">ENG</button>
    <button class="lang-btn" id="langBtnBng" onclick="window.languageManager.setLanguage('bn')">BNG</button>
</div>
```

### Q6: Can I change the button styling?

**A:** Yes! Modify the CSS in `Css/style.css`:
```css
.lang-btn {
    /* Change padding */
    padding: 0.7rem 1.2rem;
    
    /* Change font size */
    font-size: 1rem;
    
    /* Change colors */
    color: #333;  /* Inactive text color */
}

.lang-btn.active {
    background: #0066cc;  /* Your color instead of pink */
    color: white;
}
```

### Q7: How do I access translations in JavaScript?

**A:** Use the LanguageManager object:
```javascript
// Get a translation
const text = window.languageManager.getTranslation('nav-home');

// Change language
window.languageManager.setLanguage('bn');

// Get current language
const lang = window.languageManager.currentLanguage;

// Manually update translations
window.languageManager.updateLanguage('en');
```

### Q8: What's the localStorage key name?

**A:** The key is `'selectedLanguage'` and values are:
- `'en'` for English
- `'bn'` for Bangla

Access it with:
```javascript
localStorage.getItem('selectedLanguage');
localStorage.setItem('selectedLanguage', 'bn');
localStorage.removeItem('selectedLanguage');
```

### Q9: Can I add more languages?

**A:** Yes! Edit `JS/translations.js`:
```javascript
const translations = {
    en: { ... },
    bn: { ... },
    es: {  // Add Spanish
        'nav-home': 'Inicio',
        // ... more Spanish translations
    }
}
```

Then update the buttons:
```html
<button class="lang-btn" onclick="window.languageManager.setLanguage('es')">ESP</button>
```

### Q10: How do I debug translation issues?

**A:** Use the browser DevTools:
```javascript
// Check if system is loaded
console.log(window.languageManager);

// List all translations for current language
console.log(window.languageManager.getTranslation('any-key'));

// Check current language
console.log(window.languageManager.currentLanguage);

// Check localStorage
console.log(localStorage.getItem('selectedLanguage'));

// Check for missing translations
console.log(translations.en);
console.log(translations.bn);
```

### Q11: What happens if a translation key doesn't exist?

**A:** The system returns the key itself instead of crashing:
```javascript
window.languageManager.getTranslation('non-existent-key');
// Returns: 'non-existent-key'
```

### Q12: Can I use HTML in translations?

**A:** Currently, translations use `.textContent` which doesn't render HTML. If you need HTML:
```javascript
// Don't do this (won't render as HTML):
'key': 'Text with <strong>bold</strong>'

// Instead, keep text plain:
'key': 'Text with bold'

// Or add markup in HTML itself
```

### Q13: How do I handle plural forms?

**A:** Create separate keys for singular and plural:
```javascript
'item-singular': '1 item',
'item-plural': '{count} items',
```

Or use a function in JavaScript to handle it.

### Q14: What about right-to-left (RTL) text for Bangla?

**A:** Bangla can be displayed left-to-right. To add full RTL support:
```javascript
updateLanguage(lang) {
    document.documentElement.dir = (lang === 'bn') ? 'rtl' : 'ltr';
    // ... rest of code
}
```

### Q15: How do I add translations to form placeholders?

**A:** Use `data-i18n-placeholder`:
```html
<input type="text" data-i18n-placeholder="contact-name" placeholder="Name">
```

The `placeholder` attribute will update when language changes.

---

## Technical FAQs

### Q1: Does the translation system work with frameworks?

**A:** Yes! It's pure JavaScript and works with:
- Vanilla JavaScript ✅
- jQuery ✅
- Vue.js ✅
- React ✅
- Angular ✅

### Q2: Is there a performance impact?

**A:** Minimal:
- translations.js is only 7KB
- No external dependencies
- DOM updates are efficient
- localStorage operations are instant

### Q3: Is it SEO friendly?

**A:** It can be improved:
- Add `hreflang` tags for each language
- Create separate pages/URLs for each language
- Use language meta tag: `<html lang="en">` / `<html lang="bn">`

### Q4: Is it accessible?

**A:** Partially:
- ✅ Works with keyboard navigation
- ✅ Works with screen readers (with improvements)
- To improve: Add ARIA labels to buttons
  ```html
  <button aria-label="English">ENG</button>
  <button aria-label="বাংলা">BNG</button>
  ```

### Q5: Can I use this with a backend language selector?

**A:** Yes! You can:
1. Keep the client-side translation system
2. Add a server-side language selector
3. Sync both using cookies or API calls

### Q6: How do I handle language in URLs?

**A:** Add language code to URL:
- `/en/services/aromatherapy.html`
- `/bn/services/aromatherapy.html`

Then detect and set language:
```javascript
const lang = window.location.pathname.split('/')[1];
if (lang === 'en' || lang === 'bn') {
    window.languageManager.setLanguage(lang);
}
```

### Q7: Can I export translations to a file?

**A:** Yes, for backup or sharing:
```javascript
// In console
copy(JSON.stringify(translations, null, 2));
// Paste into a file
```

### Q8: How do I add automatic language detection?

**A:** Detect browser language:
```javascript
const browserLang = navigator.language || navigator.userLanguage;
if (browserLang.startsWith('bn')) {
    window.languageManager.setLanguage('bn');
}
```

### Q9: Can I use this with a translation API?

**A:** Yes! You can:
1. Fetch translations from an API
2. Store in translations object
3. Use the same system to display them

### Q10: How do I handle special characters?

**A:** Bangla characters work fine:
```javascript
'service-name': 'অ্যারোমাথেরাপি',  // Works ✅
```

Make sure:
- HTML has UTF-8 charset: `<meta charset="UTF-8">`
- translations.js is saved as UTF-8
- Browser has Bangla font support

---

## Support & Contribution

### How do I report a bug?

Include:
1. Which page has the issue
2. Which language you were using
3. What text should be translated
4. What's currently shown instead
5. Your browser and OS

### How do I suggest an improvement?

Visit the development team with:
1. Specific feature request
2. Use case/example
3. Expected behavior
4. Current behavior

### How do I contribute translations?

To improve Bangla translations:
1. Review current translations in `JS/translations.js`
2. Provide better translations if needed
3. Include both English and Bangla versions
4. Test in both languages

### Can I fork this code?

Yes! This is part of your website. Feel free to:
- Modify for your needs
- Extend with new features
- Add more languages
- Customize styling

---

**Last Updated:** December 2025
**Version:** 1.0
**Status:** ✅ Complete

For more information, see:
- [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)
- [TRANSLATION_QUICK_REFERENCE.md](./TRANSLATION_QUICK_REFERENCE.md)
- [TESTING_GUIDE.md](./TESTING_GUIDE.md)
