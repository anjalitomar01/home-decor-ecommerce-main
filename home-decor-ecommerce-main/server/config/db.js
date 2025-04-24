const mongoose = require('mongoose');

const DB = "mongodb+srv://rajputrashmi321:FIlPR4P8qgaPGQ5X@cluster0home.qtm1cyj.mongodb.net/newhomedecore?retryWrites=true&w=majority&appName=Cluster0Home";

const connectDB = async () => {
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
