export default function Banner({ link, title, height }) {
  return (
    <section
      className="banner"
      style={{ backgroundImage: `url('../img/${link}')`, height: height }}
    >
      <h1 className="banner-title">{title}</h1>
    </section>
  );
}
