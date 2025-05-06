import m from "./index.module.scss"
import MenuVisualisation from "../../components/MenuVisualisation"
import Button from "../../components/Button"
import { Outlet, useNavigate } from "react-router"
import { useEffect, useRef, useState } from "react"
import { useMenuData } from "../../hooks/menuData"
import MenuCreatedCategory from "../../components/MenuCreatedCategory"
import MenuLinkAdd from "../../components/MenuLinkAdd"
import MenuCustomization from "../../components/MenuCustomization"
import apiUser from "../../api/apiUser"

function MenusCreation() {
    const navigate = useNavigate()
    const { menuData, setMenuData } = useMenuData()

    const [btnContent, setBtnContent] = useState<"Suivant" | "Enregistrer" | "Valider">("Suivant")
    const [isCurrentSectionValide, setIsCurrentSectionValide] = useState<boolean>(false)

    // is the section is validated
    const [isDishValidated, setIsDishValidated] = useState<boolean>(false)
    const [isCustomizationValidated, setIsCustomizationValidated] = useState<boolean>(false)

    // active accordions 
    const [isDishAccordionsActive, setIsDishAccordionsActive] = useState<boolean>(true)
    const [isCustomizationAccordionsActive, setIsCustomizationAccordionsActive] = useState<boolean>(false)
    const [isExportAccordionsActive, setIsExportAccordionsActive] = useState<boolean>(false)

    // ref and dynamic height for accordions
    const addDishRef = useRef<HTMLDivElement>(null)
    const [addDishHeight, setAddDishHeight] = useState<number>(0)
    const customizationRef = useRef<HTMLDivElement>(null)
    const [CustomizationHeight, setCustomizationHeight] = useState<number>(0)
    const exportRef = useRef<HTMLDivElement>(null)
    const [exportHeight, setExportHeight] = useState<number>(0)

    // get menuData from localStorage
    useEffect(() => {
        const sessionMenuData = localStorage.getItem("menuData")
        if (sessionMenuData) setMenuData(JSON.parse(sessionMenuData))
    }, [setMenuData])

    // set the height of accordions
    useEffect(() => {
        const dishHeight = addDishRef.current?.scrollHeight
        if (dishHeight) setAddDishHeight(dishHeight)

        const customizationHeight = customizationRef.current?.scrollHeight
        if (customizationHeight) setCustomizationHeight(customizationHeight)

        const exportHeight = exportRef.current?.scrollHeight
        if (exportHeight) setExportHeight(exportHeight)
    }, [menuData])

    // is the dish section is valid
    useEffect(() => {
        if (!isDishValidated) {
            const isACategory = Object.keys(menuData.content).length !== 0
            const isADishInACategory = Object.values(menuData.content)[0]?.length !== 0
            if (isADishInACategory && isACategory) setIsCurrentSectionValide(true)
            else setIsCurrentSectionValide(false)
        }
    }, [isDishValidated, menuData])

    const handleNextAction = async () => {
        // on dish section
        if (isDishAccordionsActive && isCurrentSectionValide) {
            setIsDishAccordionsActive(false)
            setIsDishValidated(true)
            setIsCustomizationAccordionsActive(true)
            setBtnContent("Enregistrer")
        }

        // on customization section
        if (isCustomizationAccordionsActive) {
            try {
                await apiUser.createMenu(menuData)

                setIsCustomizationAccordionsActive(false)
                setIsCustomizationValidated(true)
                setIsExportAccordionsActive(true)
                setBtnContent("Valider")
            } catch (e) {
                console.error(e)
            }
        }

        // on export section
        if (isExportAccordionsActive) {
            navigate("/menus")
        }
    }

    const handleModifyDish = () => {
        // set accordions
        setIsDishAccordionsActive(true)
        setIsCustomizationAccordionsActive(false)
        setIsExportAccordionsActive(false)
        // set validated
        setIsDishValidated(false)
        setIsCustomizationValidated(false)
        setBtnContent("Suivant")
    }

    const handleModifyCustomization = () => {
        // set accordions
        setIsCustomizationAccordionsActive(true)
        setIsExportAccordionsActive(false)
        // set validated
        setIsCustomizationValidated(false)
        setBtnContent("Enregistrer")
    }

    return (
        <>
            {/* to render modal */}
            <Outlet />
            <main className={m.main}>
                <section className={m.createMenuSection}>
                    <h1>Créer un menu</h1>
                    <p className={m.createMenuSection__para}>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
                    <ul className={m.insertWrapper}>
                        <li className={`${m.insertWrapper__liItem} ${m.insertWrapper__liItem_top}`}>
                            <section>
                                <div className={m.headingWrapper}>
                                    <div>
                                        <span className={`${m.headingWrapper__number} ${isDishValidated ? m.headingWrapper__number_validated : ""}`}>1</span>
                                        <h2 className={m.headingWrapper__title}>Ajoutez vos plats</h2>
                                    </div>
                                    {isDishValidated && <span className={m.headingWrapper__modify} onClick={handleModifyDish}>modifier</span>}
                                </div>
                                <div ref={addDishRef}
                                    className={m.accordionsWrapper}
                                    style={{ height: isDishAccordionsActive ? `${addDishHeight}px` : "0" }}
                                >
                                    <div className={m.addDishWrapper}>
                                        {Object.keys(menuData.content).map((categoryName, index) => (
                                            <MenuCreatedCategory key={`${categoryName}-${index}`} createdCategoryName={categoryName} />
                                        ))}
                                        <MenuLinkAdd to="ajouter-une-categorie" content="Catégorie (ex. : entrées, plats...)" />
                                    </div>
                                </div>
                            </section>
                        </li>
                        <li className={m.insertWrapper__liItem}>
                            <section>
                                <div className={m.headingWrapper}>
                                    <div>
                                        <span className={`${m.headingWrapper__number} ${isCustomizationValidated ? m.headingWrapper__number_validated : ""}`}>2</span>
                                        <h3 className={m.headingWrapper__title}>Personnalisez votre menu</h3>
                                    </div>
                                    {isCustomizationValidated && <span className={m.headingWrapper__modify} onClick={handleModifyCustomization}>modifier</span>}
                                </div>
                                <div ref={customizationRef}
                                    className={m.accordionsWrapper}
                                    style={{ height: isCustomizationAccordionsActive ? `${CustomizationHeight}px` : "0" }}
                                >
                                    <MenuCustomization />
                                </div>
                            </section>
                        </li>
                        <li className={m.insertWrapper__liItem}>
                            <section>
                                <div className={m.headingWrapper}>
                                    <span className={m.headingWrapper__number}>3</span>
                                    <h3 className={m.headingWrapper__title}>Exportez & diffusez</h3>
                                </div>
                                <div ref={exportRef}
                                    className={m.accordionsWrapper}
                                    style={{ height: isExportAccordionsActive ? `${exportHeight}px` : "0" }}
                                >
                                    <div className={m.exportWrapper}>
                                        <Button content="Exporter en .pdf" type="empty" additionnalClass={m.exportWrapper__btn} />
                                        <Button content="Diffuser sur Deliveroo" type="empty" additionnalClass={m.exportWrapper__btn} />
                                        <Button content="Partager sur Instagram" type="empty" additionnalClass={m.exportWrapper__btn} />
                                    </div>
                                </div>
                            </section>
                        </li>
                    </ul>
                    <Button content={btnContent} type="full" onClick={handleNextAction} isClickable={isCurrentSectionValide} />
                </section>
                <MenuVisualisation />
            </main>
        </>
    )
}

export default MenusCreation