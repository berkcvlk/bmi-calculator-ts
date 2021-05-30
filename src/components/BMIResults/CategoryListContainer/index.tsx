import { CategoryList, CategoryListItem } from "../../../styles/bmi-results";

const CategoryListContainer = () => {
  return (
    <CategoryList>
      <CategoryListItem>{"Underweight: <18.5"}</CategoryListItem>
      <CategoryListItem>{"Normal Weight: 18.5 - 24.9"}</CategoryListItem>
      <CategoryListItem>{"Overweight: 25 - 29.9"}</CategoryListItem>
      <CategoryListItem>{"Obesity: 30 or greater"}</CategoryListItem>
    </CategoryList>
  );
};

export default CategoryListContainer;
