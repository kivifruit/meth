import { useState } from "react";
import { connect } from "react-redux";
import { deleteAllStatus, deleteAllTransition } from "../store/actions";

 import './RedButton.css'
 const RedButton = (props: any) => {
    const [b, setB] = useState<HTMLButtonElement | null>();
const deleteAll=()=>{
    props.deleteAllStatus();props.deleteAllTransition()
}
const fstyle=()=>{
    return {
        "border-radius":"50px",
        "height": "100px" ,
        "width":"100px"  ,
        "font-size": "2em",
        "background-color":"red"

    }
}
// React.HTMLAttributes<HTMLButtonElement>.style?: React.CSSProperties | undefined
    return (
        <>
      
        <button type="button" 
    ref={(element) => {  setB (element) ; }}
style={fstyle()}
    value="demo" onClick={deleteAll}>clear
    </button>
        </>
      );
}
  
const myMapStateToProps =(state:any) =>{
    return{
  transitionList:state.transitionPart.transitions,
  statusesList:state.statusPart.statuses
    }
}
export default connect(myMapStateToProps,{deleteAllStatus,deleteAllTransition})(RedButton);