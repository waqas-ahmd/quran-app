export const createPageNumber = (num) => {
  if (num < 10) {
    return `000${num}`;
  } else if (num < 100) {
    return `00${num}`;
  } else if (num < 1000) {
    return `0${num}`;
  } else if (num < 10000) {
    return `0${num}`;
  }
};
