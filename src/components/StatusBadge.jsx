const StatusBadge = ({ isAvailable }) => {
  return (
    <>
      <p>
        {isAvailable ? (
          <span
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Open to work
          </span>
        ) : (
          <span
            style={{
              backgroundColor: "gray",
              color: "white",
              padding: "5px",
              borderRadius: "5px",
            }}
          >
            Busy learning
          </span>
        )}
      </p>
    </>
  );
};

export default StatusBadge;
