import React from 'react'
import axios from "axios";
import styled from 'styled-components';

const Trbutton = styled.button`
    width:300px;
`

export default function Trader() {
    const API_KEY = "74D1B99DFBF345BBA3FB4476510A4BED4C78D13A"
  const url = `http://data-dbg.krx.co.kr/svc/sample/apis/idx/kospi_dd_trd`;
//   const [result, setResult] = useState({});
//   const [seoultemp, setSeoultemp] = useState({});
  
  //useEffect(() => {

    const traderShow = async ()=> {
      const data = await axios({
        method : 'get',
        url : url,
        Host: 'openapi.krx.co.kr',
        AUTH_KEY : API_KEY
      })
    //   setResult(data);
      console.log(data);
    };
  //  weatherShow();
  //});
  return (
    <div>
        <Trbutton onClick={traderShow}>hi</Trbutton>
        </div>
    
  )
}
