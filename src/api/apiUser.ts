import { ApiResponse, UserMenus } from "../@types/api"
import { MenuContent, MenuData } from "../@types/menu"
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

    /**
     * Get all menus created by the connected user
     * @returns An array of UserMenus
     */
    getUserMenus: async (): Promise<ApiResponse<Array<UserMenus>>> => {
        return await apiClient("/menus/userMenus", {
            method: "GET",
            credentials: "include"
        })
    },

    /**
     * Create a new menu with the data entered by the user
     * @param data 
     * @returns 
     */
    createMenu: async (data: MenuData): Promise<ApiResponse<null>> => {
        return await apiClient("/menus/createMenu", {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(data)
        })
    },

    /**
     * Get a specified menu from the connected user with the id
     * @param id of the menu to get
     * @returns 
     */
    getMenu: async (id: string): Promise<ApiResponse<MenuContent>> => {
        return await apiClient(`/menus/${id}`, {
            method: "GET",
            credentials: "include"
        })
    },

    /**
     * Update a specified menu from the connected user with the id
     * @param id of the menu to update
     * @param data
     * @returns 
     */
    putMenu: async (id: string, data: MenuContent): Promise<ApiResponse<null>> => {
        return await apiClient(`/menus/${id}`, {
            method: "PUT",
            credentials: "include",
            body: JSON.stringify(data)
        })
    },

    /**
     * Delete a specified menu from the connected user with the id
     * @param id of the menu to delete
     * @returns 
     */
    deleteMenu: async (id: string): Promise<ApiResponse<null>> => {
        return await apiClient(`/menus/${id}`, {
            method: "DELETE",
            credentials: "include"
        })
    }
}

export default apiUser