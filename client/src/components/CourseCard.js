import { rate } from "../functions/rating.js";

function CourseCard({ img, fee, prevFee, courseTitle, rating, reviews, id }) {
  function review(rev = 0) {
    const terms = { 1000: "k", 1000000: "m", 1000000000: "b" };
    rev = parseFloat(rev);

    if (isNaN(rev)) return 0;

    let whichOne = rev;

    for (const [key, val] of Object.entries(terms)) {
      if (Math.floor(rev / key) > 0) {
        whichOne = (rev / key).toFixed(2) + val;
      }
    }

    return whichOne;
  }

  // async function fetchImg(image) {
  //   await fetch(image);
  // }
  // fetchImg(img);

  return (
    <div key={id} className="mx-auto max-w-[360px] rounded-md bg-white">
      <div className="bg-color9">
        <img src={img} alt={courseTitle} className="mx-auto block max-w-full" />
      </div>
      <div className="mx-auto px-[15px] py-[25px]">
        <div className="mb-3">
          <span className="leading mr-[6px] inline-block font-inter text-lg font-semibold leading-1.5625 text-color3 xl:text-1.5">
            ${fee}
          </span>
          <del className="mr-3 inline-block font-inter text-0.875 font-normal leading-1.5625 opacity-60">
            ${prevFee}
          </del>
          <span className="font-inter text-sm font-normal leading-1.5625 text-color2 xl:text-1">
            Course Fee
          </span>
        </div>

        <div className="mb-[18px] text-1 font-semibold leading-5 text-color2 lg:text-1.25 lg:leading-7">
          {courseTitle}
        </div>
        <div>
          <div className="mr-[14px] inline-block whitespace-nowrap">
            {rate(rating)}
          </div>

          <span className="inline-block whitespace-nowrap font-inter text-sm font-normal leading-4 opacity-60 xl:text-1 xl:leading-7">
            {review(reviews)} Reviews
          </span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
