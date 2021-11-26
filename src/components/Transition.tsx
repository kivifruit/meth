
 
const Transition  = (props: any) => {
    return (
   <><li>{ props.transitionName}:
   {props.transitionFrom}-{props.transitionTo}

   {/* :{props.transition.from}{props.transition.to} */}
   <button onClick={()=>{props.delete(props.transitionName)}}>delete</button>
   </li>
    </>  );
}
 
export default Transition;