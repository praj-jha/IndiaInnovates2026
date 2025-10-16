# Google Sheets Integration for User Registration

This feature automatically adds new user registration data to a Google Sheet in real-time, allowing your team to monitor registrations live.

## Features

- ✅ Automatic user data sync to Google Sheets upon registration
- ✅ Non-blocking integration (registration won't fail if sheets are down)
- ✅ Comprehensive user data including: Name, Email, Phone, Organization, Country, State, Registration Date, User ID
- ✅ Automatic header initialization
- ✅ Update capability for existing users

## Google Sheet Structure

The integration will create/use the following columns:
- **Column A**: Name
- **Column B**: Email
- **Column C**: Phone
- **Column D**: Organization
- **Column E**: Country
- **Column F**: State
- **Column G**: Registration Date (YYYY-MM-DD)
- **Column H**: User ID (MongoDB ObjectId)

## Setup Instructions

### 1. Run the Setup Script
```bash
./setup-google-sheets.sh
```

### 2. Google Cloud Console Setup

1. **Create/Select Project**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select existing one

2. **Enable Google Sheets API**
   - Navigate to APIs & Services > Library
   - Search for "Google Sheets API"
   - Click and enable it

3. **Create Service Account**
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "Service Account"
   - Fill in service account details
   - Click "Create" and skip optional steps

4. **Generate JSON Key**
   - Click on your service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create new key"
   - Select "JSON" format
   - Download the JSON file

### 3. Environment Configuration

Update `backend/.env` with values from the downloaded JSON:

```env
# Google Sheets API Configuration
GOOGLE_PROJECT_ID=your-project-id-from-json
GOOGLE_PRIVATE_KEY_ID=your-private-key-id-from-json
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour-private-key-from-json\n-----END PRIVATE KEY-----\n"
GOOGLE_CLIENT_EMAIL=your-service-account-email@project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=your-client-id-from-json
```

### 4. Share Google Sheet

1. Open your Google Sheet: [Your Registration Sheet](https://docs.google.com/spreadsheets/d/1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE/edit)
2. Click the "Share" button
3. Add the service account email (from `GOOGLE_CLIENT_EMAIL`) as an "Editor"
4. Uncheck "Notify people"
5. Click "Share"

### 5. Restart Server

After configuration, restart your backend server:
```bash
cd backend
npm run dev
```

## How It Works

1. **User Registration**: When a user completes registration on your platform
2. **Data Processing**: The system extracts user information (name, email, phone, etc.)
3. **Sheet Update**: Data is automatically appended to the Google Sheet
4. **Real-time Monitoring**: Your team can see new registrations instantly

## Error Handling

- The integration is designed to be non-blocking
- If Google Sheets is unavailable, user registration will still succeed
- Errors are logged for debugging
- Failed sheet updates don't affect user experience

## Testing

To test the integration:

1. Ensure all environment variables are set
2. Register a new user through your application
3. Check the Google Sheet for the new entry
4. Verify all data fields are populated correctly

## Troubleshooting

### Common Issues

1. **"Authentication Error"**
   - Verify all environment variables are correctly set
   - Check that the private key includes proper line breaks (`\n`)
   - Ensure service account has access to the sheet

2. **"Permission Denied"**
   - Confirm the Google Sheet is shared with the service account email
   - Verify the service account has "Editor" permissions

3. **"Sheet Not Found"**
   - Check the spreadsheet ID in the service file
   - Ensure the sheet is accessible and not deleted

### Debug Mode

Enable detailed logging by setting:
```env
NODE_ENV=development
```

This will show detailed error messages and API responses.

## Security Notes

- Service account credentials should never be committed to version control
- The `.env` file is already in `.gitignore`
- Service account has minimal permissions (only Google Sheets access)
- Private keys should be stored securely in production

## Support

If you encounter issues:
1. Check the console logs for detailed error messages
2. Verify all setup steps were completed
3. Test with a simple registration to isolate the issue
4. Ensure Google Cloud quotas haven't been exceeded

## Sheet URL

Your live registration data: https://docs.google.com/spreadsheets/d/1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE/edit
