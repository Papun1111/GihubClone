# GitClone: A Full-Stack Git/GitHub Clone

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-18.x-green?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express-4.19.2-blue?style=for-the-badge&logo=express&logoColor=white" alt="Express Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-6.8.0-green?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-5.4.1-purple?style=for-the-badge&logo=vite&logoColor=white" alt="Vite Badge"/>
</p>

**GitClone** is a comprehensive full-stack application that replicates essential GitHub functionalities. The project offers:
- A custom command-line interface to run Git-like commands: `add`, `commit`, `push`, `revert`
- A web UI to manage repositories, commits, and user accounts
- **Socket.io** for real-time updates
- **JWT-based** authentication
- **BCrypt** for secure password hashing
- And much more!

---

## Table of Contents
- [Technologies](#technologies)
  - [Backend](#backend-1)
  - [Frontend](#frontend-1)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Technologies

Below is a breakdown of all major libraries and frameworks used in this project based on the `package.json` files.

### Backend
<p>
  <img src="https://img.shields.io/badge/aws--sdk-2.1686.0-232F3E?style=flat-square&logo=amazon-aws&logoColor=white" alt="AWS-SDK Badge"/>
  <img src="https://img.shields.io/badge/bcryptjs-2.4.3-003B57?style=flat-square" alt="bcryptjs Badge"/>
  <img src="https://img.shields.io/badge/Body--Parser-1.20.2-8A2BE2?style=flat-square" alt="Body-Parser Badge"/>
  <img src="https://img.shields.io/badge/CORS-2.8.5-brightgreen?style=flat-square" alt="CORS Badge"/>
  <img src="https://img.shields.io/badge/Dotenv-16.4.5-blue?style=flat-square" alt="Dotenv Badge"/>
  <img src="https://img.shields.io/badge/Express-4.19.2-000000?style=flat-square&logo=express&logoColor=white" alt="Express Badge"/>
  <img src="https://img.shields.io/badge/HTTP-0.0.1--security-red?style=flat-square" alt="HTTP Badge"/>
  <img src="https://img.shields.io/badge/JsonWebToken-9.0.2-blue?style=flat-square" alt="JWT Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-6.8.0-green?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
  <img src="https://img.shields.io/badge/Mongoose-8.6.0-red?style=flat-square" alt="Mongoose Badge"/>
  <img src="https://img.shields.io/badge/Socket.io-4.7.5-010101?style=flat-square&logo=socket.io" alt="Socket.io Badge"/>
  <img src="https://img.shields.io/badge/UUID-10.0.0-lightgrey?style=flat-square" alt="UUID Badge"/>
  <img src="https://img.shields.io/badge/Yargs-17.7.2-yellow?style=flat-square" alt="Yargs Badge"/>
</p>

### Frontend
<p>
  <img src="https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react&logoColor=white" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Vite-5.4.1-purple?style=flat-square&logo=vite&logoColor=white" alt="Vite Badge"/>
  <img src="https://img.shields.io/badge/React--Router--DOM-6.26.1-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router DOM Badge"/>
  <img src="https://img.shields.io/badge/axios-1.7.6-blue?style=flat-square&logo=axios&logoColor=white" alt="Axios Badge"/>
  <img src="https://img.shields.io/badge/@primer/react-36.27.0-0366d6?style=flat-square" alt="Primer React Badge"/>
  <img src="https://img.shields.io/badge/@uiw/react--heat--map-2.2.2-FF6F61?style=flat-square" alt="@uiw/react-heat-map Badge"/>
  <img src="https://img.shields.io/badge/Primer-11.0.0-blue?style=flat-square" alt="Primer Badge"/>
</p>

**Development / Tooling**:
- **ESLint** & **Plugins**: Linting and code quality checks  
- **@types/react**, **@types/react-dom**: TypeScript type definitions for React  
- **@vitejs/plugin-react**: Integration of React with Vite  
- **Globals**, **eslint-plugin-react**, **eslint-plugin-react-hooks**, **eslint-plugin-react-refresh**  

---

## Project Structure

```
.
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── .env (to be created by you)
│   └── ... (routes, controllers, models, etc.)
└── frontend/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   ├── pages/
    │   └── ...
    ├── package.json
    └── vite.config.js
```

---

## Installation

### Prerequisites
1. **Node.js (>=16)** and **npm** or **Yarn**  
2. **MongoDB** (local or remote, e.g., MongoDB Atlas)  
3. A terminal or command prompt

### Backend Setup

1. **Go to the backend directory**:
   ```bash
   cd backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a `.env` file** in `backend/` with the following (example) variables:
   ```
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/gitcloneDB
   JWT_SECRET=yourSuperSecretKey
   AWS_ACCESS_KEY_ID=yourAWSAccessKeyID
   AWS_SECRET_ACCESS_KEY=yourAWSSecretAccessKey
   ```
   Adjust and add any other environment variables your application needs.

4. **Run the backend**:
   ```bash
   npm start
   ```
   By default, the server should start on `http://localhost:4000` (unless you changed `PORT`).

### Frontend Setup

1. **Open a new terminal** (or navigate back to root and then to frontend):
   ```bash
   cd ../frontend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
   The frontend will run at `http://localhost:5173` (or whichever port Vite prints in your terminal).

---

## Usage

1. **Register / Login**: Create an account or log in if you already have one.  
2. **Create a Repository**: From your dashboard, create or manage your repositories.  
3. **Use Git-Like Commands**:  
   - `add <file>`: Stage specific files.  
   - `commit -m "message"`: Commit your staged changes.  
   - `push`: Push committed changes to the remote repository.  
   - `revert <commitId>`: Roll back to a previous commit by specifying its ID.  
4. **Real-Time Updates**: Collaborate and see changes in real-time via Socket.io.  
5. **View Commits & History**: Browse through your repository’s commits, revert if necessary, and visualize your commit frequency with the heat map.

---

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -m "Add some feature"`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Open a Pull Request

We appreciate all contributions, whether they are bug reports, feature suggestions, or improvements to the documentation.

---

## License

This project is licensed under the **ISC License**.

---

## Contact

**Author**: [Papun](#)

For any inquiries or suggestions, feel free to open an issue or reach out via email at `papunmohapatra1111@gmail.com`.

> **If you find this project helpful, please star the repository to show your support!**  

<p align="center">
  <b>Happy Coding!</b> 🚀
</p>
