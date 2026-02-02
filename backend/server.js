require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
// app.use((req, res, next) => {
//     console.log(req.path, req.method)
//     next();
// })
if (app.get('env') == 'production') {
    app.use(morgan('common', { skip: function(req, res) { return res.statusCode < 400 }, stream: __dirname + '/../morgan.log' }));
  } else {
    app.use(morgan('dev'));
  }
app.use("/equipments", require("./routes/equipments"))

// mongoose connection (serverless-friendly)
let connPromise;
async function ensureDB() {
  if (mongoose.connection.readyState === 1) return;
  if (!connPromise) {
    connPromise = mongoose.connect(process.env.MONGO_URI);
  }
  return connPromise;
}

// Export a handler for serverless platforms (e.g., Vercel)
module.exports = async (req, res) => {
  try {
    await ensureDB();
    return app(req, res);
  } catch (err) {
    console.error('DB connection error', err);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
};
