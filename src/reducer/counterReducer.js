import * as actionType from '../action/actionType'


const counterReducer= (state=100,action)=>{
  let newState;
    switch(action.type){
        case actionType.ADD_COUNTER:
            return( newState= action.payload + state)
        case actionType.REDUCE_COUNTER:
            return (newState= action.payload + state) 
        default:
            return state
    }
  
}
export default counterReducer