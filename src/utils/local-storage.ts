export const isInLocalStorage = () => {
  return localStorage.getItem("bmi") ? true : false;
};

export const getBmiFromLocalStorage = () => {
  return localStorage.getItem("bmi")!;
};

export const updateLocalStorage = (bmi: string) => {
  localStorage.setItem("bmi", bmi);
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
