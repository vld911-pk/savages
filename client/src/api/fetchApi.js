async function ajaxHandler(url = "", params = {}) {
  return await fetch(url, params);
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
  .catch(err => console.log(err));
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
