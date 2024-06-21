import { Provider } from "react-redux";
import { store } from "./redux/store";
import Exchange from "./components/Exchange";

export default function App() {
  return (
    <Provider store={store}>
      <Exchange />
    </Provider>
  );
}
