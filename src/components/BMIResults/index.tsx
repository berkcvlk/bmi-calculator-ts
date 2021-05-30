import { Redirect, useHistory } from "react-router";
import { animated, useSpring } from "react-spring";
import CategoryListContainer from "./CategoryListContainer";
import { StyledButton } from "../../styles/button";
import { StyledLabel } from "../../styles/input";
import { ScoreLabel, Score } from "../../styles/bmi-results";
import { clearLocalStorage } from "../../utils/localStorage";
import { getBmiCategory } from "../../utils/bmi";
import { animateProps } from "./animate";

const BMIResults: React.FC<{ bmi: string }> = ({ bmi }) => {
  const history = useHistory();
  const animate = useSpring(animateProps);

  if (!bmi) {
    return <Redirect to="/" />;
  }

  const recalculateHandler = () => {
    // Clear Local Storage
    clearLocalStorage();
    history.replace("/");
  };

  // Category name (normal, underweight etc.)
  // according to bmi score
  const bmiCategory = getBmiCategory(+bmi);

  return (
    <animated.div style={animate}>
      <StyledLabel>Your BMI</StyledLabel>
      <Score>{bmi}</Score>
      <ScoreLabel category={bmiCategory}>{bmiCategory}</ScoreLabel>
      <CategoryListContainer></CategoryListContainer>
      <StyledButton onClick={recalculateHandler}>Re-calculate</StyledButton>
    </animated.div>
  );
};

export default BMIResults;
