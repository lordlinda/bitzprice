import Layout from "../components/Layout";
import Fetch from "isomorphic-unfetch";
import Prices from "../components/Prices";

function Index(props) {
  return (
    <Layout>
      <h1>Welcome to BitzPrice</h1>
      <Prices bpi={props.bpi} />
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
