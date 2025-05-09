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
    id: string
    imgLink: string
    creationDate: string
}