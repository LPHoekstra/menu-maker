import { ReactElement } from "react";
import m from "./index.module.scss";
import DashbaordCardMenu from "../../components/DashboardCardMenu";
import mockImg from "../../assets/NYKOS_VECTEUR_PNG 1.png";
import GoingFurtherCard from "../../components/GoingFurtherCard";
import firstImgCard from "../../assets/dashboard/realize-your-support-by-a-designer.png";
import secondeImgCard from "../../assets/dashboard/advice-for-a-menu.png";
import thirdImgCard from "../../assets/dashboard/how-to-post-on-insta.png";

function DashBoard(): ReactElement {
    return (
        <main className={m.main}>
            <div className={m.dashboardHeader}>
                <div className={m.dashboardHeader__imgWrapper}>
                    <img src={mockImg} alt="" />
                </div>
                <h1 className={m.dashboardHeader__title}>Bienvenue, <br />
                    "connected user mock"
                </h1>
            </div>
            <section className={m.cardMenuWrapper}>
                <DashbaordCardMenu content="+ Créer un menu" linkTo="" />
                <DashbaordCardMenu content="+ Diffuser un menu" linkTo="" />
                <DashbaordCardMenu content="+ Imprimer un menu" linkTo="" />
            </section>
            <section className={m.goingFurtherSection}>
                <h2 className={m.goingFurtherSection__title}>Pour aller plus loin</h2>
                <div className={m.goingFurtherSection__cardWrapper}>
                    <GoingFurtherCard content="Faites réaliser vos supports par un graphiste pro" img={firstImgCard} linkTo="" />
                    <GoingFurtherCard content="Découvrez nos conseils pour un menu réussi" img={secondeImgCard} linkTo="" />
                    <GoingFurtherCard content="Comment poster son menu sur Instagram ?" img={thirdImgCard} linkTo="" />
                </div>
            </section>
        </main>
    )
}

export default DashBoard