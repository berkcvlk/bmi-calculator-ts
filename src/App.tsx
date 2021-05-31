import { Switch, Route } from "react-router-dom";
import { Routes, IRoute } from "./routes";
import Main from "./layouts/Main/";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.app}>
      <Main>
        <Switch>
          {Routes.map((r: IRoute, i: number) => (
            <Route key="i" path={r.path} exact={r.isExact}>
              {r.component}
            </Route>
          ))}
        </Switch>
      </Main>
    </div>
  );
};

export default App;
