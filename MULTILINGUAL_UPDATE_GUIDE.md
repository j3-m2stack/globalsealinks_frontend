# Multilingual Translation Update Guide

## Overview
This guide outlines the complete multilingual translation implementation for the Global Sea Links project supporting English, Hindi, Arabic, French, and Spanish.

## Files Updated

### 1. Translation Files
- ✅ `lib/translations.ts` - Updated with Spanish (es) support
- ✅ `lib/translations-complete.ts` - Additional translation keys for all components

### 2. Context & Configuration
- ✅ `context/LanguageContext.tsx` - Added Spanish support and RTL handling
- ✅ `components/Navbar.tsx` - Added Spanish language option

### 3. Components Requiring Translation Key Updates

#### Contact Component (`components/Contact.tsx`)
Replace hardcoded strings with translation keys:
- "Full Name" → `{t.fullName}`
- "Company Name" → `{t.companyName}`
- "Email Address" → `{t.emailAddress}`
- "Phone Number" → `{t.phoneNumber}`
- "Country" → `{t.country}`
- "Product of Interest" → `{t.productOfInterest}`
- "Select a category" → `{t.selectCategory}`
- "Basmati Rice" → `{t.basmatiRice}`
- "Non-Basmati Rice" → `{t.nonBasmatiRice}`
- "Wheat" → `{t.wheat}`
- "Corn" → `{t.corn}`
- "Soybean" → `{t.soybean}`
- "Sugar" → `{t.sugar}`
- "Spices" → `{t.spices}`
- "Other" → `{t.other}`
- "Your Message" → `{t.yourMessage}`
- "Sending..." → `{t.sendingMessage}`
- "Your message has been sent successfully!" → `{t.messageSent}`
- "Failed to send message. Please try again." → `{t.messageFailed}`
- "Network error. Please check your connection and try again." → `{t.networkError}`
- "Office Address" → `{t.officeAddress}`
- "Phone" → `{t.phone}`
- "Email" → `{t.email}`
- "Business Hours" → `{t.businessHours}`
- "Monday - Friday: 9:00 AM - 6:00 PM IST" → `{t.mondayFriday}`
- "Saturday: 9:00 AM - 2:00 PM IST" → `{t.saturday}`
- "Quick Contact via WhatsApp" → `{t.quickContactWhatsApp}`
- "Get instant response to your queries" → `{t.instantResponse}`
- "Chat on WhatsApp" → `{t.chatOnWhatsApp}`
- "Our Location" → `{t.ourLocation}`
- "Send Inquiry" → `{t.sendInquiryButton}`

#### Certifications Component (`components/Certifications.tsx`)
Replace hardcoded strings:
- "Trusted & Verified" → `{t.trustedVerified}`
- "Global Certifications & Compliance" → `{t.globalCertifications}`
- "Meeting international export standards..." → `{t.certificationSubtitle}`
- "Our commitment to quality..." → `{t.certificationCommitment}`
- All certification names should use translation keys

#### Product Details Page (`app/products/[slug]/page.tsx`)
Replace hardcoded strings:
- "Back to Home" → `{t.backToHome}`
- "Premium Quality" → `{t.premiumQuality}`
- "Fast Shipping" → `{t.fastShipping}`
- "Certified" → `{t.certified}`
- "Available Varieties" → `{t.availableVarieties}`
- "Choose from our premium selection" → `{t.chooseFromSelection}`
- "Technical Specifications" → `{t.technicalSpecifications}`
- "Key Benefits" → `{t.keyBenefits}`
- "Ready to Place Your Order?" → `{t.readyToOrder}`
- "Contact us today for pricing..." → `{t.contactToday}`
- "WhatsApp Inquiry" → `{t.whatsappInquiry}`
- "Contact Form" → `{t.contactFormLink}`

#### Hero Component (`components/Hero.tsx`)
- "Premium Quality Exports" → `{t.premiumQualityExports}`

#### Products Component (`components/Products.tsx`)
- "View Full Details" → `{t.viewFullDetails}`

## RTL Support for Arabic

### CSS Updates Needed
Add to `app/globals.css`:

```css
/* RTL Support */
[dir="rtl"] {
  direction: rtl;
  text-align: right;
}

[dir="rtl"] .flex-row-reverse {
  flex-direction: row-reverse;
}

[dir="rtl"] .space-x-reverse > * + * {
  margin-right: var(--tw-space-x-reverse);
  margin-left: 0;
}

/* RTL specific adjustments */
[dir="rtl"] .rounded-l-none {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-top-right-radius: var(--tw-rounded);
  border-bottom-right-radius: var(--tw-rounded);
}

[dir="rtl"] .rounded-r-none {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-top-left-radius: var(--tw-rounded);
  border-bottom-left-radius: var(--tw-rounded);
}
```

## Implementation Steps

### Step 1: Merge Translation Keys
Copy all keys from `lib/translations-complete.ts` into `lib/translations.ts` for each language.

### Step 2: Update Components
For each component, replace ALL hardcoded strings with `{t.translationKey}`.

### Step 3: Update Form Placeholders
In Contact.tsx, update all placeholder attributes:
```tsx
placeholder={t.enterFullName}
placeholder={t.enterCompanyName}
placeholder={t.enterEmail}
placeholder={t.enterPhone}
placeholder={t.enterCountry}
placeholder={t.enterMessage}
```

### Step 4: Update Product Data
In Products.tsx and product detail pages, ensure product names and descriptions use translation keys.

### Step 5: Test Each Language
1. Switch to each language in the navbar
2. Navigate through all pages
3. Verify all text is translated
4. Check Arabic RTL layout
5. Test form submissions in each language

## Translation Key Naming Convention
- Use camelCase for keys
- Be descriptive but concise
- Group related keys with prefixes (e.g., `contact*`, `product*`, `cert*`)

## Missing Translations Checklist
- [ ] Contact form labels and placeholders
- [ ] Contact form validation messages
- [ ] Certification names
- [ ] Product detail page content
- [ ] Footer links and text
- [ ] Error messages
- [ ] Success messages
- [ ] Button labels
- [ ] Navigation items
- [ ] Form field labels

## Testing Checklist
- [ ] English - All pages
- [ ] Hindi - All pages
- [ ] Arabic - All pages + RTL layout
- [ ] French - All pages
- [ ] Spanish - All pages
- [ ] Language switching works instantly
- [ ] No hardcoded text remains
- [ ] Forms work in all languages
- [ ] Product pages display correctly
- [ ] Contact form submits in all languages

## Notes
- Arabic requires RTL (right-to-left) layout
- Language preference is saved in localStorage
- HTML dir and lang attributes are updated automatically
- All components must use `const { t } = useLanguage()` hook
