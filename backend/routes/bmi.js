const express = require("express");
const Bmi = require("../models/Bmi");
const { authMiddleware } = require("../middleware/auth");

const router = express.Router();

router.post("/bmi", authMiddleware, async (req, res) => {
  try {
    const { height, weight, bmiValue, status } = req.body;

    // Check if user already has a BMI record and update it, or create a new one
    let bmiRecord = await Bmi.findOne({ userId: req.user._id });
    
    if (bmiRecord) {
      bmiRecord.height = height;
      bmiRecord.weight = weight;
      bmiRecord.bmiValue = bmiValue;
      bmiRecord.status = status;
      bmiRecord.date = Date.now();
      await bmiRecord.save();
    } else {
      bmiRecord = new Bmi({
        userId: req.user._id,
        height,
        weight,
        bmiValue,
        status
      });
      await bmiRecord.save();
    }

    res.status(200).json({ message: "BMI saved successfully", data: bmiRecord });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

router.get("/bmi", authMiddleware, async (req, res) => {
  try {
    const bmiRecord = await Bmi.findOne({ userId: req.user._id });
    if (!bmiRecord) {
      return res.status(404).json({ message: "No BMI record found" });
    }
    res.json(bmiRecord);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;
