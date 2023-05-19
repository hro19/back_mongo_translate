const express = require("express");
const app = express();
const translateRoute = require("./routes/translates");
const connectDB = require("./db/connect");
require("dotenv").config();
const cors = require("cors");

app.use(express.json());
const port = 5000;

// CORSミドルウェアの使用
app.use(cors());

// ルーティング設計
app.use("/api/v1/translates", translateRoute);

// データベースと接続
const start = async () => {
  try {
    await connectDB(process.env.DB_URI);
    app.listen(port, () => {
      console.log(`サーバー起動 port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};

start();
