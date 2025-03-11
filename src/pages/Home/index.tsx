import { ReactElement } from "react";
import heroImg from "../../assets/main-section-img.png";
import m from "./index.module.scss";
import secondeImgInCustomization from "../../assets/michelle-williams-yT69l1ubYhE-unsplash 1.png";
import firstImgInCustomization from "../../assets/nienke-broeksema-_hiPJ6Z0vao-unsplash 1.png";
import Button from "../../components/Button";
import HomeMenuCard from "../../components/HomeMenuCard";

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
                    <h2>Personnalisez votre menu</h2>
                    <p className={m.customizationSectionContent__para}>Ajoutez vos plats, vos boissons, et organisez votre menu comme le souhaitez. Pour l’impression ou la diffusion en ligne, récupérez votre menu au format que vous souhaitez et diffusez-le auprès de votre clientèle !</p>
                    <Button content="Je me lance" type="empty" />
                </article>
                <div>
                    <img src={firstImgInCustomization} alt="" className={m.customizationSectionImgWrapper__firstImg} />
                    <img src={secondeImgInCustomization} alt="" className={m.customizationSectionImgWrapper__secondeImg} />
                </div>
            </section>
            {/* how to create a menu */}
            <section className={m.createMenuSection}>
                <div className={m.createMenuSection__titleWrapper}>
                    <h2>Comment créer votre menu ?</h2>
                    <p>Réalisez votre menu en seulement trois étapes</p>
                </div>
                <div className={m.createMenuCardWrapper}>
                    <HomeMenuCard content="Listez l’ensemble de vos boissons, entrées, plats, desserts, accompagnements... à afficher sur votre menu." number={1} />
                    <HomeMenuCard content="Choisissez le style qui correspond à votre restaurant (logo, couleurs, typos)." number={2} />
                    <HomeMenuCard content="Enregistrez votre menu en PDF et diffusez-le sur vos plateformes de vente en ligne." number={3} />
                </div>
            </section>
        </>
    )
}

export default Home