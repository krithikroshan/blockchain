import "../styles/globals.css";
import "antd/dist/antd.css";
// React redux imports
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { useState, useEffect } from 'react';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  return (
    <Provider root store={store}>
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
    </Provider>
  );
}

export default MyApp;