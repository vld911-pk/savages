export const getTokenFromStorage = (tokenName) => {
  return localStorage.getItem(tokenName);
}

export const setTokensToLocalStorage = (tokens) => {
  for (const [key, token] of Object.entries(tokens)) {
    localStorage.setItem(key, token);
  }
};

export const doesTokenExists = () =>{
  const token = localStorage.getItem('accessToken');
  return Boolean(token);
}

export const removeTokensAndIdFromLocalStorage = () => {
  const tokens = ["accessToken","refreshToken","user_id"];
  for (const key of tokens) {
    localStorage.removeItem(key);
  }
};
