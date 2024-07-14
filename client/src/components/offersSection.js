import payment from "../images/payment.svg";
import scheduling from "../images/scheduling.svg";
import reporting from "../images/reporting.svg";

import CardSection1 from "./Card.section1.main";
import H2 from "./H2";
import TwoArrowButtons from "./TwoArrowButtons";

export default function OffersSection() {
  return (
    <section className="px-[3%] py-10 sm:px-[10%] lg:py-[60px] xl:px-[150px] xl:py-[100px]">
      <div className="xl:grid xl:grid-cols-3 xl:gap-[50px]">
        <div className="max-xl:mb-10 max-lg:text-center lg:max-xl:flex lg:max-xl:justify-between">
          <div>
            <H2>
              Great <span className="whitespace-nowrap">Deals For You</span>
            </H2>
            <p className="mb-[26px] font-inter text-0.875 font-normal text-color2 opacity-60 lg:text-1.25 lg:leading-9">
              The sky was cloudless and of a deep dark blue the spectacle.
            </p>
          </div>

          <TwoArrowButtons />
        </div>

        <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-3 xl:col-span-2">
          <CardSection1
            icon={payment}
            title={"Easy Payment"}
            body={"online, billing invoice & contracts"}
          />
          <CardSection1
            icon={scheduling}
            title={"Scheduling"}
            body={"Easy scheduling & attendance tracking"}
          />
          <CardSection1
            icon={reporting}
            title={"Reporting"}
            body={"Student tracking & good analysis report"}
          />
        </div>
      </div>
    </section>
  );
}
