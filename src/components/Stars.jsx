export default function Stars({ rating }) {
  return (
    <div className="stars-container">
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            key={star}
            className="stars"
            style={{
              color: rating >= star ? "var(--primary)" : "var(--lightgray)",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
