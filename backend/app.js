require('dotenv').config();

const express = require('express');
const cors = require('cors');

const mongoose = require('mongoose');

const lyricRoutes = require('./src/routes/lyricRoutes');
const authRoutes = require('./src/routes/authRoutes');

const { errorMiddleware } = require('./src/midlleware/errorMiddleware');
const { notFoundMiddleware } = require('./src/midlleware/notFoundMiddleware');

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(`Processing ${req.method} request to ${req.path}`);
  next();
});

app.use('/helloWorld', (req, res) => {
  return res.send('hello World!');
});

app.use('/api/', lyricRoutes);
app.use('/api', authRoutes);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

const run = async () => {
  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(
      process.env.MONGO_DB_CONNTECTION_STRING,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    app.listen(port, () => {
      console.log(`Server running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

run();
