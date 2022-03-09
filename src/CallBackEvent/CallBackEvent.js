
import React from "react";

function CallBackEvent(){
  const [text, setText] = React.useState();
  const [submitData,setSubmitData]=React.useState()
  const onInputChange=(e)=>{
    setText(e.target.value)
  }
  
  const ShowData=()=>{
   setSubmitData(text)
  }
    return(
        <div>
         <MyInput inputValue={submitData} onInputChange={onInputChange} ShowData={ShowData} />
         {submitData}
        </div>
    )
}

function MyInput({inputValue,onInputChange, ShowData }){

    return(
        <div>
            <input type="text" onChange={onInputChange} />
            <button onClick={ShowData}>Show</button>
        </div>
    )
}

export default CallBackEvent