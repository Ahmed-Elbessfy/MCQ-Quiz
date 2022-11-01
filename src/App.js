import { Provider } from "react-redux";
import store from "./store/index";

// components import
import UserName from "./components/UserName";
import QuestionsList from "./components/QuestionsList";
import Result from "./components/Result";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container bg-white">
          <UserName />
          <QuestionsList />
          <Result />
        </div>
      </div>
    </Provider>
  );
}

export default App;
