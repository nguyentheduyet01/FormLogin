import {createStore,combineReducers} from 'redux'
import { LoginComponent } from './reducers/loginReducer'

const reducer = combineReducers({
    login:LoginComponent
})

const store = createStore({
    reducer,
})
export default store