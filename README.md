# GloLinks - Premium Import-Export Company Website

A modern, premium single-page landing website for GloLinks, an import-export company specializing in quality agro products and industrial materials.

## 🌟 Features

### ✨ Premium Design
- Modern, corporate aesthetic with green + white + earthy tones
- Glassmorphism cards with backdrop blur effects
- Smooth gradient overlays and animations
- Full-width sections with luxurious spacing
- Responsive design for all devices

### 🌍 Multilingual Support
- **4 Languages**: English, Hindi, Arabic (RTL), French
- Instant translation without page reload
- Language preference stored in localStorage
- Proper RTL layout support for Arabic

### 📱 Key Sections
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About/Why Us** - 7 premium feature cards showcasing company strengths
3. **Products** - 6 agro products with inquiry buttons
4. **Export Process** - 6-step animated timeline
5. **Imports** - Industrial materials showcase
6. **Global Reach** - World map with 50+ countries served
7. **Testimonials** - Auto-rotating client reviews
8. **Contact** - Form + contact info + embedded map
9. **Footer** - Quick links and social media

### 🎨 Technical Features
- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for smooth animations
- **Lucide React** for beautiful icons
- SEO optimized with proper metadata
- Smooth scroll navigation
- Section reveal animations on scroll

### 💬 WhatsApp Integration
- Floating WhatsApp button (bottom-right)
- Pulse animation effect
- Direct inquiry links from product cards
- Contact form integration

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd glolinks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
glolinks/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page component
│   ├── globals.css         # Global styles
│   └── favicon.ico
├── components/
│   ├── Navbar.tsx          # Sticky navigation with language switcher
│   ├── Hero.tsx            # Hero section with animations
│   ├── About.tsx           # Company features grid
│   ├── Products.tsx        # Products showcase
│   ├── ExportProcess.tsx   # Timeline component
│   ├── Imports.tsx         # Imports section
│   ├── GlobalReach.tsx     # World map section
│   ├── Testimonials.tsx    # Client reviews carousel
│   ├── Contact.tsx         # Contact form + info
│   ├── Footer.tsx          # Footer with links
│   └── WhatsAppButton.tsx  # Floating WhatsApp button
├── context/
│   └── LanguageContext.tsx # Language state management
├── lib/
│   └── translations.ts     # All translations (4 languages)
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
└── package.json           # Dependencies

```

## 🌐 Multilingual Implementation

The website supports 4 languages with instant switching:

- **English (en)** - Default
- **Hindi (hi)** - हिन्दी
- **Arabic (ar)** - العربية (RTL support)
- **French (fr)** - Français

Language preference is saved in localStorage and persists across sessions.

## 🎨 Design System

### Colors
- **Primary**: Green (#059669, #10b981)
- **Secondary**: Emerald (#047857, #34d399)
- **Accent**: Various gradients for cards
- **Background**: White with subtle green tints

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, large sizes (4xl-7xl)
- **Body**: Regular weight, comfortable line-height

### Components
- Glassmorphism cards with backdrop-blur
- Gradient backgrounds and overlays
- Smooth hover effects and transitions
- Rounded corners (xl, 2xl, 3xl)
- Soft shadows with color tints

## 📞 Contact Information

- **Phone**: +91 8950003299 / +91 8950000068147
- **Email**: global01@gmail.com
- **Location**: India
- **WhatsApp**: [Click to Chat](https://wa.me/918950003299)

## 🛠️ Customization

### Update Translations
Edit `lib/translations.ts` to modify text content in all languages.

### Change Colors
Update Tailwind classes in components or modify `tailwind.config.ts`.

### Add New Sections
Create new components in `components/` and import them in `app/page.tsx`.

### Modify Contact Info
Update contact details in:
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

This project can be deployed on:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📄 License

© 2026 GloLinks. All rights reserved.

## 🤝 Support

For support or inquiries, contact us via:
- WhatsApp: +91 8950003299
- Email: global01@gmail.com
