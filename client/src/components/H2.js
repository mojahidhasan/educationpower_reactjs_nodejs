function H2({ children, moreClass = "" }) {
  return (
    <h2
      className={`mb-2 text-3xl font-semibold tracking-dot-0125 lg:mb-6 lg:text-2.5 lg:leading-3.25 ${moreClass}`}
    >
      {children}
    </h2>
  );
}

export default H2;
