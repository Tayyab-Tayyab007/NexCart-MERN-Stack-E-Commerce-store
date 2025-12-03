const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const MONGO_URI = "mongodb://127.0.0.1:27017/ecommerce";

const userSchema = new mongoose.Schema({
  userName: String,
  email: String,
  password: String,
  role: String,
});

const User = mongoose.model("User", userSchema);

async function createAdmin() {
  await mongoose.connect(MONGO_URI);

  const hashedPassword = await bcrypt.hash("Admin123", 12);

  await User.create({
    userName: "Admin",
    email: "admin@gmail.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("New admin created! Password = Admin123");
  process.exit(0);
}

createAdmin();
