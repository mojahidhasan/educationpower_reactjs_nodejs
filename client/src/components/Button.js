function Button({ title, href, type = "button" }) {
  return (
    <a href={href} className="h-min">
      <button
        type={type}
        className={`inline-block whitespace-nowrap rounded bg-color2 px-[15px] py-[7px] text-0.875 font-medium leading-1.625 text-white hover:bg-color2-darker lg:px-[37px] lg:py-[15px] lg:text-1`}
      >
        {title}
      </button>
    </a>
  );
}

export function ButtonExploreMore({
  type = "button",
  onClick,
  reference,
  content,
  disabled,
}) {
  return (
    <button
      ref={reference}
      type={type}
      className={`inline-block h-[40px] w-[120px] whitespace-nowrap rounded bg-color2 text-0.875 font-medium leading-1.625 text-white hover:bg-color2-darker disabled:bg-gray-400 xl:h-[65px] xl:w-[175px] xl:text-1`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

export function ButtonTransparent({ title, href, type = "button" }) {
  return (
    <a href={href}>
      <button
        type={type}
        className={`inline-block whitespace-nowrap rounded border-[1px] border-white bg-transparent px-[15px] py-[7px] text-0.875 font-medium leading-1.625 text-white lg:px-[37px] lg:py-[15px] lg:text-1`}
      >
        {title}
      </button>
    </a>
  );
}
export function ButtonSubscribe({ title, type }) {
  return (
    <button
      type={type}
      className={`inline-block w-full rounded border-[1px] border-white bg-color2 px-4 py-1 text-sm font-normal leading-normal text-white hover:bg-color2-darker lg:px-[37px] lg:py-[12px] lg:text-1 lg:font-semibold`}
    >
      {title}
    </button>
  );
}

export default Button;
