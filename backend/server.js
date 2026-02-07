require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next();
// })
if (app.get("env") == "production") {
  app.use(
    morgan("common", {
      skip: function (req, res) {
        return res.statusCode < 400;
      },
      stream: __dirname + "/../morgan.log",
    }),
  );
} else {
  app.use(morgan("dev"));
}
app.use("/api/equipments", require("./routes/equipments"));
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mongoose connection (serverless-friendly)
let connPromise;
async function ensureDB() {
  if (mongoose.connection.readyState === 1) return;
  if (!connPromise) {
    connPromise = mongoose.connect(process.env.MONGO_URI);
  }
  return connPromise;
}

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  ensureDB()
    .then(() => {
      console.log("Connected to MongoDB");
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
    })
    .catch((err) => {
      console.error("DB connection error", err);
      process.exit(1);
    });
}

// Export a handler for serverless platforms (e.g., Vercel)
module.exports = app;
