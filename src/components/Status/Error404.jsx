import React from "react";
import SVGs from "../../assets/svg/SVGs";
import ErrorState from "../ErrorStates";

const Error404 = () => {
  return (
    <ErrorState
      img={SVGs.NotFound}
      text="Something went wrong. Don’t worry, it’s not you. it’s from our end. We are sorry for the inconvenience."
      title="Page Not Found"
      p="Ooops"
    />
  );
};

export default Error404;
