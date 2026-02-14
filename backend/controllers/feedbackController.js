const feedbackService = require("../services/feedbackService");

const createFeedback = (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newFeedback = feedbackService.addFeedback(req.body);
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const getAllFeedback = (req, res) => {
  try {
    const feedbackList = feedbackService.getAllFeedback();
    res.json(feedbackList);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

const deleteFeedback = (req, res) => {
  try {
    const { id } = req.params;
    feedbackService.deleteFeedback(id);
    res.json({ message: "Feedback deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createFeedback,
  getAllFeedback,
  deleteFeedback
};
