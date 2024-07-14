/* eslint-disable jsx-a11y/label-has-associated-control */
import Button from "./Button";

function SearchForm() {
  return (
    <form
      method="POST"
      action="/search"
      className="flex h-min items-center justify-between font-inter text-0.875 font-normal leading-normal text-color1 max-sm:justify-center lg:text-1"
    >
      <label className="flex h-auto items-center rounded-lg bg-white py-3 sm:px-3">
        <svg
          width={25}
          height={25}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 25 25"
          className="inline-block"
        >
          <path d="m19.53 19.47-2.546-2.545a7.751 7.751 0 1 0-1.06 1.06l2.546 2.546c.707.707 1.767-.354 1.06-1.061zM6.58 7.581a6.25 6.25 0 1 1 8.839 8.839A6.25 6.25 0 0 1 6.58 7.58z" />
        </svg>
        <input
          type="text"
          name="keyword"
          placeholder="Insert Title or Keyword"
          className="w-[170px] pl-1 outline-none sm:w-[190px] sm:pl-3"
        />
      </label>
      <span className="flex items-center sm:mr-5 ">|</span>
      <select
        id="category"
        name="category"
        defaultValue={""}
        className="appearance-none rounded-md bg-transparent bg-arrowDown bg-[90%_center] bg-no-repeat py-2 pl-2 pr-[30px] max-sm:bg-white sm:right-0 sm:top-2/4 sm:mr-5"
      >
        <option value={""} disabled>
          Categories
        </option>
        <option value={"1"}>1</option>
        <option value={"2"}>2</option>
        <option value={"3"}>3</option>
        <option value={"4"}>4</option>
        <option value={"5"}>5</option>
      </select>

      <Button title={"Search Now"} type="submit" />
      {/* <button
    type="submit"
    className="col-span-5 block whitespace-nowrap rounded bg-color2 py-[15px] font-inter text-1 font-medium leading-1.625 text-white"
  >
    Search Now
  </button> */}
    </form>
  );
}

export default SearchForm;
