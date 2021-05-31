export const bmiCategoryColorsByLabel: {
  [index: string]: { dark: string; light: string };
} = {
  underweight: {
    dark: "#abc4ff",
    light: "#ebf1ff",
  },
  normal: {
    dark: "#76c893",
    light: "#d6ffe4",
  },
  overweight: {
    dark: "#ff9100",
    light: "#ffecd4",
  },
  obesity: {
    dark: "#ff4800",
    light: "#ffdfd4",
  },
  default: {
    dark: "#4f6f7a",
    light: "#dbe9ee",
  },
};

export const getBmiCategory = (bmi: number) => {
  if (bmi < 18.5) return "underweight";
  if (bmi > 18.5 && bmi <= 24.9) return "normal";
  if (bmi > 25 && bmi <= 29.9) return "overweight";
  return "obesity";
};

export const calculateBmi = (w: number, h: number): string => {
  return (w / (h / 100) ** 2).toFixed(2);
};
