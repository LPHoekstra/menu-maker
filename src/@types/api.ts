export interface RequestOptions {
    method?: "GET" | "POST" | "PUT" | "DELETE"
    body?: BodyInit
    credentials?: RequestCredentials
    headers?: HeadersInit
}

export interface ApiResponse<T> {
    httpStatus: number
    message: string
    data: T
}

export interface UserMenus {
    id: Int16Array
    imgLink: string
    creationDate: string
}

// data need to be define
export interface MenuData {
    toDefine: string
    toDefine2: string
}