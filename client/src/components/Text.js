export default function Text({
  classes = "",
  h1 = false,
  h2 = false,
  children,
}) {
  if (h1 && !h2) {
    return <h1 className={`${classes}`}>{children}</h1>;
  } else if (h2 && !h1) {
    return <h2 className={`${classes}`}>{children}</h2>;
  }
  return <p className={`${classes}`}>{children}</p>;
}
