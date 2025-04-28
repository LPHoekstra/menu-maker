import m from "./index.module.scss"

function MenuCustomization() {
    return (
        <div>
            <article>
                <h3 className={m.mainWrapper__title}>Choisissez une typographie</h3>
                <div className={m.typoWrapper}>
                    <button className={m.typoWrapper__btn}>Aa</button>
                    <button className={m.typoWrapper__btn}>Aa</button>
                    <button className={m.typoWrapper__btn}>Aa</button>
                </div>
            </article>
            <article>
                <h3 className={m.mainWrapper__title}>Choisissez une couleur</h3>
                <button className={m.mainWrapper__colorBtn}>+</button>
            </article>
            <article>
                <h3 className={m.mainWrapper__title}>Mise en page</h3>
                <button></button>
            </article>
        </div>
    )
}

export default MenuCustomization