import React from "react";
import SVGs from "../../assets/svg/SVGs";
import ErrorState from "../ErrorStates";

const Error404 = () => {
  return (
    <ErrorState
      img={SVGs.NotFound}
      text="We couldn't find the page. Try check the link and try again."
      title="Page Not Found"
      p="Ooops"
    />
  );
};

export default Error404;
