import { app } from "./app";
import connectDB from './utils/db';

require("dotenv").config();

// create server instance
app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT);
    connectDB();
});
