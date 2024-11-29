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

  return (
    <Layout>
      {logement ? (
        <>
          <Carousel logement={logement} />
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <HostProfile host={logement.host} />
          <Stars rating={logement.rating} />
          <div className="logement-tags__container">
            {logement.tags.map((tag) => (
              <span className="logement-tags" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <section className="collapse-container">
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
        </>
      ) : (
        <Navigate to="/Error404" />
      )}
    </Layout>
  );
}
