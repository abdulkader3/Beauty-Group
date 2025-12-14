# Quick Translation Reference

## Most Commonly Used Translation Keys

### Navigation
```javascript
'nav-home'              // Home
'nav-herbal'            // Herbal
'nav-treatment'         // Treatment
'nav-services'          // Our Services
'nav-pages'             // Pages
'nav-about'             // About Us
'nav-contact'           // Contact
'nav-blog'              // Blog
```

### Service Pages
```javascript
'service-what-is'       // "What is [Service]?"
'service-benefits'      // "Benefits"
'service-duration'      // "Duration"
'service-frequency'     // "Frequency"
'service-process'       // "Process"
'aromatherapy-title'    // "Aromatherapy"
'aromatherapy-desc'     // Description
// ... and similar for other services
```

### Buttons & Common UI
```javascript
'contact-btn'           // "Contact"
'contact-submit'        // "Submit"
'back-link'             // "← Back"
'contact-banner-text'   // Contact banner message
```

### Form Fields
```javascript
'contact-name'          // "Name"
'contact-email-input'   // "Email"
'contact-message'       // "Message"
```

## Adding Translations - Step by Step

### Step 1: Identify the text you want to translate
```html
<h1>Aromatherapy</h1>  <!-- Text: "Aromatherapy" -->
```

### Step 2: Create a unique key
```
Key: "aromatherapy-title"
```

### Step 3: Add to translations.js
```javascript
// In English section
en: {
    'aromatherapy-title': 'Aromatherapy',
}

// In Bangla section
bn: {
    'aromatherapy-title': 'অ্যারোমাথেরাপি',
}
```

### Step 4: Update HTML
```html
<h1 data-i18n="aromatherapy-title">Aromatherapy</h1>
```

## Common Bangla Translations

### Services
- Aromatherapy → অ্যারোমাথেরাপি
- Swedish Massage → সুইডিশ ম্যাসাজ
- Head Massage → মাথার ম্যাসাজ
- Manicure → ম্যানিকিউর
- Pedicure → পেডিকিউর
- Facial → ফেসিয়াল

### Common Words
- Home → হোম
- About → সম্পর্কে
- Contact → যোগাযোগ
- Blog → ব্লগ
- Services → সেবা
- Benefits → সুবিধা
- Submit → জমা দিন

## Testing Your Translations

### In Browser Console
```javascript
// Check if LanguageManager is loaded
console.log(window.languageManager);

// Get a translation
console.log(window.languageManager.getTranslation('nav-home'));

// Switch to Bangla
window.languageManager.setLanguage('bn');

// Switch back to English
window.languageManager.setLanguage('en');

// Check current language
console.log(window.languageManager.currentLanguage);
```

### In HTML (Debug Mode)
Add this temporarily to test:
```html
<p id="test-translation"></p>
<script>
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('test-translation').textContent = 
            window.languageManager.getTranslation('nav-home');
    });
</script>
```

## Translation Checklist

When adding a new page:
- [ ] Include `<script src="../JS/translations.js"></script>` in `<head>`
- [ ] Add language toggle buttons
- [ ] Add `data-i18n` attributes to text elements
- [ ] Add translations to translations.js for both languages
- [ ] Test language switching works
- [ ] Test translations persist after page refresh
- [ ] Check all text is properly translated

## Common Mistakes to Avoid

❌ **Wrong:**
```html
<h1>Aromatherapy</h1>  <!-- No translation -->
```

✅ **Correct:**
```html
<h1 data-i18n="aromatherapy-title">Aromatherapy</h1>
```

---

❌ **Wrong:**
```javascript
// Only English, no Bangla
'nav-home': 'Home',
```

✅ **Correct:**
```javascript
en: {
    'nav-home': 'Home',
},
bn: {
    'nav-home': 'হোম',
},
```

---

❌ **Wrong:**
```html
<input placeholder="Name">  <!-- No translation -->
```

✅ **Correct:**
```html
<input data-i18n-placeholder="contact-name" placeholder="Name">
```

## Bulk Translation Table

| English | Bangla | Key |
|---------|--------|-----|
| Home | হোম | nav-home |
| About | সম্পর্কে | nav-about |
| Contact | যোগাযোগ | nav-contact |
| Services | সেবা | nav-services |
| Submit | জমা দিন | contact-submit |
| Name | নাম | contact-name |
| Email | ইমেইল | contact-email |
| Message | বার্তা | contact-message |
| Benefits | সুবিধা | service-benefits |
| Duration | সময়কাল | service-duration |

---

For more detailed information, see [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)
