import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";

const app = express();
// configure .env file to which holds port number
dotenv.config();
const PORT = process.env.PORT || 5001;
app.use(express.json());

// import middleware
import { auth, errorHandler } from "./middleware/index.js";

// enable cors at app level
app.use(cors());

// import routers
import recordsRouter from "./router/records.router.js";
import shopUsersRouter from "./router/shopUsers.router.js";
// import router from "./router/records.router.js";
// use routers
// app.use("/", router);
app.use("/record", recordsRouter);
app.use("/shopUsers", shopUsersRouter);

// tell server that you can use JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));

// import middleware
app.use(auth);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server's up & running at http://localhost:${PORT}`);
});
