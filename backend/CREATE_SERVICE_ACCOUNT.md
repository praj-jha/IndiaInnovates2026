# Create Google Service Account for Sheets Integration

You have a **Web Client** credentials file, but we need a **Service Account** for server-to-server authentication.

## Step-by-Step Guide

### 1. Go to Google Cloud Console
- Open: https://console.cloud.google.com/
- Select your project: **crackthru** (project ID from your file)

### 2. Enable Google Sheets API
- Go to **APIs & Services > Library**
- Search for "Google Sheets API"
- Click on it and press **Enable** (if not already enabled)

### 3. Create Service Account
- Go to **APIs & Services > Credentials**
- Click **"+ CREATE CREDENTIALS"**
- Select **"Service Account"**

### 4. Fill Service Account Details
- **Service account name**: `crackthru-sheets-service`
- **Service account ID**: `crackthru-sheets-service` (auto-filled)
- **Description**: `Service account for Google Sheets integration`
- Click **CREATE AND CONTINUE**

### 5. Grant Permissions (Optional - Skip)
- You can skip the role assignment for now
- Click **CONTINUE**
- Click **DONE**

### 6. Create and Download Key
- Find your new service account in the list
- Click on the service account email
- Go to the **"Keys"** tab
- Click **"ADD KEY" > "Create new key"**
- Select **JSON** format
- Click **CREATE**
- The JSON file will download automatically

### 7. What the Service Account JSON Should Look Like
```json
{
  "type": "service_account",
  "project_id": "crackthru",
  "private_key_id": "abc123...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "crackthru-sheets-service@crackthru.iam.gserviceaccount.com",
  "client_id": "123456789...",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/..."
}
```

### 8. Share Google Sheet with Service Account
- Open your Google Sheet: https://docs.google.com/spreadsheets/d/1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE/edit
- Click **"Share"** button (top right)
- In the email field, paste the `client_email` from your service account JSON
- Set permission to **"Editor"**
- **Uncheck** "Notify people"
- Click **"Share"**

### 9. Quick Test
Once you have the service account JSON file, run:
```bash
cd backend
npm run test-sheets
```

## Need Help?
If you get stuck at any step, let me know and I can help troubleshoot!
