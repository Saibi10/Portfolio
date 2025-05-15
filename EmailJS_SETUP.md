# Setting Up EmailJS for Contact Form

Follow these steps to configure EmailJS for your contact form:

## 1. Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## 2. Create an Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Name your service and save it
6. Copy the Service ID

## 3. Create an Email Template

1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template
4. Use the following variables in your template:
   - `{{from_name}}` - The name of the person contacting you
   - `{{from_email}}` - The email of the person contacting you
   - `{{message}}` - The message content
   - `{{to_name}}` - Your name (Sohaib Aslam)
   - `{{to_email}}` - Your email (sohaib.aslam2467@gmail.com)
5. Save your template
6. Copy the Template ID

## 4. Get Your Public Key

1. Go to "Account" > "API Keys"
2. Copy your Public Key

## 5. Create a .env File in Your Project Root

Create a file named `.env` in the root of your project with the following content:

```
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Replace `your_service_id`, `your_template_id`, and `your_public_key` with the values you copied from EmailJS.

## 6. Restart Your Development Server

After creating the .env file, restart your development server to apply the changes.

Your contact form should now be fully functional!

## Note

The free tier of EmailJS allows 200 emails per month, which should be sufficient for a portfolio website. 