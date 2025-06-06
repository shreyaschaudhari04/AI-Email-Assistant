# ✨ AI Email Assistant ✉️

An AI-powered Chrome Extension that helps users compose professional email replies directly inside Gmail using Google's Gemini API and a Spring Boot backend.

## 📌 Features

- 🧠 Automatically generates professional email replies using Google Gemini AI.
- 📩 Seamlessly integrates with Gmail UI.
- ⚙️ Backend powered by Spring Boot, deployable on Render.
- 💻 Frontend built with React.
- 🧩 Extension activates when Gmail compose window opens.


---

## 🗂️ Project Structure

AI-Email-Assistant/
├── email-backend/ # Spring Boot backend (Java)
├── email-frontend/ # React-based frontend (Netlify deployable)
├── email-writer-extension/ # Chrome extension to interact with Gmail
└── README.md


---

## 🚀 How It Works

1. The Chrome extension detects when you open a Gmail compose window.
2. Adds an `AI Reply` button to the Gmail toolbar.
3. On click, it sends the email content to your Spring Boot backend.
4. The backend uses Google Gemini to generate a professional reply.
5. The response is inserted directly into your email compose box.

---

## 🔧 Technologies Used

### 🔙 Backend
- Java 17
- Spring Boot
- Google Gemini API
- Hosted on [Render](https://render.com)

 ### 🧩 Extension
- Chrome Extension (Manifest V3)
- Content Script + Service Worker
- Icons and AI Button integration

### 🔜 Frontend
- React (for optional UI panel)
- Tailwind CSS

---


##🌍 Deployment
Backend deployed via Render (Docker-based)

React frontend deployed on Netlify

Chrome Extension can be packed and published to Chrome Web Store







