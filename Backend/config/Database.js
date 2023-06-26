import mongoose from "mongoose";

export const connectDB = async () => {
  // const { connection } = await mongoose.connect("mongodb+srv://<username>:<password>@cluster0.teyuzuc.mongodb.net/?retryWrites=true&w=majority");
  const { connection } = await mongoose.connect("mongodb://localhost:27017/EdumindzDB");

  console.log(`mongodb connected with ${connection.host}`);
};
// If you want to run locally leave the default string as it is (localhost)
// If you want to connect a cloud based DB use MongoDB cloud connection string