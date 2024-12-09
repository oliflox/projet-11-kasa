export default function Error404() {
  return (
    <section className="E404-container">
      <h1 className="E404-title">404</h1>
      <p className="E404-description">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <a className="E404-button" href="/">
        Retourner sur la page d’accueil
      </a>
    </section>
  );
}
