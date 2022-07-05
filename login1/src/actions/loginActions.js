export const setLoginStatus = (uname, upass) =>{
    return{
        type: "LOGIN",
        payload:{
            uname: "admin",
            upass: "123"
        }
    }
}