import React, { useEffect, useRef } from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const {onParentNavigate} = mount(ref.current, {
      onNavigate: (/*location*/ { pathname: nextPathname }) => {
        console.log("the container noticed navigation", nextPathname);
        const currentPath = history.location.pathname;

        if (currentPath !== nextPathname) {
          history.push(nextPathname);
        }
      },
    })
    history.listen(onParentNavigate)
  }, [])

  return <div id="marketing-app" ref={ref} />;
};
