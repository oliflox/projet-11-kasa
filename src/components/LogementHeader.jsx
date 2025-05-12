import LogementTags from "./LogementTags";
import LogementHost from "./LogementHost";

export default function LogementHeader({
  title,
  location,
  host,
  tags,
  rating,
}) {
  return (
    <section className="logement-details">
      <LogementTags title={title} location={location} tags={tags} />
      <LogementHost host={host} rating={rating} />
    </section>
  );
}
