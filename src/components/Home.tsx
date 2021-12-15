import Redbutton from "./Redbutton";
import StatusList from "./StatusList";
import TransitionList from "./TransitionList";
import './App.css'
 
const Home = () => {
    const fstyle=()=>{
return {
    "vertical-align": "middle",
    "text-align":"center",
   
    "background-color":"yellow"}

    }
    return (<>

<table id="container">
    <tr className="center"><td><StatusList/></td><td><TransitionList/></td></tr>
    <tr className="b"><td><Redbutton /></td></tr>
    </table>
    </>  );
}
 
export default Home;