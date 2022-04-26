
function Name({name, namKi}) {
    
  return (
    <>
      <h3
       onClick={()=>namKi(name)}
        className={name? {name} : ''}
      >{name}</h3>
    </>
  )
}

export default Name
