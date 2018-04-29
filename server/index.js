import express from "express";
import config from "../config/main";
var app = express();

app.use(express.static('dist'));
app.listen(config.port, () => console.log(`App listening on port ${config.port}!`))