import { useState } from "react";

function Prices(props) {
  console.log(props);
  const [currency, setCurrency] = useState("USD");
  const handleChange = (e) => {
    setCurrency(e.target.value);
    props.handleCurrency(e.target.value);
  };
  return (
    <div>
      <ul className="list-group">
        <li className="list-group-item">
          Bitcoin rate for {props.bpi[currency].description} :
          <span className="badge badge-primary">
            {props.bpi[currency].code}
          </span>
          <strong>{props.bpi[currency].rate}</strong>
        </li>
      </ul>
      <br />
      <select onChange={handleChange} className="form-control">
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="EUR">EUR</option>
        {/**<option value="AED">AED</option>
        <option value="BRL">BRL</option>
        <option value="CHF">CHF</option>
        <option value="HFD">HFD</option>
        <option value="KYD">KYD</option>
        <option value="NGN">NGN</option>
        <option value="ILS">ILS</option>
        <option value="ZAR">ZAR</option>
        <option value="UGX">UGX</option>
        <option value="MXN">MXN</option>
        <option value="RWF">RWF</option>
        <option value="INR">INR</option>
        <option value="BSD">BSD</option>
        <option value="JPY">JPY</option>
        <option value="KES">KES</option>
  **/}
      </select>
    </div>
  );
}

export default Prices;
