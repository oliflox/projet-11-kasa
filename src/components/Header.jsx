import Logo from "./Logo";

export default function Header() {
    return (
        <header class="header">
          <Logo />
          <nav >
              <ul class="header-nav">
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