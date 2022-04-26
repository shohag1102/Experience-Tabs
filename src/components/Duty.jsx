
function Duty({singleDuty}) {
  return (
    <>
         {singleDuty.map(d=>{
           return (
            <div className="text">
            <p>
                <span><i className="fa-solid fa-angles-right"></i></span>
                </p>
                <p>
                {d}
                </p>
            </div>    
            )
        })}
    </>
  )
}

export default Duty
