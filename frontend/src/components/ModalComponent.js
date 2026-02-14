function ModalComponent({ message, onConfirm, onCancel }) {
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <p>{message}</p>

        <div style={{ marginTop: "15px" }}>
          <button onClick={onConfirm} style={{ marginRight: "10px" }}>
            Confirm
          </button>

          <button onClick={onCancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalStyle = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "5px",
  minWidth: "300px",
};

export default ModalComponent;
