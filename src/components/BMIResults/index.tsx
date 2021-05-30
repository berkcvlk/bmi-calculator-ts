import { useHistory } from "react-router";
import {
  BIMScoreLabel,
  BIMScore,
  BIMCategoryList,
  BIMCategoryListItem,
} from "../../styles/bmi-results";
import { animated, useSpring } from "react-spring";

import { StyledButton } from "../../styles/button";
import { StyledLabel } from "../../styles/input";
import { clearLocalStorage } from "../../utils/localStorage";
import { animateProps } from "./animate";

interface Props {
  bmi: string;
}

const BMIResults: React.FC<Props> = ({ bmi }) => {
  const history = useHistory();
  const animate = useSpring(animateProps);

  const recalculateHandler = () => {
    // Clear Local Storage
    clearLocalStorage();
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
    <animated.div style={animate}>
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
    </animated.div>
  );
};

export default BMIResults;
