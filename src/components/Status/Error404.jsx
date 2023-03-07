import React from "react";
import SVGs from "../../assets/svg/SVGs";
import ErrorState from "../ErrorStates";
import { SeoHeader } from "../navbar/SeoHeader";

const Error404 = () => {
  return (
    <>
    <SeoHeader
        title="Not Found"
        description="The requested resource was not found on this server."
        type="webapp"
        name="InstinctHub"
        thumbnail=''
        url={window.location.href}
      />
   
    <ErrorState
      img={SVGs.NotFound}
      text="We couldn't find the page. Try check the link and try again."
      title="Page Not Found"
      p="Ooops"
    />
    </>
  );
};

export default Error404;
