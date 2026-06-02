<div align="center">

# 💸 Expense Tracker — Full Stack

**Track every coin. Master your money.**

A full-stack expense management application built with **React** on the frontend and **Express.js + MongoDB** on the backend. Log daily expenses, categorize spending, visualize monthly summaries, and get automated email alerts before you blow your budget.

[![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![JWT](https://img.shields.io/badge/Auth-JWT-FB015B?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#1-clone-the-repository)
  - [Backend Setup](#2-backend-setup)
  - [Frontend Setup](#3-frontend-setup)
- [Environment Variables](#-environment-variables)
- [API Reference](#-api-reference)
- [Data Models](#-data-models)
- [Email Notifications](#-email-notifications)
- [Business Rules](#-business-rules)
- [Author](#-author)

---

## 🧭 Overview

Expense Tracker is a hands-on full-stack project designed to demonstrate modern web development practices end-to-end — from a React SPA with JWT-protected routes all the way down to a RESTful Node.js API backed by MongoDB, with scheduled cron jobs and transactional email built in.

Whether you want to use it, learn from it, or build on top of it — everything you need is here.

---

## ✨ Features

| Feature | Details |
|---|---|
| 🔐 **Secure Auth** | Register & login with hashed passwords (bcryptjs) and JWT sessions |
| 📝 **Expense Logging** | Create, edit, and delete your own categorized expenses |
| 📊 **Spending Summaries** | View daily, weekly, and monthly breakdowns with category-level detail |
| 💌 **Welcome Email** | Auto-sent when a user registers |
| ⚠️ **Budget Warning** | Email sent if you've used 80%+ of your monthly budget |
| 🚨 **Budget Exceeded Alert** | Email sent if you blew past your budget, showing the overspend amount |
| ⏰ **Scheduled Checks** | Cron job fires every 1st of the month at 8:00 AM |
| 🛡️ **Ownership Enforcement** | Users can only view, edit, or delete their own expenses |

---

## 🛠 Tech Stack

### Backend
| Package | Purpose |
|---|---|
| `express` | Web framework |
| `mongoose` | MongoDB ODM — schemas & queries |
| `dotenv` | Environment variable management |
| `bcryptjs` | Secure password hashing |
| `jsonwebtoken` | JWT creation & verification |
| `nodemailer` | Welcome & budget alert emails |
| `node-cron` | Monthly budget check scheduler |
| `express-validator` | Request validation & sanitization |
| `nodemon` | Auto-restart in development |

### Frontend
| Package | Purpose |
|---|---|
| `react` | UI library |
| `react-dom` | DOM rendering |
| `create-react-app` | Project scaffolding & build tooling |

---

## 📁 Project Structure

```
Expense-tracker-FULLSTACK/
│
├── backend/
│   ├── config/
│   │   ├── env.js                        # Loads environment variables
│   │   └── mailer.js                     # Nodemailer transporter setup
│   │
│   ├── Controllers/
│   │   ├── auth.controllers.js           # signUp, signIn, signOut
│   │   ├── expenses.controllers.js       # createExpense, getMyExpenses, updateExpense, deleteExpense
│   │   ├── summary.controllers.js        # getDailySummary, getWeeklySummary, getMonthlySummary
│   │   └── user.controllers.js           # getUsers, getUser
│   │
│   ├── Database/
│   │   └── mongodb.js                    # Mongoose connection
│   │
│   ├── middleware/
│   │   ├── auth.middleware.js            # JWT verification (protects routes)
│   │   └── error.middleware.js           # Global error handler
│   │
│   ├── Models/
│   │   ├── user.model.js                 # User schema & validation
│   │   └── expenses.models.js            # Expense schema & validation
│   │
│   ├── Routes/
│   │   ├── auth.routes.js                # /api/v1/auth
│   │   ├── expenses.routes.js            # /api/v1/expenses
│   │   ├── summary.routes.js             # /api/v1/summary
│   │   └── user.routes.js                # /api/v1/users
│   │
│   ├── utils/
│   │   ├── budgetAlert.js                # node-cron monthly budget check job
│   │   ├── emails.js                     # sendBudgetAlertEmail, sendBudgetExceededEmail
│   │   └── welcome.js                    # sendWelcomeEmail
│   │
│   ├── .env.development                  # Environment variables (never commit this)
│   ├── app.js                            # Express app entry point
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/                   # Reusable UI components
│   │   ├── pages/                        # Route-level page components
│   │   ├── App.js                        # Root component & routing
│   │   └── index.js                      # React DOM entry point
│   │
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed before proceeding:

- [Node.js](https://nodejs.org/) `v18+`
- [npm](https://www.npmjs.com/) `v9+`
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or a local MongoDB instance)
- A Gmail account with an [App Password](https://myaccount.google.com/apppasswords) generated

---

### 1. Clone the Repository

```bash
git clone https://github.com/Celia-joy/Expense-tracker-FULLSTACK.git
cd Expense-tracker-FULLSTACK
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create your environment file:

```bash
cp .env.development.example .env.development
# then fill in your actual values
```

> See the [Environment Variables](#-environment-variables) section for all required fields.

Start the development server:

```bash
npm run dev
```

The API will be running at: **`http://localhost:6500`**

---

### 3. Frontend Setup

Open a new terminal tab:

```bash
cd frontend
npm install
npm start
```

The React app will be running at: **`http://localhost:3000`**

---

## 🔧 Environment Variables

Create a `.env.development` file inside the `backend/` folder with the following:

```env
# ── Server ──────────────────────────────────────
PORT=6500
NODE_ENV=development

# ── Database ────────────────────────────────────
DB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/expense-tracker?retryWrites=true&w=majority

# ── Authentication ───────────────────────────────
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=1d

# ── Email (Gmail) ────────────────────────────────
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> ⚠️ **IMPORTANT:** For `EMAIL_PASS`, use a Gmail **App Password** — not your real Gmail password.
> Generate one at: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)

> ⚠️ **Never commit your `.env.development` file.** It's already covered in `.gitignore`.

---

## 📡 API Reference

All protected routes require this header:

```
Authorization: Bearer <your_jwt_token>
```

---

### 🔑 Auth — `/api/v1/auth`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/sign-up` | Public | Register a new user + receive a welcome email |
| `POST` | `/sign-in` | Public | Login and receive a JWT token |
| `POST` | `/sign-out` | Public | Sign out (client deletes the token) |

**Sign Up body:**
```json
{
  "name": "Celia Joy",
  "email": "celia@example.com",
  "password": "mypassword123",
  "monthlyBudget": 200000
}
```

**Sign In body:**
```json
{
  "email": "celia@example.com",
  "password": "mypassword123"
}
```

---

### 👤 Users — `/api/v1/users`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/` | Protected | Get all users |
| `GET` | `/:id` | Protected | Get a single user by ID |

---

### 💰 Expenses — `/api/v1/expenses`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `POST` | `/` | Protected | Log a new expense |
| `GET` | `/` | Protected | Get all my expenses |
| `PUT` | `/:id` | Protected | Update an expense (owner only) |
| `DELETE` | `/:id` | Protected | Delete an expense (owner only) |

**Create Expense body:**
```json
{
  "title": "Lunch at Kigali Heights",
  "amount": 8500,
  "category": "food",
  "note": "Team lunch",
  "date": "2025-06-01"
}
```

---

### 📊 Summary — `/api/v1/summary`

| Method | Endpoint | Access | Description |
|---|---|---|---|
| `GET` | `/daily` | Protected | Total amount spent today |
| `GET` | `/weekly` | Protected | Total amount spent in the last 7 days |
| `GET` | `/monthly` | Protected | Total + breakdown by category for the current month |

---

## 🗄️ Data Models

### User

| Field | Type | Constraints |
|---|---|---|
| `name` | String | Required · min 6 chars · max 100 chars |
| `email` | String | Required · Unique |
| `password` | String | Required · min 6 chars · stored as bcrypt hash |
| `monthlyBudget` | Number | Optional · used for budget alert emails |

### Expense

| Field | Type | Constraints |
|---|---|---|
| `user` | ObjectId | Reference to User · Required |
| `title` | String | Required |
| `amount` | Number | Required · must be positive |
| `category` | String | Required · must be one of the allowed values |
| `note` | String | Optional |
| `date` | Date | Defaults to now |

### Allowed Categories

```
food  ·  transport  ·  airtime  ·  rent  ·  utilities
entertainment  ·  health  ·  education  ·  clothing  ·  savings  ·  other
```

---

## 📬 Email Notifications

### ✉️ Welcome Email
Sent automatically as soon as a user successfully registers.

### ⚠️ Budget Warning Email
Sent on the **1st of every month at 8:00 AM** if the user spent **80% or more** of their `monthlyBudget` during the previous month.

### 🚨 Budget Exceeded Email
Sent on the **1st of every month at 8:00 AM** if the user **exceeded** their `monthlyBudget`, detailing exactly how much they overspent.

> Budget emails are only sent to users who have set a `monthlyBudget` value at registration.

---

## 🧠 Business Rules

- A user **must register and log in** before creating or viewing any expenses
- Every expense **must belong to a valid category** from the allowed list
- Users can **only view, edit, and delete their own** expenses — no cross-user access
- The monthly budget cron job runs on the **1st of every month**; it compares each user's total spend from the previous month to their `monthlyBudget`
- Budget emails are **only triggered for users who have a `monthlyBudget` set**

---

## 👤 Author

**Celia-joy**
Built as a hands-on learning project to master full-stack development with Express.js, MongoDB, and React.

⭐ If this project helped you learn something, consider leaving a star on the repo!

---

<div align="center">
<sub>Made with 💜 and a lot of RWF worth of coffee ☕</sub>
</div>