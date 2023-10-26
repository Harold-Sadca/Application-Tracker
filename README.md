# Application Tracker

Application Tracker is a web application for tracking job applications. It provides a user-friendly interface for managing and organizing your job application process.

## Technologies

- **Frontend**: TypeScript, Next.js, Material UI, CSS, Redux Toolkit
- **Backend**: TypeScript, Node.js, Express
- **Database**: MongoDB, Mongoose
- **Authentication**: Passport

## Features

- **User Registration and Authentication**: Users can create accounts, log in, and securely authenticate using Passport.
- **Application Tracking**: Easily add, update, and manage job applications.
- **Dashboard**: View a summary of your job application progress.
- **Database Storage**: Applications and user data are securely stored in a MongoDB database using Mongoose.

## Installation

To run the application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Harold-Sadca/Application-Tracker
   ```

2. Install dependencies for both the frontend and backend:

   ```bash
   cd application-tracker
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Configure Environment Variables:

   Create a `.env` file in the `server` directory with the following content:

   ```env
   DB_URL=<your-mongodb-connection-string>
   SECRET_KEY_WORD=<your-secret-key>
   ```

4. Seed Database (Optional):

   You can populate the database with mock data by running the following command in the `server` directory:

   ```bash
   npm run seeds
   ```

5. Start the Development Servers:

   In separate terminal windows, start the client and server servers:

   ```bash
   cd client
   npm run dev
   ```

   ```bash
   cd server
   npm run dev
   ```

6. Access the Application:

   Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to access the Application Tracker.

## Usage

- Register for an account or log in if you already have one.
- Add job applications with relevant details.
- Monitor your job application progress through the dashboard.
