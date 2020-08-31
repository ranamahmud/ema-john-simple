const getUser = () => {
    const existingUser = sessionStorage.getItem("userId");
    if(existingUser){
        return existingUser;
    }else{
        const newUser ='user-'+new Date().getTime();
        sessionStorage.setItem('userId', newUser);
        return newUser;
    }
}

const getDataKey = () =>{
    const userId = getUser();
    return `emaJohn/carts/${userId}`;
}
const getDatabaseCart = () =>{
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) ||"{}";
    return json.parse(data);
}
const addToDatabaseCart = (key, count) =>{
    const currentCart = getDatabaseCart();
    currentCart[key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentCart));
}