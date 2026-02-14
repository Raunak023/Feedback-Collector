import { useState } from "react";
import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedbackList, onDelete }) {
  const [search, setSearch] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const filteredFeedback = feedbackList.filter((item) => {

    const matchesKeyword =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.email.toLowerCase().includes(search.toLowerCase()) ||
      item.message.toLowerCase().includes(search.toLowerCase());

    const matchesDate = selectedDate
      ? new Date(item.createdAt).toISOString().split("T")[0] === selectedDate
      : true;

    return matchesKeyword && matchesDate;
  });

  return (
    <div>
      <h3>All Feedback</h3>

      <input
        type="text"
        placeholder="Search feedback..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br /><br />

      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
      <br /><br />

      {filteredFeedback.length === 0 ? (
        <p>No feedback found</p>
      ) : (
        filteredFeedback.map((item) => (
          <FeedbackItem
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}

export default FeedbackList;
