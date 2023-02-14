//** ==== RUN Application ==== === APP === */
const express = require(`express`);
const path = require(`path`); // == Concat ===
const app = express();
const morgan = require(`morgan`); // Middleware

app.set('port', 5000);
app.set(`views`, path.join(__dirname, `views`));

//**! === Add Ejs === */
app.set(`view engine`, `ejs`);

//**? === Add Middleware ===  */
app.use(morgan(`dev`));
app.use(express.urlencoded({ extended: false })); // => Formulary

//**! === Router ===  */
app.use(require(`./router/index.js`));

//**? === Static === HTML */
app.use(express.static(path.join(__dirname, `public`))); // ==> Public

//** === Module Exportation  === */
module.exports = app;
