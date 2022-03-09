import React from 'react'
import { connect } from 'react-redux'
 

  function Counter(props) {
  return (
     <>
       <h2>Counter Component</h2>
       <p>Count value is : {props.count}</p>
       
     </>
    )
}


const mapStateToProps=(state)=>{
  return{
    count: state.counterReducer
  }
}


export default connect(mapStateToProps)(Counter)