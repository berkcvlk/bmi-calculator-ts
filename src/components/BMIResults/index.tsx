import { useState } from "react";
import { Redirect, useHistory } from "react-router";
import { StyledLabel } from "../UI/Input/styles";
import { ScoreLabel, Score } from "./styles";
import {
  clearLocalStorage,
  getBmiFromLocalStorage,
} from "../../utils/local-storage";
import { getBmiCategory } from "../../utils/bmi";
import { animateProps } from "./animate";
import { Button } from "../UI/Button/styles";
import CategoryListContainer from "./CategoryListContainer";
import AnimatedDiv from "../UI/Animated/AnimatedDiv";
import Modal from "../UI/Modal";

const BMIResults = () => {
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
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

  const showModalHandler = () => {
    setShowModal(true);
  };

  const hideModalHandler = () => {
    setShowModal(false);
  };

  // Category name (normal, underweight etc.)
  // according to bmi score
  const bmiCategory = getBmiCategory(+bmi);

  const renderModal = showModal && (
    <Modal onClose={hideModalHandler}>Life is short, birds are flying...</Modal>
  );

  return (
    <AnimatedDiv animateProps={animateProps}>
      <StyledLabel>Your BMI</StyledLabel>
      <Score>{bmi}</Score>
      <ScoreLabel category={bmiCategory}>{bmiCategory}</ScoreLabel>
      <CategoryListContainer />
      <Button theme={bmiCategory} onClick={showModalHandler}>
        See Recommendations
      </Button>
      <Button theme="default" onClick={recalculateHandler}>
        Re-calculate
      </Button>
      {renderModal}
    </AnimatedDiv>
  );
};

export default BMIResults;
