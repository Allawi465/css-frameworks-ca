import { loadTheValue } from "../localStorage/index.mjs";

/**
 * Setting headers as a function
 * @param {token} get token from local storage
 * @param {Authorization} Authorization the token
*/

export function headers() {
    const token = loadTheValue("token");
    return {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
};

/**
 * adding our fetch Method as function
 * @param {headers} getting headers from a function
 * @param {adding} adding url and options as argument
*/

export async function fetchWToken(url, options = {}) {
    return fetch(url, {
        ...options,
        headers: headers()
    })
};