import { status } from "../../models/status";


const initilize={
    statuses:[new status("m"),new status("j")],
    init1:null
}

export const statusReducer=(state=initilize,action: { type: any; payloud: any; })=>{
    switch(action.type){
        case "STATUSDELETE": let list:status[]= state.statuses.filter(s=>{return s.name!==action.payloud.name});
        let init = state.init1 && state.init1 !== action.payloud ? state.init1 : null;
        return{...state,statuses:list,init1:init}
    case "STATUSINIT":
        console.log(action.payloud)
return{...state,init1:action.payloud}; 
     case "STATUSADD":
    return{...state,statuses:[...state.statuses,action.payloud]}
    case "STATUSFILL":
        return{...state,statuses:action.payloud}
    case "DELETEALL":
        return {...state,statuses:[],init:null}
}
            
        
       
    //    let s1= state.songs.filter(s=>{s===action.payloud})
    //    state.songs.map((s,i=>{s===s1?state.songs.splice(i,1):null}))
//   ;list
      
  return state;
}