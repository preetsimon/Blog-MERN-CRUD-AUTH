import express from "express";
import User from "../models/User.js";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    const user = await newUser.save();
    res.status(200).json({ msg: 'Signup successfull' });
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login



export default router;