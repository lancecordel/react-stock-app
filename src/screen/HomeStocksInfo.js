
function HomeStocksInfo(props) {
    return (
        <div value={props.value} className='container' onClick={props.onClick} >
        <div  >
          <p>{props.company.symbol}</p>
          <p className='companyName'>{props.company.companyName}</p>
          <p className='companyName'>change        </p>
          <p className='companyName'>Previous Close </p>
          <p className='companyName'>Open Price   </p>
          <p className='companyName'>Daily Low    </p>
          <p className='companyName'>Daiy High    </p>
          <p className='companyName'>52 Week Low  </p>
          <p className='companyName'>52 Week High </p>
          {/* <p className='companyName'> &nbsp; &nbsp; {props.company.primaryExchange}</p> */}
        </div>
        <div  >
          <p>&nbsp;</p>
          <p className='companyName'>&nbsp;</p>
          <p className='companyName'>{props.company.change}</p>
          <p className='companyName'>{props.company.close}</p>
          <p className='companyName'>{props.company.open}</p>
          <p className='companyName'>{props.company.low}</p>
          <p className='companyName'>{props.company.high}</p>
          <p className='companyName'>{props.company.week52Low}</p>
          <p className='companyName'>{props.company.week52High}</p>
          {/* <p className='companyName'>{props.company.primaryExchange}</p> */}
        </div>
        </div>

    );
}

export default HomeStocksInfo;