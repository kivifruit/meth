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
<div id="container">
    <div id="a">
   <h1 id="App">build a work flow</h1>
 <div id="App2" ><StatusList /> </div> 
      <div ><TransitionList  /></div>
</div>
<div id="b">
<Redbutton />
</div>
</div> 
    </>  );
}
 
export default Home;