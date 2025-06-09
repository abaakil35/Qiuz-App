# QuizMaster - Full-Stack Quiz Application

A full-stack web application that allows admins to create and manage quiz questions, and users to take quizzes and view their scores.

## Features

- User authentication (register/login)
- Role-based access (Admin/User)
- Admin features:
  - Create, edit, and delete quiz questions
  - View all questions
- User features:
  - Take quizzes with multiple-choice questions
  - View quiz results and history
  - Track progress over time

## Tech Stack

- Frontend: Vite + React.js
- Backend: Express.js (Node.js)
- Database: MongoDB
- Authentication: JWT + bcrypt
- Styling: TailwindCSS
- State Management: React Context API

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:

   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/quizmaster
   JWT_SECRET=your_jwt_secret_key_here
   NODE_ENV=development
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

### Frontend Setup

1. Navigate to the frontend directory:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Authentication

- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- GET `/api/auth/me` - Get current user

### Questions (Admin only)

- GET `/api/questions` - Get all questions
- POST `/api/questions` - Create new question
- PUT `/api/questions/:id` - Update question
- DELETE `/api/questions/:id` - Delete question

### Quiz (User)

- GET `/api/quiz/start` - Start new quiz
- POST `/api/quiz/submit` - Submit quiz answers
- GET `/api/quiz/history` - Get quiz history

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
