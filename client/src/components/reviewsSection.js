import CardFeedback from "./CardFeedback";
import H2 from "./H2";
import TwoArrowButtons from "./TwoArrowButtons";
import { studentFeedback } from "../data/studentFeedback";
import { useRef, useState, useEffect } from "react";

function Section4() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [unnecessaryNums, setUnnecessaryNums] = useState(2);
  const scroll = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setUnnecessaryNums(1);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setUnnecessaryNums(1);
      } else {
        setUnnecessaryNums(2);
        setActiveIndex(scroll.current.children.length - 2);
      }
    });
  }, []);

  function handleLeftArrowClick() {
    if (activeIndex > 0) {
      const prevIndex = activeIndex - 1;
      scroll.current.children[prevIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(prevIndex);
    }
  }
  function handleRightArrowClick() {
    const totalItems = scroll.current.children.length;
    const nextIndex = activeIndex + 1;
    if (activeIndex < totalItems - unnecessaryNums) {
      scroll.current.children[nextIndex].scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
      setActiveIndex(nextIndex);
    }
  }
  return (
    <section className="bg-[rgba(29,33,47,0.0139)] px-5 py-10 lg:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
      <div className="mb-10 items-end justify-between gap-5 xl:flex">
        <div className="max-xl:mb-5 max-xl:text-center">
          <H2>What our student say?</H2>
          <p className="font-inter text-sm font-normal leading-4 opacity-60 lg:text-1 lg:leading-6">
            Follow this steps below to start use of Project Software.
          </p>
        </div>

        <TwoArrowButtons
          handleRightArrowClick={handleRightArrowClick}
          handleLeftArrowClick={handleLeftArrowClick}
        />
      </div>
      <div
        ref={scroll}
        className="no-scrollbar flex snap-x snap-mandatory flex-row gap-5 overflow-x-scroll"
      >
        <CardFeedback
          rating={studentFeedback[0].rating}
          company={studentFeedback[0].company}
          comment={studentFeedback[0].comment}
          commenter={studentFeedback[0].commenter}
          hisProfilePic={studentFeedback[0].hisProfilePic}
          hisProffesion={studentFeedback[0].hisProffesion}
        />
        <CardFeedback
          rating={studentFeedback[1].rating}
          company={studentFeedback[1].company}
          comment={studentFeedback[1].comment}
          commenter={studentFeedback[1].commenter}
          hisProfilePic={studentFeedback[1].hisProfilePic}
          hisProffesion={studentFeedback[1].hisProffesion}
        />
        <CardFeedback
          rating={studentFeedback[0].rating}
          company={studentFeedback[0].company}
          comment={studentFeedback[0].comment}
          commenter={studentFeedback[0].commenter}
          hisProfilePic={studentFeedback[0].hisProfilePic}
          hisProffesion={studentFeedback[0].hisProffesion}
        />
        <CardFeedback
          rating={studentFeedback[1].rating}
          company={studentFeedback[1].company}
          comment={studentFeedback[1].comment}
          commenter={studentFeedback[1].commenter}
          hisProfilePic={studentFeedback[1].hisProfilePic}
          hisProffesion={studentFeedback[1].hisProffesion}
        />
        <CardFeedback
          rating={studentFeedback[1].rating}
          company={studentFeedback[1].company}
          comment={studentFeedback[1].comment}
          commenter={studentFeedback[1].commenter}
          hisProfilePic={studentFeedback[1].hisProfilePic}
          hisProffesion={studentFeedback[1].hisProffesion}
        />
      </div>
    </section>
  );
}

export default Section4;
