require("dotenv").config();

const express = require("express");
const cors = require("cors");

const mongoose = require("mongoose");

const lyricRoutes = require("./src/routes/lyricRoutes");
const authRoutes = require("./src/routes/authRoutes");

const { errorMiddleware } = require("./src/midlleware/errorMiddleware");
const { notFoundMiddleware } = require("./src/midlleware/notFoundMiddleware");

const app = express();
const port = process.env.PORT || 5002;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use("/helloWorld", (req, res) => {
  return res.send("hello World!");
});

app.use(notFoundMiddleware);
app.use(errorMiddleware);
app.use("/api/lyrics", lyricRoutes);
app.use("/api", authRoutes);

const run = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await await mongoose.connect(
      process.env.MONGO_DB_CONNTECTION_STRING
    );

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
