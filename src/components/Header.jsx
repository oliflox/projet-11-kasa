import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <Logo link="logo.png" className="header-logo" />
      <nav>
        <ul className="header-nav">
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/about">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
