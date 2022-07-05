const user =[{
    username:'sizzan',
    email: 'sizzan@gmail.com',
    password: '123'
},
{
    username:'sizzan2',
    email: 'sizzan2@gmail.com',
    password: '123'
}]
const LoginComponent = (state= user, action) => {
    switch (action.type) {
      case "LOGIN":
          return state.map(user => {
              if (user.username !== action.password) {
                  return user;
              }

              if (user.password === action.password) {
                  return {
                      ...state,
                      login_status: "LOGGED IN"
                  }
              }
          });
          
      default:
          return state;
      } 
};

export {LoginComponent}
