# FlashWebsite - cPanel Deployment Guide

This guide will walk you through deploying your FlashWebsite project to a cPanel hosting environment.

## Prerequisites

- cPanel hosting account with:
  - Node.js support (v18.x or higher)
  - MySQL database access
  - SSH/Terminal access (recommended)
  - SSL certificate (Let's Encrypt recommended)
- FTP client or cPanel File Manager access
- Domain name configured in cPanel

---

## Part 1: Pre-Deployment Configuration

### 1.1 Update Backend Environment Variables

Edit `backend/.env`:

```env
NODE_ENV=production
PORT=3001

# Database - Update with your cPanel MySQL credentials
DB_HOST=localhost  # or your cPanel MySQL hostname
DB_USER=your_cpanel_mysql_user
DB_PASSWORD=your_cpanel_mysql_password
DB_NAME=your_database_name
DB_PORT=3306

# Frontend URL - Your actual domain
FRONTEND_URL=https://yourdomain.com

# JWT Secret - Keep this secure
JWT_SECRET=your-secret-key-here

# Email Configuration (Already set up)
EMAIL_HOST=mail.investwithflash.com
EMAIL_PORT=465
EMAIL_USER=info@investwithflash.com
EMAIL_PASS=your_email_password
EMAIL_FROM=info@investwithflash.com
EMAIL_TO=youssef.emad@investwithflash.com
```

### 1.2 Update Frontend API URL

Edit `frontend/src/api/api.js`:

**Change from:**

```javascript
baseURL: 'http://localhost:3001/api';
```

**To:**

```javascript
baseURL: 'https://yourdomain.com/api'; // or https://api.yourdomain.com/api
```

### 1.3 Build Frontend for Production

In your local terminal:

```bash
cd frontend
npm run build
```

This creates a `frontend/dist/` folder containing all static files.

---

## Part 2: Database Setup

### 2.1 Create MySQL Database in cPanel

1. Log into cPanel
2. Go to **Databases** → **MySQL Database Wizard**
3. Create new database (e.g., `flash_website`)
4. Create database user with strong password
5. Assign user to database with ALL PRIVILEGES
6. Note down:
   - Database name: `username_flash_website`
   - Database user: `username_dbuser`
   - Database password: `your_password`
   - Host: `localhost`

### 2.2 Update Backend .env

Update the `backend/.env` file with your database credentials from step 2.1.

---

## Part 3: Backend Deployment (Node.js API)

### 3.1 Upload Backend Files

Using FTP or cPanel File Manager:

1. Create directory: `/home/username/backend/`
2. Upload entire `backend` folder contents to this directory
3. Make sure `.env` file is included and has correct settings

### 3.2 Setup Node.js Application in cPanel

1. Go to cPanel → **Software** → **Setup Node.js App**
2. Click **Create Application**
3. Configure:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/home/username/backend`
   - **Application URL**: Choose your domain or subdomain
   - **Application startup file**: `src/server.js`
   - **Environment variables**: Add if needed
4. Click **Create**

### 3.3 Install Backend Dependencies

In cPanel Terminal or via SSH:

```bash
cd ~/backend
npm install --production
```

Or use the "Run NPM Install" button in the Node.js App interface.

**Note:** If you see an error like "content type doesn't equal" after npm install in cPanel, this is usually a false alarm. The installation likely succeeded. Verify by:

- Checking if `node_modules/` folder exists and is populated
- Starting your app manually with `node src/server.js`
- If issues persist, try: `npm install --production --legacy-peer-deps`

### 3.4 Database Tables Setup

**Option A: Automatic (Recommended for this project)**

Your application is already configured to automatically create database tables when it starts. The code in `server.js` uses:

```javascript
await sequelize.sync({ alter: true });
```

This will create all necessary tables automatically. **No manual migration needed!**

**Option B: Manual Migrations (Optional)**

If you prefer manual control:

```bash
cd ~/backend
npx sequelize-cli db:migrate
```

**Note:** To access Terminal in cPanel:

- Search for "Terminal" in cPanel search bar, OR
- Go to **Advanced** → **Terminal**

### 3.5 Setup Uploads Directory Permissions

```bash
cd ~/backend
chmod -R 755 uploads/
```

Make sure `uploads/` directory is web-accessible.

### 3.6 Start the Application

In cPanel Node.js App interface:

- Click **Start** or **Restart** button
- Check application status should show "Running"

---

## Part 4: Frontend Deployment (React Static Files)

### 4.1 Upload Frontend Build

Using FTP or cPanel File Manager:

1. Navigate to `/home/username/public_html/`
2. Upload all contents from `frontend/dist/` folder
   - `index.html`
   - `assets/` folder
   - All other files

**Alternative Structure** (if using subdomain for API):

- Frontend: `/home/username/public_html/` → `yourdomain.com`
- Backend: `/home/username/backend/` → `api.yourdomain.com`

### 4.2 Configure .htaccess for React Router

Create/edit `.htaccess` in `public_html/`:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Enable CORS for uploads (if needed)
<IfModule mod_headers.c>
  Header set Access-Control-Allow-Origin "*"
</IfModule>
```

---

## Part 5: SSL & Domain Configuration

### 5.1 Enable SSL Certificate

1. Go to cPanel → **Security** → **SSL/TLS Status**
2. Enable **AutoSSL** (Let's Encrypt) for your domain
3. Wait for certificate installation (usually takes a few minutes)

### 5.2 Force HTTPS

Add to `.htaccess` (above the React Router rules):

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
```

### 5.3 Configure Subdomain for API (Optional)

If using `api.yourdomain.com`:

1. Go to cPanel → **Domains** → **Subdomains**
2. Create subdomain: `api`
3. Point to Node.js application through cPanel Node.js App settings

---

## Part 6: File Upload Configuration

### 6.1 Make Uploads Accessible

The `backend/uploads/` directory needs to be web-accessible.

**Option A: Symlink (Recommended)**

```bash
cd ~/public_html
ln -s ~/backend/uploads uploads
```

**Option B: Serve via Backend**

Backend is already configured to serve uploads at `/uploads` route.

### 6.2 Verify Upload Paths

Ensure these URLs work:

- `https://yourdomain.com/uploads/projects/cover-images/image.jpg`
- `https://yourdomain.com/uploads/posts/cover-images/image.jpg`

---

## Part 7: Post-Deployment Testing

### 7.1 Test Backend API

Visit: `https://yourdomain.com/api/health` or `https://api.yourdomain.com/api/health`

Should return: `{ "status": "ok" }`

### 7.2 Test Frontend

Visit: `https://yourdomain.com`

✅ Check:

- [ ] Homepage loads correctly
- [ ] Navigation works
- [ ] Projects page displays projects
- [ ] Blog page displays posts
- [ ] Language switching works (EN/AR)
- [ ] Contact forms work
- [ ] Images load properly

### 7.3 Test Admin Features

1. Visit: `https://yourdomain.com/admin/login`
2. Log in with admin credentials
3. Test:
   - [ ] Create new project
   - [ ] Upload images
   - [ ] Create new blog post
   - [ ] Edit existing content

### 7.4 Test Email Notifications

- Submit contact form
- Check if email arrives at `youssef.emad@investwithflash.com`

---

## Part 8: Monitoring & Maintenance

### 8.1 Check Application Logs

In cPanel Terminal:

```bash
cd ~/backend
npm run logs  # if you have a logs script
```

Or check cPanel → **Metrics** → **Errors**

### 8.2 View Node.js App Logs

In cPanel Node.js App interface:

- Click on your application
- View "Application Logs" section

### 8.3 Restart Application

If you make changes:

```bash
cd ~/backend
# Make changes
touch tmp/restart.txt  # or use cPanel restart button
```

---

## Troubleshooting

### Issue: "Cannot connect to database"

**Solution:**

- Verify database credentials in `.env`
- Check database user has proper permissions
- Ensure database host is correct (usually `localhost`)

### Issue: "404 Not Found on React routes"

**Solution:**

- Check `.htaccess` file exists in `public_html/`
- Verify mod_rewrite is enabled (contact hosting support)
- Clear browser cache

### Issue: "CORS errors"

**Solution:**

- Verify `FRONTEND_URL` in backend `.env` matches your domain
- Check CORS settings in `backend/src/server.js`

### Issue: "Images not loading"

**Solution:**

- Check `uploads/` directory permissions (755)
- Verify symlink or backend static file serving
- Check uploaded file paths in database

### Issue: "Node.js app won't start"

**Solution:**

- Check Node.js version compatibility (18.x+)
- Run `npm install` again
- Check for missing environment variables
- Review application logs in cPanel

---

## Directory Structure on Server

```
/home/username/
├── public_html/              # Frontend (React build)
│   ├── index.html
│   ├── assets/
│   │   ├── index-[hash].js
│   │   └── index-[hash].css
│   ├── locales/
│   │   ├── en/
│   │   └── ar/
│   ├── .htaccess
│   └── uploads/              # Symlink to backend/uploads
│
├── backend/                  # Node.js API
│   ├── src/
│   │   ├── server.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   ├── uploads/              # Actual upload directory
│   │   ├── projects/
│   │   ├── posts/
│   │   └── cvs/
│   ├── package.json
│   ├── .env                  # Production environment variables
│   └── node_modules/
│
└── tmp/
```

---

## Security Recommendations

1. **Protect .env file**:

   ```apache
   # Add to .htaccess
   <Files .env>
     Order allow,deny
     Deny from all
   </Files>
   ```

2. **Secure uploads directory**:

   - Don't allow PHP execution in uploads folder
   - Validate file types on upload

3. **Keep dependencies updated**:

   ```bash
   npm audit
   npm update
   ```

4. **Use strong passwords**:

   - Database password
   - JWT secret
   - Admin credentials

5. **Regular backups**:
   - Use cPanel backup feature
   - Backup database regularly
   - Keep backup of `.env` file securely

---

## Additional Resources

- **cPanel Documentation**: Check your hosting provider's knowledge base
- **Node.js on cPanel**: Most hosts have specific guides for Node.js apps
- **MySQL Management**: Use phpMyAdmin in cPanel for database management

---

## Support

If you encounter issues:

1. Check application logs
2. Verify all environment variables
3. Contact your hosting provider for cPanel-specific issues
4. Review this deployment guide step-by-step

---

**Last Updated**: December 7, 2025
