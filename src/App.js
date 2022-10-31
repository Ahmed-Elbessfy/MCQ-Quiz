import { Provider } from "react-redux";
import store from "./store/index";

// components import
import UserName from "./components/UserName";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container my-5">
          <UserName />
        </div>
      </div>
    </Provider>
  );
}

export default App;
