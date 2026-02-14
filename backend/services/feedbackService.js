let feedbackData = [];

const addFeedback = (feedback) => {
  const newFeedback = {
    id: Date.now().toString(),
    ...feedback,
    createdAt: new Date()
  };

  feedbackData.push(newFeedback);
  return newFeedback;
};

const getAllFeedback = () => {
  return feedbackData;
};

const deleteFeedback = (id) => {
  feedbackData = feedbackData.filter(item => item.id !== id);
};

module.exports = {
  addFeedback,
  getAllFeedback,
  deleteFeedback
};