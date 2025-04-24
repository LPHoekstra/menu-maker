import { useMenuData } from "../../hooks/menuData"
import m from "./index.module.scss"
import mockedImgRestaurant from "../../assets/NYKOS_VECTEUR_PNG 1.png"

function MenuVisualisation() {
    const { menuData } = useMenuData()

    return (
        <section className={m.mainWrapper}>
            <div className={m.menuWrapper}>
                <img src={mockedImgRestaurant} alt="Branding du restaurant" className={m.menuWrapper__brandingImg} />
                <h2 className={m.menuWrapper__title}>MENU</h2>
                <div className={m.categoriesWrapper}>
                    {Object.entries(menuData).map((category) => (
                        <div className={m.categoryWrapper}>
                            <h3 className={m.categoryWrapper__title}>{category[0]}</h3>
                            {category[1].map((dish) => (
                                <div className={m.dishWrapper}>
                                    <div className={m.dishWrapper__nameAndPriceWrapper}>
                                        <h4 className={m.dishWrapper__name}>{dish.name}</h4>
                                        <span className={m.dishWrapper__price}>{dish.price}€</span>
                                    </div>
                                    <p className={m.dishWrapper__desc}>{dish.description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuVisualisation