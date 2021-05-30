import { useHistory } from "react-router-dom";
import { useRef } from "react";
import { updateLocalStorage } from "../../utils/localStorage";

import { BMIFormHeader } from "../../styles/bmi-form";
import Button from "../UI/Button";
import Input from "../UI/Input";

interface Props {
  onSetBmi: (bmi: string) => void;
}

const BMIForm: React.FC<Props> = ({ onSetBmi }) => {
  const history = useHistory();
  const weightRef = useRef<HTMLInputElement>(null);
  const heightRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Basic Validation for input elements!
    // Only checks for empty
    if (weightRef.current?.value.trim() && heightRef.current?.value.trim()) {
      const weightN: number = +weightRef.current!.value;
      const heightN: number = +heightRef.current!.value / 100;
      const bmi: string = (weightN / (heightN * heightN)).toFixed(2);

      // Update localstorage anyway
      updateLocalStorage(bmi);

      onSetBmi(bmi);
      history.push("/bmi-results");
    }
  };

  return (
    <>
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
    </>
  );
};

export default BMIForm;
