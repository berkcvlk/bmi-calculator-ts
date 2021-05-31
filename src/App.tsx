import { Switch, Route } from "react-router-dom";
import BMIForm from "./components/BMIForm";
import BMIResults from "./components/BMIResults";
import Main from "./layouts/Main/";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Main>
        <Switch>
          <Route path="/bmi-results">
            <BMIResults />
          </Route>
          <Route path="/" exact>
            <BMIForm />
          </Route>
        </Switch>
      </Main>
    </div>
  );
};

export default App;
