export const setTokensToLocalStorage = (tokens) => {
  for (const [key, token] of Object.entries(tokens)) {
    localStorage.setItem(key, token);
  }
};
export const removeTokensFromLocalStorage = () => {
  const tokens = ["accessToken","refreshToken"];
  for (const key of tokens) {
    localStorage.removeItem(key);
  }
};
