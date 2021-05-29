import { useState } from "react";
import { Switch, Route } from "react-router-dom";

import styles from "./App.module.css";
import BMIForm from "./components/BMIForm";
import BMIResults from "./components/BMIResults";
import Main from "./layouts/Main/";

const App = () => {
  const [bmi, setBmi] = useState("");

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
