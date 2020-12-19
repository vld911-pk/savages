export const setTokensToLocalStorage = (tokens) =>{
    console.log(tokens);
    for (const [key, token] of Object.entries(tokens)) {
        localStorage.setItem(key, token);
      }
}
export const removeTokensToLocalStorage = (tokens) =>{
    for (const key of Object.keys(tokens)) {
        localStorage.removeItem(key);
      }
}