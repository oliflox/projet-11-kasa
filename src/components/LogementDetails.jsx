
import HostProfile from "./HostProfile";

export default function LogementDetails({ logement }) {
  return (
    <section className="logement-details">
      <div className="logement-header">
        <h1 className="logement-title">{logement.title}</h1>
        <p className="logement-location">{logement.location}</p>
      </div>
      <HostProfile host={logement.host} />
    </section>
  );
}