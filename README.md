# VRV Security RBAC System

## Overview
The **VRV Security RBAC System** is a secure authentication and role-based access control system designed for handling user authentication, role assignments, and access management. Built using **Node.js**, **Express.js**, **MongoDB**, and **JWT**, this system ensures that only authorized users can access specific resources, based on their assigned roles (e.g., Admin, Moderator, User).

## Key Features
- **Authentication**: User registration, login, and JWT-based session management.
- **Authorization**: Role-based access control with permissions tied to specific roles (Admin, User, Moderator).
- **Role Management**: Create, assign, and manage user roles and permissions dynamically.
- **Secure Routes**: Middleware for ensuring that users can only access the routes they are authorized to.

## Tech Stack
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT (JSON Web Tokens)**
- **Bcrypt.js** (for password hashing)

## Project Setup

### Prerequisites
- Node.js >= 14.0.0
- MongoDB running locally or on a cloud provider
- A `.env` file with the required environment variables

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jatinshankar/vrv-security-rbac.git
2. Navigate to the project directory:
3. npm install
4. Set up a .env file in the root directory:
   ```bash
   MONGO_URI=
   JWT_SECRET=
   PORT=
5. Run the application (npm start)
