// import { Route, Routes } from "react-router-dom"

const Stock = (props) => {

  return (
    
    <div value={props.value} className='container' onClick={props.onClick} >
      <div className='name-symbol'>
        <p>{props.company.symbol}</p>
        <p className='companyName'>{props.company.companyName}</p>
      </div>
      <div className='price'>
        <p>{props.company.latestPrice}</p>
        <p className='percentChange' 
            style={props.company.changePercent < 0 ? {backgroundColor: 'red'} : {backgroundColor: 'green'}} >
            {  props.company.changePercent }
        </p>      </div>
    </div>
  )
}

export default Stock