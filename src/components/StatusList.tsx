import React, { FunctionComponent, useEffect } from "react";
import { connect, } from 'react-redux';
import { status } from "../models/status";

import { deleteStatus,initStatus,addStatus, deleteTransition, getStatuses } from "../store/actions";
import { statusReducer } from "../store/reducers";
import Status from './Status';
import { useState } from "react";
import { transition } from "../models/transition";
import { hrtime } from "process";
import { queryHelpers } from "@testing-library/dom";


const StatusList  = (props: any) => {
  useEffect(() => {
  props.getStatuses();
},[]);

  console.log(props.initS)
const add=(name:string)=>{
  if (name!=''){
let  newstatus:status=new status(name);
props.addStatus(newstatus);
}
}
const deleteStatus=(status:status)=>{
  props.deleteStatus(status);
  props.transitionList.map((item:transition)=>{return (item.from.name===status.name||item.to.name===status.name)?props.deleteTransition(item.name):null})
}
const init=(s:status)=>{
  props.initStatus(s);
} 


const [all, setAll] = useState<status[]>();
const [fromarr, setFromarr] = useState<status[]>();
const [toarr, setToarr] = useState<status[]>();
const [ini, setIni] = useState<number>();


const isfinal=(item:status)=>{console.log("toarr",toarr,item);
let i= (toarr&&toarr.map(v=>{return v.name==item.name}));console.log("i",i);
 if(i?.includes(true))return false; 

  else return true;
}
const helpisorphon=()=>{
  setFromarr(props.transitionList.map((f: transition,i:number )=>{return f.from}));
  setToarr(props.transitionList.map((t: transition,i:number )=>{return t.to}));
  console.log(fromarr,toarr,"arraies")
}
const isorphon=(item:status)=>{
  if (fromarr==null||toarr==null)return true
  let index=fromarr&&fromarr.map((f:status,i)=>{return(f.name==props.initS.name)?i:null});
index&&index.map(i=>i&&setIni(i));
let i=fromarr?.length+toarr?.length;
if (index==null)return true;
while(ini&&i>0){i--;
if(toarr[ini]&&toarr[ini].name===item.name)return false;
else  {index=fromarr&&fromarr.map((f:status,i)=>{return toarr[ini]&&(f.name==toarr[ini].name)?i:null});
index&&index.map(i=>i&&setIni(i));}
if (index==null)return true;
}

return false;
}
useEffect(() => {helpisorphon();
  
}, [props.initS,props.transitionList]);
  const [txt2, setTxt2] = useState<HTMLInputElement|null>();

    return  ( <>
    <h3>Add status</h3>
    <input type="test" 	ref={(element) => {  setTxt2 (element) ; }}></input><button onClick={()=>{add(txt2?txt2.value:'')}}>add</button>
 { 

props.statusesList.map((item: any, i: any)=>{ 
          return <Status key={i} status={item} delete={deleteStatus}toarr={toarr} initStatus={props.initS} init={init} isfinal={isfinal} isorphon={isorphon}/>;

        })   
      
}       
        </> ) 

}  

 
const myMapStateToProps =(state:any) =>{
    return{
  transitionList:state.transitionPart.transitions,
  initS:state.statusPart.init1,
  statusesList:state.statusPart.statuses

}
}

export default connect(myMapStateToProps,{deleteStatus,initStatus,addStatus,deleteTransition,getStatuses})(StatusList); 


// import React, { FunctionComponent, useEffect } from "react";
// import { connect, } from 'react-redux';
// import { status } from "../models/status";

// import { deleteStatus,initStatus,addStatus, deleteTransition, getStatuses } from "../store/actions";
// import { statusReducer } from "../store/reducers";
// import Status from './Status';
// import { useState } from "react";
// import { transition } from "../models/transition";
// import { hrtime } from "process";
// import { queryHelpers } from "@testing-library/dom";

// // interface StatusList Props {
//  let inputi = React.createRef();
// // },currentstatus:status

// const StatusList  = (props: any) => {
//   useEffect(() => {
//   props.getStatuses();
// },[]);
// const recorphan=(arr:transition[],i:number,init:any,notorphan:any[])=>{
//   if(init===null||i==arr.length){return;}
// let h= arr.map((x:transition)=>{return x.from.name===init.name?x.to:null});
// i++;notorphan.push(h);recorphan(arr,i,h,notorphan);
// return notorphan; 
// }
// const [notor, setNotor] = useState<any[] | undefined>();
// // const help=(h:any)=>{
// // notor?setNotor([...notor,h]):setNotor([h]);
// // console.log("notor",notor);
// // }
// let arr:(status|null)[]=[];
// const recorphan1=(arr:transition[],i:number,init:any)=>{
//   if(init===null||i==arr.length){return;}
// let h= arr.map((x:transition)=>{return x.from.name===init.name?x.to:null});
// i++;recorphan1(arr,i,h);
// setNotor(h);console.log("h",h);console.log("notor",notor)
// return h; 
// }
//   console.log(props.initS)
// const add=(name:string)=>{
//   if (name!=''){
// let  newstatus:status=new status(name);
// props.addStatus(newstatus);
// }
// }
// const deleteStatus=(status:status)=>{
//   props.deleteStatus(status);
//   props.transitionList.map((item:transition)=>{return (item.from.name===status.name||item.to.name===status.name)?props.deleteTransition(item.name):null})
// }
// const init=(s:status)=>{
//   props.initStatus(s);
// }
// useEffect(() => {
//   // setA(recorphan1(props.transitionList,0,props.initS));
//   // console.log("noto",a);
//   recorphan1(props.transitionList,1,props.initS);
// }, [props.initS,props.transitionList]);
// const iso=(item:any)=>{return a?a.map(x=>{return isorph&&x?( x.name===item.name?setIsorph(false):null):null}):null}
//   const [txt2, setTxt2] = useState<HTMLInputElement|null>();
//   const [a, setA] = useState<any[] | undefined>([]);
//   const [isorph, setIsorph] = useState(true);
//     return  ( <>
//     <h1>Add status</h1>
//     <input type="test" 	ref={(element) => {  setTxt2 (element) ; }}></input><button onClick={()=>{add(txt2?txt2.value:'')}}>add</button>
//   {/* {setA(recorphan(props.transitionList,0,props.initS,[]))}      */}
// { }
//  {/* { props.statusesList.map((item: any, i: any)=>{
//    return a?a.map(x=>{return isorph&&x?(x.name===item.name?setIsorph(false):null):null}):null})}
// */}
//  { 

// props.statusesList.map((item: any, i: any)=>{
//           return <Status key={i} status={item} delete={deleteStatus} initStatus={props.initS} init={init} isorphf={iso} isorph={isorph}/>;

//         })   
      
// }       
//         </> ) 

// }  

 
// const myMapStateToProps =(state:any) =>{
//     return{
//   transitionList:state.transitionPart.transitions,
//   initS:state.statusPart.init1,
//   statusesList:state.statusPart.statuses

// }
// }

// export default connect(myMapStateToProps,{deleteStatus,initStatus,addStatus,deleteTransition,getStatuses})(StatusList); 



