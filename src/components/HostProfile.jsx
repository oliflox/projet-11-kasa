export default function HostProfile({ host }) {
  return (
    <>
      <div className="host-profile">
        <p className="host-name">{host.name}</p>
        <img className="host-img" src={host.picture} alt={host.name} />
      </div>
    </>
  );
}
