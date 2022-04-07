import "../styles/globals.css";
import "antd/dist/antd.css";
// React redux imports
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { createWrapper } from "next-redux-wrapper";

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  );
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);

//withRedux wrapper that passes the store to the App Component
export default wrapper.withRedux(MyApp);
