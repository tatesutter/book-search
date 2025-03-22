# 📚 Google Books Search App (MERN + GraphQL)

This full-stack application lets users search for books using the Google Books API, create an account, log in, save books to their profile, and remove them — all powered by a modern **MERN stack** with **Apollo GraphQL**.

> 🛠 Built with TypeScript, Apollo Server & Client, MongoDB Atlas, and Vite

---

## ✨ Features

- 🔍 Search for books via the **Google Books API**
- 🔐 User authentication (signup/login/logout) with JWT
- 💾 Save books to your profile
- ❌ Remove saved books
- ⚡ Fully built with **GraphQL** and **Apollo Client**
- 📦 MongoDB Atlas + Mongoose for flexible storage
- 🌍 Fully deployable to **Render** & **Netlify**

---

## 🧪 Tech Stack

- **Frontend:** React, Vite, TypeScript, Apollo Client
- **Backend:** Node.js, Express, Apollo Server, Mongoose
- **Database:** MongoDB Atlas
- **Styling:** Bootstrap 5

---

## 🚀 Getting Started (Local Dev)

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/google-books-graphql.git
cd google-books-graphql
```

### 2. Set Up the Backend

```bash
cd server
npm install
```

Create a `.env` file in the `server/` directory:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/books
JWT_SECRET_KEY=yourSecretKey
NODE_ENV=development
```

Run the backend server locally:

```bash
npm run start:dev
```

### 3. Set Up the Frontend

```bash
cd ../client
npm install
```

Create a `.env` file in the `client/` directory:

```env
VITE_GRAPHQL_URI=http://localhost:3001/graphql
```

Start the dev server:

```bash
npm run dev
```

---

## 🏗 Build for Production

### Backend (server):

```bash
npm run build       # compiles TypeScript to dist/
npm run start       # runs dist/server.js
```

### Frontend (client):

```bash
npm run build       # outputs to /dist for deployment
```

---

## 🧾 Example GraphQL Mutation

```graphql
mutation {
  saveBook(input: {
    bookId: "abc123",
    authors: ["Author Name"],
    title: "GraphQL Book",
    description: "Awesome book",
    image: "https://example.com/image.jpg",
    link: "https://example.com"
  }) {
    username
    savedBooks {
      title
    }
  }
}
```

---

## 🌍 Deployment

- Backend: [Render](https://render.com)
- Frontend: [Netlify](https://netlify.com)
- Database: [MongoDB Atlas](https://www.mongodb.com/cloud)

---

## 📁 Folder Structure

```
.
├── client/       # React frontend (Vite + Apollo Client)
├── server/       # Node/Express backend (Apollo Server)
│   ├── src/
│   └── dist/
├── README.md
```

---

## 👨‍💻 Author

**Tate Sutter**  
📍 Lawrence, Kansas  
🧠 Built for mastering MERN & GraphQL stack

---

## 📜 License

This project is licensed under the MIT License.
