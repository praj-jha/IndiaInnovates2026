# 🚀 QUICK START GUIDE - India Innovates 2026

## ✅ All Integration Issues Fixed!

This guide will help you verify that all registration systems are working correctly.

---

## 📋 Prerequisites

Before starting, ensure you have:
- ✅ Node.js installed (v18 or higher)
- ✅ MongoDB connection string in `.env` file
- ✅ Google Sheets API credentials configured
- ✅ Both backend and frontend dependencies installed

---

## 🔧 Setup (First Time Only)

### 1. Install Backend Dependencies
```bash
cd server
npm install
```

### 2. Install Frontend Dependencies
```bash
cd ..  # Back to root
npm install
```

### 3. Verify Environment Variables

Create/check `server/.env`:
```bash
MONGODB_URI=your_mongodb_connection_string
PORT=5001
FRONTEND_URL=http://localhost:5173
NODE_ENV=development
GOOGLE_SHEET_ID=your_google_sheet_id
```

---

## 🚀 Running the Application

### Start Backend Server (Terminal 1)
```bash
cd server
npm start
```

**Expected Output:**
```
🚀 Server running on port 5001
📝 Environment: development
🌐 CORS enabled for: http://localhost:5173, ...
✅ MongoDB Connected: cluster0-shard-00-00.6azwx.mongodb.net
💾 Database: indiainnovates
```

### Start Frontend Dev Server (Terminal 2)
```bash
# From project root
npm run dev
```

**Expected Output:**
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

## 🧪 Testing the Integration

### Option 1: Automated Tests (Recommended)

**Run Integration Tests (Terminal 3):**
```bash
cd server
npm run test
```

**Expected Output:**
```
🧪 INDIA INNOVATES - BACKEND INTEGRATION TEST SUITE

❤️  Testing Health Check...
✅ Server is healthy
   Uptime: 21.34s
   Database: connected

🏫 Testing School Competition Registration...
✅ School registration successful!
   ID: 673e5f1a2b4c8d9e1f2a3b4c
   Team: Tech Wizards
   Email: test-school-1234567890@example.com

🎓 Testing University Competition Registration...
✅ University registration successful!
   ID: 673e5f2a3c5d9e0f3g4h5i6j
   Email: test-university-1234567890@example.com

💼 Testing Professional Competition Registration...
✅ Professional registration successful!
   ID: 673e5f3a4d6e0g1h5i6j7k8l
   Email: test-professional-1234567890@example.com

🔍 Testing Validation Errors...
✅ Validation errors correctly detected:
   - teamName: Team name is too short
   - teamLeadEmail: Valid email is required
   - teamLeadAge: Maximum age is 20

📊 TEST SUMMARY
============================================================
✅ PASSED - health Check
✅ PASSED - school Registration
✅ PASSED - university Registration
✅ PASSED - professional Registration
✅ PASSED - validation Errors

Total: 5/5 tests passed
============================================================

🎉 ALL TESTS PASSED! Backend integration is working correctly.
```

### Option 2: Manual Testing via Frontend

#### Test School Registration
1. Navigate to: http://localhost:5173/school-competition-registration
2. Fill in the form with test data:
   - **School Name:** "Test High School"
   - **Team Name:** "Tech Innovators"
   - **Team Lead:** Your test details
   - **Age:** 16 (must be 5-20)
   - **Parent Contact:** Required
   - **Select at least 1 competition**
3. Click "Complete Registration"
4. Should see: ✅ "Registration Successful! 🎉"

#### Test University/Professional Registration
1. Navigate to: http://localhost:5173/university-competition-registration
2. Select participant type: **University** or **Professional**
3. Fill in the form:
   - **Organization Name:** "IIT Delhi" or "Tech Corp"
   - **Your Details:** Name, email, phone
   - **Address:** Full address with 6-digit pincode
   - **Project Title:** Your innovation title
   - **Description:** At least 50 characters
   - **Team Size:** 1-10 members
   - **Select a theme**
4. Click "Complete Registration"
5. Should see: ✅ "Registration Successful! 🎉"

---

## 🔍 Verification Steps

### 1. Check MongoDB
```bash
# Connect to MongoDB and verify data
# You should see new entries in:
# - schoolregistrations collection
# - themeregistrations collection
```

### 2. Check Google Sheets
1. Open your Google Sheet (using GOOGLE_SHEET_ID from .env)
2. Check these sheets:
   - **School Competitions** - Should have new rows
   - **Theme Registrations** - Should have new rows

### 3. Check Backend Logs
```bash
# In server terminal, you should see:
✅ School registration added to Google Sheets (School Competitions)
✅ Theme registration added to Google Sheets (Theme Registrations)
```

---

## 🐛 Troubleshooting

### Issue: Backend won't start
**Error:** `MongoDB connection failed`
**Solution:**
1. Check your `MONGODB_URI` in `.env`
2. Verify MongoDB Atlas IP whitelist
3. Check network connection

---

### Issue: Frontend can't connect to backend
**Error:** `Failed to fetch` or `Network Error`
**Solution:**
1. Verify backend is running: `curl http://localhost:5001/health`
2. Check backend terminal for errors
3. Verify API_BASE_URL in `src/services/api.ts` is `http://localhost:5001/api`

---

### Issue: Validation errors
**Common Errors:**
1. **"Team lead age is too short"**
   - Age must be between 5-20 for school registrations

2. **"Pincode must be exactly 6 digits"**
   - Indian pincodes are 6 digits (e.g., 110001)

3. **"Project description is too short"**
   - Theme registrations require at least 50 characters

4. **"Select at least one competition"**
   - School registrations must select at least 1 competition

---

### Issue: Google Sheets sync failing
**Note:** Registration will still succeed even if Sheets sync fails!

**To Debug:**
1. Check `GOOGLE_SHEET_ID` in `.env`
2. Verify Google Sheets API credentials file exists
3. Check backend logs for specific Google API errors
4. Ensure service account has edit permissions on the sheet

---

## 📊 What Was Fixed?

### Critical Fixes Applied:
1. ✅ **Port Mismatch** - Frontend now uses correct port (5001)
2. ✅ **Google Sheets Integration** - Sheet names with spaces now work
3. ✅ **Status Enums** - Consistent across models and routes
4. ✅ **Validation** - Pincode now requires exactly 6 digits

### Files Modified:
- `server/index.js` - Port updated to 5001
- `src/services/api.ts` - API URL updated to port 5001
- `server/models/SchoolRegistration.js` - Status enum fixed
- `server/models/ThemeRegistration.js` - Status enum and pincode fixed
- `server/services/googleSheets.js` - Sheet name escaping added

---

## 📈 Success Indicators

### ✅ Everything is Working When You See:

**Backend Terminal:**
```
✅ MongoDB Connected
✅ Server running on port 5001
✅ School registration added to Google Sheets
✅ Theme registration added to Google Sheets
```

**Frontend:**
```
✅ Registration Successful! 🎉
✅ You will receive a confirmation email shortly
```

**Test Script:**
```
🎉 ALL TESTS PASSED! Backend integration is working correctly.
Total: 5/5 tests passed
```

---

## 🎯 Next Steps

### For Development:
1. Continue building features
2. Run `npm run test` regularly to verify integration
3. Check both MongoDB and Google Sheets for data

### For Production:
1. Update environment variables for production URLs
2. Enable HTTPS
3. Add rate limiting (see INTEGRATION_FIX_REPORT.md)
4. Configure production MongoDB cluster
5. Set up monitoring and alerting

---

## 📚 Additional Resources

- **Detailed Fix Report:** `INTEGRATION_FIX_REPORT.md`
- **Backend Audit:** `server/BACKEND_AUDIT_REPORT.md`
- **Test Results:** `server/TEST_RESULTS_SUMMARY.md`

---

## ✅ Quick Verification Checklist

Run through this checklist to ensure everything is working:

- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Health check returns 200: `curl http://localhost:5001/health`
- [ ] Automated tests pass: `npm run test`
- [ ] Can submit school registration via frontend
- [ ] Can submit university registration via frontend
- [ ] Can submit professional registration via frontend
- [ ] Data appears in MongoDB
- [ ] Data appears in Google Sheets
- [ ] Validation catches invalid inputs
- [ ] Success messages display correctly

---

## 🎉 You're All Set!

If all the above checks pass, your India Innovates 2026 registration system is fully operational!

**Questions?** Check the detailed documentation in `INTEGRATION_FIX_REPORT.md`

**Issues?** Run the automated tests: `cd server && npm run test`

---

**Last Updated:** November 9, 2025  
**Status:** ✅ All Systems Operational

