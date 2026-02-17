# Feedback Collector (Full Stack)

A full-stack Feedback Collection application built using:

- Frontend: React.js
- Backend: Node.js + Express
- REST API Architecture

##  Features

- Submit feedback (Name, Email, Message)
- View all feedback entries
- Search feedback by keyword
- Filter feedback by date
- Delete feedback with confirmation modal
- Service layer implemented (FeedbackService)
- Proper folder structure (controllers, routes, services)

##  Project Structure

feedback-collector/
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   └── server.js
│
├── frontend/
│   ├── components/
│   ├── services/
│   └── App.js
│
└── .gitignore

##  How to Run

### Backend
```bash
cd backend
npm install
npm run dev

```

Backend runs on:
http://localhost:5000

---

### Frontend
```bash
cd frontend
npm install
npm start

```

Frontend runs on:
http://localhost:3000
