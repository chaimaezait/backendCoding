const express = require('express');
const fetch = require('node-fetch');
const app = express()
var router = express.Router()
const figlet = require("figlet");
const chalk = require("chalk");
const { version } = require("../package.json");
/**
 * Routes
 */
const swagger = require("./routes/swagger");
const heathcheck = require("./routes/helthcheck");
const fetcher = require("./routes/fetcher")
app.use("/", heathcheck);
app.use("/api", fetcher);
app.use("/api-docs", swagger);
/**
 * @TODO: use env variables.
 */
const port = 4000;
figlet(`Fetching trending repositories v${version}`, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(chalk.red.bold(data));
    console.log("");
  app.listen(port, () => {
    console.log(
      chalk.green(
        `[${new Date()}] Fetching v${version} swagger endpoint http://localhost:${port}/api-docs started.`
      )
    );
      });
    });
module.exports = app