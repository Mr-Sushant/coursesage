import { app } from "./app";
require("dotenv").config();

// create server instance
app.listen(process.env.PORT, () => console.log("listening on port " + process.env.PORT));