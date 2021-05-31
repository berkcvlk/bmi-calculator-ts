import BMIResults from "../components/BMIResults";
import BMIForm from "../components/BMIForm";

export interface IRoute {
  path: string;
  isExact: boolean;
  component: JSX.Element;
}

const Routes: IRoute[] = [
  { path: "/bmi-results", isExact: false, component: <BMIResults /> },
  { path: "/", isExact: true, component: <BMIForm /> },
];

export default Routes;
