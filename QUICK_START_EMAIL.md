# ⚡ Quick Start - Email Setup (5 Minutes)

## 🎯 What You Need to Do RIGHT NOW

### Step 1: Create Gmail App Password (2 minutes)

1. **Go to:** https://myaccount.google.com/apppasswords
2. **Sign in** with: globalsealinks01@gmail.com
3. **Select app:** Mail
4. **Select device:** Other (Custom name)
5. **Type:** "Global Sea Links Website"
6. **Click:** Generate
7. **Copy** the 16-character password (example: `abcd efgh ijkl mnop`)

### Step 2: Add Password to .env.local (1 minute)

1. **Open file:** `glolinks/.env.local`
2. **Find line:** `EMAIL_PASS=your-app-password-here`
3. **Replace with:** Your 16-character password (remove spaces!)
4. **Save file**

**Example:**
```env
EMAIL_PASS=abcdefghijklmnop
```

### Step 3: Test It! (2 minutes)

```bash
# Start server
npm run dev

# Open browser
http://localhost:3000

# Scroll to Contact section
# Fill form and click "Send Message"
# Check your email!
```

---

## ✅ That's It!

Your contact form is now sending real emails! 🎉

**Need help?** Read the full guide: `EMAIL_SETUP_GUIDE.md`

---

## 🚨 Important Notes

- ⚠️ **MUST use App Password** (not regular Gmail password)
- ⚠️ **Must enable 2-Factor Authentication** first
- ⚠️ **Remove spaces** from the password in .env.local
- ⚠️ **Restart dev server** after changing .env.local
- ✅ `.env.local` is already in .gitignore (safe!)

---

## 📧 What Happens When Form is Submitted?

1. User fills form → Clicks "Send Message"
2. Shows loading spinner
3. Sends email via Gmail SMTP
4. Shows success message (green) or error (red)
5. Form resets automatically
6. You receive email at: globalsealinks01@gmail.com

---

## 🎨 Features Included

✅ Loading state while sending  
✅ Success/error alerts  
✅ Form validation  
✅ Auto-reset after success  
✅ Beautiful HTML emails  
✅ Mobile responsive  
✅ 4 languages support  
✅ Reply-to sender's email  
✅ Timestamp in emails  

---

## 🔥 Ready to Deploy?

When deploying to Vercel/Netlify/etc:

1. Add these environment variables in your hosting platform:
   - `EMAIL_USER=globalsealinks01@gmail.com`
   - `EMAIL_PASS=your-app-password`
   - `EMAIL_TO=globalsealinks01@gmail.com`

2. Deploy!

---

**Questions?** Check `EMAIL_SETUP_GUIDE.md` for detailed troubleshooting.
