import { useHistory } from "react-router";
import {
  BIMScoreLabel,
  BIMScore,
  BIMCategoryList,
  BIMCategoryListItem,
} from "../../styles/bmi-results";
import { StyledButton } from "../../styles/button";
import { StyledLabel } from "../../styles/input";

interface Props {
  bmi: string;
}

const BMIResults: React.FC<Props> = ({ bmi }) => {
  const history = useHistory();

  const recalculateHandler = () => {
    history.replace("/");
  };

  if (!bmi) {
    history.replace("/");
  }

  let bmiLabel = "";
  let bmiN = +bmi;
  if (bmiN <= 18.5) bmiLabel = "Underweight";
  else if (bmiN > 18.5 && bmiN <= 24.9) bmiLabel = "Normal";
  else if (bmiN > 24.9 && bmiN <= 29.9) bmiLabel = "Overweight";
  else bmiLabel = "Obesity";

  return (
    <>
      <StyledLabel>Your BMI</StyledLabel>
      <BIMScore>{bmi}</BIMScore>
      <BIMScoreLabel bmi={bmi}>{bmiLabel}</BIMScoreLabel>
      <BIMCategoryList>
        <BIMCategoryListItem>{"Underweight: <18.5"}</BIMCategoryListItem>
        <BIMCategoryListItem>
          {"Normal Weight: 18.5 - 24.9"}
        </BIMCategoryListItem>
        <BIMCategoryListItem>{"Overweight: 25 - 29.9"}</BIMCategoryListItem>
        <BIMCategoryListItem>{"Obesity: 30 or greater"}</BIMCategoryListItem>
      </BIMCategoryList>
      <StyledButton onClick={recalculateHandler}>Re-calculate</StyledButton>
    </>
  );
};

export default BMIResults;
