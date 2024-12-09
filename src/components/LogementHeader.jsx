
import HostProfile from "./HostProfile";

export default function LogementHeader({ title, location, host }) {
  return (
    <section className="logement-details">
      <div className="logement-header">
        <h1 className="logement-title">{title}</h1>
        <p className="logement-location">{location}</p>
      </div>
      <HostProfile host={host} />
    </section>
  );
}