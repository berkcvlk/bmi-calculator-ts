export const bmiCategoryColorsByLabel: {
  [index: string]: string;
} = {
  underweight: "#abc4ff",
  normal: "#76c893",
  overweight: "#ff9100",
  obesity: "#ff4800",
};

export const getBmiCategory = (bmi: number) => {
  if (bmi < 18.5) return "underweight";
  if (bmi > 18.5 && bmi <= 24.9) return "normal";
  if (bmi > 25 && bmi <= 29.9) return "overweight";
  else return "obesity";
};

export const calculateBmi = (w: number, h: number): string => {
  const heightD: number = h / 100;
  return (w / (heightD * heightD)).toFixed(2);
};
