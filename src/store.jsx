import { RootReducer } from "./reducer/reducer";
import {createStore} from 'redux'

const Store = createStore(RootReducer)

export default Store