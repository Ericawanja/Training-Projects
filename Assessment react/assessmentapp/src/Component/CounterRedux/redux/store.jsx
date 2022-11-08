import {createStore} from 'redux'
import { counterReducer } from './reducers'

const counterStore = createStore(counterReducer)

export {counterStore}