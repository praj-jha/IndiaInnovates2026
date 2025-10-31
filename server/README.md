# India Innovates 2026 - Backend Server

## Overview
This is the backend server for India Innovates 2026 that handles volunteer and sponsor registrations with MongoDB storage and Google Sheets integration.

## Features
- ✅ RESTful API with Express.js
- ✅ MongoDB database with Mongoose ODM
- ✅ Automatic Google Sheets synchronization
- ✅ Input validation and sanitization
- ✅ Separate sheets for volunteers and sponsors
- ✅ Status tracking and analytics
- ✅ Secure with Helmet and CORS
- ✅ Compression for better performance

## Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (already configured)
- Google Service Account credentials (already in public folder)

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Environment variables are already configured in `.env` file:
```
MONGODB_URI=mongodb+srv://admin:QtYFywIIJuol0gFD@cluster0.6azwx.mongodb.net/indiainnovates
PORT=5000
FRONTEND_URL=http://localhost:5173
```

## Running the Server

### Development mode with auto-reload:
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on http://localhost:5000

## API Endpoints

### Volunteers
- `POST /api/volunteers` - Submit volunteer registration
- `GET /api/volunteers` - Get all volunteers (with pagination)
- `GET /api/volunteers/:id` - Get single volunteer
- `PATCH /api/volunteers/:id/status` - Update volunteer status
- `GET /api/volunteers/analytics/stats` - Get volunteer statistics

### Sponsors
- `POST /api/sponsors` - Submit sponsor registration
- `GET /api/sponsors` - Get all sponsors (with pagination)
- `GET /api/sponsors/:id` - Get single sponsor
- `PATCH /api/sponsors/:id/status` - Update sponsor status
- `GET /api/sponsors/analytics/stats` - Get sponsor statistics

### Health Check
- `GET /health` - Check server status

## Google Sheets Integration

### First Run
On the first registration, the system will:
1. Automatically create a new Google Spreadsheet
2. Create two sheets: "Volunteers" and "Sponsors"
3. Add formatted headers to both sheets
4. Log the spreadsheet ID to the console

**Important:** Copy the spreadsheet ID from the logs and add it to your `.env` file:
```
GOOGLE_SHEET_ID=your_spreadsheet_id_here
```

### Accessing the Spreadsheet
1. Copy the spreadsheet ID from the server logs
2. Open: `https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/edit`
3. Share the spreadsheet with: `indiainnovates@india-innovates-2026.iam.gserviceaccount.com`

### Manual Spreadsheet Creation (Optional)
If you prefer to use your own spreadsheet:
1. Create a new Google Sheet
2. Create two sheets named "Volunteers" and "Sponsors"
3. Share it with the service account email
4. Add the spreadsheet ID to `.env`

## Data Flow
1. User submits form on frontend
2. Request sent to backend API
3. Data validated using express-validator
4. Data saved to MongoDB
5. Simultaneously synced to Google Sheets
6. Response sent back to frontend

## Database Schema

### Volunteer Schema
- name, email, mobile (required)
- studentStatus, institution, course, yearOfStudy
- department, skillset, availability
- message (required)
- status: pending | reviewing | accepted | rejected

### Sponsor Schema
- name, email, mobile, companyName, designation (required)
- companyWebsite, sponsorshipType (required)
- budgetRange, marketingGoals (required)
- message
- status: pending | reviewing | negotiating | confirmed | rejected

## Error Handling
- Input validation errors return 400 status
- Duplicate email returns 400 status
- Server errors return 500 status
- Google Sheets errors are logged but don't fail the request

## Security Features
- Helmet.js for security headers
- CORS configured for frontend origin
- Input sanitization and validation
- Environment variables for sensitive data
- Request size limits (10MB)

## Monitoring
- All requests logged with timestamps
- MongoDB connection status logged
- Google Sheets sync status logged
- Error stack traces in development mode

## Troubleshooting

### MongoDB Connection Issues
- Check if the MongoDB URI is correct
- Verify network access in MongoDB Atlas
- Check if IP address is whitelisted

### Google Sheets Issues
- Verify service account credentials file exists
- Check if spreadsheet is shared with service account
- Ensure GOOGLE_SHEET_ID is set in .env

### CORS Issues
- Update FRONTEND_URL in .env to match your frontend URL
- Check if credentials are enabled

## Production Deployment

1. Set environment variables on your hosting platform
2. Update FRONTEND_URL to production URL
3. Set NODE_ENV=production
4. Use a process manager like PM2
5. Set up SSL/TLS certificates
6. Configure reverse proxy (nginx)

## Support
For issues or questions, contact the development team.
