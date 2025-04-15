export interface RequestOptions {
    method?: "GET" | "POST" | "DELETE"
    body?: BodyInit
    credentials?: RequestCredentials
    headers?: HeadersInit
}

export interface ApiResponse {
    httpStatus: number
    message: string
    data: object
}