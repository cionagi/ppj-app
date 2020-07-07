export const generatePrice = (max = 10000, min = 1000) => {
  return Math.floor(Math.random() * (max - min)) + min;
};
