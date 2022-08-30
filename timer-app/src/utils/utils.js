export const setLocalStorage=(key,val)=>{
    localStorage.setItem(key,JSON.stringify(val))
}

export const getLocalStorage=(key)=>{
return JSON.parse(localStorage.getItem(key))
}