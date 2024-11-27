import GalleryCard from "./GalleryCard";
import useLogements from "../hooks/useLogements";

export default function Gallery() {
  const logements = useLogements();

  return (
    <section className="gallery">
      {logements.map((logement) => (
        <GalleryCard
          key={logement.id}
          title={logement.title}
          cover={logement.cover}
          id={logement.id}
        />
      ))}
    </section>
  );
}
