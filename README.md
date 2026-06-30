Student Management REST API

This project is a simple REST API built using Node.js, Express.js, and MongoDB with Mongoose. It performs basic CRUD operations for managing student data.

Features

- Create a new student
- Get all students
- Get a single student by ID
- Update student information
- Delete a student
- MongoDB database integration using Mongoose
- Environment variable configuration using dotenv

Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

API Endpoints

POST /students - Create a new student
GET /students - Get all students
GET /student/:id - Get student by ID
PUT /students/:id - Update student by ID
DELETE /students/:id - Delete student by ID

Setup Instructions

1. Clone the repository
2. Install dependencies using npm install
3. Create a .env file in the root directory
4. Add the following environment variables:

MONGO_URI=your_mongodb_connection_string
PORT=3000

5. Run the server using:
node server.js

Project Purpose

This project is created for learning backend development with Node.js, Express, and MongoDB. It demonstrates how to build a REST API with proper database integration.