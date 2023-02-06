import "./index.css"


function App(){

let time=new Date().getHours();
let greetings="";
const cssStyle={ };

if(time>=1 && time<=11){
  greetings="Good Morning";
  cssStyle.color="green";
} 
else if(time>=12 && time <=18){
  greetings="Good AfterNone";
  cssStyle.color="orange";
}
else{
  greetings="good Night";
  cssStyle.color="purple"
}
return <div><h1>Hello Sir, <span style={cssStyle}> {greetings}</span></h1></div>
}

export default App;



