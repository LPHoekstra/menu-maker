
export interface MenuData {
    style: MenuStyle
    content: MenuContent
    creationDate?: Date
}

export interface MenuStyle {
    color: AvailableColor
    fontFamily: AvailableFontFamily
}

export interface MenuContent {
    [key: string]: Array<MenuDishes>
}

export interface MenuDishes {
    name: string
    price: string
    description: string
    img: string
}

export type AvailableFontFamily = '"Baskervville", serif' | '"Rubik", sans-serif' | '"Proza Libre", sans-serif'

export type AvailableColor = "#000" | "#3678B9" | "#ffd883"