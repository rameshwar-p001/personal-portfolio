# 🔧 EmailJS Template Setup Instructions

## ⚠️ Important: Make sure your EmailJS template matches these variable names exactly!

### Go to EmailJS Dashboard → Email Templates → Edit your template

### Template Subject:
```
New Contact Form Submission from {{from_name}}
```

### Template Body:
```
You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}
Subject: {{subject}}

Project Details:
- Project Type: {{project_type}}
- Budget: {{budget}}
- Timeline: {{timeline}}

Message:
{{message}}

---
This message was sent from your portfolio website.
Reply directly to this email to respond to {{from_name}}.
```

### ✅ Make sure these variable names match exactly:
- `{{from_name}}`
- `{{from_email}}`
- `{{subject}}`
- `{{message}}`
- `{{project_type}}`
- `{{budget}}`
- `{{timeline}}`

### 🔍 Common Issues:
1. **Variable names don't match** - Check spelling and case
2. **Template not saved** - Make sure to save after editing
3. **Wrong template ID** - Double-check the template ID
4. **Service not active** - Make sure Gmail service is connected

### 🧪 Test Steps:
1. Update your template with the content above
2. Save the template
3. Try submitting the form again
4. Check browser console for any errors

If it still doesn't work, try creating a completely new template with a simple message first to test the connection.