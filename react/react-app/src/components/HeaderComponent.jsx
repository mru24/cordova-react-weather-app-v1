import './HeaderComponent.css'

function Header({data,units}) {
  console.log("data: ",data,"units: ",units);
  const timezone = data?.timezone

  return (
    <div className="header">
      <div className="row">
        {timezone && <h4>{ timezone }</h4>}
      </div>
    </div>
  )
}

export default Header