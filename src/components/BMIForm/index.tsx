import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { useSpring, animated } from "react-spring";
import { updateLocalStorage } from "../../utils/localStorage";
import { calculateBmi } from "../../utils/bmi";
import { BMIFormHeader } from "./styles";
import { animateProps } from "./animate";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface Props {
  onSetBmi: (bmi: string) => void;
}

const BMIForm: React.FC<Props> = ({ onSetBmi }) => {
  const history = useHistory();
  const weightRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);
  const animate = useSpring(animateProps);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic Validation for input elements!
    // Only checks for empty
    if (weightRef.current?.value.trim() && heightRef.current?.value.trim()) {
      const bmi = calculateBmi(
        +weightRef.current.value,
        +heightRef.current.value
      );

      // Update localstorage anyway
      updateLocalStorage(bmi);

      onSetBmi(bmi);
      history.push("/bmi-results");
    }
  };

  return (
    <animated.div style={animate}>
      <BMIFormHeader>Calculate Your BMI</BMIFormHeader>
      <form onSubmit={submitHandler}>
        <Input
          label="Height"
          type="number"
          min={0}
          max={250}
          placeholder="175"
          measure="cm"
          ref={heightRef}
        />
        <Input
          label="Weight"
          type="number"
          min={0}
          max={250}
          placeholder="70"
          measure="kg"
          ref={weightRef}
        />
        <Button>Calculate</Button>
      </form>
    </animated.div>
  );
};

export default BMIForm;
