export default function Stars({ rating }) {
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => {
        return (
          <span
            className="stars"
            style={{
              color: rating >= star ? "var(--primary)" : "var(--lightGray)",
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
