import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import pages from "./pages.js";
const RotesWrapper = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {pages.map((item) => {
            return (
              <Route
                key={item.path}
                exact={item.exact}
                path={item.path}
                component={item.component}
              ></Route>
            );
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default RotesWrapper;
