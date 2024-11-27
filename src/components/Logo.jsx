export default function Logo() {
  return (
    <a href="/">
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.png`}
        alt="logo du site kasa"
      />
    </a>

  )
}