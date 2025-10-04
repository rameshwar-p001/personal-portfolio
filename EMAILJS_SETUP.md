# 📧 EmailJS Setup Guide for Contact Form

## ✅ Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## ✅ Step 2: Connect Your Gmail Account

1. In EmailJS Dashboard, go to **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and authorize EmailJS to access your Gmail
5. **Copy the Service ID** (you'll need this later) "service_zi8rh8s"

## ✅ Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Set up your template like this:

### Template Content:
```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Project Type: {{project_type}}
Budget: {{budget}}
Timeline: {{timeline}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

4. **Copy the Template ID** (you'll need this later)     

"emailjs.send("service_zi8rh8s"  "template_u6f5ctl");"

## ✅ Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find your **"Public Key"**             BbHwlQ4GampI1ZaIc
3. **Copy the Public Key** (you'll need this later)          KO7xDqtSpLnPdErh3vYK9

## ✅ Step 5: Update Your Code

Replace these values in `src/components/ContactModal.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID';     // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID';   // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY';     // Replace with your Public Key
```

## 🎯 Example Configuration:

```javascript
const serviceId = 'service_1234567';
const templateId = 'template_abcdefg';
const publicKey = 'abcDEF123456789';
```

## ✅ Step 6: Test Your Form

1. Start your development server: `npm run dev`
2. Open your portfolio and try submitting the contact form
3. Check your email inbox at `workwith.rameshwar@gmail.com`

## 🔒 Security Note:

- The Public Key is safe to use in frontend code
- Service ID and Template ID are also safe to expose
- EmailJS handles all the email sending securely

## 📝 Free Tier Limits:

- ✅ 200 emails per month
- ✅ No credit card required
- ✅ Perfect for personal portfolios

## 🚨 Troubleshooting:

If emails aren't being sent:
1. Check browser console for errors
2. Verify all IDs are correct
3. Check EmailJS dashboard for delivery status
4. Make sure Gmail account is properly connected

---

## 🎉 That's it! 

Your contact form will now send real emails to `workwith.rameshwar@gmail.com` whenever someone submits it!