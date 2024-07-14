import star from "../images/star.svg";
import halfStar from "../images/half-star.svg";
import { nanoid } from "nanoid";

function rate(r = "") {
  r = parseFloat(r);
  if (isNaN(r)) return "";

  const totalIteration = Math.floor(r);
  const rateArr = [];

  for (let i = 0; i < Math.min(totalIteration, 5); i++) {
    rateArr.push(
      <img
        key={nanoid(5)}
        src={star}
        className="mr-[5px] inline-block"
        alt="star"
      />,
    );
    if (i === totalIteration - 1 && r - totalIteration > 0) {
      rateArr.push(
        <img
          key={nanoid(5)}
          src={halfStar}
          className="mr-[5px] inline-block"
          alt="half star"
        />,
      );
    }
  }
  return rateArr;
}

export { rate };
