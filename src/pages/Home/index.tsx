import { ReactElement } from "react";
import menu from "../../assets/main-section-img.png";
import m from "./index.module.scss";

function Home(): ReactElement {
    return (
        <>
        {/* hero section */}
        <section className={m.heroSection}>
            <article className={m.heroSectionContent}>
                <h1 className={m.heroSectionContent__title}>Réalisez et diffusez votre menu personnalisé</h1>
                <p className={m.heroSectionContent__para}>Grâce à Menu Maker, donnez à votre établissement sa propre identité. Créez votre menu en ligne et partagez-le sur toutes les plateformes !</p>
                <button className={m.heroSectionContent__button}>Se Connecter</button>
            </article>
            <div className={m.heroSection__imgWrapper}>
                <img src={menu} alt="Un dessert posé sur une carte" className={m.heroSection__img}/>
            </div>
        </section>
        {/* menu customization */}
        <section></section>
        </>
    )
}

export default Home