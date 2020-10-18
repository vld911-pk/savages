async function ajaxHandler(url = '',params = {}){
    return await fetch(url,params);
}

export async function fetchContinents(){
    return await ajaxHandler('http://localhost:3002/api/continents')
}
export async function authData(form,type){
    return await ajaxHandler(`http://localhost:3002/api/${type}`,{
            method: 'POST',
            body : JSON.stringify(form),
            headers: {
                'Content-Type':'application/json'
            } 
        } 
    )
}
