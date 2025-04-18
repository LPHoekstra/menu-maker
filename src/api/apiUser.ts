import { ApiResponse, MenuData, UserMenus } from "../@types/api"
import apiClient from "./apiClient"
/**
 * throw an error if something goes wrong
 */
const apiUser = {
    /**
     * 
     * @param data is the email from the user
     * @returns the api response
     */
    login: async (data: string): Promise<ApiResponse<null>> => {
        return await apiClient("/auth/login", {
            method: "POST",
            body: data
        })
    },

    logout: async (): Promise<ApiResponse<null>> => {
        return await apiClient("/auth/logout", {
            method: "DELETE",
            credentials: "include"
        })
    },

    getUserMenus: async (): Promise<ApiResponse<Array<UserMenus>>> => {
        return await apiClient("/menus/userMenus", {
            method: "GET",
            credentials: "include"
        })
    },

    createMenu: async (data: MenuData): Promise<ApiResponse<null>> => {
        return await apiClient("/menus/createMenu", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data)
        })
    },

    getMenu: async (id: string): Promise<ApiResponse<MenuData>> => {
        return await apiClient(`/menus/${id}`, {
            method: "GET",
            credentials: "include"
        })
    },

    putMenu: async (id: string, data: MenuData): Promise<ApiResponse<null>> => {
        return await apiClient(`/menus/${id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(data)
        })
    },

    deleteMenu: async (id: string): Promise<ApiResponse<null>> => {
        return await apiClient(`/menus/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
    }
}

export default apiUser