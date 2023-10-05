import app from "../src/app.js";

async function main() {
  await app.listen(app.get("port"));
  console.log("http://localhost:" + app.get("port"));
}

main();
