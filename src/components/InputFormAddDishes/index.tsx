import m from "./index.module.scss"
import close from "../../assets/close-dark.svg"
import addPhoto from "../../assets/add-photo.svg"
import { MenuDishes } from "../../@types/menu"
import { useRef } from "react"

interface InputFormAddDishesProps {
    disheNumber: number
    disheInPathObject: MenuDishes | undefined
}

function InputFormAddDishes({ disheNumber, disheInPathObject }: InputFormAddDishesProps) {
    const ref = useRef<HTMLDivElement | null>(null)

    const deleteFormWrapper = () => {
        ref.current?.remove()
    }

    return (
        <div className={`formWrapper ${m.formWrapper}`} ref={ref}>
            <div className={m.headerWrapper}>
                <h3 className={m.headerWrapper__title}>Plat {disheNumber.toString()}</h3>
                <img src={close} alt="Supprimer le plat" className={m.headerWrapper__close} onClick={deleteFormWrapper} />
            </div>
            <div className={m.addPhotoWrapper}>
                <img src={addPhoto} aria-hidden="true" className={m.addPhotoWrapper__img} />
                <label htmlFor="img" className={m.addPhotoWrapper__label}>+Ajouter photo</label>
                <input type="file" name="img" id="img" accept="image/png, image/jpeg" className={m.addPhotoWrapper__input} />
                <span className={m.addPhotoWrapper__format}>max 2mo</span>
            </div>
            <div className={m.nameAndPriceWrapper}>
                <div className={m.inputLabelWrapper}>
                    <label htmlFor="name" className={m.inputLabelWrapper__label}>Nom du plat</label>
                    <input type="text" name="name" id="name" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.name} />
                </div>
                <div className={m.inputLabelWrapper}>
                    <label htmlFor="price" className={m.inputLabelWrapper__label}>Prix</label>
                    <input type="number" name="price" id="price" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.price} />
                </div>
            </div>
            <div className={m.inputLabelWrapper}>
                <label htmlFor="description" className={m.inputLabelWrapper__label}>Description</label>
                <input type="text" name="description" id="description" className={m.inputLabelWrapper__input} defaultValue={disheInPathObject?.description} />
            </div>
        </div>
    )
}

export default InputFormAddDishes