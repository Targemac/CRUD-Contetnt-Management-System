const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb conection string
    const con = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB connected: ${con.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1); //1 means true
  }
};

module.exports = connectDB;
