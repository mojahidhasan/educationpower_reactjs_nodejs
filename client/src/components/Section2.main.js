import Button from "./Button";
import H2 from "./H2";

import img2 from "../images/img2.jpg";

function Section2() {
  return (
    <section className="px-[3%] py-10 lg:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-[78px]">
        <div className="mx-auto flex items-center lg:mx-0">
          <img
            src={img2}
            alt="pic"
            height={400}
            width={400}
            className="w-full rounded-sm bg-color9"
          />
        </div>
        <div className="flex items-center">
          <div className="mx-auto text-center lg:text-left">
            <H2>Quality Education Suporior human resources</H2>
            <p className="mb-5 font-inter text-1 font-normal leading-4 opacity-60 lg:mb-10 lg:text-1.25 lg:leading-9">
              By connecting patients all over the world to the best instructors,
              resort like home helping individuals
            </p>

            <Button href={"#e"} title={"Explore More"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
