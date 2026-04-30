# 🚀 Quick Start Guide - GloLinks Website

## Prerequisites
- Node.js 18 or higher
- npm (comes with Node.js)

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### 3. Build for Production
```bash
npm run build
npm start
```

## 🎯 Key Features to Test

### Language Switching
1. Click the globe icon (🌐) in the navbar
2. Select from: English, Hindi (हिन्दी), Arabic (العربية), French (Français)
3. Notice instant translation without page reload
4. Arabic automatically switches to RTL layout

### Navigation
- Click any menu item to smooth scroll to that section
- Navbar becomes sticky with blur effect on scroll
- Mobile menu works on smaller screens

### WhatsApp Integration
- Floating button at bottom-right with pulse animation
- Click to open WhatsApp chat
- Product inquiry buttons also link to WhatsApp

### Animations
- Hero section fade-in on load
- Section reveal animations as you scroll
- Card hover effects throughout
- Testimonials auto-rotate every 5 seconds

## 📱 Responsive Testing

Test on different screen sizes:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization Quick Tips

### Change Colors
Edit gradient classes in components:
- `from-green-600 to-emerald-600` → Change to your brand colors

### Update Contact Info
Files to edit:
- `components/Contact.tsx` - Contact section
- `components/Footer.tsx` - Footer info
- `components/WhatsAppButton.tsx` - WhatsApp link

### Add/Remove Products
Edit the `products` array in `components/Products.tsx`

### Modify Translations
Edit `lib/translations.ts` - All 4 languages in one file

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use a different port
npm run dev -- -p 3001
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Module Not Found
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## 📦 Deployment

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically

### Deploy to Netlify
1. Build the project: `npm run build`
2. Deploy the `.next` folder
3. Set build command: `npm run build`
4. Set publish directory: `.next`

## 🔧 Environment Variables (Optional)

Create `.env.local` for any API keys or secrets:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
NEXT_PUBLIC_ANALYTICS_ID=your_id_here
```

## 📞 Support

Need help? Contact:
- WhatsApp: +91 8950003299
- Email: global01@gmail.com

## ✅ Checklist Before Going Live

- [ ] Test all language translations
- [ ] Verify WhatsApp links work
- [ ] Test on mobile, tablet, and desktop
- [ ] Check all sections scroll smoothly
- [ ] Update contact information
- [ ] Add real product images (optional)
- [ ] Test contact form
- [ ] Verify Google Maps embed
- [ ] Check SEO metadata in `app/layout.tsx`
- [ ] Test in different browsers (Chrome, Firefox, Safari)

---

**Ready to launch!** 🎉
