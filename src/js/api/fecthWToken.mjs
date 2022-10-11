import { loadTheValue } from "../localStorage/index.mjs";

export function headers() {
    const token = loadTheValue("token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
};

export async function fetchWToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
};