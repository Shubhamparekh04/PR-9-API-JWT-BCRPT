const { default: mongoose } = require("mongoose");

require("dotenv").config();

const db = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log("Database connected...!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
