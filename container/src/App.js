import React from "react";
import MarketingApp from "./components/MarketingApp";

// Added AWS cloudfront distribution invalidation

export default () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <hr />
      <MarketingApp />
    </div>
  );
};
