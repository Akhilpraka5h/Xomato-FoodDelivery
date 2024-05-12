import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://akhilamigoz:xomato@cluster0.uf1cpbi.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
