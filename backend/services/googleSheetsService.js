const { google } = require('googleapis');

class GoogleSheetsService {
    constructor() {
        this.spreadsheetId = '1910n1dEO2gEY7oZpDYePw5sI2416ln4VpTeGgKOmKxE';
        this.range = 'Sheet1!A:H'; // Adjust sheet name if needed
        this.auth = null;
        this.sheets = null;
    }

    async authenticate() {
        try {
            // Create credentials from environment variables
            const credentials = {
                type: 'service_account',
                project_id: process.env.GOOGLE_PROJECT_ID,
                private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
                private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                client_id: process.env.GOOGLE_CLIENT_ID,
                auth_uri: 'https://accounts.google.com/o/oauth2/auth',
                token_uri: 'https://oauth2.googleapis.com/token',
                auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
                client_x509_cert_url: `https://www.googleapis.com/robot/v1/metadata/x509/${process.env.GOOGLE_CLIENT_EMAIL}`
            };

            this.auth = new google.auth.GoogleAuth({
                credentials,
                scopes: ['https://www.googleapis.com/auth/spreadsheets']
            });

            this.sheets = google.sheets({ version: 'v4', auth: this.auth });
        } catch (error) {
            throw error;
        }
    }

    async initializeSheet() {
        try {
            if (!this.sheets) {
                await this.authenticate();
            }

            // Check if headers exist, if not, add them
            const response = await this.sheets.spreadsheets.values.get({
                spreadsheetId: this.spreadsheetId,
                range: 'Sheet1!A1:H1'
            });

            const headers = response.data.values?.[0];

            if (!headers || headers.length === 0) {
                // Add headers if they don't exist
                await this.sheets.spreadsheets.values.update({
                    spreadsheetId: this.spreadsheetId,
                    range: 'Sheet1!A1:H1',
                    valueInputOption: 'RAW',
                    resource: {
                        values: [['Name', 'Email', 'Phone', 'Organization', 'Country', 'State', 'Registration Date', 'User ID']]
                    }
                });
            }
        } catch (error) {
            throw error;
        }
    }

    async addUserToSheet(userData) {
        try {
            if (!this.sheets) {
                await this.authenticate();
            }

            const row = [
                userData.name || '',
                userData.email || '',
                userData.phone || '',
                userData.organization || '',
                userData.country || '',
                userData.state || '',
                new Date().toISOString().split('T')[0], // Registration date (YYYY-MM-DD)
                userData._id?.toString() || ''
            ];

            await this.sheets.spreadsheets.values.append({
                spreadsheetId: this.spreadsheetId,
                range: this.range,
                valueInputOption: 'RAW',
                insertDataOption: 'INSERT_ROWS',
                resource: {
                    values: [row]
                }
            });

            return true;
        } catch (error) {
            // Don't throw the error to prevent registration failure due to sheets error
            return false;
        }
    }

    async updateUserInSheet(userId, updatedData) {
        try {
            if (!this.sheets) {
                await this.authenticate();
            }

            // Get all data to find the user's row
            const response = await this.sheets.spreadsheets.values.get({
                spreadsheetId: this.spreadsheetId,
                range: this.range
            });

            const rows = response.data.values || [];
            let targetRowIndex = -1;

            // Find the row with matching user ID (column H, index 7)
            for (let i = 1; i < rows.length; i++) {
                if (rows[i][7] === userId.toString()) {
                    targetRowIndex = i + 1; // Google Sheets is 1-indexed
                    break;
                }
            }

            if (targetRowIndex === -1) {
                return false;
            }

            // Update the row
            const updatedRow = [
                updatedData.name || rows[targetRowIndex - 1][0] || '',
                updatedData.email || rows[targetRowIndex - 1][1] || '',
                updatedData.phone || rows[targetRowIndex - 1][2] || '',
                updatedData.organization || rows[targetRowIndex - 1][3] || '',
                updatedData.country || rows[targetRowIndex - 1][4] || '',
                updatedData.state || rows[targetRowIndex - 1][5] || '',
                rows[targetRowIndex - 1][6] || '', // Keep original registration date
                userId.toString()
            ];

            await this.sheets.spreadsheets.values.update({
                spreadsheetId: this.spreadsheetId,
                range: `Sheet1!A${targetRowIndex}:H${targetRowIndex}`,
                valueInputOption: 'RAW',
                resource: {
                    values: [updatedRow]
                }
            });

            return true;
        } catch (error) {
            return false;
        }
    }
}

module.exports = new GoogleSheetsService();
