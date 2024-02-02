# Paper Trading Platform

This project is a comprehensive paper trading platform designed to simulate the experience of trading stocks and cryptocurrencies without financial risk. Built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript and styled with Tailwind CSS, it leverages Vite for an optimized front-end tooling experience. Our platform aims to provide users with an intuitive interface for trading, portfolio management, and market analysis, making it an ideal educational tool for beginners and a powerful simulation for experienced traders.

## Features

- **Real-time Data**: Experience trading with real-time stock and cryptocurrency data.
- **Portfolio Management**: Create and manage your portfolio, tracking your gains and losses.
- **Intuitive User Interface**: A clean, responsive design powered by Tailwind CSS, ensuring a seamless experience across devices.
- **Secure Authentication**: Manage your account securely with robust authentication mechanisms.

## Technology Stack

- **Frontend**: React with TypeScript, Tailwind CSS, Vite
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **APIs**: Stock and Crypto Market Data APIs

## Installation

Ensure you have Node.js and npm installed on your system. Then, follow these steps to get the project running locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/TheodoreRed/paper-trading-simulator.git
   ```
2. Navigate into the project directory:
   ```bash
   cd paper-trading-simulator
   ```
3. Install dependencies for both frontend and backend:
   ```bash
   # Navigate to the backend directory
   cd backend
   
   # Install backend dependencies
   npm install

   # Navigate to the frontend directory
   cd frontend

   # Install frontend dependencies
   npm install
   ```
4. Set up environment variables:
   - `.env` in backend holds your mongodb URI.
   - `.env.local` in frontend holds your backend BASE_URL.

5. Start the backend and frontend servers:
   ```bash
   # Start the backend server
   npm run start:dev

   # In a new terminal, start the frontend server
   cd frontend
   npm run dev
   ```

## Usage

After installation, you can access the platform by navigating to `http://localhost:5173` in your web browser.

## Contributing

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
```
