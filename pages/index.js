import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Prices from "../components/Prices";
import { useEffect, useState } from "react";

function Index(props) {
  const handleCurrency = (currency) => {
    console.log(currency);
  };
  const [currency, setCurrency] = useState("USD");
  const [data, setData] = useState();
  const getRate = async () => {
    const res = await fetch(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    const data = await res.json();
    setData(data.bpi);
    return {
      bpi: data.bpi,
    };
  };
  useEffect(() => {
    getRate();
  });
  console.log(data);
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      <Prices bpi={props.bpi} handleCurrency={handleCurrency} data={data} />
    </Layout>
  );
}
Index.getInitialProps = async function () {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
  const data = await res.json();

  return {
    bpi: data.bpi,
  };
};

export default Index;
