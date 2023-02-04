import React from "react";
import { Helmet } from "react-helmet";
import SVGs from "../../assets/svg/SVGs";
import ErrorState from "../ErrorStates";

const Error404 = () => {
  return (
    <>
      <Helmet>
          <title>Not Found</title>
          <meta name="description" content="The requested resource was not found on this server."  />
          <meta property="og:title" content="Not Found" />
        </Helmet>
   
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
