# 📧 Email Contact Form Setup Guide

## Complete Step-by-Step Instructions for Global Sea Links

---

## 🎯 What You Have Now

Your contact form now sends emails directly to **globalsealinks01@gmail.com** using:
- ✅ Next.js API Routes (no external backend needed)
- ✅ Nodemailer (professional email sending)
- ✅ Gmail SMTP (reliable email delivery)
- ✅ TypeScript (type-safe code)
- ✅ Loading states & error handling
- ✅ Beautiful HTML formatted emails

---

## 📦 Step 1: Packages Installed

Already completed! These packages were installed:

```bash
npm install nodemailer
npm install --save-dev @types/nodemailer
```

---

## 🔐 Step 2: Create Gmail App Password

**IMPORTANT:** You MUST create a Gmail App Password. Your regular Gmail password will NOT work!

### Follow These Steps:

#### 1. Enable 2-Factor Authentication (if not already enabled)

1. Go to: https://myaccount.google.com/security
2. Scroll to "How you sign in to Google"
3. Click on "2-Step Verification"
4. Follow the setup process (you'll need your phone)

#### 2. Create App Password

1. Go to: https://myaccount.google.com/apppasswords
   - OR search "App Passwords" in Google Account settings
2. You might need to sign in again
3. Under "Select app" → Choose **"Mail"**
4. Under "Select device" → Choose **"Other (Custom name)"**
5. Type: **"Global Sea Links Website"**
6. Click **"Generate"**
7. Google will show you a **16-character password** like: `abcd efgh ijkl mnop`
8. **COPY THIS PASSWORD** (you won't see it again!)

#### 3. Add to .env.local

1. Open the file: `glolinks/.env.local`
2. Find the line: `EMAIL_PASS=your-app-password-here`
3. Replace `your-app-password-here` with your 16-character password
4. **Remove all spaces** from the password

**Example:**
```env
EMAIL_PASS=abcdefghijklmnop
```

---

## 📝 Step 3: Configure Environment Variables

Open `glolinks/.env.local` and verify these settings:

```env
# Email Configuration
EMAIL_USER=globalsealinks01@gmail.com
EMAIL_PASS=your-16-character-app-password-here
EMAIL_TO=globalsealinks01@gmail.com
```

### Important Notes:
- ✅ `EMAIL_USER` = Your Gmail address (already set)
- ✅ `EMAIL_PASS` = Your Gmail App Password (you need to add this)
- ✅ `EMAIL_TO` = Where emails will be sent (already set)
- ⚠️ **NEVER commit .env.local to Git** (it's already in .gitignore)

---

## 🚀 Step 4: Test the Contact Form

### Start Development Server

```bash
cd glolinks
npm run dev
```

### Test the Form

1. Open: http://localhost:3000
2. Scroll to the Contact section
3. Fill out the form:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message
4. Click "Send Message"
5. You should see:
   - ⏳ Loading spinner while sending
   - ✅ Green success message
   - 📧 Email in your inbox (globalsealinks01@gmail.com)

---

## 📧 What the Email Looks Like

When someone submits the form, you'll receive a beautiful HTML email with:

- 🎨 Professional green gradient header
- 👤 Sender's name
- 📧 Sender's email (you can reply directly)
- 💬 Their message
- 📅 Timestamp
- 🎯 Clean, mobile-responsive design

---

## 🔧 How It Works (Technical Overview)

### 1. User Fills Form
```
User enters: Name, Email, Message
↓
Clicks "Send Message"
```

### 2. Frontend Sends Request
```javascript
// Contact.tsx
fetch('/api/contact', {
  method: 'POST',
  body: JSON.stringify({ name, email, message })
})
```

### 3. API Route Processes
```
app/api/contact/route.ts
↓
Validates input (name, email, message)
↓
Creates Nodemailer transporter
↓
Sends email via Gmail SMTP
↓
Returns success/error response
```

### 4. User Sees Result
```
✅ Success: Green alert + form reset
❌ Error: Red alert with error message
```

---

## 🛠️ Files Created/Modified

### New Files:
1. ✅ `app/api/contact/route.ts` - API endpoint for sending emails
2. ✅ `.env.local` - Environment variables (you need to add App Password)
3. ✅ `EMAIL_SETUP_GUIDE.md` - This guide

### Modified Files:
1. ✅ `components/Contact.tsx` - Updated with API integration
2. ✅ `package.json` - Added nodemailer dependencies

---

## ✅ Checklist Before Going Live

- [ ] Created Gmail App Password
- [ ] Added App Password to `.env.local`
- [ ] Tested contact form locally
- [ ] Received test email successfully
- [ ] Verified `.env.local` is in `.gitignore`
- [ ] Ready to deploy!

---

## 🚨 Troubleshooting

### Problem: "Invalid login" error

**Solution:**
- Make sure you created an **App Password** (not regular password)
- Check that 2-Factor Authentication is enabled
- Verify the password in `.env.local` has no spaces
- Try generating a new App Password

### Problem: "Email service is not configured"

**Solution:**
- Check that `.env.local` exists in the `glolinks` folder
- Verify `EMAIL_USER` and `EMAIL_PASS` are set
- Restart the development server after changing `.env.local`

### Problem: Email not received

**Solution:**
- Check your Gmail spam folder
- Verify `EMAIL_TO` in `.env.local` is correct
- Check Gmail's "Sent" folder to confirm it was sent
- Wait a few minutes (sometimes there's a delay)

### Problem: "ECONNECTION" or "ETIMEDOUT" error

**Solution:**
- Check your internet connection
- Verify firewall isn't blocking port 587 or 465
- Try again in a few minutes
- Check Gmail service status

---

## 🌐 Deployment Notes

### For Vercel/Netlify/Other Platforms:

1. Add environment variables in your hosting platform:
   - `EMAIL_USER=globalsealinks01@gmail.com`
   - `EMAIL_PASS=your-app-password`
   - `EMAIL_TO=globalsealinks01@gmail.com`

2. **DO NOT** commit `.env.local` to Git

3. Each platform has a different way to add environment variables:
   - **Vercel**: Project Settings → Environment Variables
   - **Netlify**: Site Settings → Environment Variables
   - **Railway**: Project → Variables

---

## 📞 Support

If you encounter any issues:

1. Check the browser console for errors (F12)
2. Check the terminal/server logs
3. Verify all steps in this guide
4. Test with a different email address

---

## 🎉 Success!

Once you've completed all steps, your contact form will:
- ✅ Send emails directly to your Gmail
- ✅ Show loading states while sending
- ✅ Display success/error messages
- ✅ Reset form after successful submission
- ✅ Work on all devices (mobile, tablet, desktop)
- ✅ Support all 4 languages (English, Hindi, Arabic, French)

**Your contact form is now production-ready!** 🚀
