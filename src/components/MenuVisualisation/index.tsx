import { useMenuData } from "../../hooks/menuData"
import m from "./index.module.scss"
import mockedImgRestaurant from "../../assets/NYKOS_VECTEUR_PNG 1.png"

function MenuVisualisation() {
    const { menuData } = useMenuData()

    return (
        <section className={m.mainWrapper}>
            <div className={m.menuWrapper}>
                <img src={mockedImgRestaurant} alt="Branding du restaurant" className={m.menuWrapper__brandingImg} />
                <h2 style={{ color: menuData.style.color }} className={m.menuWrapper__title}>MENU</h2>
                <div className={m.categoriesWrapper}>
                    {Object.entries(menuData.content).map((category) => (
                        <div key={category[0]} className={m.categoryWrapper}>
                            <h3 style={{ color: menuData.style.color }} className={m.categoryWrapper__title}>
                                {category[0]}
                                <div style={{ backgroundColor: menuData.style.color }} className={m.categoryWrapper__title_line} />
                            </h3>
                            <div className={m.dishesWrapper}>
                                {category[1].map((dish) => (
                                    <div key={dish.name}
                                        className={`${m.dishWrapper} ${dish.description ? m.dishWrapper_withDescription : m.dishWrapper_withoutDescription}`}
                                    >
                                        <div className={m.dishWrapper__nameAndPriceWrapper}>
                                            <h4 className={m.dishWrapper__name}>{dish.name}</h4>
                                            <span className={m.dishWrapper__price}>{dish.price}€</span>
                                        </div>
                                        {dish.description &&
                                            <p className={m.dishWrapper__desc}>{dish.description}</p>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MenuVisualisation