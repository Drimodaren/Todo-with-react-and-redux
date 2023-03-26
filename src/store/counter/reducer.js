import { decCounter, inkCounter } from "./actionTypes"


export const counterReducer =(label)=>(state = 0,action)=>{
  console.log('counterReducer', action)

switch (action.type) {
  case
   inkCounter(label):return state +1
   case
   decCounter(label):return state -1
    
  default:
    return state
}
}

