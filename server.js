const express = require("express");
const mongojs = require("mongojs");
const logger = require("morgan");

const databaseUrl = "";
const collections = [""];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

db.on("error", error => {
    console.log("Database Error:", error);
});

require("./routes/apiRoutes.js")(app);

app.listen(3000, () => {
    console.log("App running on port 3000!");
});