import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
require("dotenv").config();

export const app = express();

//Body Parser
app.use(express.json({ limit: "50mb" }));

//Cookie Parser
app.use(cookieParser());

//CORS - Cross Origin Resource Sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);

//TESTING APIs
app.get("/test", (req: Request, resp: Response, next: NextFunction) => {
  resp.status(200).json({
    success: true,
    message: "api working",
  });
});


// UNKNOWN Routes
app.all("*", (req: Request, resp: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} not found`) as any;
    err.statusCode = 404;
    next(err);
});
