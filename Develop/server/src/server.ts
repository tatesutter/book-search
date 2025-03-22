import express, { type Application } from "express";
import path from "node:path";
import { ApolloServer } from "apollo-server-express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import { typeDefs } from "./schemas/typeDefs.js";
import { resolvers } from "./schemas/resolvers.js";
import { authMiddleware } from "./services/auth.js";

dotenv.config();

const PORT = process.env.PORT || 3001;
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/books";

const startApolloServer = async () => {
  const app: Application = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
  });

  await server.start();
  server.applyMiddleware({ app });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  // Serve static files from client in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../../client/dist")));

    app.get("*", (_req, res) => {
      res.sendFile(path.join(__dirname, "../../client/dist/index.html"));
    });
  }

  // Connect to MongoDB
  mongoose
    .connect(MONGO_URI)
    .then(() => {
      console.log("✅ MongoDB connection successful");

      app.listen(PORT, () => {
        console.log(`🌍 Server running on http://localhost:${PORT}`);
        console.log(`🚀 GraphQL endpoint: http://localhost:${PORT}${server.graphqlPath}`);
      });
    })
    .catch((err) => {
      console.error("❌ Failed to connect to MongoDB:", err);
    });
};

startApolloServer();
