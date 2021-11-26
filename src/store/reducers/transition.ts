import { transition } from "../../models/transition"
import {status}from '../../models/status'
import { connect } from "react-redux"
import { useState } from "react";
//const [statusList, setstatusList] = useState<status[]>([]);
//should connect to status reducer
// const f=(props:any)=>{
//      let d:status[]=props.stasusList;setstatusList(d)
// return(null)

// }

 const initilize={
    transitions:[new transition("b",new status("start"),new status("cancle"))]
// statusList?statusList:
}
 export const transitionReducer=(state=initilize,action: { type: any; payloud: any })=>{
    switch(action.type){
     case "TRANSITIONADD":
         //if from and to exists in songlist
   //    let from=   statusList.map(s=>{return s.name===action.payloud.from.name?s:null});
   //    let to =statusList.map(s=>{return s.name===action.payloud.to.name?s:null});
   //    let obj={...state}
   // to?from?(  obj={...state,transitions:[...state.transitions,action.payloud]}):null:null
   // return obj
   return {...state,transitions:[...state.transitions,action.payloud]}
    case "TRANSITIONDELETE":
    //    let s1= state.songs.filter(s=>{s===action.payloud})
    //    state.songs.map((s,i=>{s===s1?state.songs.splice(i,1):null}))
    let list= state.transitions.filter(t=>{return t.name!==action.payloud})
        return{...state,transitions:list}
        case "TRANSITIONFILL":
         return{...state,transitions:action.payloud}
        case "DELETEALL":
         return {...state,transitions:[]}
}
return state;
}
// function myMapStateToProps( state: any) {
//   return{  statusList:state.statusPart.statuses}
// }

//export default connect(myMapStateToProps,{})(f); 

