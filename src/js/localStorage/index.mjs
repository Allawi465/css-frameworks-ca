export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
};


export function loadTheValue(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}; 

export function removeFromStorage(key) {
    localStorage.removeItem(key)
};