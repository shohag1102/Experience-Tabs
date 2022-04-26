import Duties from "./Duties"


function Experience({dutyListArr, title, dates, company}) {
  return (
    <div className="desc-section">
        <h3>{title}</h3>
        <h4>{company}</h4>
        <p>{dates}</p>
        <div className="experience">
            <div className="text">
                <Duties dutyListArr={dutyListArr}/>
            </div>
        </div>
    <div className="button-div">
      <button >MORE INFO</button>
    </div>
  </div>
  )
}

export default Experience
