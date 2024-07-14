import { rate } from "../functions/rating.js";
import { companies } from "../data/studentFeedback";

function CardFeedback({
  rating,
  comment,
  commenter,
  hisProffesion,
  hisProfilePic,
  company,
}) {
  return (
    <div
      className={`min-w-[100%] snap-start bg-white px-10 py-11 lg:min-w-[50%]`}
    >
      <div className="mb-[30px] flex flex-wrap items-center justify-between gap-2">
        <div className="whitespace-nowrap">{rate(rating)}</div>
        <div>
          {companies[company].desktop}
          {companies[company].mobile}
        </div>
      </div>
      <p className="mb-[56px] font-inter text-1.125 font-normal leading-8">
        {comment}
      </p>

      <div className="grid w-fit grid-cols-3">
        <div className="col-span-1 flex items-center text-center text-[10px]">
          <img
            className="h-[48px] w-[48px] rounded-full bg-color9"
            src={hisProfilePic}
            alt={commenter}
            height={48}
            width={48}
          />
        </div>
        <div className="col-span-2">
          <p className="mb-1 font-inter text-1.125 font-semibold leading-normal">
            {commenter}
          </p>
          <p className="font-inter text-1 font-normal leading-normal text-color4">
            {hisProffesion}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFeedback;
