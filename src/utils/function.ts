export function getCookie(name: string): string | undefined {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) {
        const lastParts = parts.pop()
        if (lastParts) return lastParts.split(";").shift()
    }
    return undefined
}