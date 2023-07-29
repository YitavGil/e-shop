require("dotenv").config({
  path:"backend/config/.env"
})
const express = require("express");
const ErrorHandler = require("./middleware/error");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin:'http://127.0.0.1:5173',
  credentials: true
}));
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//config 
if(process.env.NODE_ENV !== 'PRODUCTION'){
  require("dotenv").config({
    path:"backend/config/.env"
  })
};

//import routes
const user = require("./controller/userController");

app.use("/api/v2/user", user)


module.exports = app;