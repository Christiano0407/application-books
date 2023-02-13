//** === ==== Application Books ===== === Settings / Middleware => Morgan / Routers / Static  */
const app = require(`./app.js`);

//const port = process.env.port || 3000;

async function main() {
  await app.listen(app.get(`port`));
  console.log(`Server On Port`, app.get(`port`));
}
main();
