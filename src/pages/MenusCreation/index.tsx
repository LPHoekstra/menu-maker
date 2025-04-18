import m from "./index.module.scss"
import MenuVisualisation from "../../components/MenuVisualisation"
import Button from "../../components/Button"
import { Link, Outlet } from "react-router"
import { useState } from "react"
import addCross from "../../assets/add-cross.svg"

function MenusCreation() {
    const [isDishesAccordionsActive, setDishesIsAccordionsActive] = useState<boolean>(false)
    const [isCustomizationAccordionsActive, setIsCustomizationAccordionsActive] = useState<boolean>(false)
    const [isExportAccordionsActive, setIsExportAccordionsActive] = useState<boolean>(false)

    const handleOpenAccordionsDishes = () => {
        setDishesIsAccordionsActive(!isDishesAccordionsActive)
    }

    const handleOpenAccordionsCustom = () => {
        setIsCustomizationAccordionsActive(!isCustomizationAccordionsActive)
    }

    const handleOpenAccordionsExport = () => {
        setIsExportAccordionsActive(!isExportAccordionsActive)
    }

    return (
        <>
            <Outlet />
            <main className={m.main}>
                <section className={m.createMenuSection}>
                    <h1>Créer un menu</h1>
                    <p className={m.createMenuSection__para}>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
                    <ul className={m.insertWrapper}>
                        <li className={`${m.insertWrapper__liItem} ${m.insertWrapper__liItem_top}`}>
                            <div className={m.headingWrapper} onClick={handleOpenAccordionsDishes}>
                                <span className={m.headingWrapper__number}>1</span>
                                <h3 className={m.headingWrapper__title}>Ajoutez vos plats</h3>
                            </div>
                            <div className={`${m.accordionsWrapper} ${isDishesAccordionsActive ? m.accordionsWrapper_active : ""}`}>
                                <Link to="ajouter-une-categorie" className={m.accordionsWrapper__addCategory}>
                                    <img src={addCross} className={m.accordionsWrapper__addCross} />
                                    Catégorie (ex. : entrées, plats...)
                                </Link>
                            </div>
                        </li>
                        <li className={m.insertWrapper__liItem}>
                            <div className={m.headingWrapper} onClick={handleOpenAccordionsCustom}>
                                <span className={m.headingWrapper__number}>2</span>
                                <h3 className={m.headingWrapper__title}>Personnalisez votre menu</h3>
                            </div>
                            <div className={`${m.accordionsWrapper} ${isCustomizationAccordionsActive ? m.accordionsWrapper_active : ""}`}>

                            </div>
                        </li>
                        <li className={m.insertWrapper__liItem}>
                            <div className={m.headingWrapper} onClick={handleOpenAccordionsExport}>
                                <span className={m.headingWrapper__number}>3</span>
                                <h3 className={m.headingWrapper__title}>Exportez & diffusez</h3>
                            </div>
                            <div className={`${m.accordionsWrapper} ${isExportAccordionsActive ? m.accordionsWrapper_active : ""}`}>

                            </div>
                        </li>
                    </ul>
                    <Button content="Suivant" type="full" />
                </section>
                <MenuVisualisation />
            </main>
        </>
    )
}

export default MenusCreation