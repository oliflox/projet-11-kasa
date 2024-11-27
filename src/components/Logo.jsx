export default function Logo({ link, height, width }) {
  return (
    <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/img/${link}`}
        alt="Logo du site Kasa"
        style={{ width: `${width}`, height: `${height}` }}
      />
    </a>
  );
}
