import React from "react";
import { ShimmerPostList } from "react-shimmer-effects";

const Loader = () => {
  return (
    <div className="m-10">
      <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />
    </div>
  );
};

export default Loader;
