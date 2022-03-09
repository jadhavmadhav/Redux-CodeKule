import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { reducer } from "./action"
 
 const DecCounter=(props)=>{
    return(
        <button type="button" onClick={()=>props.dispatch(reducer())} >Decrement</button>
    )
}

const mapDispatchToProps=(dispatch)=>{  
return{
    action:bindActionCreators(reducer,dispatch)
}
}


export default connect(mapDispatchToProps)(DecCounter)