import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import Layout from "../components/Layout";

export default function Index() {
  return (
    <Layout>
      <Banner
        link="banner-background-index.jpg"
        title="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </Layout>
  );
}
