#!/bin/bash

# Build and Deploy React App to Shopify
# This script builds the React app and copies assets to Shopify's assets folder

echo "Building React app..."
cd /home/subaru/Documents/ZYLORA-2-Shopify/web
npm run build

echo "Copying assets to Shopify..."
cp dist/react-app.js ../assets/
cp dist/react-app.css ../assets/
cp dist/react-app-hero-bg.jpg ../assets/

echo "✅ React app built and deployed to Shopify assets!"
echo ""
echo "Next steps:"
echo "1. Go to your Shopify admin"
echo "2. Navigate to Online Store > Pages"
echo "3. Create a new page or edit an existing one"
echo "4. Select 'page.react-app' as the template"
echo "5. Save and preview!"
