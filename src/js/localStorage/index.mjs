/**
 * save to local storage 
 * @param {key} the key for setItem 
 * @param {value} the value for setItem 
*/

export function saveToStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * load the value from saveToStorage 
 * @param {value} load the value 
 * @param {return} returning null if the value do not exists
*/

export function loadTheValue(key) {
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value);
    } catch {
        return null
    }
}; 

/**
 * deleting the key from local Storage 
 * @param {key} removeItem the key 
*/

export function removeFromStorage(key) {
    localStorage.removeItem(key);
};