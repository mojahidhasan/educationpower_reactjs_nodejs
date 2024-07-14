import circledRightArrow from "../images/circled-right-arrow.svg";
import circledLeftArrow from "../images/circled-left-arrow.svg";

function TwoArrowButtons({ handleRightArrowClick, handleLeftArrowClick }) {
  return (
    <div className="whitespace-nowrap max-xl:text-center">
      <button className="mr-4 inline-block" onClick={handleLeftArrowClick}>
        <img
          className="hover:opacity-50"
          src={circledLeftArrow}
          alt="circled left arrow"
        />
      </button>

      <button className="inline-block" onClick={handleRightArrowClick}>
        <img
          className="hover:opacity-50"
          src={circledRightArrow}
          alt="circled right arrow"
        />
      </button>
    </div>
  );
}

export default TwoArrowButtons;
