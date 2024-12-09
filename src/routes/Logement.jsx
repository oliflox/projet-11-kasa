import Layout from "../components/Layout";
import Stars from "../components/Stars";
import HostProfile from "../components/HostProfile";
import Collapse from "../components/Collapse";

import { useLogement } from "../hooks/useLogement";
import { useLocation, Navigate } from "react-router-dom";
import Carousel from "../components/Carousel";

export default function Logement() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const logement = useLogement(id);

  if (!logement) return <Navigate to="/Error404" />;

  return (
    <Layout>
      <Carousel logement={logement} />
      <section className="logement-details">
        <div className="logement-header">
          <h1 className="logement-title">{logement.title}</h1>
          <p className="logement-location">{logement.location}</p>
        </div>
        <HostProfile host={logement.host} />
      </section>
      <section className="logement-info">
        <div className="logement-tags__container">
          {logement.tags.map((tag) => (
            <span className="logement-tags" key={tag}>
              {tag}
            </span>
          ))}
        </div>
        <Stars rating={logement.rating} />
      </section>

      <section className="logement-collapse-container">
        <Collapse
          title="Description"
          children={logement.description}
        ></Collapse>
        <Collapse
          title="Équipements"
          children={logement.equipments.map((equipement) => (
            <div key={equipement}>{equipement}</div>
          ))}
        ></Collapse>
      </section>
    </Layout>
  );
}
