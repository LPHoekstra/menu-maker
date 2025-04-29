import { useState } from "react"
import MenuChangeColor from "../MenuChangeColor"
import m from "./index.module.scss"
import { availableFontFamily } from "../../utils/availableParamMenu"

function MenuCustomization() {
    const [isChangeColorOpen, setIsChangeColorOpen] = useState<boolean>(false)

    const setChangeColorOpen = () => {
        setIsChangeColorOpen(!isChangeColorOpen)
    }

    return (
        <div>
            <article>
                <h3 className={m.mainWrapper__title}>Choisissez une typographie</h3>
                <div className={m.typoWrapper}>
                    {availableFontFamily.map((fontFamily) => (
                        <button key={fontFamily}
                            className={m.typoWrapper__btn}
                            style={{ fontFamily: fontFamily }}
                        >Aa</button>
                    ))}
                </div>
            </article>
            <article className={m.changeColorWrapper}>
                <h3 className={m.mainWrapper__title}>Choisissez une couleur</h3>
                <button className={m.changeColorWrapper__colorBtn} onClick={setChangeColorOpen}>+</button>
                {isChangeColorOpen &&
                    <MenuChangeColor setChangeColorOpen={setChangeColorOpen} />
                }
            </article>
            {/* <article>
                <h3 className={m.mainWrapper__title}>Mise en page</h3>
                <button></button>
            </article> */}
        </div>
    )
}

export default MenuCustomization