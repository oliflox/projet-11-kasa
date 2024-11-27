export default function HostProfile({ host }) {
  return (
    <>
      <p>{host.name}</p>
      <img src={host.picture} alt={host.name} />
    </>
  );
}
