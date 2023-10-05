import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.render("index.ejs");
});

router.get("/new-entry", (req, res) => {
  res.render("new-entry.ejs");
});

router.post("/new-entry", (req, res) => {
  console.log(req.body);
  console.log(req.headers["content-type"]);
  res.send("received");
});

export default router;
