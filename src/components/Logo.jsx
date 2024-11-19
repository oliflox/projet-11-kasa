export default function Logo() {
    return (
      <img
        src={`${process.env.PUBLIC_URL}/img/logo.png`} 
        alt="logo du site kasa"
      />
    )
  }