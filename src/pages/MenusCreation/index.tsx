import m from "./index.module.scss"
import MenuVisualisation from "../../components/MenuVisualisation"
import Button from "../../components/Button"
import { Outlet } from "react-router"
import { useEffect, useRef, useState } from "react"
import { useMenuData } from "../../hooks/menuData"
import MenuCreatedCategory from "../../components/MenuCreatedCategory"
import MenuLinkAdd from "../../components/MenuLinkAdd"

function MenusCreation() {
    const [isDishesAccordionsActive, setDishesIsAccordionsActive] = useState<boolean>(false)
    const [isCustomizationAccordionsActive, setIsCustomizationAccordionsActive] = useState<boolean>(false)
    const [isExportAccordionsActive, setIsExportAccordionsActive] = useState<boolean>(false)
    const { menuData, setMenuData } = useMenuData()
    const ref = useRef<HTMLDivElement>(null)
    const [contentHeight, setContentHeight] = useState<number>(0)

    useEffect(() => {
        const sessionMenuData = localStorage.getItem("menuData")

        if (sessionMenuData) setMenuData(JSON.parse(sessionMenuData))

        const height = ref.current?.scrollHeight
        if (height) setContentHeight(height)

    }, [setMenuData, menuData])

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
                            <div ref={ref}
                                className={m.accordionsWrapper}
                                style={{ height: isDishesAccordionsActive ? `${contentHeight}px` : "0" }}
                            >
                                {Object.keys(menuData).map((categoryName, index) => (
                                    <MenuCreatedCategory key={`${categoryName}-${index}`} createdCategoryName={categoryName} />
                                ))}
                                <MenuLinkAdd to="ajouter-une-categorie" content="Catégorie (ex. : entrées, plats...)" />
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