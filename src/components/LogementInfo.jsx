import Stars from "./Stars";

export default function LogementInfo({ tags, rating }) {
  return (
    <section className="logement-info">
      <div className="logement-tags__container">
        {tags.map((tag) => (
          <span className="logement-tags" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <Stars rating={rating} />
    </section>
  );
}