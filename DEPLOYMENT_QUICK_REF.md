# 🚀 Quick Deployment Reference Card

## Before Every Deployment

### 1. Update Version (3 files)

```json
// package.json (line 4)
"version": "X.Y.Z"
```

```javascript
// public/sw.js (line 2)
const CACHE_VERSION = 'india-innovates-vX.Y.Z';
```

```typescript
// src/utils/versionChecker.ts (line 7)
const APP_VERSION = 'X.Y.Z';
```

### 2. Version Number Rules

- **Major (X.0.0)** - Breaking changes, redesigns
- **Minor (3.X.0)** - New features, new sections  ← Most common
- **Patch (3.1.X)** - Bug fixes, small tweaks

### 3. Build & Deploy

```bash
npm run build
# Deploy to hosting
```

---

## What Happens to Users

1. User visits site
2. Sees purple notification: "🎉 New Version Available!"
3. Clicks "Update Now"
4. Page refreshes with latest version
5. ✅ Done!

---

## Emergency: Force All Users to Update

```javascript
// In browser console (on live site)
localStorage.clear();
caches.keys().then(keys => keys.forEach(k => caches.delete(k)));
```

Then increment version and deploy.

---

## Test Update Notification Locally

```javascript
// In browser console
localStorage.setItem('app_version', '2.9.0');
location.reload();
// Should see notification
```

---

## Current Version

**v3.0.0** (October 22, 2025)

---

## 📚 Full Documentation

See: `VERSION_UPDATE_GUIDE.md`

---

**Last Updated:** v3.0.0
