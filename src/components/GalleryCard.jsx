export default function GalleryCard({ title, cover, id }) {
  const dsq = () => {
    console.log(title);
    window.location.href = `/logement?id=${id}`;
  };
  
  return (
    <section className="gallery-card" onClick={dsq}>
      <img className="gallery-card__img" src={cover} alt={title} />
      <div className="gallery-card__overlay">
        <h2 className="gallery-card__title">{title}</h2>
      </div>
    </section>
  );
}
