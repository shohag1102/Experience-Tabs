import { useState } from "react";
import Experience from "./components/Experience";
import Header from "./components/Header";
import Names from "./components/Names";

import Data from "./components/Data";
import { getRoles } from "@testing-library/react";

let dutyListArr=[]
Data.map((d)=>dutyListArr.push(d.duties))

// name array 
const names = []
Data.map(n=>names.push(n.company))

function App() {
  let tommy=0
  let cuker=2
  let bigdrop=1
  let resultPerson=0

  let [nameArr, setNamArr] = useState(names)
  let [resultName, setResultName] = useState('TOMMY')
  let [singleDetail, setSingleDetail] = useState(Data[0])

  let namKi=(name)=>{
    resultName = name
    setResultName(resultName)

    singleDetail = Data.filter((n, index)=>n.company===name)

    if(name==='TOMMY') resultPerson=0
    else if(name==='BIGDROP') resultPerson=1
    else if(name==='CUKER') resultPerson=2

    setSingleDetail(
      Data[resultPerson]
    )
  

  }
  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Names 
        names={names}
        namKi={namKi}
        
        />
        <Experience 
        dutyListArr={[singleDetail.duties]}
        {...singleDetail}
        />
      </div>
    </div>
  );
}

export default App;
