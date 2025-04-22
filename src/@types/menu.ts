export interface MenuData {
    [key: string]: Array<MenuDishes>
}

export interface MenuDishes {
    name: string
    price: string
    description: string
    img: string
}