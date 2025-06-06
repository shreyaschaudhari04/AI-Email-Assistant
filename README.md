# ✨ AI Email Assistant ✉️

An AI-powered Chrome Extension that helps users compose professional email replies directly inside Gmail using Google's Gemini API and a Spring Boot backend.

## 📌 Features

- 🧠 Automatically generates professional email replies using Google Gemini AI.
- 📩 Seamlessly integrates with Gmail UI.
- ⚙️ Backend powered by Spring Boot, deployable on Render.
- 💻 Frontend built with React (Netlify compatible).
- 🧩 Extension activates when Gmail compose window opens.
- 🔒 Uses environment variables for API key security.

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

- **Frontend**: React, TailwindCSS
- **Chrome Extension**: JavaScript, Chrome APIs
- **Backend**: Java, Spring Boot, Maven
- **AI Integration**: Google Gemini API
- **Deployment**: Render (Backend), Netlify (Frontend)

---

## 📦 Installation Guide

### 1. Backend (Spring Boot)

#### Prerequisites:
- Java 17 or above
- Maven

#### Steps:

```bash
cd email-backend
# Add your API key and URL to application.properties or as environment variables
./mvnw clean install
java -jar target/email-writer-0.0.1-SNAPSHOT.jar

