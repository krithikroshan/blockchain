import "../styles/globals.css";
import "antd/dist/antd.css";
// React redux imports
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";
import { useState, useEffect } from 'react';
import { UserContext } from '../lib/UserContext';
import Router from 'next/router';
import { magic } from '../lib/magic';
import Layout from '../components/Common/Layout';
import { ThemeProvider } from '@magiclabs/ui';
import '@magiclabs/ui/dist/cjs/index.css';

function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();

  return (
    <Provider root store={store}>
      <ThemeProvider root>
      <UserContext.Provider value={[user, setUser]}>
        {/* <Layout> */}
          <Component {...pageProps} />
        {/* </Layout> */}
      </UserContext.Provider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;