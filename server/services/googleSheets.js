import { google } from 'googleapis';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize Google Sheets API
const initializeSheets = async () => {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: path.join(__dirname, '../india-innovates-2026-1bcaebd64349.json'),
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
        });

        const authClient = await auth.getClient();
        const sheets = google.sheets({ version: 'v4', auth: authClient });

        return sheets;
    } catch (error) {
        console.error('❌ Error initializing Google Sheets:', error);
        throw error;
    }
};

// Create or get spreadsheet
const getOrCreateSpreadsheet = async (sheets) => {
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    if (spreadsheetId) {
        return spreadsheetId;
    }

    // If no spreadsheet ID, create a new one
    const response = await sheets.spreadsheets.create({
        requestBody: {
            properties: {
                title: 'India Innovates 2026 - Registrations',
            },
            sheets: [
                {
                    properties: {
                        title: 'Volunteers',
                    },
                },
                {
                    properties: {
                        title: 'Sponsors',
                    },
                },
            ],
        },
    });

    console.log('📊 Created new spreadsheet:', response.data.spreadsheetId);
    console.log('⚠️ Add this to your .env file: GOOGLE_SHEET_ID=' + response.data.spreadsheetId);

    return response.data.spreadsheetId;
};

// Initialize volunteer sheet with headers
const initializeVolunteerSheet = async (sheets, spreadsheetId) => {
    try {
        const headers = [
            'Timestamp',
            'Name',
            'Email',
            'Mobile',
            'Student Status',
            'Institution',
            'Course',
            'Year of Study',
            'Department',
            'Skills',
            'Availability',
            'Message',
            'Status',
        ];

        // Try to get existing sheet info to find the right sheet name
        let sheetName = 'Volunteers';
        try {
            const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
            const volunteerSheet = spreadsheet.data.sheets.find(s =>
                s.properties.title.toLowerCase().includes('volunteer') ||
                s.properties.title === 'Sheet1'
            );
            if (volunteerSheet) {
                sheetName = volunteerSheet.properties.title;
            }
        } catch (e) {
            console.log('Using default sheet name: Volunteers');
        }

        // Check if headers already exist
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheetName}!A1:M1`,
        });

        if (!response.data.values || response.data.values.length === 0) {
            // Add headers
            await sheets.spreadsheets.values.update({
                spreadsheetId,
                range: `${sheetName}!A1:M1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [headers],
                },
            });

            // Get sheet ID for formatting
            const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
            const sheet = spreadsheet.data.sheets.find(s => s.properties.title === sheetName);
            const sheetId = sheet ? sheet.properties.sheetId : 0;

            // Format headers
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId,
                requestBody: {
                    requests: [
                        {
                            repeatCell: {
                                range: {
                                    sheetId: sheetId,
                                    startRowIndex: 0,
                                    endRowIndex: 1,
                                },
                                cell: {
                                    userEnteredFormat: {
                                        backgroundColor: {
                                            red: 1.0,
                                            green: 1.0,
                                            blue: 1.0,
                                        },
                                        textFormat: {
                                            foregroundColor: {
                                                red: 0.0,
                                                green: 0.0,
                                                blue: 0.0,
                                            },
                                            fontSize: 11,
                                            bold: true,
                                        },
                                    },
                                },
                                fields: 'userEnteredFormat(backgroundColor,textFormat)',
                            },
                        },
                    ],
                },
            });
        }

        return sheetName;
    } catch (error) {
        console.error('❌ Error initializing volunteer sheet:', error);
    }
};

// Initialize sponsor sheet with headers
const initializeSponsorSheet = async (sheets, spreadsheetId) => {
    try {
        const headers = [
            'Timestamp',
            'Name',
            'Email',
            'Mobile',
            'Company Name',
            'Designation',
            'Company Website',
            'Sponsorship Type',
            'Budget Range',
            'Marketing Goals',
            'Message',
            'Status',
        ];

        // Try to get existing sheet info to find the right sheet name
        let sheetName = 'Sponsors';
        try {
            const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
            const sponsorSheet = spreadsheet.data.sheets.find(s =>
                s.properties.title.toLowerCase().includes('sponsor') ||
                s.properties.title === 'Sheet2'
            );
            if (sponsorSheet) {
                sheetName = sponsorSheet.properties.title;
            }
        } catch (e) {
            console.log('Using default sheet name: Sponsors');
        }

        // Check if headers already exist
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheetName}!A1:L1`,
        });

        if (!response.data.values || response.data.values.length === 0) {
            // Add headers
            await sheets.spreadsheets.values.update({
                spreadsheetId,
                range: `${sheetName}!A1:L1`,
                valueInputOption: 'RAW',
                requestBody: {
                    values: [headers],
                },
            });

            // Get sheet ID for formatting
            const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
            const sheet = spreadsheet.data.sheets.find(s => s.properties.title === sheetName);
            const sheetId = sheet ? sheet.properties.sheetId : 0;

            // Format headers
            await sheets.spreadsheets.batchUpdate({
                spreadsheetId,
                requestBody: {
                    requests: [
                        {
                            repeatCell: {
                                range: {
                                    sheetId: sheetId,
                                    startRowIndex: 0,
                                    endRowIndex: 1,
                                },
                                cell: {
                                    userEnteredFormat: {
                                        backgroundColor: {
                                            red: 1.0,
                                            green: 1.0,
                                            blue: 1.0,
                                        },
                                        textFormat: {
                                            foregroundColor: {
                                                red: 0.0,
                                                green: 0.0,
                                                blue: 0.0,
                                            },
                                            fontSize: 11,
                                            bold: true,
                                        },
                                    },
                                },
                                fields: 'userEnteredFormat(backgroundColor,textFormat)',
                            },
                        },
                    ],
                },
            });
        }

        return sheetName;
    } catch (error) {
        console.error('❌ Error initializing sponsor sheet:', error);
        throw error;
    }
};

// Add volunteer data to sheet
export const addVolunteerToSheet = async (volunteerData) => {
    try {
        const sheets = await initializeSheets();
        const spreadsheetId = await getOrCreateSpreadsheet(sheets);

        // Initialize sheet if needed and get the actual sheet name
        const sheetName = await initializeVolunteerSheet(sheets, spreadsheetId);

        const row = [
            new Date().toISOString(),
            volunteerData.name,
            volunteerData.email,
            volunteerData.mobile,
            volunteerData.studentStatus || 'N/A',
            volunteerData.institution || 'N/A',
            volunteerData.course || 'N/A',
            volunteerData.yearOfStudy || 'N/A',
            volunteerData.department || 'N/A',
            volunteerData.skillset || 'N/A',
            volunteerData.availability || 'N/A',
            volunteerData.message || 'N/A',
            volunteerData.status || 'pending',
        ];

        // Get the current row count to determine where the new row will be added
        const currentData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheetName}!A:A`,
        });
        const nextRow = (currentData.data.values?.length || 0) + 1;

        // Append the data
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: `${sheetName}!A:M`,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [row],
            },
        });

        // Get sheet ID for formatting
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
        const sheet = spreadsheet.data.sheets.find(s => s.properties.title === sheetName);
        const sheetId = sheet ? sheet.properties.sheetId : 0;

        // Clear any formatting from the new row (make it plain white background with normal text)
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        updateCells: {
                            range: {
                                sheetId: sheetId,
                                startRowIndex: nextRow - 1,
                                endRowIndex: nextRow,
                                startColumnIndex: 0,
                                endColumnIndex: 13,
                            },
                            rows: [
                                {
                                    values: row.map(value => ({
                                        userEnteredValue: { stringValue: String(value) },
                                        userEnteredFormat: {
                                            backgroundColor: { red: 1.0, green: 1.0, blue: 1.0 },
                                            textFormat: {
                                                foregroundColor: { red: 0.0, green: 0.0, blue: 0.0 },
                                                fontSize: 10,
                                                bold: false,
                                            },
                                        },
                                    })),
                                },
                            ],
                            fields: 'userEnteredValue,userEnteredFormat',
                        },
                    },
                ],
            },
        });

        console.log(`✅ Volunteer added to Google Sheets (${sheetName}) at row ${nextRow}`);
        return true;
    } catch (error) {
        console.error('❌ Error adding volunteer to sheet:', error);
        console.error('Error details:', error.message);
        throw error;
    }
};

// Add sponsor data to sheet
export const addSponsorToSheet = async (sponsorData) => {
    try {
        const sheets = await initializeSheets();
        const spreadsheetId = await getOrCreateSpreadsheet(sheets);

        // Initialize sheet if needed and get the actual sheet name
        const sheetName = await initializeSponsorSheet(sheets, spreadsheetId);

        const row = [
            new Date().toISOString(),
            sponsorData.name,
            sponsorData.email,
            sponsorData.mobile,
            sponsorData.companyName,
            sponsorData.designation,
            sponsorData.companyWebsite || 'N/A',
            sponsorData.sponsorshipType,
            sponsorData.budgetRange || 'N/A',
            sponsorData.marketingGoals,
            sponsorData.message || 'N/A',
            sponsorData.status || 'pending',
        ];

        // Get the current row count to determine where the new row will be added
        const currentData = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range: `${sheetName}!A:A`,
        });
        const nextRow = (currentData.data.values?.length || 0) + 1;

        // Append the data
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: `${sheetName}!A:L`,
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
                values: [row],
            },
        });

        // Get sheet ID for formatting
        const spreadsheet = await sheets.spreadsheets.get({ spreadsheetId });
        const sheet = spreadsheet.data.sheets.find(s => s.properties.title === sheetName);
        const sheetId = sheet ? sheet.properties.sheetId : 0;

        // Clear any formatting from the new row (make it plain white background with normal text)
        await sheets.spreadsheets.batchUpdate({
            spreadsheetId,
            requestBody: {
                requests: [
                    {
                        updateCells: {
                            range: {
                                sheetId: sheetId,
                                startRowIndex: nextRow - 1,
                                endRowIndex: nextRow,
                                startColumnIndex: 0,
                                endColumnIndex: 12,
                            },
                            rows: [
                                {
                                    values: row.map(value => ({
                                        userEnteredValue: { stringValue: String(value) },
                                        userEnteredFormat: {
                                            backgroundColor: { red: 1.0, green: 1.0, blue: 1.0 },
                                            textFormat: {
                                                foregroundColor: { red: 0.0, green: 0.0, blue: 0.0 },
                                                fontSize: 10,
                                                bold: false,
                                            },
                                        },
                                    })),
                                },
                            ],
                            fields: 'userEnteredValue,userEnteredFormat',
                        },
                    },
                ],
            },
        });

        console.log(`✅ Sponsor added to Google Sheets (${sheetName}) at row ${nextRow}`);
        return true;
    } catch (error) {
        console.error('❌ Error adding sponsor to sheet:', error);
        console.error('Error details:', error.message);
        throw error;
    }
};

export default {
    addVolunteerToSheet,
    addSponsorToSheet,
};
