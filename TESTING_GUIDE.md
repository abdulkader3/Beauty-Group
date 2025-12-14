# Testing Guide - Language Toggle Implementation

## Quick Test Checklist

### 1. **Test Language Toggle Buttons**
- [ ] Open the website
- [ ] Look for ENG/BNG buttons in the sticky navbar
- [ ] Click ENG button - verify it gets highlighted (pink background)
- [ ] Click BNG button - verify it gets highlighted instead
- [ ] Buttons should have smooth transition effects

### 2. **Test English Translation**
- [ ] Click ENG button
- [ ] Verify navbar shows: "Home", "Collection", "Services"
- [ ] Verify contact banner shows: "For any kind of beauty solution, contact us."
- [ ] All text should be in English

### 3. **Test Bangla Translation**
- [ ] Click BNG button
- [ ] Verify navbar shows: "হোম", "সংগ্রহ", "সেবা" (or similar Bangla text)
- [ ] Verify all visible English text changes to Bangla
- [ ] All text should be readable Bangla

### 4. **Test Language Persistence**
- [ ] Select Bangla (BNG)
- [ ] Refresh the page (F5 or Ctrl+R)
- [ ] Verify the page still shows in Bangla
- [ ] Select English (ENG)
- [ ] Refresh the page
- [ ] Verify the page shows in English
- [ ] Language preference should persist across refreshes

### 5. **Test All Pages**
Navigate to each page and repeat steps 1-3:
- [ ] index.html (main page)
- [ ] /services/aromatherapy.html (any service page)
- [ ] /blog/blogPage.html
- [ ] /blog/about.html
- [ ] /contact/contact.html

### 6. **Test Browser Storage**
1. Open DevTools (F12)
2. Go to "Application" tab
3. Click "Local Storage"
4. Look for entry with key `selectedLanguage`
   - Value should be `'en'` or `'bn'`
   - Should update when you click language buttons
   - Should persist on page reload

### 7. **Test JavaScript Console**
Open DevTools console (F12) and run:

```javascript
// Check if translation system is loaded
console.log(typeof window.languageManager);
// Should output: "object"

// Get current language
console.log(window.languageManager.currentLanguage);
// Should output: "en" or "bn"

// Get a translation
console.log(window.languageManager.getTranslation('nav-home'));
// Should output: "Home" (if English) or "হোম" (if Bangla)

// Switch language programmatically
window.languageManager.setLanguage('bn');
// Page should instantly switch to Bangla

// Switch back
window.languageManager.setLanguage('en');
// Page should switch back to English
```

### 8. **Test on Different Devices**
- [ ] Desktop browser (Chrome, Firefox, Safari, Edge)
- [ ] Mobile browser
- [ ] Tablet browser
- [ ] Verify buttons are accessible and clickable
- [ ] Verify text is readable in both languages

## Expected Results

### Visual Elements
- **Language Toggle Buttons**
  - Location: Top right of sticky navbar
  - Colors: Gray background with light gray border
  - Active button: Pink (#ff5e7e) background with white text
  - Size: Responsive and touch-friendly

- **Text Translations**
  - Should update instantly when button is clicked
  - No page reload needed
  - Smooth visual transition

### Functional Elements
- **LocalStorage**
  - Key: `selectedLanguage`
  - Values: `'en'` or `'bn'`
  - Accessible from DevTools Application tab

- **Browser Console**
  - `window.languageManager` object exists
  - Methods available: `setLanguage()`, `getTranslation()`
  - No JavaScript errors

## Common Issues & Solutions

### Issue: Buttons don't appear
**Solution:**
1. Check if CSS file is loaded: Inspect element, look for `.lang-btn` class
2. Verify sticky navbar is visible (scroll down past main navbar)
3. Check browser console for CSS errors

### Issue: Translations don't update
**Solution:**
1. Check if translations.js is loaded:
   ```javascript
   console.log(window.languageManager);
   ```
2. Verify `data-i18n` attributes are on elements
3. Check console for JavaScript errors
4. Clear cache and reload: Ctrl+Shift+Delete then F5

### Issue: Language resets on refresh
**Solution:**
1. Check localStorage is enabled in browser
2. Verify localStorage not disabled in privacy settings
3. Try incognito mode to test (some browsers block storage in private mode)
4. Check browser console: `localStorage.getItem('selectedLanguage')`

### Issue: Bangla text looks broken
**Solution:**
1. Verify browser supports Unicode
2. Update browser to latest version
3. Check if font supports Bangla characters
4. Try a different browser

## Performance Testing

### Load Time Test
- [ ] Open DevTools Network tab
- [ ] Reload page
- [ ] Verify translations.js loads (should be <5KB)
- [ ] Page should remain responsive
- [ ] No noticeable slowdown

### Memory Test
```javascript
// In DevTools console
// Check memory usage before and after language switch
console.memory.usedJSHeapSize;
// Switch language
window.languageManager.setLanguage('bn');
// Check memory again
console.memory.usedJSHeapSize;
// Should be similar (no memory leak)
```

## Accessibility Testing

### Keyboard Navigation
- [ ] Tab to language buttons
- [ ] Enter/Space to activate buttons
- [ ] Visual focus indicator visible

### Screen Reader (NVDA/JAWS)
- [ ] Buttons have proper ARIA labels
- [ ] Button text is announced
- [ ] Language changes are announced

### Color Contrast
- [ ] Active button (#ff5e7e text on #ff5e7e bg) has sufficient contrast
- [ ] Inactive button text is readable
- [ ] Text color passes WCAG AA standards

## Mobile Testing

### Touch Interaction
- [ ] Buttons large enough to tap (minimum 48x48px)
- [ ] No delay when tapping buttons
- [ ] Proper visual feedback on tap

### Responsive Layout
- [ ] Buttons visible on mobile screens
- [ ] Text doesn't overflow
- [ ] Layout adapts to different screen sizes

## Cross-Browser Testing

Test in these browsers:
- [ ] Chrome/Chromium (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Opera (latest)

### Expected behavior in all browsers:
- Language toggle works
- Translations appear correctly
- localStorage persists data
- No console errors

## Documentation Review

- [ ] TRANSLATION_GUIDE.md is accessible
- [ ] TRANSLATION_QUICK_REFERENCE.md is helpful
- [ ] IMPLEMENTATION_SUMMARY.md is clear
- [ ] Code comments are present in translations.js

## File Integrity Check

Verify these files exist and contain correct content:

```bash
# From website root directory
JS/translations.js              # Should contain translation dictionary
Css/style.css                   # Should contain .language-toggle styles
JS/script.js                    # Should initialize LanguageManager
TRANSLATION_GUIDE.md            # Documentation file
TRANSLATION_QUICK_REFERENCE.md  # Quick reference file
IMPLEMENTATION_SUMMARY.md       # Summary file
```

## Sign-Off Checklist

- [ ] Language toggle buttons visible and styled
- [ ] English translations work correctly
- [ ] Bangla translations display correctly
- [ ] Language selection persists across pages
- [ ] Language selection persists on refresh
- [ ] No console errors
- [ ] Works on desktop and mobile
- [ ] Works in multiple browsers
- [ ] Documentation is clear
- [ ] No existing functionality broken

## Success Criteria

✅ **Test passes if:**
1. Users can toggle between English and Bangla
2. All text updates when language changes
3. Language choice is remembered
4. Works on all major browsers
5. No JavaScript errors
6. No broken styling
7. Responsive on mobile devices
8. Documentation is comprehensive

---

**Test Date:** _______________
**Tester Name:** _______________
**Test Result:** ✅ PASS / ❌ FAIL
**Notes:** _______________

---

For detailed documentation, see:
- [TRANSLATION_GUIDE.md](./TRANSLATION_GUIDE.md)
- [TRANSLATION_QUICK_REFERENCE.md](./TRANSLATION_QUICK_REFERENCE.md)
- [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)
