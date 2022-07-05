export const setLoginStatus = (uname, upass) => (dispatch) =>{
dispatch({
    type: "LOGIN",
        payload:{
            name: uname,
            password: upass
        }
})
}