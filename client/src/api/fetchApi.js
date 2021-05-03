import { 
    removeTokensAndIdFromLocalStorage, 
    getTokenFromStorage, 
    setTokensToLocalStorage 
} from "../frontHelpers/tokenHelper";

async function ajaxHandler(url = "", params = {}) {
  return await fetch(url, params);
}


function authHeader() {
  const access = getTokenFromStorage('accessToken');
  const refresh = getTokenFromStorage('refreshToken');
  return access && refresh ? { 'Authorization': 'Bearer ' + JSON.stringify([access, refresh]) } : {};
}

async function toRefreshTokenMiddleware( json ){
  
  if (json.message === 'accessToken expired') {
      let response = await refreshToken();
      console.log('response', response);
  }

}

export async function fetchTest(){
  const response = await ajaxHandler(`http://localhost:3002/api/test`, {
    method: "GET",
    headers: authHeader(),
  });
  const json = await response.json();
   if(await toRefreshTokenMiddleware(json)) return json;
} 

export async function fetchContinents() {
  return await ajaxHandler("http://localhost:3002/api/continents", {
    method: "GET",
  });
}
export async function authData(form, type) {
  const response = await ajaxHandler(`http://localhost:3002/api/${type}`, {
    method: "POST",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const json = await response.json();
  return { responsed: json, status: response.status };
}

export function updateUserData(id,form) {
  return ajaxHandler(`http://localhost:3002/api/users/${id}`,{
    method: "PUT",
    body: JSON.stringify(form),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then(data => data.json())
  .catch(err => {throw new Error(err)});
}

export async function getUserData(userId) {
  const response = await ajaxHandler(
    `http://localhost:3002/api/users/${userId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return await response.json();
}

export async function refreshToken(){
  const refresh = getTokenFromStorage('refreshToken');

  const response = await ajaxHandler(`http://localhost:3002/api/refresh`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(refresh),
  });
  console.log('response', response);
  const json = await response.json();
  //return await response.json();

}
