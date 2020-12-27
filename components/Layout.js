const { default: Navbar } = require("./Navbar");
import Head from "next/head";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>Bitprize</title>
        <link
          rel="stylesheet"
          href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      <div className="container">{props.children}</div>
    </div>
  );
}

export default Layout;
