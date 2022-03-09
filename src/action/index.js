import  * as actionType from './actionType';

export const addCounter=()=>({
type:actionType.ADD_COUNTER,
payload:1
})

export const reducer=()=>({
  type: actionType.REDUCE_COUNTER,
  payload:-1 
})

 