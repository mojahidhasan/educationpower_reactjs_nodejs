import Button, { ButtonTransparent } from "./Button";
import H2 from "./H2";

import { API_URL } from "../lib/constants";

export default function AboutUs() {
  return (
    <section className="bg-color5 px-5 py-10 text-white lg:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
      <div className="flex flex-col-reverse items-center gap-[50px] rounded-md bg-color1 p-[35px] lg:flex-row">
        <div className="flex-1 max-lg:text-center">
          <H2>Get More Info About us</H2>
          <p className="mb-5 font-inter text-1 font-normal leading-5 lg:mb-10 lg:text-1.25 lg:leading-9 xl:mb-[60px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
          <span className="flex flex-wrap gap-6 max-lg:justify-center">
            <Button title={"Book Now"} href={"#r"} />
            <ButtonTransparent title={"Contact Us"} href={"#RGf"} />
          </span>
        </div>
        <div className="flex-1">
          <img
            src={`${API_URL}/images/english-speaking.jpg`}
            alt="pic"
            className="h-full w-full rounded bg-color9 text-black"
          />
        </div>
      </div>
    </section>
  );
}
