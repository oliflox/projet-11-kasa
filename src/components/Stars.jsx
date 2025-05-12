export default function Stars({ rating }) {
  return (
    <div className="stars-container">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="stars"
            style={{
              color: rating >= star ? "var(--primary)" : "var(--lightgray)",
              fontSize: `35px`,
            }}
          >
            {" "}
            ★{" "}
          </span>
        );
      })}
    </div>
  );
}
