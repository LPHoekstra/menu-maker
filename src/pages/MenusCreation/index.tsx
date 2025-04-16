import m from "./index.module.scss"
import MenuVisualisation from "../../components/MenuVisualisation"
import Button from "../../components/Button"
import { Link } from "react-router"

function MenusCreation() {
    return (
        <main className={m.main}>
            <section className={m.createMenuSection}>
                <h1>Créer un menu</h1>
                <p className={m.createMenuSection__para}>Laissez-vous guider étape par étape dans la création de votre menu, vous pourrez le sauvegarder pour reprendre la création plus tard !</p>
                <ul className={m.insertWrapper}>
                    <li className={`${m.insertWrapper__liItem} ${m.insertWrapper__liItem_top}`}>
                        <h3 className={m.insertWrapper__title}>Ajoutez vos plats</h3>
                        <Link to="ajouter-une-categorie" className={m.insertWrapper__addCategory}>Catégorie (ex. : entrées, plats...)</Link>
                    </li>
                    <li className={m.insertWrapper__liItem}>
                        <h3 className={m.insertWrapper__title}>Personnalisez votre menu</h3>
                    </li>
                    <li className={m.insertWrapper__liItem}>
                        <h3 className={m.insertWrapper__title}>Exportez & diffusez</h3>
                    </li>
                </ul>
                <Button content="Suivant" type="full" />
            </section>
            <MenuVisualisation />
        </main>
    )
}

export default MenusCreation