# Spend Smart - Deployment Guide

## Overview
This guide covers deploying both the frontend and backend of the Spend Smart expense tracker application.

## Technology Stack
- **Frontend:** React 19, Vite (optional), Tailwind CSS, Ant Design, Material-UI
- **Backend:** Node.js with Express, MongoDB, JWT Authentication
- **Email:** Nodemailer (Gmail)

## Backend Deployment

### Render Deployment

1. **Create a Render Account**
   - Visit [render.com](https://render.com) and sign up

2. **Create a Web Service**
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - Select the backend directory

3. **Configure Environment**
   - **Build Command:** `npm install`
   - **Start Command:** `node app.js` or `npm start`
   - **Node Version:** 18 or higher

4. **Set Environment Variables**
   ```
   PORT=5000
   NODE_ENV=production
   DB_URI=your_mongodb_connection_string
   JWT_SECRET=your_strong_secret_key
   JWT_EXPIRES_IN=7d
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

5. **Deploy**
   - Click "Create Web Service"
   - Render will automatically deploy on every push to main branch

### Vercel Deployment (Backend as API)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd backend
   vercel
   ```

3. **Configure in Vercel Dashboard**
   - Add environment variables
   - Set Node runtime

## Frontend Deployment

### Vercel Deployment (Recommended)

1. **Create a Vercel Account**
   - Visit [vercel.com](https://vercel.com) and sign up with GitHub

2. **Import Project**
   - Click "Add New" → "Project"
   - Select your GitHub repository
   - Select root directory: `frontend/spend-smart`

3. **Configure Build Settings**
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

4. **Add Environment Variables**
   ```
   REACT_APP_API_URL=https://your-backend-url.com/api/v1
   ```

5. **Deploy**
   - Click "Deploy"
   - Vercel will auto-deploy on every push

### Render Deployment

1. **Create Static Site**
   - Click "New +" → "Static Site"
   - Connect GitHub repository

2. **Configure**
   - **Build Command:** `npm run build`
   - **Publish Directory:** `build`
   - **Root Directory:** `frontend/spend-smart`

3. **Add Environment Variables**
   - Set `REACT_APP_API_URL` to your backend URL

4. **Deploy**
   - Click "Create Static Site"

## Environment Configuration

### Backend Environment (`.env.production`)
```env
NODE_ENV=production
PORT=5000
DB_URI=mongodb+srv://user:pass@cluster.mongodb.net/spend-smart
JWT_SECRET=your-production-secret-key-min-32-chars
JWT_EXPIRES_IN=7d
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=app-specific-password-not-regular-password
```

### Frontend Environment (`.env.production`)
```env
REACT_APP_API_URL=https://your-backend-domain.com/api/v1
```

## Database Setup

### MongoDB Atlas

1. **Create Cluster**
   - Visit [mongodb.com/cloud/atlas](https://mongodb.com/cloud/atlas)
   - Create a free tier cluster

2. **Create Database User**
   - Set username and password
   - Create IP whitelist (allow all: 0.0.0.0/0 for development)

3. **Get Connection String**
   - Click "Connect" → "Drivers"
   - Copy connection string
   - Replace `<password>` and database name

## Email Setup (Gmail)

1. **Enable 2-Factor Authentication**
   - Go to myaccount.google.com
   - Enable 2-Step Verification

2. **Generate App Password**
   - Go to myaccount.google.com/apppasswords
   - Generate app password for Mail
   - Use this password (not your Gmail password) in `.env`

## CORS Configuration

The backend CORS is already configured for:
- `http://localhost:3000` (local development)
- `http://localhost:5000` (local backend)
- Your production Vercel domain (add in deployment)

To add production domain, update `app.js`:
```javascript
const allowedOrigins = [
    'http://localhost:5000',
    'http://localhost:3000',
    'https://your-frontend-domain.vercel.app',
    'https://your-backend-domain.onrender.com'
];
```

## API Endpoints

### Authentication
- `POST /api/v1/auth/sign-up` - Register
- `POST /api/v1/auth/sign-in` - Login
- `POST /api/v1/auth/sign-out` - Logout

### Expenses
- `GET /api/v1/expenses` - Get all user expenses
- `POST /api/v1/expenses` - Create expense
- `PUT /api/v1/expenses/:id` - Update expense
- `DELETE /api/v1/expenses/:id` - Delete expense

### Summary
- `GET /api/v1/summary/daily` - Daily summary
- `GET /api/v1/summary/weekly` - Weekly summary
- `GET /api/v1/summary/monthly` - Monthly summary with category breakdown

### Users
- `GET /api/v1/users` - Get all users
- `GET /api/v1/users/:id` - Get specific user

## Troubleshooting

### CORS Errors
- Ensure backend CORS includes frontend domain
- Check browser console for specific CORS error
- Frontend and backend must have matching origin

### Database Connection Issues
- Verify MongoDB connection string
- Check IP whitelist in MongoDB Atlas
- Ensure credentials are correct

### Email Not Sending
- Verify Gmail app password (not regular password)
- Enable 2-Factor Authentication
- Check EMAIL_USER and EMAIL_PASS in environment

### Build Failures
- Clear build cache on deployment platform
- Check Node version compatibility
- Verify all dependencies are installed

## Security Checklist

- [ ] JWT_SECRET is strong (>32 characters)
- [ ] JWT_EXPIRES_IN is reasonable (7d-30d)
- [ ] Email password is app-specific (not Gmail password)
- [ ] MongoDB has IP whitelist (not 0.0.0.0/0 in production)
- [ ] HTTPS enabled on production
- [ ] Environment variables not committed to git
- [ ] Sensitive data removed from code
- [ ] CORS restricted to known domains in production

## Monitoring & Maintenance

### Render Dashboard
- Monitor server logs
- Check memory/CPU usage
- Set up error notifications

### Vercel Analytics
- Monitor frontend performance
- Track deployment history
- Check error logs

### Backend Logs
- Monitor MongoDB connection status
- Track email sending failures
- Check authentication errors

## Local Development

### Setup Backend
```bash
cd backend
npm install
cp .env.example .env.development
# Edit .env.development with your local values
npm run dev
```

### Setup Frontend
```bash
cd frontend/spend-smart
npm install
cp .env.example .env
# Edit .env with local backend URL
npm start
```

## Additional Resources

- [Render Documentation](https://render.com/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [MongoDB Atlas Guide](https://docs.atlas.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
