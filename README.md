# Challenge Backend

This is a Node.js backend application built with Express.js.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v22)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd challenge-backend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

To start the application in development mode:

```bash
npm start
```

The server will start running on the default port (3000). You can access the application at `http://localhost:3000`.

## Project Structure

- `app.js` - Main application file
- `bin/` - Contains the server startup script
- `routes/` - API route definitions
- `views/` - Template files
- `public/` - Static files
- `stock-price.js` - Stock price data
- `products.js` - Products data

## Dependencies

The project uses the following main dependencies:
- Express.js - Web framework
- CORS - Cross-origin resource sharing
- Cookie Parser - Cookie parsing middleware
- Morgan - HTTP request logger
- Jade - Template engine

## API Endpoints

The application provides various API endpoints for:
- Product management
- Stock price information