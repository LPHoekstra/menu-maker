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
import MenuHeadingInsert from "../../components/MenuHeadingInsert"

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
            handleModifyCustomization()
        }

        // on customization section
        if (isCustomizationAccordionsActive) {
            try {
                await apiUser.createMenu(menuData)

                handleModifyExport()
            } catch (e) {
                console.error(e)
            }
        }

        // on export section
        if (isExportAccordionsActive) {
            navigate("/menus")
        }
    }

    // to optimise ? set a new state only for new value
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
        setIsDishAccordionsActive(false)
        setIsCustomizationAccordionsActive(true)
        setIsExportAccordionsActive(false)
        // set validated
        setIsDishValidated(true)
        setIsCustomizationValidated(false)
        setBtnContent("Enregistrer")
    }

    const handleModifyExport = () => {
        // set accordions
        setIsDishAccordionsActive(false)
        setIsCustomizationAccordionsActive(false)
        setIsExportAccordionsActive(true)
        // set validated
        setIsDishValidated(true)
        setIsCustomizationValidated(true)
        setBtnContent("Valider")
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
                                <MenuHeadingInsert title="Ajoutez vos plats" stepNumber={1} isSectionValide={isDishValidated} handleOnClick={handleModifyDish} />
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
                                <MenuHeadingInsert title="Personnalisez votre menu" stepNumber={2} isSectionValide={isCustomizationValidated} handleOnClick={handleModifyCustomization} />
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
                                <MenuHeadingInsert title="Exportez & diffusez" stepNumber={3} />
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