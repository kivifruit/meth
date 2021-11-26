import { ReactChild, ReactFragment, ReactPortal, useEffect, useState } from "react";
import { connect, } from 'react-redux';
// import { isTemplateExpression } from "typescript";
import { status } from "../models/status";
import { transition } from "../models/transition";
 import {deleteTransition,addTransition, getTransitions}from '../store/actions'
import Transition from "./Transition";
const TransitionList= (props: any) => {
    useEffect(() => {
        props.getTransitions();
      },[]);
    const [txt2, setTxt2] = useState<HTMLInputElement|null>();
    const [from, setFrom] = useState<HTMLSelectElement|null>();
    const [to, setTo] = useState<HTMLSelectElement|null>();
    const deleteTransition1=(name:string)=>{
        props.deleteTransition(name);
      }
    const add=(name:string,from:string,to:string)=>{
//should avoid ''?
let fromtoset:status=new status(from);
let totoset:status=new status(to);
let tran:transition=new transition(name,fromtoset,totoset);
props.addTransition(tran);
      }
    return ( <>
      <h3>Add transitions</h3>
      name:<input type="test" 	ref={(element) => {  setTxt2 (element) ; }}></input>
     from <select name="from" ref={(element) => {  setFrom (element) } } > {props.statusesList.map((item:status)=>{ return<option value={item.name}>{item.name}</option>})}</select>
      to<select name="to" ref={(element) => {  setTo (element) } }>{props.statusesList.map((item: status)=>{console.log("n",item.name);return <option value={item.name}>{item.name}</option>})}</select>
      <button onClick={()=>{add(txt2?txt2.value:'',from?from.value:'',to?to.value:'')}}>add</button>
    {
props.transitionList.map((item: any, i: any)=>{
          return <Transition key={i}
           transitionName={item.name} 
           transitionFrom={item.from.name}
           transitionTo={item.to.name}
           delete={deleteTransition1} />;
        })
        }   
    </> );
}
const myMapStateToProps =(state:any) =>{
    return{
  transitionList:state.transitionPart.transitions,
  statusesList:state.statusPart.statuses
}
}
export default connect(myMapStateToProps,{deleteTransition,addTransition, getTransitions})(  TransitionList );

