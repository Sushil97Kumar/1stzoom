import express from "express";
import { Request, Response, NextFunction } from "express";
const app = express();
import helmet from "helmet";
import bodyParser from "body-parser";
import connectorDb from "./Helper/Dbconnector";
import * as dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

const path = require('path');
var cors = require('cors')
require('dotenv').config()
var error = require('./core/middlewares/error');
app.use(helmet());
app.use(bodyParser.json());
//morgan used for logging
// app.use(morgan("dev"));
app.use(morgan<Request, Response>("dev"));

const dbConnectionString: string = process.env.DB_CONNECION ?? "mongodb://localhost:27017/1stzoom";
const server_port = process.env.SERVER_PORT ?? "3005";

connectorDb(dbConnectionString);
  
app.use(bodyParser.urlencoded({
  limit: '50mb',
  parameterLimit: 100000,
  extended: true 
}));

app.use(cors())
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  // res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
// for swagger implement
// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));
// Root URL
app.get('/',function(req,res){
  res.send('All Set');
}) 
// Routes
// =============================================================
require("./Routes/camera.routes")(app)
require("./Routes/cameranetwork.routes")(app)

//404 response
app.use((error: any, res: Response, next: NextFunction) => {
  try {
    res.status(404).send("Resource not found");
  } catch (error) {
    next(error);
  }
});

app.use((error: any, res: Response, next: NextFunction) => {
  try {
    const status = error.status || 500;
    const message =
      error.message ||
      "There was an error while processing your request, please try again";
    return res.status(status).send({
      status,
      message,
    });
  } catch (error) {
    next(error);
  }
});

const port = server_port || 5000;
app.listen(port, () => {
  console.log(`Application started on ${port}...`);
});

module.exports = app;
