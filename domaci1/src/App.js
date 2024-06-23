import  './styles.css'

const currentTime = new Date();
const vreme=currentTime.getHours();
const ime="Darko";
let bg="white";
let fontColor="black"
if(vreme>=21||vreme<=15){
  bg="black";
  fontColor="white";
}

function App(){
  return(
    <div style={{backgroundColor: bg}}>
    <h1 style={{color: fontColor}}>Dobro dosao u REACT {ime}</h1>
  </div>
  );

}

export default App;
