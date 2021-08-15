import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import { getToken } from "../utils";

const AuthHOC = (ComposedComponent) => {
  const Authentication = (props) => {
    const history = useHistory();

    useEffect(() => {
      const token = getToken();
      if (!token) history.push("/login");
    }, [history]);

    return <ComposedComponent {...props} />;
  };

  return Authentication;
};

export default AuthHOC;
