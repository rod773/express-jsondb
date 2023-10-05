import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();

// settings

app.set("port", 5000);

app.set("views", path.join(__dirname, "views"));

// middlewares

// routes

// stattic

export default app;
