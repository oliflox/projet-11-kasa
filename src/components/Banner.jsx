export default function Banner({ link, title, className }) {
  return (
    <section
      className={`banner ${className}`}
      style={{ backgroundImage: `url('../img/${link}')` }}
    >
      <h1 className="banner-title">{title}</h1>
    </section>
  );
}
