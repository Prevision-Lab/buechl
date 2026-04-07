# Deployment Instructions

## Overview
This package contains a **static website** built with Nuxt 3. It requires no Node.js, no build process, and no server-side runtime on your server.

## Requirements
- Any static web server (Apache, Nginx, Caddy, etc.)
- Support for serving static HTML/CSS/JS files

## Deployment Steps

1. **Extract the package**
   ```bash
   unzip buchl-app-static.zip
   # or
   tar -xzf buchl-app-static.tar.gz
   ```

2. **Upload contents to web root**
   - Upload all files from the `dist-package/` folder to your web server's document root
   - Example paths: `/var/www/html/`, `/usr/share/nginx/html/`, or your hosting panel's public folder

3. **Configure web server**
   
   **For Apache (.htaccess):**
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

   **For Nginx:**
   ```nginx
   location / {
     try_files $uri $uri/ /index.html;
   }
   ```

4. **Set permissions (if needed)**
   ```bash
   chmod -R 755 dist-package/
   ```

## Multi-language Support
The site supports 3 languages:
- **Hungarian (default)**: `yourdomain.com/`
- **English**: `yourdomain.com/en/`
- **German**: `yourdomain.com/de/`

## Testing
After deployment, verify all routes work:
- Main page: `https://yourdomain.com/`
- English: `https://yourdomain.com/en/`
- Services: `https://yourdomain.com/szolgaltatasok` (HU) / `/en/services` (EN)

## Notes
- All assets are pre-optimized and minified
- No database required
- No environment variables needed
- Works with any CDN (Cloudflare, CloudFront, etc.)

## Support
If you encounter any issues, please contact the development team.
