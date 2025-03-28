import apiClient from "./apiClient"
/**
 * throw an error if some thing goes wrong
 */
const apiUser = {
    /**
     * 
     * @param data is the email from the user
     * @returns the api response
     */
    login: async (data: string) => {
        return await apiClient("/auth/login", {
            method: "POST",
            body: data
        })
    }
}

export default apiUser