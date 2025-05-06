import m from "./index.module.scss"

interface MenuHeadingInsertProps {
    title: "Ajoutez vos plats" | "Personnalisez votre menu" | "Exportez & diffusez"
    stepNumber: number
    isSectionValide?: boolean
    handleOnClick?: () => void
}

export default function MenuHeadingInsert({ title, stepNumber, isSectionValide = false, handleOnClick }: MenuHeadingInsertProps) {
    return (
        <div className={m.headingWrapper}>
            <div>
                <span className={`${m.headingWrapper__number} ${isSectionValide ? m.headingWrapper__number_validated : ""}`}>{stepNumber}</span>
                <h2 className={m.headingWrapper__title}>{title}</h2>
            </div>
            {isSectionValide && <span className={m.headingWrapper__modify} onClick={handleOnClick}>modifier</span>}
        </div>
    )
}