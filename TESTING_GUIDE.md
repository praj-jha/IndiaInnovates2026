# Testing Guide - University Competition Registration Redesign

## Quick Start

### 1. Start the Servers

**Terminal 1 - Frontend:**
```bash
cd "/Users/prajwaljha/Desktop/India Innovates"
npm run dev
```

**Terminal 2 - Backend:**
```bash
cd "/Users/prajwaljha/Desktop/India Innovates/server"
npm start
```

### 2. Access the Registration Page

Open your browser and navigate to:
```
http://localhost:5173/university-competitions-register
```

## Testing Scenarios

### Scenario 1: Standard Theme Registration
1. **Visit the page** - You should see Step 1 with all themes displayed
2. **Select a theme** - Click on any theme (e.g., "Healthcare & MedTech")
3. **Observe** - Form should auto-advance to Step 2
4. **Check** - Selected theme should be displayed at the top with "Change Theme" button
5. **Select participant type** - Choose "University/College" or "Professional"
6. **Fill in details**:
   - Organization: "Delhi University"
   - Name: "Test User"
   - Course/Year: "B.Tech 3rd Year"
   - Team Size: "4"
   - Email: "test@example.com"
   - Phone: "+91 9876543210"
   - Address: "123 Test Street"
   - City: "Delhi"
   - State: "Delhi"
   - Pincode: "110001"
7. **Project Information**:
   - Title: "AI Healthcare Diagnostics"
   - Description: Write at least 100 words describing the project
8. **Watch word count** - Should show real-time count, turn green at 100+ words
9. **Submit** - Click "Complete Registration"
10. **Verify** - Should see success toast and redirect to home page

### Scenario 2: Custom Category Registration
1. **Visit the page**
2. **Scroll down** - Find "Other - Custom Category" (green card at the bottom)
3. **Select it** - Should highlight in green
4. **Advance to Step 2**
5. **Fill all details** (same as Scenario 1)
6. **Project Description** - Include your custom category name in the description
7. **Check guidelines** - Green info box should appear with custom category instructions
8. **Submit and verify**

### Scenario 3: Change Theme
1. **Select a theme** (e.g., "Biotechnology")
2. **Advance to Step 2**
3. **Start filling form**
4. **Click "Change Theme"** button
5. **Verify** - Should return to Step 1 with themes displayed
6. **Select different theme** - Choose another theme
7. **Continue** - Form data should be preserved

### Scenario 4: Validation Testing
1. **Select a theme**
2. **Advance to Step 2**
3. **Try to submit** without selecting participant type
   - Should show error toast: "Participant Type Required"
4. **Select participant type**
5. **Leave required fields empty** and submit
   - Browser validation should prevent submission
6. **Fill all fields** but write only 50 words in description
   - Should show error: "Description Too Short" with word count
7. **Complete description** to 100+ words
   - Word counter should turn green with checkmark
8. **Submit** - Should succeed

### Scenario 5: Responsive Design Testing
1. **Desktop View** (1920px+)
   - Themes should display in 3 columns
   - Form fields should be in 2 columns
2. **Tablet View** (768px - 1024px)
   - Themes should display in 2 columns
   - Form fields should be in 2 columns
3. **Mobile View** (< 768px)
   - Themes should display in 1 column
   - Form fields should be in 1 column
   - Progress indicator text may be hidden

### Scenario 6: Dark Mode Testing
1. **Toggle dark mode** (if available in your app)
2. **Verify** - All colors should adjust appropriately
3. **Check readability** - Text should be clearly visible
4. **Test interactions** - Hover states should work

## What to Look For

### ✅ Good Signs
- Smooth transitions between steps
- Clear visual feedback on selections
- Real-time word count updates
- Success toast after submission
- Form is easy to understand
- No console errors
- All themes are visible
- Custom category option is clear
- Mobile view is usable

### ⚠️ Issues to Watch For
- Console errors (open DevTools)
- Form not advancing after theme selection
- Word count not updating
- Submit button not working
- Backend connection errors (check if server is running)
- Validation errors not showing
- Dark mode color issues
- Mobile layout breaking

## Backend Verification

### Check Registration in Database
```bash
# Connect to MongoDB
mongosh

# Switch to database
use india-innovates

# Check registrations
db.themeregistrations.find().sort({submittedAt: -1}).limit(5).pretty()
```

### Check Google Sheets (if configured)
1. Open your Google Sheets
2. Navigate to "Theme Registrations" tab
3. Verify latest entry appears

### Check Server Logs
```bash
cd "/Users/prajwaljha/Desktop/India Innovates/server"
tail -f server.log
```

## Common Issues & Solutions

### Issue: "Failed to submit registration"
**Solution**: 
- Check if backend server is running on port 5001
- Verify MongoDB connection
- Check CORS settings

### Issue: "Network Error"
**Solution**:
- Check `VITE_API_URL` in environment variables
- Ensure backend is accessible
- Check browser console for details

### Issue: Form not advancing to Step 2
**Solution**:
- Check browser console for React errors
- Verify state management is working
- Try refreshing the page

### Issue: Word count stuck at 0
**Solution**:
- Type or paste text
- Check if JavaScript is enabled
- Verify no console errors

### Issue: Themes not displaying
**Solution**:
- Check if theme array is properly defined
- Verify no JavaScript errors
- Check CSS is loading

## Performance Testing

1. **Load Time**: Page should load in < 2 seconds
2. **Interaction**: Theme selection should respond instantly
3. **Typing**: No lag when typing in text areas
4. **Submit**: Should complete in < 5 seconds

## Browser Compatibility

Test in:
- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ⚠️ Mobile Safari
- ⚠️ Mobile Chrome

## Accessibility Testing

1. **Keyboard Navigation**:
   - Tab through all form fields
   - Press Enter to select themes
   - Submit with keyboard

2. **Screen Reader**:
   - All labels should be read correctly
   - Error messages should be announced
   - Progress should be clear

3. **Color Contrast**:
   - Use browser DevTools to check contrast ratios
   - All text should meet WCAG AA standards

## Final Checklist

Before marking as complete:

- [ ] All themes display correctly
- [ ] Theme selection works
- [ ] Step progression is smooth
- [ ] Form validation works properly
- [ ] Word count displays correctly
- [ ] Submit button works
- [ ] Success toast appears
- [ ] Redirect happens after success
- [ ] Backend receives data correctly
- [ ] Data appears in database
- [ ] Mobile view works
- [ ] Dark mode works (if applicable)
- [ ] No console errors
- [ ] Custom category flow works

## Support

If you encounter issues:
1. Check browser console
2. Check server logs
3. Verify database connection
4. Check network tab in DevTools
5. Review UNIVERSITY_REGISTRATION_REDESIGN.md

---

**Happy Testing! 🚀**

The redesigned form should provide a much better user experience while maintaining all functionality.

