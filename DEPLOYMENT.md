# 🚀 Deployment Guide - GloLinks Website

## Pre-Deployment Checklist

### ✅ Content Review
- [ ] Verify all translations are accurate
- [ ] Check contact information (phone, email, address)
- [ ] Test WhatsApp links
- [ ] Review product descriptions
- [ ] Confirm company information

### ✅ Technical Testing
- [ ] Run `npm run build` successfully
- [ ] Test on multiple browsers
- [ ] Test on mobile devices
- [ ] Verify all animations work
- [ ] Check language switching
- [ ] Test form submissions
- [ ] Verify Google Maps embed

### ✅ SEO & Performance
- [ ] Update metadata in `app/layout.tsx`
- [ ] Add favicon (already included)
- [ ] Optimize images if added
- [ ] Test page load speed
- [ ] Check mobile responsiveness

## Deployment Options

### Option 1: Vercel (Recommended) ⭐

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic HTTPS
- Global CDN
- Free tier available
- Automatic deployments from Git

**Steps:**

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit - GloLinks website"
git branch -M main
git remote add origin <your-github-repo-url>
git push -u origin main
```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js
   - Click "Deploy"
   - Done! 🎉

3. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - SSL certificate auto-generated

**Environment Variables:**
If you add any API keys later:
- Go to Project Settings → Environment Variables
- Add variables
- Redeploy

---

### Option 2: Netlify

**Steps:**

1. **Build the Project**
```bash
npm run build
```

2. **Deploy via Netlify CLI**
```bash
npm install -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

**Or via Netlify UI:**
- Go to [netlify.com](https://netlify.com)
- Drag and drop `.next` folder
- Or connect GitHub repository

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18 or higher

---

### Option 3: AWS Amplify

**Steps:**

1. **Install Amplify CLI**
```bash
npm install -g @aws-amplify/cli
amplify configure
```

2. **Initialize Amplify**
```bash
amplify init
amplify add hosting
amplify publish
```

**Build Settings:**
```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: .next
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

---

### Option 4: DigitalOcean App Platform

**Steps:**

1. **Push to GitHub**
2. **Create App on DigitalOcean**
   - Go to Apps → Create App
   - Connect GitHub repository
   - Select branch

**Build Settings:**
- Build Command: `npm run build`
- Run Command: `npm start`
- HTTP Port: 3000

---

### Option 5: Self-Hosted (VPS/Dedicated Server)

**Requirements:**
- Node.js 18+
- PM2 (process manager)
- Nginx (reverse proxy)
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Setup Server**
```bash
# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2
```

2. **Deploy Application**
```bash
# Clone repository
git clone <your-repo-url>
cd glolinks

# Install dependencies
npm install

# Build
npm run build

# Start with PM2
pm2 start npm --name "glolinks" -- start
pm2 save
pm2 startup
```

3. **Configure Nginx**
```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. **Setup SSL with Let's Encrypt**
```bash
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com
```

---

## Post-Deployment Tasks

### 1. Verify Deployment
- [ ] Visit your live URL
- [ ] Test all sections
- [ ] Check mobile responsiveness
- [ ] Test language switching
- [ ] Verify WhatsApp links work
- [ ] Test contact form

### 2. Setup Analytics (Optional)

**Google Analytics:**
1. Create GA4 property
2. Add tracking code to `app/layout.tsx`:
```tsx
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
```

**Vercel Analytics:**
```bash
npm install @vercel/analytics
```

Add to `app/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react';

// In return statement
<Analytics />
```

### 3. Setup Monitoring

**Vercel:**
- Built-in monitoring available
- Check deployment logs
- Monitor performance

**Self-Hosted:**
```bash
# PM2 monitoring
pm2 monit

# View logs
pm2 logs glolinks
```

### 4. Configure Custom Domain

**DNS Records:**
```
Type: A
Name: @
Value: <your-server-ip>

Type: CNAME
Name: www
Value: yourdomain.com
```

**For Vercel:**
- Add domain in project settings
- Follow DNS instructions
- Wait for propagation (up to 48 hours)

---

## Continuous Deployment

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - run: npm test # if you have tests
      # Add deployment steps here
```

---

## Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

### Port Already in Use
```bash
# Find and kill process
lsof -ti:3000 | xargs kill -9
```

### Environment Variables Not Working
- Ensure variables start with `NEXT_PUBLIC_` for client-side
- Restart development server after adding variables
- Redeploy on production platforms

### SSL Certificate Issues
```bash
# Renew Let's Encrypt certificate
sudo certbot renew
```

---

## Performance Optimization

### 1. Enable Caching
Add to `next.config.ts`:
```typescript
const nextConfig = {
  headers: async () => [
    {
      source: '/:all*(svg|jpg|png)',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=31536000, immutable',
        },
      ],
    },
  ],
};
```

### 2. Image Optimization
If you add images, use Next.js Image component:
```tsx
import Image from 'next/image';

<Image
  src="/product.jpg"
  alt="Product"
  width={500}
  height={300}
  priority
/>
```

### 3. Enable Compression
Nginx:
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript;
```

---

## Backup Strategy

### 1. Code Backup
- Use Git for version control
- Push to GitHub/GitLab regularly
- Tag releases: `git tag v1.0.0`

### 2. Database Backup (if added later)
```bash
# MongoDB
mongodump --db glolinks --out /backup/

# PostgreSQL
pg_dump glolinks > backup.sql
```

### 3. Automated Backups
```bash
# Cron job for daily backups
0 2 * * * /path/to/backup-script.sh
```

---

## Scaling Considerations

### When to Scale
- High traffic (>10,000 visitors/day)
- Slow page loads
- Server resource limits

### Scaling Options
1. **Vercel**: Automatic scaling included
2. **Load Balancer**: Distribute traffic across servers
3. **CDN**: CloudFlare, AWS CloudFront
4. **Database**: Separate database server
5. **Caching**: Redis for session/data caching

---

## Support & Maintenance

### Regular Tasks
- [ ] Monitor uptime
- [ ] Check error logs weekly
- [ ] Update dependencies monthly
- [ ] Review analytics
- [ ] Backup data regularly
- [ ] Test after updates

### Update Dependencies
```bash
# Check outdated packages
npm outdated

# Update packages
npm update

# Update Next.js
npm install next@latest react@latest react-dom@latest
```

---

## Cost Estimates

### Vercel (Recommended for Start)
- **Hobby**: Free
  - Unlimited deployments
  - 100GB bandwidth
  - Perfect for starting

- **Pro**: $20/month
  - More bandwidth
  - Team features
  - Priority support

### Self-Hosted VPS
- **DigitalOcean Droplet**: $6-12/month
- **AWS EC2**: $5-20/month
- **Domain**: $10-15/year
- **SSL**: Free (Let's Encrypt)

**Total Self-Hosted**: ~$80-200/year

---

## Emergency Contacts

**Technical Issues:**
- Check deployment logs first
- Review error messages
- Search Next.js documentation
- Stack Overflow for common issues

**Business Contact:**
- WhatsApp: +91 8950003299
- Email: global01@gmail.com

---

## Quick Deploy Commands

```bash
# Vercel
vercel --prod

# Netlify
netlify deploy --prod

# PM2 (Self-hosted)
pm2 restart glolinks
pm2 reload glolinks

# Git deployment
git add .
git commit -m "Update"
git push origin main
```

---

**🎉 Your GloLinks website is ready to go live!**

Choose your deployment platform and follow the steps above. For most users, **Vercel** is the easiest and most reliable option.

Good luck! 🚀
