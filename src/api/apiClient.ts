
const url = "http://localhost:3001/api/v1"

/**
 * Use this function in apiUser file
 * @param endpoints url endpoints without "http://localhost:3001/api/v1" ex: /auth/login
 * @param param1 object with optionnal method (default "GET"), body (null by default), and headers (with "Content-Type": "application/json" by default)
 * @returns return the response of the API with ApiResponse pattern
 */
const apiClient = async (endpoints: string, {method = "GET", body, headers}: RequestOptions): Promise<ApiResponse> => {
    
    const config: RequestOptions = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    }
    
    if (body) {
        config.body = body
    }
    
    try {
        const response = await fetch(url + endpoints, config)

        if (!response.ok) {
            if (response.status === 500) {
                throw new Error("Erreur serveur")
            }
            if (response.status === 400) {
                throw new Error("Champs invalide")
            }
        }

        return await response.json()
    } catch(e) {
        console.error(e)
        
        throw e
    }
}

export default apiClient

interface RequestOptions {
    method?: "GET" | "POST"
    body?: BodyInit
    headers?: HeadersInit
}

interface ApiResponse {
    status: number
    message: string
    data: object
}