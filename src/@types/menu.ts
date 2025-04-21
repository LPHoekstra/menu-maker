export interface MenuData {
    [key: string]: Array<MenuDishes>
}

interface MenuDishes {
    name: string
    price: string
    description: string
    img: string
}