import { useEffect, useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackService from "./services/FeedbackService";
import "./App.css";

function App() {
  const [feedbackList, setFeedbackList] = useState([]);

  // Load feedback from backend
  const loadFeedback = async () => {
    try {
      const data = await FeedbackService.getAllFeedback();
      setFeedbackList(data);
    } catch (error) {
      console.error("Error loading feedback:", error);
    }
  };

  useEffect(() => {
    loadFeedback();
  }, []);

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await FeedbackService.deleteFeedback(id);
      loadFeedback(); // refresh list
    } catch (error) {
      console.error("Error deleting feedback:", error);
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <FeedbackForm onFeedbackAdded={loadFeedback} />
        <FeedbackList
          feedbackList={feedbackList}
          onDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App;
