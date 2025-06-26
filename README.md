
---

# 💬 Full-Stack Real-Time Chat App

A full-stack **real-time chat application** built using **React (frontend)** and **Node.js/Express + Socket.io (backend)**. This app allows users to chat instantly with each other, manage conversations, and see real-time updates like online status, typing indicators, and more.

---

## 🚀 Features

### ✅ Frontend (React)

* 📱 Responsive chat UI
* 👥 One-on-one and group messaging
* 🔔 Real-time updates via WebSocket (Socket.IO)
* 🟢 Online/offline status
* ✍️ Typing indicators
* 🧾 Chat history with scroll and auto-scroll
* 🔐 Login/Signup forms
* 🌗 Light & Dark mode toggle

### ✅ Backend (Node.js + Express + Socket.IO)

* 🔐 User authentication (JWT)
* 💬 Message and conversation APIs
* 📡 Real-time communication using Socket.IO
* 📦 MongoDB for database (via Mongoose)
* ✅ RESTful API design

---

## 🧩 Tech Stack

| Layer      | Technology                                 |
| ---------- | ------------------------------------------ |
| Frontend   | React, Tailwind CSS / CSS Modules          |
| Backend    | Node.js, Express.js, Socket.IO             |
| Database   | MongoDB (via Mongoose)                     |
| Auth       | JWT, Bcrypt                                |
| State Mgmt | React Context / Redux (optional)           |
| Deployment | Vercel (frontend), Render/Heroku (backend) |

---

## 📁 Folder Structure

```
chat-app/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # UI components (ChatBox, Sidebar, etc.)
│   │   ├── pages/          # Auth, Chat page, Home
│   │   ├── context/        # User and socket context
│   │   └── App.jsx
│   └── package.json
│
├── server/                 # Node + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── socket/             # Socket.IO logic
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/chat-app.git
cd chat-app
```

### 2. Start Backend

```bash
cd server
npm install
npm start
```

### 3. Start Frontend

```bash
cd ../client
npm install
npm start
```

---

## 🌐 Environment Variables

Create a `.env` file in both `server/` and `client/` folders.

### Server `.env`

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### Client `.env`

```
REACT_APP_API_URL=http://localhost:5000
```

---

## 🔧 API Endpoints (Backend)

| Method | Route                | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |
| GET    | `/api/users/`        | Get all users     |
| GET    | `/api/messages/:id`  | Get chat messages |
| POST   | `/api/messages/`     | Send a message    |

---

## ✅ Future Improvements

* 📁 File & image attachments
* 🧑‍🤝‍🧑 Group chat admins and permissions
* 📱 Mobile app (React Native)
* 🔍 Search messages & users
* 🌍 Multi-language support

---

## 📦 Deployment

* Frontend can be deployed on **Vercel** or **Netlify**
* Backend on **Render**, **Railway**, or **Heroku**
* MongoDB via **MongoDB Atlas**

---

## 🧑‍💻 Author

**Saksham Kapoor**
[GitHub: Saksham932007](https://github.com/Saksham932007)

---

## 📃 License

This project is licensed under the MIT License.

---

