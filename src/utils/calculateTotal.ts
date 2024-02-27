import { removeNum } from "./utils";

export const calculateTotal = (data) => {
  const costbasis = data?.reduce(
    (acc, item) => acc + Number(removeNum(item.costBasis)),
    0
  );
  const marketvalue = data?.reduce(
    (acc, item) => acc + Number(removeNum(item.marketValue)),
    0
  );
  const gainloss = data?.reduce(
    (acc, item) => acc + Number(removeNum(item.gainLoss)),
    0
  );
  const weight = data?.reduce(
    (acc, item) => acc + Number(removeNum(item.weight)),
    0
  );
  return { costbasis, marketvalue, gainloss, weight };
};
