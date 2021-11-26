
 
const Status  = (props: any) => {
    return ( <>
<li>  <input type="radio" name="y" onClick={()=>{props.init(props.status)}}/> {props.status.name }
    <button  onClick={()=>{props.delete(props.status)}}>remove</button> 
 
{props.initStatus&&props.initStatus.name===props.status.name?(<>init</>):props.toarr&&props.isfinal(props.status)?(<>final</>):null}
{/*  {props.isorphf(props.status)}{}{props.initStatus&&props.isorphon(props.status)?(<>orphon</>):null}
?} */}
   </li>

    </> );
}
 
export default Status;