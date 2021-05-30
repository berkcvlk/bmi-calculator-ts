import { Redirect, useHistory } from "react-router";
import { animated, useSpring } from "react-spring";
import { StyledLabel } from "../UI/Input/styles";
import { ScoreLabel, Score } from "./styles";
import { clearLocalStorage } from "../../utils/localStorage";
import { getBmiCategory } from "../../utils/bmi";
import { animateProps } from "./animate";
import CategoryListContainer from "./CategoryListContainer";
import Button from "../UI/Button";

const BMIResults: React.FC<{ bmi: string }> = ({ bmi }) => {
  const history = useHistory();
  const animate = useSpring(animateProps);

  // User land the bmi-result page
  // without calculate the bmi score
  // redirect to the home page
  if (!bmi) {
    return <Redirect to="/" />;
  }

  const recalculateHandler = () => {
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
      <Button onClick={recalculateHandler}>Re-calculate</Button>
    </animated.div>
  );
};

export default BMIResults;
