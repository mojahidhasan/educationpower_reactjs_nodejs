export default function Logo({ color = "text-white", weight = "font-bold" }) {
  return (
    <div
      className={`mr-5 text-sm leading-normal tracking-dot-00469 sm:text-1.5 ${color} ${weight}`}
    >
      Educationpower
    </div>
  );
}
