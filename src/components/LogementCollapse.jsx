import Collapse from "./Collapse";

export default function LogementCollapse({ description, equipments }) {
  return (
    <section className="logement-collapse-container">
      <Collapse title="Description" children={description}></Collapse>
      <Collapse
        title="Équipements"
        children={equipments.map((equipement) => (
          <div key={equipement}>{equipement}</div>
        ))}
      ></Collapse>
    </section>
  );
}
