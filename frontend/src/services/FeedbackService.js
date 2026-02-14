const API_URL = "http://localhost:5000/api/feedback";

const getAllFeedback = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error("Failed to fetch feedback");
  return res.json();
};

const addFeedback = async (feedback) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(feedback),
  });

  if (!res.ok) throw new Error("Failed to add feedback");
  return res.json();
};

const deleteFeedback = async (id) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete feedback");
  return res.json();
};

export default {
  getAllFeedback,
  addFeedback,
  deleteFeedback,
};
