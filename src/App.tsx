import "./App.css";
import Input from "./components/UI/Input";

const App = () => {
  return (
    <div className="app">
      App
      <Input type="number" min={0} max={250} measure="cm" placeholder="Please enter your height"/>
    </div>
  );
};

export default App;
