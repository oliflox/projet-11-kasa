import Layout from "../components/Layout";
import Carousel from "../components/Carousel";
import LogementHeader from "../components/LogementHeader";
import LogementInfo from "../components/LogementInfo";
import LogementCollapse from "../components/LogementCollapse";

import { useLogement } from "../hooks/useLogement";
import { useLocation, Navigate } from "react-router-dom";

export default function Logement() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const logement = useLogement(id);

  if (!logement) return <Navigate to="/Error404" />;

  return (
    <Layout>
      <Carousel logement={logement} />
      <LogementHeader title={logement.title} location={logement.location} host={logement.host} />
      <LogementInfo tags={logement.tags} rating={logement.rating} />
      <LogementCollapse description={logement.description} equipments={logement.equipments} />
    </Layout>
  );
}
