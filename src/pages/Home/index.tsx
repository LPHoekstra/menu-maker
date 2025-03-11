import { ReactElement } from "react";
import heroImg from "../../assets/main-section-img.png";
import m from "./index.module.scss";
import secondeImgInCustomization from "../../assets/michelle-williams-yT69l1ubYhE-unsplash 1.png";
import firstImgInCustomization from "../../assets/nienke-broeksema-_hiPJ6Z0vao-unsplash 1.png";
import Button from "../../components/button";

function Home(): ReactElement {
    return (
        <>
            {/* hero section */}
            <section className={m.heroSection}>
                <article className={m.heroSectionContent}>
                    <h1 className={m.heroSectionContent__title}>Réalisez et diffusez votre menu personnalisé</h1>
                    <p className={m.heroSectionContent__para}>Grâce à Menu Maker, donnez à votre établissement sa propre identité. Créez votre menu en ligne et partagez-le sur toutes les plateformes !</p>
                    <Button content="Se connecter" type="full" />
                </article>
                <div className={m.heroSection__imgWrapper}>
                    <img src={heroImg} alt="Un dessert posé sur une carte" className={m.heroSection__img} />
                </div>
            </section>
            {/* menu customization */}
            <section className={m.customizationSection}>
                <article className={m.customizationSectionContent}>
                    <h2 className={m.customizationSectionContent__title}>Personnalisez votre menu</h2>
                    <p className={m.customizationSectionContent__para}>Ajoutez vos plats, vos boissons, et organisez votre menu comme le souhaitez. Pour l’impression ou la diffusion en ligne, récupérez votre menu au format que vous souhaitez et diffusez-le auprès de votre clientèle !</p>
                    <Button content="Je me lance" type="empty" />
                </article>
                <div>
                    <img src={firstImgInCustomization} alt="" className={m.customizationSectionImgWrapper__firstImg} />
                    <img src={secondeImgInCustomization} alt="" className={m.customizationSectionImgWrapper__secondeImg} />
                </div>
            </section>
        </>
    )
}

export default Home