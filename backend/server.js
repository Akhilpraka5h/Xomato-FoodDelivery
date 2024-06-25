import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//app config
//intialize
const app = express();
//define port where server is running
const port = process.env.PORT || 4000;
//middleware init
app.use(express.json());
//asses bacnd frm frntend
app.use(cors());

//db connection
connectDB();

//api endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});
//listen to port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
