export default function Banner({ link, title }) {
    return (
        <section className="banner" style={{backgroundImage: `url('../img/${link}')` }}>
            <h1 className="banner-title">{title}</h1>
        </section>
    )
}