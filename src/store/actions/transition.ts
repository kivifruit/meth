

import axios from 'axios'
import { transition } from '../../models/transition'

export const addTransitiontoreducer=(transition:transition)=>{
return {
    type:"TRANSITIONADD",
    payloud:transition
}
}
export const addTransition = (transition:transition) => {
    return (dispatch: (arg0: any) => void) => {
    axios.post(`https://localhost:44341/transition/add`,transition).then((succ) => {
  
            dispatch(addTransitiontoreducer(succ.data));
                  console.log("s add",succ); 
        })
        .catch((er) => {
          
            console.log(er.message)         
        })
    }
}

export const deleteAll=()  =>{
    return{
     type:"DELETEALL",
     payload:null
    }
}
export const deleteAllTransition = () => {
    return (dispatch: (arg0: any) => void) => {
    axios.get(`https://localhost:44341/transition/deleteall`).then((succ) => {
          console.log("s deleteall");
            dispatch( deleteAll());
           
        }).catch((er) => {
          
            console.log(er.message)         
        })
    }
} 
export const deleteTransitiontoreducer=(name:string)=>{
    return {
        type:"TRANSITIONDELETE",
        payloud:name
    }
     }
     export const  deleteTransition= (name:string) => {
        return (dispatch: (arg0: any) => void) => {
        axios.get("https://localhost:44341/transition/delete?name="+name).then(() => {
            //  console.log("s delete",succ.data);
                dispatch(deleteTransitiontoreducer(name));
               
            })
            .catch((er) => {
              
                console.log(er.message)         
            })
        }
    }
     export const fillTransitiontoreducer=(transitions: transition[] )=> {
       return {
           type:"TRANSITIONFILL",
           payloud:transitions
       }
    }
    
     export const  getTransitions = () => {
        return (dispatch: (arg0: { type: string; payloud: transition[]; }) => void) => {
            axios.get(`https://localhost:44341/transition/all`).then((succ) => {
                console.log(succ.data);
    
                dispatch(fillTransitiontoreducer(succ.data))
              
                // return succ.data.length;
            }).catch((er) => {
                console.log(er.message)
            })
        }
    }

