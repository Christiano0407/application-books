//** ==== RUN Application ==== === APP === */
const express = require(`express`);
const path = require(`path`); // == Concat ===
const app = express();
const morgan = require(`morgan`); // Middleware

app.set('port', 5000);
app.set(`views`, path.join(__dirname, `views`));
//** === Add Ejs === */
app.set(`view engine`, `ejs`);
//** === Add Middleware ===  */
app.set(morgan(`dev`));
//** === Module Exportation === */
module.exports = app;
