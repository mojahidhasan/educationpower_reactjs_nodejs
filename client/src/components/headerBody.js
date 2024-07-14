import SearchForm from "./SearchForm";

export default function HeaderBody() {
  return (
    <section className="px-5 lg:px-[10%] xl:px-[150px]">
      <div className="mx-auto flex w-full items-end bg-rectangleOrange bg-[length:100%_50%] bg-bottom bg-no-repeat text-center lg:text-right xl:bg-[length:35%_75%] xl:bg-left-bottom">
        <div className="flex h-[582px] w-full items-end justify-center bg-aMan bg-[center_bottom] bg-no-repeat lg:justify-end lg:bg-[left_bottom]">
          <div className="w-min text-center max-[500px]:scale-75 lg:text-left">
            <div className="lg:mr-5">
              <h1 className="mb-4 text-2.5 font-semibold xl:mb-8 xl:text-3.375 xl:leading-4.5 xl:tracking-dot-01056">
                Learn Everyday & Any New Skills Online with Top Instructors
              </h1>
              <p className="mb-5 font-inter font-normal leading-9 xl:mb-10 xl:text-1.25 xl:opacity-60">
                We are proudly to provide you Educationpower quality education
                on your hand
              </p>
            </div>
            <div className="mx-auto mb-10 w-min rounded bg-white px-2 py-2 xl:px-4 xl:py-[18px]">
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
