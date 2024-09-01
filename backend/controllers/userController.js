const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
var ObjectId = require("mongodb").ObjectId;
const User = require("../models/userModel");
dotenv.config();
const url = process.env.MONGO_URL;
let client;

async function connectClient() {
  if (!client) {
    client = new MongoClient(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    console.log("Connected to MongoDB");
  }
}

const getAllUsers = async (req, res) => {
  try {
    await connectClient();
    const db = client.db("phubclone");
    const usersCollection = db.collection("users");

    const users = await usersCollection.find({}).toArray();
    res.json(users);
    console.log(users);
  } catch (err) {
    console.error("Error during fetching : ", err.message);
    res.status(500).send("Server error!");
  }
};

const signup = async (req, res) => {
  const { username, password, email } = req.body;
  try {
    await connectClient();
    const db = client.db("phubclone");
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "Username already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = {
      username,
      email,
      password: hashedPassword,
      repositories: [],
      followedUser: [],
      starRepos: [],
    };
    const result = await usersCollection.insertOne(newUser);
    const token = jwt.sign(
      { id: result.insertId },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.json({ token ,userId:result.insertId });
  } catch (e) {
    console.error(e.message);
    res.status(500);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    await connectClient();
    const db = client.db("phubclone");
    const usersCollection = db.collection("users");
    const user = await usersCollection.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User Not Found" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid Password" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({ token, userId: user._id });
  } catch (e) {
    console.error(e.message);
  }
};

const getUserProfile = async (req, res) => {
  const currentID = req.params.id;

  try {
    await connectClient();
    const db = client.db("phubclone");

    const usersCollection = db.collection("users");

    const user = await usersCollection.findOne({
      _id: new ObjectId(currentID),
    });

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.send(user);
  } catch (err) {
    console.error("Error during fetching : ", err.message);
    res.status(500).send("Server error!");
  }
};

const updateUserProfile =async (req, res) => {
  const currentID = req.params.id;
  const { email, password } = req.body;

  try {
    await connectClient();
    const db = client.db("phubclone");
    const usersCollection = db.collection("users");

    let updateFields = { email };
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields.password = hashedPassword;
    }

    const result = await usersCollection.findOneAndUpdate(
      {
        _id: new ObjectId(currentID),
      },
      { $set: updateFields },
      { returnDocument: "after" }
    );
    if (!result.value) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.send(result.value);
  } catch (err) {
    console.error("Error during updating : ", err.message);
    res.status(500).send("Server error!");
  }
};
const deleteUserProfile = async (req, res) => {
  const currentID = req.params.id;

  try {
    await connectClient();
    const db = client.db("phubclone");
    const usersCollection = db.collection("users");

    const result = await usersCollection.deleteOne({
      _id: new ObjectId(currentID),
    });

    if (result.deleteCount == 0) {
      return res.status(404).json({ message: "User not found!" });
    }

    res.json({ message: "User Profile Deleted!" });
  } catch (err) {
    console.error("Error during updating : ", err.message);
    res.status(500).send("Server error!");
  }
};

module.exports = {
  getAllUsers,
  signup,
  login,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile
};
