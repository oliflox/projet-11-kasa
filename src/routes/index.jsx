import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

export default function Index() {
  return (
    <>
      <Banner
        link="banner-background-index.jpg"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </>
  );
}
