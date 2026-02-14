import { useState } from "react";
import FeedbackService from "../services/FeedbackService";

function FeedbackForm({ onFeedbackAdded }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      alert("All fields are required");
      return;
    }

    try {
      await FeedbackService.addFeedback({ name, email, message });

      // Clear form
      setName("");
      setEmail("");
      setMessage("");

      // Refresh list
      onFeedbackAdded();
    } catch (error) {
      console.error("Error adding feedback:", error);
      alert("Failed to submit feedback");
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br /><br />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br /><br />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FeedbackForm;
