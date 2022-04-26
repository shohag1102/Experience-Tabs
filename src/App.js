import { useState } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Names from "./components/Names";

// name array 
const names = ['tommy', "bigdrop", 'cuker']

function App() {
  let [nameArr, setNamArr] = useState(names)
  let [resultName, setResultName] = useState('tommy')

  let namKi=(name)=>{
    console.log(name)
    resultName = name
    setResultName(resultName)
  }
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Names 
        names={names}
        namKi={namKi}
        />
        <Experience />
      </div>
    </div>
  );
}

export default App;
