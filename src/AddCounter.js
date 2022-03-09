 import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {addCounter} from './action'
function AddCounter(props){
 
    return(
        <>
          <button type="button" onClick={()=>props.dispatch(addCounter())}>add</button>
        </>
    )
}

const mapDispatchToProps=(dispatch)=>{
     
    return{
        action:bindActionCreators(addCounter,dispatch)
    }
}

export default connect(mapDispatchToProps)(AddCounter)

