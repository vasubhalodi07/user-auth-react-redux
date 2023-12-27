const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

const connectDB = require("./config/dbconn");
connectDB();

const users = require("./routes/user.routes");
app.use("/api/user", users);

app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
