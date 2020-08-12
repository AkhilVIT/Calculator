import React,{useState} from 'react';
import './App.css';
function App() {
  let[initial,setInitial] = useState("");
  const buttons = [
    { buttonValue : 'C' , col : 2  },
    { buttonValue : '/' , col : 1 },
    { buttonValue : '%' , col : 1 },
    { buttonValue : '7' , col : 1 },
    { buttonValue : '8' , col : 1 },
    { buttonValue : '9' , col : 1 },
    { buttonValue : '*' , col : 1 },
    { buttonValue : '4' , col : 1 },
    { buttonValue : '5' , col : 1 },
    { buttonValue : '6' , col : 1 },
    { buttonValue : '-' , col : 1 },
    { buttonValue : '1' , col : 1 },
    { buttonValue : '2' , col : 1 },
    { buttonValue : '3' , col : 1 },
    { buttonValue : '+' , col : 1 },
    { buttonValue : '0' , col : 2 },
    { buttonValue : '.' , col : 1 },
    { buttonValue : '=' , col : 1 }
  ]
  return (
    <div className="calculator">
      <h1>CALCULATOR</h1><br></br>
      <div className="container">
        
        <div className="display" style={{}}>
          <input type="text" value={initial}/>
        </div>
        <div>
          {
            buttons.map((btn)=>{
              return <div className={`col-${btn.col}`}>
              <button onClick = {()=>{
                if(btn.buttonValue!=="=" && btn.buttonValue!=="C")
                {
                  setInitial(initial+btn.buttonValue)
                }
                else if(btn.buttonValue==="C")
                {
                  setInitial("")
                }
                else if(btn.buttonValue==="=")
                {   
                  try {
                    // eslint-disable-next-line no-eval
                    setInitial(eval(initial))
                  } catch(err) {
                  
                    alert('Wrong Input');
                  
                  }
                }
                
                }}>{btn.buttonValue}</button>
              </div>
            })
          }
          </div>
      </div>
    </div>
  );
}

export default App;
