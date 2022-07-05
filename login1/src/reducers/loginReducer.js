const LoginComponent = (state = initialState, action) => {
    switch (action.type) {
      case "LOGIN":
          return state.map(user => {
              if (user.uname !== action.uname) {
                  return user;
              }

              if (user.upass == action.upass) {
                  return {
                      ...user,
                      login_status: "LOGGED IN"
                  }
              }
          });
          
      default:
          return state;
      } 
};