const express = require('express');

const app = express()

//config 
if(process.env.NODE_ENV !== 'PRODUCTION'){
  require("dotenv").config({
    path:"backend/config/.env"
  })
};

//create server
const server = app.listen(process.env.PORT, () => {
  console.log("Server is running on port 8000");
})

//promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Server is down: ${err}`);

  server.close(() => {
    process.exit(1)
  })
})


module.exports = app;