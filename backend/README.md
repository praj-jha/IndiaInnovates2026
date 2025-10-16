
# CRACKTHRU Backend

A robust authentication system for the CRACKTHRU EdTech platform built with Node.js, Express, MongoDB, and JWT.

## Features

- 🔐 JWT-based authentication (access & refresh tokens)
- 🍪 HTTP-only secure cookies
- 🔒 bcrypt password hashing
- 🛡️ Rate limiting and security middleware
- 📱 RESTful API design
- 🗄️ MongoDB with Mongoose ODM
- ⚡ Environment-based configuration

## Quick Start

1. **Install dependencies:**
   ```bash
   cd backend
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **Start the server:**
   ```bash
   # Development mode
   npm run dev

   # Production mode
   npm start
   ```

## API Endpoints

### Authentication Routes

- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout (protected)
- `POST /api/auth/refresh-token` - Refresh access token
- `GET /api/auth/profile` - Get user profile (protected)

### Health Check

- `GET /api/health` - Server health status

## Environment Variables

Required environment variables (see `.env.example`):

- `MONGODB_URI` - MongoDB connection string
- `JWT_ACCESS_SECRET` - JWT access token secret
- `JWT_REFRESH_SECRET` - JWT refresh token secret
- `CLIENT_URL` - Frontend application URL
- `PORT` - Server port (default: 5000)

## Security Features

- Password hashing with bcrypt (salt rounds: 12)
- JWT tokens with secure HTTP-only cookies
- Rate limiting (5 auth attempts per 15 minutes)
- CORS configuration
- Helmet security headers
- Input validation and sanitization

## Database Schema

### User Model
```javascript
{
  name: String (required),
  email: String (required, unique),
  password: String (required, hashed),
  phone: String (optional),
  organization: String (optional),
  country: String (optional),
  state: String (optional),
  enrolledCourses: [String],
  refreshToken: String,
  isActive: Boolean (default: true),
  timestamps: true
}
```

## Token Management

- **Access Token**: Short-lived (15 minutes), stored in HTTP-only cookie
- **Refresh Token**: Long-lived (7 days), stored in HTTP-only cookie
- **Auto-refresh**: Frontend can refresh tokens automatically

## Error Handling

The API returns consistent error responses:

```javascript
{
  success: false,
  message: "Error description"
}
```

## Rate Limiting

- General API: 100 requests per 15 minutes per IP
- Auth endpoints: 5 requests per 15 minutes per IP

## Development

For development, the server runs on `http://localhost:5000` by default and accepts requests from `http://localhost:5173` (Vite frontend).

## Production Deployment

1. Set `NODE_ENV=production`
2. Configure MongoDB Atlas connection
3. Set secure JWT secrets
4. Update `CLIENT_URL` to production domain
5. Ensure HTTPS is enabled for secure cookies
