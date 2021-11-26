
import {status}from '../../models/status'
import axios from "axios";
export const addStatustoreducer=(status:status)=>{
return {
    type:"STATUSADD",
    payloud:status
}
}
export const initStatus=(status:status)=>{
    return {
        type:"STATUSINIT",
        payloud:status
    }
    }
export const deleteStatustoreducer=(status:status)=>{
    return {
        type:"STATUSDELETE",
        payloud:status
    }
     }
     export const fillStatustoreducer=(statuses:status[])=>{
        return {
            type:"STATUSFILL",
            payloud:statuses
        }
         }  
      export const deleteAll=()  =>{
return{
 type:"DELETEALL",
 payload:null
}

         }
         export const deleteAllStatus = () => {
            return (dispatch: (arg0: any) => void) => {
            axios.get(`https://localhost:44341/status/deleteall`).then((succ) => {
                  console.log("s deleteall");
                    dispatch( deleteAll());
                   
                }).catch((er) => {
                  
                    console.log(er.message)         
                })
            }
        } 
     export const addStatus = (status:status) => {
        return (dispatch: (arg0: any) => void) => {
        axios.post(`https://localhost:44341/status/add`,status).then((succ) => {
      
                dispatch(addStatustoreducer(succ.data));
                      console.log("s add",succ); 
            })
            .catch((er) => {
              
                console.log(er.message)         
            })
        }
    }
    export const deleteStatus = (status:status) => {
        return (dispatch: (arg0: any) => void) => {
        axios.post(`https://localhost:44341/status/delete`,status).then((succ) => {
              console.log("s delete",succ.data);
                dispatch(deleteStatustoreducer(status));
               
            })
            .catch((er) => {
              
                console.log(er.message)         
            })
        }
    }
    export const  getStatuses = () => {
        return (dispatch: (arg0: { type: string; payloud: status[]; }) => void) => {
            axios.get(`https://localhost:44341/status/all`).then((succ) => {
                console.log([succ.data[0]]);
    
                dispatch(fillStatustoreducer(succ.data))
              
                // return succ.data.length;
            }).catch((er) => {
                console.log(er.message)
            })
        }
    }
    