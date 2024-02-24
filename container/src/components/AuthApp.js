import React, { useEffect, useRef } from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  console.log("auth compo");

  useEffect(() => {
    console.log("auth use effect");
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: (/*location*/ { pathname: nextPathname }) => {
        console.log("the container noticed navigation", nextPathname);
        const currentPath = history.location.pathname;

        if (currentPath !== nextPathname) {
          history.push(nextPathname);
        }
      },
      // onSignIn: () => {
      //   console.log("user signed in");
      //   onSignIn()
      // },
      onSignIn
    });
    history.listen(onParentNavigate);
  }, []);

  return <div id="marketing-app" ref={ref} />;
};
