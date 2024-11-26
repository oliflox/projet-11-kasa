export default function GalleryCard({ title, cover }) {

    return (
        <section className="gallery-card"> 
        <img className="gallery-card__img" src={cover} alt={title}/>
        <div className="gallery-card__overlay">
            <h2 className="gallery-card__title">{title}</h2>
        </div>
            
        </section>
    );
}