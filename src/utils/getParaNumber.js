import { PARAS_PAGES } from "./constants";

export const getParaNumber = (page) => {
  var para = 30;
  if (page < 2) {
    return 0;
  }
  for (var i = 0; i < PARAS_PAGES.length; i++) {
    if (page >= PARAS_PAGES[i] && page < PARAS_PAGES[i + 1]) {
      para = i + 1;
      break;
    }
  }
  return para;
};
