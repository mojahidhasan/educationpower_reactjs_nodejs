function CardSection1({ icon, title, body, moreClass }) {
  return (
    <div
      className={`bg-color4 px-5 py-4 max-lg:mx-auto max-lg:w-4/5 sm:px-10 sm:py-8 lg:px-5 ${moreClass} flex items-center lg:block`}
    >
      <div className="mr-5 lg:mb-3 lg:mr-0">
        <img src={icon} alt={title} />
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold sm:text-1 lg:mb-[14px] lg:text-1.25 lg:leading-7">
          {title}
        </h3>
        <p className="font-inter text-xs leading-4 sm:text-0.875 lg:text-1 lg:font-normal lg:leading-7">
          {body}
        </p>
      </div>
    </div>
  );
}

export default CardSection1;
