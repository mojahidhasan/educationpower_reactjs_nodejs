import React from "react";

export default function Courses({ courseCards }) {
  return (
    <div className="mb-10 grid grid-cols-1 place-content-center gap-5 sm:grid-cols-2 md:grid-cols-3 xl:gap-[30px]">
      {courseCards}
    </div>
  );
}
