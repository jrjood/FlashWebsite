# Upload Organization Migration

## New Folder Structure

```
uploads/
├── projects/
│   ├── cover-images/    # Project cover images
│   └── media/           # Project photos and videos
├── posts/
│   └── cover-images/    # Blog post cover images
├── cvs/                 # Job application CVs (preserved)
└── temp/                # Temporary/unorganized uploads
```

## Migration Steps

### 1. Backup Your Current Uploads (IMPORTANT!)

```bash
# From the backend directory
cd uploads
tar -czf uploads-backup-$(date +%Y%m%d).tar.gz *
# Or on Windows
# Copy the entire uploads folder to uploads-backup
```

### 2. Run the Migration Script

```bash
cd backend
npm run migrate-uploads
```

The script will:

- ✅ Create the new folder structure
- ✅ Move project cover images to `projects/cover-images/`
- ✅ Move project media to `projects/media/`
- ✅ Move post cover images to `posts/cover-images/`
- ✅ Update all database URLs automatically
- ✅ Move orphaned files to `temp/`
- ✅ Preserve the `cvs/` folder as-is

### 3. Restart Your Backend

```bash
# Stop the current backend (Ctrl+C)
npm run dev

# Or if using Docker
docker-compose restart backend
```

## What Changed in the Code

### 1. Upload Middleware (`src/middleware/upload.js`)

- Now automatically determines the correct subfolder based on the upload route
- Creates folders on-the-fly if they don't exist

### 2. Routes & Controllers

- `/api/uploads/cover` - Intelligently routes to posts or projects folder
- `/api/projects/:id/media` - Uploads to `projects/media/`
- All URLs now include the subfolder path (e.g., `/uploads/projects/media/file.jpg`)

### 3. CV Uploads

- Already organized in `cvs/` folder - no changes needed

## Testing the Migration

1. **Check the console output** - It will show you how many files were migrated
2. **Verify your website** - All images should still display correctly
3. **Check the uploads folder** - Files should be organized into subfolders
4. **Test new uploads** - Upload a new project/post cover image

## Rollback (If Needed)

If something goes wrong:

```bash
# Restore from backup
cd backend/uploads
rm -rf *
tar -xzf ../uploads-backup-YYYYMMDD.tar.gz
```

Then you'll need to restore the old upload.js file from git history.

## Future Uploads

All new uploads will automatically go to the correct folder:

- Project covers → `projects/cover-images/`
- Project media → `projects/media/`
- Post covers → `posts/cover-images/`
- CVs → `cvs/` (unchanged)
- Unknown → `temp/`

## Notes

- The CVs folder remains unchanged and continues to work as before
- Old URLs in the database are automatically updated
- Files that can't be categorized are moved to `temp/`
- The migration is safe and can be run multiple times (idempotent)
