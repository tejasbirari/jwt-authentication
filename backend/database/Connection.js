const mongoose = require("mongoose");

MONGO_URI =
  "mongodb+srv://tejasbirari:G7wRdHoQEoZzLEMG@auth.cnp9vws.mongodb.net/auth?retryWrites=true&w=majority";

const connection = () => {
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB!");
});

mongoose.connection.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB!");
});

module.exports = connection;
