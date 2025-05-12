export default function Logo({ link, className }) {
  return (
    <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/img/${link}`}
        alt="Logo du site Kasa"
        className={`${className}`}
      />
    </a>
  );
}
