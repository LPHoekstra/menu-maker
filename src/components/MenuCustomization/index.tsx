import { useState } from "react"
import m from "./index.module.scss"
import { availableColor, availableFontFamily } from "../../utils/availableParamMenu"
import { AvailableColor } from "../../@types/menu"
import { useMenuData } from "../../hooks/menuData"

function MenuCustomization() {
    const [isChangeColorOpen, setIsChangeColorOpen] = useState<boolean>(false)
    const [currentColorSelected, setCurrentColorSelected] = useState<AvailableColor | undefined>(undefined)
    const { menuData, setMenuData } = useMenuData()

    const setChangeColorOpen = () => {
        setIsChangeColorOpen(!isChangeColorOpen)
    }

    const setColor = (newColor: AvailableColor) => {
        setMenuData((prev) => ({
            ...prev,
            style: {
                ...menuData.style,
                color: newColor
            }
        }))

        setCurrentColorSelected(newColor)
        setChangeColorOpen()
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
                <button className={m.changeColorWrapper__colorBtn}
                    style={currentColorSelected ? { background: currentColorSelected } : undefined}
                    onClick={setChangeColorOpen}
                >
                    {currentColorSelected ? "" : "+"}
                </button>
                {isChangeColorOpen &&
                    <article className={m.modalChangeColorWrapper}>
                        {availableColor.map((color) => (
                            <button key={color}
                                className={m.modalChangeColorWrapper__colorBtn}
                                style={{ backgroundColor: color }}
                                onClick={() => setColor(color)}
                            ></button>
                        ))}
                    </article>
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