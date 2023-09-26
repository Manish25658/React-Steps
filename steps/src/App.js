 import{useState} from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
 



export default function App(){
   const [step,setStep]=useState(1)
   const[isOpen,setIsOpen]=useState(true)
//Adding state to a component is done in 3 steps
// 1.1st we add  new state variable
// 2. We use it in a code ..that is usually JSX
// 3.We update the state in event handler

// 1.add new state variable
// useState(1)//here we are creating a new state variable and useState is a function and we pass in default parameter ie 1
// useState will return an array
// We get 2 values in console
// 0:1 (default STATE)
// 1.f (f is a function where we update the state variable)        

//const[step,setStep]=useState//destructuring
//[step] is 1
//setStep is function

// 2. using step in jsx
// <div className={ >=1 ?`active`:""}>1</div>

// 3.updating the state in eventhandler
  function HandlePrevious(){
 if (step>1) setStep(step-1);//setStep(step-1) will change the content as well as the active number
 //setStep((s)=>s-1)//same as above
 //using a callback
  }

  function HandleNext(){
    if (step<3) setStep(step+1);
    //setStep((s)=>s+1)
    // setStep(step+1);dosent update the state..actually no 3 and message  should be dispalyed..but dispalys only no2 and message 2
      }

      // function HandleisOpen(){
      //   setIsOpen(!isOpen)
      // }



  return(
    <div>
      <button className="close" onClick={()=>setIsOpen(!isOpen)}>&times;</button>
      {isOpen&&(
  <div className="steps">
    <div className="numbers">
    <div className={step >=1 ?`active`:""}>1</div>
    <div className={step >=2 ?`active`:""}>2</div>
    <div className={step >=3 ?`active`:""}>3</div>
    </div>
    <p className="message"> step{step}:{messages[step-1]}</p>
    <div className="buttons">
      <button style={{backgroundColor:"#7950f2",color:"white"}} onClick={() =>HandlePrevious()}>Previous</button>
      <button style={{backgroundColor:"#7950f2",color:"white"}} onClick={()=>HandleNext()}>Next</button>
      {/* <div className="close">
      <button onClick={()=>HandleisOpen()}>&times;</button>

    </div> */}

  </div>
  </div>
      )
      
  }
  
  </div>
      
  )
}
//function HandlePrevious() instead of creating a handle function ...
// we do the below method
//<button className="close" onClick={()=>setIsOpen()}>&times;</button>