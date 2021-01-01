export async function authfetch(url, options){
    const loginUrl = '/login';
    let tokenData = null;
        if(localStorage.getItem('accessToken') !== null){
            tokenData = JSON.parse(localStorage.getItem('accessToken'));
        }else{
            return window.location.replace(loginUrl);
        }

    if(!options.headers){
        options.headers = {};
    }

    options.headers.Authorization = `Bearer ${tokenData}`;

    return fetch(url ,options);
}