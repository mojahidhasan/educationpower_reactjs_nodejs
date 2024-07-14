import CourseCard from "./CourseCard";
import H2 from "./H2";
import { ButtonExploreMore } from "./Button";
import { useState, useEffect, useRef } from "react";
import Courses from "./Courses";
import Loading from "./Loading";
import { API_URL } from "../lib/constants";
export default function CoursesList() {
  const [generatedFrom, setGeneratedFrom] = useState(0);
  const [courseCards, setCourseCards] = useState([]);
  const [buttonContent, setButtonContent] = useState("Explore More");
  const [disabled, setdisabled] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const exploreButtonRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/courses?limit=6&from=0`)
      .then((data) => data.json())
      .then((courses) => {
        const initialCards = courses.map((course) => {
          const { courseTitle, fee, id, prevFee, rating, reviews, img } =
            course;
          return (
            <CourseCard
              key={id}
              courseTitle={courseTitle}
              fee={fee}
              prevFee={prevFee}
              rating={rating}
              reviews={reviews}
              img={API_URL + img}
            />
          );
        });

        setGeneratedFrom(generatedFrom + 6);
        setCourseCards([...courseCards, ...initialCards]);
        setHasLoaded(true);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick() {
    setButtonContent(<SvgLoader />);
    setdisabled(true);

    fetch(`${API_URL}/courses?limit=6&from=${generatedFrom}`)
      .then((data) => data.json())
      .then((courses) => {
        console.log(courses);
        const generateCard = courses.map((course) => {
          const { courseTitle, fee, id, prevFee, rating, reviews, img } =
            course;

          return (
            <CourseCard
              key={id}
              courseTitle={courseTitle}
              fee={fee}
              prevFee={prevFee}
              rating={rating}
              reviews={reviews}
              img={img}
            />
          );
        });
        setButtonContent("Explore More");
        setdisabled(false);
        setCourseCards([...courseCards, ...generateCard]);
        setGeneratedFrom(generatedFrom + 6);
      });
  }

  return (
    <section className="bg-color5 px-5 py-10 lg:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
      <H2 moreClass="text-center">Our most popular courses</H2>
      <p className="mb-10 text-center font-inter text-1 font-normal leading-4 opacity-60 lg:text-1.25 lg:leading-9">
        The sky was cloudless and of a deep dark blue the spectacle before us
        was indeed.{" "}
      </p>

      {hasLoaded ? <Courses courseCards={courseCards} /> : <Loading />}

      <div className="text-center">
        <ButtonExploreMore
          disabled={disabled}
          content={buttonContent}
          reference={exploreButtonRef}
          onClick={handleClick}
        />
      </div>
    </section>
  );
}

function SvgLoader() {
  return (
    <svg
      version="1.1"
      id="L9"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 0 0"
      fill="#fff"
      className="mx-auto inline-block max-h-full max-w-full"
    >
      <path
        fill="#fff"
        strokeWidth="5"
        stroke="#fff"
        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="700ms"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
}
