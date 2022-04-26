import Name from "./Name";


export default function Names({names,namKi}) {
  return (
    <div className="name-section">
      {names.map((name,index)=><Name
      key={index}
      name={name}
      namKi={namKi}
      />)}
    </div>
  )
}
