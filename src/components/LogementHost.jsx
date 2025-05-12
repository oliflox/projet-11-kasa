import HostProfile from "./HostProfile";
import Stars from "./Stars";

export default function LogementHost({ host, rating }) {
  return (
    <div className="logement-host">
      <HostProfile host={host} />
      <Stars rating={rating} />
    </div>
  );
}
