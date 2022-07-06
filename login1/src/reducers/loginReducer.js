import {createSlice} from '@reduxjs/toolkit'
// const rootReducer = combineReducers({
//     login:LoginComponent
// })

let user = [{
    name: "nguyen The Duyet",
    email: "theduyet@gmail.com",
    password: "1234"
}]
const loginstore = createSlice({
    name: 'loginstore',
    initialState:'',
    reducers:{
        increase: (state = user,action) => {    
                    const acc = [{name: "abc", email: action.payload[0].email, password: action.payload[0].password}]
                user = [...user,acc];
                console.log(user);
                return state;
            },
        decrease : (state, action) => { //action decrease
            return state;
        },
    }
})

const { actions, reducer } = loginstore
export const {increase, decrease} = actions // export action
export default reducer 