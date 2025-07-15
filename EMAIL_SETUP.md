# Email Setup Guide

Since you're not receiving emails from the contact form, you need to set up a backend service to handle form submissions. Here are your options:

## Option 1: Netlify Forms (Easiest)

If you deploy on Netlify, add this to your form:

```jsx
// In ContactForm.tsx, update the form tag:
<form onSubmit={handleSubmit} className="space-y-4" data-netlify="true" name="contact">
  <input type="hidden" name="form-name" value="contact" />
  {/* rest of your form */}
</form>
```

## Option 2: EmailJS (No Backend Required)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service and template
3. Install EmailJS: `pnpm add @emailjs/browser`
4. Update ContactForm.tsx:

```jsx
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    );
    
    setSubmitStatus('success');
    // ... rest of success handling
  } catch (error) {
    setSubmitStatus('error');
  }
};
```

## Option 3: Formspree (Simple Integration)

1. Sign up at [Formspree](https://formspree.io/)
2. Create a form endpoint
3. Update ContactForm.tsx:

```jsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  }
};
```

## Option 4: Custom Backend (Most Control)

Create an API endpoint (e.g., using Vercel Functions, Netlify Functions, or your own server):

```javascript
// api/contact.js (Vercel example)
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Configure your email service (Gmail, SendGrid, etc.)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'denis@afyahewani.io',
      subject: subject,
      text: `From: ${name} (${email})\n\n${message}`,
    });

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error sending email' });
  }
}
```

## Quick Testing

For immediate testing, you can view form submissions in the browser console:
1. Open Developer Tools (F12)
2. Go to Console tab
3. Submit the form
4. You'll see: `Form submission: {name: "...", email: "...", ...}`

## Recommended: EmailJS

For your use case, I recommend EmailJS because:
- No backend required
- Free tier available
- Easy setup
- Works with your existing email

Just follow Option 2 above to get emails working quickly!