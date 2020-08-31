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
    return 'emaJohn/carts/${userId}'
}