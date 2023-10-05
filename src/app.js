import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";
import router from "./routes/index.js";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

//console.log(__dirname);

const app = express();

app.use(cors());

// settings

app.set("port", 5000);

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

// middlewares

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

// routes

app.use(router);

// stattic

app.use(express.static(path.join(__dirname, "public")));

// 404 handler

app.use((req, res, next) => {
  res.status(404).send("404 not found");
});
//

export default app;
