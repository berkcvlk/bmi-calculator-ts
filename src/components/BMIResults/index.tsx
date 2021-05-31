import { Redirect, useHistory } from "react-router";
import { useSpring } from "react-spring";
import { StyledLabel } from "../UI/Input/styles";
import { ScoreLabel, Score } from "./styles";
import {
  clearLocalStorage,
  getBmiFromLocalStorage,
} from "../../utils/localStorage";
import { getBmiCategory } from "../../utils/bmi";
import { animateProps } from "./animate";
import CategoryListContainer from "./CategoryListContainer";
import Button from "../UI/Button";
import AnimatedDiv from "../UI/Animated/AnimatedDiv";

const BMIResults = () => {
  const history = useHistory();
  const animate = useSpring(animateProps);
  const bmi = getBmiFromLocalStorage();

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
    <AnimatedDiv animate={animate}>
      <StyledLabel>Your BMI</StyledLabel>
      <Score>{bmi}</Score>
      <ScoreLabel category={bmiCategory}>{bmiCategory}</ScoreLabel>
      <CategoryListContainer></CategoryListContainer>
      <Button onClick={recalculateHandler}>Re-calculate</Button>
    </AnimatedDiv>
  );
};

export default BMIResults;
