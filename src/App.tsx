import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import BMIForm from "./components/BMIForm";
import BMIResults from "./components/BMIResults";
import Main from "./layouts/Main/";

import styles from "./App.module.css";

import { getBmiFromLocalStorage, isInLocalStorage } from "./utils/localStorage";

const App = () => {
  const [bmi, setBmi] = useState("");
  const history = useHistory();

  useEffect(() => {
    if (isInLocalStorage()) {
      setBmi(getBmiFromLocalStorage());

      // If there is a bmi that calculated before
      // replace url to results page
      history.replace("/bmi-results");
    }
  }, [history]);

  return (
    <div className={styles.app}>
      <Main>
        <Switch>
          <Route path="/bmi-results">
            <BMIResults bmi={bmi} />
          </Route>
          <Route path="/" exact>
            <BMIForm onSetBmi={setBmi} />
          </Route>
        </Switch>
      </Main>
    </div>
  );
};

export default App;
