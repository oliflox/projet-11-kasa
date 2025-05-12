import { useNavigate } from "react-router-dom";

export default function GalleryCard({ title, cover, id }) {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate(`/logement`, { state: { id } });
  };

  return (
    <section className="gallery-card" onClick={handleNavigation}>
      <img className="gallery-card__img" src={cover} alt={title} />
      <div className="gallery-card__overlay">
        <h2 className="gallery-card__title">{title}</h2>
      </div>
    </section>
  );
}
