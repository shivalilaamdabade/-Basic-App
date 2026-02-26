# Full-Stack Authentication Application

A modern full-stack web application with React frontend and Node.js/Express backend featuring user authentication with JWT tokens and MySQL database.

## Features

- User Registration with form validation
- User Login with JWT authentication
- Protected Dashboard route
- Responsive design with minimalistic black/blue theme
- MySQL database integration
- Secure password hashing with bcrypt
- HTTP-only cookie storage for JWT tokens

## Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Axios
- CSS3 (Custom styling)

### Backend
- Node.js
- Express.js
- MySQL2
- JWT (JSON Web Tokens)
- Bcrypt.js
- Cookie-parser
- CORS

### Database
- MySQL (Aiven Cloud Service)

## Project Structure

```
app/
├── frontend/           # React/Vite application
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── pages/      # Page components (Register, Login, Dashboard)
│   │   ├── services/   # API service functions
│   │   └── styles/     # CSS styles
│   └── package.json
├── backend/            # Node.js/Express application
│   ├── controllers/    # Route controllers
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── middleware/     # Custom middleware
│   ├── config/         # Configuration files
│   └── package.json
└── package.json        # Root package.json for concurrent execution
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MySQL database access

### Installation

1. Clone the repository
2. Install dependencies for both frontend and backend:

```bash
# Install root dependencies
npm install

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Environment Setup

Create a `.env` file in the `backend` directory with the following variables:

```env
PORT=5000
DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
DB_PORT=your_mysql_port
JWT_SECRET=your_jwt_secret_key_here_change_this_in_production
FRONTEND_URL=http://localhost:5173
```

### Running the Application

#### Development Mode (Both apps simultaneously)
```bash
npm run dev
```

#### Individual Apps
```bash
# Start backend only
npm run server

# Start frontend only
npm run client
```

The application will be available at:
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

### Database Setup

The application will automatically create the required database tables on first run. The database schema includes:

```sql
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20),
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Authentication Routes
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/profile` - Get user profile (protected)

## Usage

1. **Registration**: Navigate to `/register` to create a new account
2. **Login**: Navigate to `/login` to sign in with existing credentials
3. **Dashboard**: After login, you'll be redirected to the dashboard at `/dashboard`

## Security Features

- Passwords are hashed using bcrypt before storage
- JWT tokens are stored in HTTP-only cookies
- CORS is configured for secure cross-origin requests
- Input validation on both frontend and backend
- Protected routes require valid authentication

## Development

### Frontend Development
- Uses Vite for fast development and hot reloading
- Component-based architecture with React hooks
- Responsive design with mobile-first approach

### Backend Development
- RESTful API design
- Modular structure with separate controllers, models, and routes
- Environment-based configuration
- Error handling middleware

## Deployment

For production deployment:
1. Update environment variables
2. Build the frontend: `cd frontend && npm run build`
3. Set `NODE_ENV=production`
4. Use a process manager like PM2 for the backend
5. Serve static files from the frontend build directory

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.