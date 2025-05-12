import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import { INFORMATIONS } from "../data/informations";

export default function About() {
  return (
    <>
      <Banner
        link="banner-background-about.jpg"
        title=""
        className="about-banner"
      />
      <section className="about-collapse-container">
        {INFORMATIONS.map(({ id, title, description }) => (
          <Collapse key={id} title={title} children={description} />
        ))}
      </section>
    </>
  );
}
