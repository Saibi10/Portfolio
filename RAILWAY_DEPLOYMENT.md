# Railway Deployment Instructions

This project is configured for deployment on Railway. Follow these steps to deploy:

## Prerequisites

1. Create a [Railway](https://railway.app/) account if you don't have one
2. Install the Railway CLI (optional but recommended):
   ```
   npm i -g @railway/cli
   ```

## Environment Variables

Make sure to set the following environment variables in your Railway project:

- `VITE_APP_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_APP_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_APP_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

## Deployment Steps

### Option 1: Using the Railway Dashboard

1. Go to [Railway Dashboard](https://railway.app/dashboard)
2. Click "New Project" > "Deploy from GitHub"
3. Select your repository
4. Railway will automatically detect the configuration from railway.json
5. Set the required environment variables in the "Variables" tab

### Option 2: Using Railway CLI

1. Login to Railway:
   ```
   railway login
   ```

2. Link your project:
   ```
   railway link
   ```

3. Deploy your application:
   ```
   railway up
   ```

4. Set environment variables:
   ```
   railway variables set VITE_APP_EMAILJS_SERVICE_ID=your_service_id VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

## Verify Deployment

Once deployed, Railway will provide you with a URL to access your application. Visit this URL to ensure everything is working correctly.

## Troubleshooting

If you encounter any issues:

1. Check the logs in the Railway dashboard
2. Ensure all environment variables are set correctly
3. Verify that the build completes successfully 