import { ApiResponse } from "../@types/api"
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
    login: async (data: string): Promise<ApiResponse> => {
        return await apiClient("/auth/login", {
            method: "POST",
            body: data
        })
    },

    logout: async (): Promise<ApiResponse> => {
        return await apiClient("/auth/logout", {
            method: "DELETE",
            credentials: "include"
        })
    }
}

export default apiUser