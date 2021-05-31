import { useState } from "react";
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
import { Button } from "../UI/Button/styles";
import CategoryListContainer from "./CategoryListContainer";
import AnimatedDiv from "../UI/Animated/AnimatedDiv";
import Modal from "../UI/Modal";

const BMIResults = () => {
  const [showModal, setShowModal] = useState(false);
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
      <Button onClick={() => setShowModal(true)}>See Recommendations</Button>
      <Button onClick={recalculateHandler}>Re-calculate</Button>
      {showModal && <Modal onClose={() => setShowModal(false)}>berk</Modal>}
    </AnimatedDiv>
  );
};

export default BMIResults;
