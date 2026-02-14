import { useState } from "react";
import ModalComponent from "./ModalComponent";

function FeedbackItem({ item, onDelete }) {
  const [showModal, setShowModal] = useState(false);

  if (!item) return null;

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    onDelete(item.id);
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <div>
        <strong>{item.name}</strong> ({item.email})
      </div>

      <div style={{ margin: "8px 0" }}>
        {item.message}
      </div>

      <button onClick={handleDeleteClick}>
        Delete
      </button>

      {showModal && (
        <ModalComponent
          message="Are you sure you want to delete this feedback?"
          onConfirm={confirmDelete}
          onCancel={cancelDelete}
        />
      )}

      <hr />
    </div>
  );
}

export default FeedbackItem;
