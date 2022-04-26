import Duty from "./Duty"

function Duties({dutyListArr}) {
  return (
    <div className="experience">
      {dutyListArr.map(singleDuty=><Duty singleDuty={singleDuty} />)}
    </div>
  )
}

export default Duties
