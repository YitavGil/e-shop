const express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(fileUpload({useTempFiles: true}));

//config 
if(process.env.NODE_ENV !== 'PRODUCTION'){
  require("dotenv").config({
    path:"backend/config/.env"
  })
};



module.exports = app;