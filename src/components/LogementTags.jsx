export default function LogementTags({ title, location, tags }) {
  return (
    <div className="logement-header">
      <h1 className="logement-title">{title}</h1>
      <p className="logement-location">{location}</p>
      <div className="logement-tags__container">
        {tags.map((tag) => (
          <span className="logement-tags" key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}