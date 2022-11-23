function WarningMessage({ showWarning }) {
  return (
    <div hidden={!showWarning} className="row mb-1 ms-1 me-1 mt-2">
      <label
        style={{
          color: "red",
        }}
      >
        Given item already exists on the Todo list.
      </label>
    </div>
  );
}

export default WarningMessage;
