import { app } from "../src/app.js";

async function main() {
  await app.listen(5000);
  console.log("http://localhost:5000");
}

main();
