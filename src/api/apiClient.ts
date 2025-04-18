import { ApiResponse, RequestOptions } from "../@types/api"

const url = "http://localhost:3001/api/v1"

/**
 * Use this function in apiUser file
 * @param endpoints url endpoints without "http://localhost:3001/api/v1" ex: /auth/login
 * @param param1 object with optionnal method (default "GET"), body (null by default), and headers (with "Content-Type": "application/json" by default)
 * @returns return the response of the API with ApiResponse pattern
 */
const apiClient = async <T>(endpoints: string,
    { method = "GET", body, headers, credentials }: RequestOptions
): Promise<ApiResponse<T>> => {

    const config: RequestOptions = {
        method,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    }

    if (body) config.body = body
    if (credentials) config.credentials = credentials

    try {
        const response = await fetch(url + endpoints, config)

        if (!response.ok) {
            if (response.status === 500) {
                throw new Error("Erreur serveur")
            }
            if (response.status === 400) {
                throw new Error("Champs invalide")
            }

            throw new Error("Erreur")
        }

        return await response.json()
    } catch (e) {
        console.error(e)

        throw e
    }
}

export default apiClient
