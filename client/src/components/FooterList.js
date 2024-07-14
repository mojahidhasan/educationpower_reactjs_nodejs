function FooterList({ title, list }) {
  return (
    <div>
      <h3 className="mb-3 font-inter text-sm font-semibold leading-normal lg:mb-6 lg:text-1.125">
        {title}
      </h3>
      <ul className="font-inter text-xs font-normal leading-5 opacity-60 lg:text-0.875">
        {list.map((el) => (
          <li key={el} className="mb-5">
            <a href="#re">{el}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterList;
