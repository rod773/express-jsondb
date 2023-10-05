import { Router } from "express";

const router = Router();

const books = [];

router.get("/", (req, res) => {
  res.render("index.ejs", { books });
});

router.get("/new-entry", (req, res) => {
  res.render("new-entry.ejs");
});

router.post("/new-entry", (req, res) => {
  console.log(req.body);

  console.log(req.headers["content-type"]);

  const newBook = req.body;

  books.push(newBook);

  res.send(books);
});

export default router;
