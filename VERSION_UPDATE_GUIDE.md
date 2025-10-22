# Version Update & Cache Busting Guide

## 🚀 How to Deploy Updates That Users Will See Immediately

### Problem
When you deploy new updates, users might still see the old version because:
1. Their browser caches the old files
2. Service Worker caches the old content
3. localStorage stores old version info

### Solution
We've implemented an automatic version checker that:
- Detects when a new version is available
- Shows a friendly notification to users
- Clears all caches when they update
- Forces a fresh reload

---

## 📋 Deployment Checklist

### Every time you deploy updates, follow these steps:

#### 1. Update Version Numbers
Update the version in **3 places** (keep them in sync):

**a) `package.json`**
```json
{
  "version": "3.1.0"  // Increment this
}
```

**b) `public/sw.js`**
```javascript
const CACHE_VERSION = 'india-innovates-v3.1.0'; // Update this to match package.json
```

**c) `src/utils/versionChecker.ts`**
```typescript
const APP_VERSION = '3.1.0'; // Update this to match package.json
```

#### 2. Version Numbering Convention
Follow semantic versioning (MAJOR.MINOR.PATCH):
- **MAJOR** (X.0.0): Breaking changes or major redesigns
- **MINOR** (3.X.0): New features, new sections, significant updates
- **PATCH** (3.1.X): Bug fixes, small improvements, typos

Examples:
- Added new themes to University page → `3.1.0` (minor update)
- Fixed video not loading → `3.0.1` (patch)
- Complete redesign → `4.0.0` (major)

#### 3. Build & Deploy
```bash
# Build the project
npm run build

# Deploy to your hosting platform
# (Netlify, Vercel, etc.)
```

---

## 🎯 What Happens for Users

### First Visit After Update
1. User visits the site
2. Version checker runs automatically
3. Detects version mismatch (e.g., they have 3.0.0, but site is now 3.1.0)
4. Shows a beautiful purple notification:
   ```
   🎉 New Version Available!
   We've made improvements to India Innovates.
   Please refresh to get the latest updates.
   [Update Now] [Later]
   ```
5. When they click "Update Now":
   - All caches are cleared
   - Service worker is unregistered
   - Page reloads with fresh content
   - New version is stored

### If They Click "Later"
- Notification dismisses
- Will show again after 10 minutes
- Will show again on next page load

---

## 🔧 Manual Testing

### Test Cache Busting Locally

1. **Simulate old version:**
   ```javascript
   // In browser console
   localStorage.setItem('app_version', '2.9.0');
   location.reload();
   ```
   You should see the update notification.

2. **Check current version:**
   ```javascript
   // In browser console
   localStorage.getItem('app_version');
   ```

3. **Clear everything manually:**
   ```javascript
   // In browser console
   localStorage.clear();
   caches.keys().then(keys => keys.forEach(key => caches.delete(key)));
   location.reload();
   ```

---

## 🎨 Customization

### Change Notification Frequency
In `src/utils/versionChecker.ts`:
```typescript
const VERSION_CHECK_INTERVAL = 5 * 60 * 1000; // Currently 5 minutes
// Change to: 10 * 60 * 1000 for 10 minutes
```

### Preserve Additional Data During Update
In `src/utils/versionChecker.ts`, add keys to preserve:
```typescript
const essentialKeys = ['theme', 'user_preferences']; // Add your keys here
```

### Change Notification Styling
Edit the `showUpdateNotification()` function in `src/utils/versionChecker.ts`

---

## 🐛 Troubleshooting

### Users Not Seeing Updates

**Issue:** Users still see old content after deployment

**Solutions:**
1. ✅ Verify you updated ALL 3 version numbers
2. ✅ Check service worker version in browser:
   - Open DevTools → Application → Service Workers
   - Should show new cache version
3. ✅ Hard refresh test: Ctrl+Shift+R (Windows) / Cmd+Shift+R (Mac)
4. ✅ Check browser console for errors

### Version Checker Not Working

**Check:**
```javascript
// In browser console
console.log('Stored version:', localStorage.getItem('app_version'));
console.log('Current version:', '3.1.0'); // Your current version
```

### Force All Users to Update Immediately

Add this to the notification (not recommended, but available):
```typescript
// In versionChecker.ts, remove the "Later" button option
// And add setTimeout to auto-refresh after 10 seconds
setTimeout(() => forceRefresh(), 10000);
```

---

## 📱 Mobile Considerations

Mobile browsers are more aggressive with caching:
- iOS Safari: Clears cache after ~50MB
- Chrome Mobile: Similar to desktop
- In-app browsers (Facebook, Instagram): Very aggressive caching

**Solution:** Version checker works on all platforms!

---

## 🎯 Best Practices

1. **Deploy during low-traffic hours** (late night/early morning)
2. **Test in incognito mode** before announcing update
3. **Increment version** even for small changes
4. **Keep a changelog** of what changed in each version
5. **Announce major updates** on social media

---

## 📊 Monitoring

### Track Version Adoption
Add analytics to see version distribution:
```javascript
// In your analytics
gtag('event', 'app_version', {
  version: localStorage.getItem('app_version')
});
```

---

## ✅ Quick Reference

**Every Deployment:**
```bash
# 1. Update version in 3 files (package.json, sw.js, versionChecker.ts)
# 2. Build
npm run build
# 3. Deploy
# 4. Monitor user updates
```

**Emergency Rollback:**
```bash
# 1. Revert to previous version numbers
# 2. Deploy again
# 3. Users will get update notification
```

---

## 💡 Pro Tips

1. **Use minor versions** for most updates (e.g., 3.1.0 → 3.2.0)
2. **Document changes** in git commit messages
3. **Test thoroughly** before deploying
4. **Have a rollback plan** ready
5. **Communicate with users** about major updates

---

## 🎉 Success!

Once set up, this system ensures:
- ✅ Users always get the latest version
- ✅ No more "hard refresh" instructions needed
- ✅ Smooth user experience
- ✅ Automatic cache management
- ✅ Version tracking

---

**Last Updated:** Version 3.0.0
**Author:** India Innovates Development Team
