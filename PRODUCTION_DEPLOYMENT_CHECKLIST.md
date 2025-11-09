# 🚀 PRODUCTION DEPLOYMENT CHECKLIST
## India Innovates 2026 - Pre-Launch Verification

**Date:** November 9, 2025  
**Version:** 2.0.0  
**Status:** PRODUCTION-READY

---

## 📋 PRE-DEPLOYMENT CHECKLIST

### ✅ Backend (Server)

#### Environment Configuration
- [ ] `MONGODB_URI` configured with production MongoDB Atlas connection
- [ ] `PORT` set to production port (default: 5001)
- [ ] `FRONTEND_URL` set to production frontend URL
- [ ] `NODE_ENV` set to `production`
- [ ] `GOOGLE_SHEET_ID` configured with production Google Spreadsheet
- [ ] Google Sheets service account credentials file present
- [ ] All sensitive credentials stored securely (no `.env` in git)

#### Security & Performance
- [x] Rate limiting enabled (5 registrations/hour per IP)
- [x] Helmet security headers configured
- [x] CORS properly configured
- [x] Request compression enabled
- [x] Production logging configured (minimal logs)
- [ ] HTTPS/SSL certificate configured
- [ ] MongoDB connection pool configured
- [ ] Database indexes verified

#### Code Quality
- [x] All debug console.logs removed/controlled
- [x] Production logger implemented
- [x] Error handling comprehensive
- [x] Input validation complete
- [x] All tests passing
- [ ] Load testing completed
- [ ] Security audit completed

#### Dependencies
- [x] All npm packages installed
- [ ] No critical vulnerabilities (`npm audit`)
- [ ] express-rate-limit installed (v7.1.5)
- [ ] All dependencies up to date

---

### ✅ Frontend

#### Environment Configuration
- [ ] `VITE_API_URL` set to production API URL (e.g., `https://api.indiainnovates.com/api`)
- [ ] Build completed successfully (`npm run build`)
- [ ] Production build tested locally
- [ ] Static assets optimized

#### Performance
- [ ] Images optimized (using `/public/optimized/`)
- [ ] Bundle size optimized
- [ ] Lazy loading implemented where needed
- [ ] Service worker configured (if using PWA)
- [ ] CDN configured for static assets

#### User Experience
- [ ] All forms tested end-to-end
- [ ] Error messages user-friendly
- [ ] Loading states implemented
- [ ] Success messages clear
- [ ] Mobile responsive verified
- [ ] Cross-browser testing completed

---

### ✅ Database (MongoDB Atlas)

#### Configuration
- [ ] Production cluster created
- [ ] Appropriate tier selected (M10+ recommended)
- [ ] IP whitelist configured
- [ ] Database user created with minimal permissions
- [ ] Connection string encrypted
- [ ] Auto-scaling configured
- [ ] Backup enabled (automated)
- [ ] Monitoring enabled

#### Data
- [ ] Collections created properly
- [ ] Indexes verified
- [ ] Sample data tested
- [ ] Data retention policy set
- [ ] GDPR compliance verified (if applicable)

---

### ✅ Google Sheets Integration

#### Setup
- [ ] Production Google Spreadsheet created
- [ ] Service account has edit permissions
- [ ] Sheets auto-created on first use verified
- [ ] Headers configured correctly
- [ ] Data sync tested successfully

#### Monitoring
- [ ] Sheet sync errors logged
- [ ] Non-blocking sync verified
- [ ] Fallback behavior tested

---

### ✅ Infrastructure

#### Hosting (Backend)
- [ ] Server/VPS configured
- [ ] Node.js v18+ installed
- [ ] PM2 or similar process manager installed
- [ ] Nginx/Apache reverse proxy configured
- [ ] SSL certificate installed (Let's Encrypt)
- [ ] Auto-restart on failure configured
- [ ] Log rotation configured
- [ ] Firewall rules configured

#### Hosting (Frontend)
- [ ] Static hosting configured (Netlify/Vercel/etc.)
- [ ] Custom domain configured
- [ ] SSL certificate configured
- [ ] CDN configured
- [ ] Build deploy pipeline configured
- [ ] Redirects configured (if needed)

#### DNS
- [ ] Domain purchased
- [ ] A records configured
- [ ] CNAME records configured (if needed)
- [ ] SSL certificate verified
- [ ] DNS propagation completed

---

### ✅ Monitoring & Logging

#### Application Monitoring
- [ ] Error tracking configured (Sentry/similar)
- [ ] APM configured (New Relic/Datadog/similar)
- [ ] Log aggregation configured
- [ ] Uptime monitoring (UptimeRobot/Pingdom)
- [ ] Performance monitoring
- [ ] Alert thresholds configured

#### Metrics to Monitor
- [ ] API response times
- [ ] Error rates
- [ ] Database performance
- [ ] Registration success rates
- [ ] Google Sheets sync success
- [ ] Server CPU/Memory usage
- [ ] Database connections

---

### ✅ Testing

#### Functional Testing
- [x] School registration end-to-end
- [x] University registration end-to-end
- [x] Professional registration end-to-end
- [x] Volunteer registration
- [x] Sponsor registration
- [x] Validation working correctly
- [x] Duplicate prevention working
- [x] Error handling working

#### Load Testing
- [ ] Concurrent users tested (target: 100+)
- [ ] Peak load tested (registrations/minute)
- [ ] Database performance under load
- [ ] API response times acceptable (<200ms)
- [ ] Rate limiting working correctly

#### Security Testing
- [ ] SQL/NoSQL injection tested
- [ ] XSS prevention verified
- [ ] CSRF protection verified
- [ ] Rate limiting verified
- [ ] Input validation tested
- [ ] Authentication tested (admin routes)
- [ ] HTTPS enforcement verified

---

### ✅ Documentation

#### For Team
- [x] API documentation complete
- [x] Environment variables documented
- [x] Setup guide complete
- [x] Troubleshooting guide available
- [ ] Admin guide created
- [ ] Backup/restore procedure documented

#### For Users
- [ ] User registration guide
- [ ] FAQ updated
- [ ] Contact information available
- [ ] Terms of service available
- [ ] Privacy policy available

---

## 🚨 GO/NO-GO CRITERIA

### MUST HAVE (Blockers)
- [ ] ✅ All backend tests passing
- [ ] ✅ MongoDB connection working
- [ ] ✅ Google Sheets sync working
- [ ] ✅ All forms submitting successfully
- [ ] ✅ HTTPS configured
- [ ] ✅ Rate limiting enabled
- [ ] ✅ Error monitoring configured
- [ ] ✅ Backups configured

### SHOULD HAVE (Recommended)
- [ ] ✅ Load testing completed
- [ ] ✅ Security audit completed
- [ ] ✅ Documentation complete
- [ ] ✅ Admin dashboard working
- [ ] ✅ Email notifications configured

---

## 📝 DEPLOYMENT STEPS

### Step 1: Prepare Backend
```bash
# 1. Install dependencies
cd server
npm install --production

# 2. Set environment variables
nano .env # Add production values

# 3. Test connection
node -e "require('dotenv').config(); console.log(process.env.MONGODB_URI ? 'ENV loaded' : 'ERROR');"

# 4. Start with PM2
pm2 start index.js --name india-innovates-api
pm2 save
pm2 startup # Follow instructions
```

### Step 2: Configure Nginx
```nginx
server {
    listen 80;
    server_name api.indiainnovates.com;
    
    location / {
        return 301 https://$server_name$request_uri;
    }
}

server {
    listen 443 ssl;
    server_name api.indiainnovates.com;
    
    ssl_certificate /etc/letsencrypt/live/api.indiainnovates.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.indiainnovates.com/privkey.pem;
    
    location / {
        proxy_pass http://localhost:5001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Step 3: Deploy Frontend
```bash
# 1. Build frontend
npm run build

# 2. Deploy to hosting (example: Netlify)
netlify deploy --prod --dir=dist

# OR upload dist/ folder to your hosting provider
```

### Step 4: Verify Deployment
```bash
# Test health endpoint
curl https://api.indiainnovates.com/health

# Test registration
curl -X POST https://api.indiainnovates.com/api/schools \
  -H "Content-Type: application/json" \
  -d '{"test":"data"}'
  
# Should return validation error (expected)
```

### Step 5: Monitor
```bash
# Check PM2 status
pm2 status
pm2 logs india-innovates-api

# Check MongoDB
# Login to MongoDB Atlas Dashboard

# Check Google Sheets
# Verify data appearing in sheets
```

---

## 🔄 POST-DEPLOYMENT

### Immediate (Within 1 Hour)
- [ ] Verify all endpoints responding
- [ ] Submit test registration (each type)
- [ ] Verify data in MongoDB
- [ ] Verify data in Google Sheets
- [ ] Check error logs
- [ ] Verify HTTPS working
- [ ] Test from mobile device
- [ ] Send test email (if configured)

### Within 24 Hours
- [ ] Monitor error rates
- [ ] Monitor performance metrics
- [ ] Check uptime monitoring
- [ ] Review database performance
- [ ] Check disk space usage
- [ ] Verify backups running
- [ ] Monitor user feedback

### Within 1 Week
- [ ] Review all logs
- [ ] Analyze performance data
- [ ] Check for errors/issues
- [ ] Optimize based on metrics
- [ ] Update documentation (if needed)
- [ ] Plan scaling (if needed)

---

## 🚨 ROLLBACK PROCEDURE

### If Critical Issues Found:

1. **Stop accepting traffic:**
   ```bash
   pm2 stop india-innovates-api
   ```

2. **Redirect to maintenance page:**
   - Update Nginx to show maintenance page
   
3. **Investigate issue:**
   - Check logs: `pm2 logs`
   - Check database connectivity
   - Check Google Sheets access
   
4. **Fix and redeploy:**
   - Apply fix
   - Test thoroughly
   - Restart: `pm2 restart india-innovates-api`

---

## 📊 SUCCESS METRICS

### Technical KPIs
- API response time: <200ms average
- Error rate: <1%
- Uptime: >99.5%
- Database query time: <50ms
- Registration success rate: >99%

### Business KPIs
- Total registrations
- Registration types breakdown
- Registration completion rate
- User geography
- Peak traffic times

---

## 🎯 FINAL SIGN-OFF

### Backend Team
- [ ] Code reviewed and approved
- [ ] Tests passing
- [ ] Security verified
- [ ] Performance verified

**Signed:** _________________ Date: _________________

### Frontend Team
- [ ] Build tested
- [ ] User experience verified
- [ ] Mobile responsive
- [ ] Cross-browser tested

**Signed:** _________________ Date: _________________

### DevOps Team
- [ ] Infrastructure configured
- [ ] Monitoring configured
- [ ] Backups configured
- [ ] SSL configured

**Signed:** _________________ Date: _________________

### CTO/Technical Lead
- [ ] All checklist items completed
- [ ] Team sign-offs received
- [ ] Risk assessment complete
- [ ] APPROVE FOR PRODUCTION

**Signed:** _________________ Date: _________________

---

## 📞 EMERGENCY CONTACTS

**Technical Lead:**  
Name: ___________________  
Phone: ___________________  
Email: ___________________  

**DevOps Engineer:**  
Name: ___________________  
Phone: ___________________  
Email: ___________________  

**Database Administrator:**  
Name: ___________________  
Phone: ___________________  
Email: ___________________  

**24/7 On-Call:**  
Phone: ___________________  

---

**Last Updated:** November 9, 2025  
**Version:** 2.0.0  
**Status:** READY FOR PRODUCTION DEPLOYMENT

---

## ✅ AUTOMATED CHECKS

Run these commands before deployment:

```bash
# Backend checks
cd server
npm audit                          # Check for vulnerabilities
npm test                           # Run all tests
node -c index.js                   # Check syntax

# Frontend checks
cd ..
npm run build                      # Build must succeed
npm run preview                    # Test build locally

# Environment check
./scripts/check-env.sh             # Verify all env vars (create this script)
```

---

**GO/NO-GO DECISION:** ⬜ GO / ⬜ NO-GO

**Decision Date:** _________________  
**Deployment Date:** _________________  
**Deployed By:** _________________

---

*This checklist must be completed and approved before production deployment.*


