import React, { useEffect } from "react";
import asyncComponent from "./AsyncComponent";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import { useClearCache } from "react-clear-cache";

const App = () => {
  const Topbar = asyncComponent(() => import("./Components/Topbar"));
  const Main = asyncComponent(() => import("./Components/Main"));
  const Footer = asyncComponent(() => import("./Components/Footer"));
  const Signup = asyncComponent(() => import("./Components/Signup"));
  const SignIn = asyncComponent(() => import("./Components/SignIn"));
  const Privacy = asyncComponent(() => import("./Components/Privacy"));
  const AboutUs = asyncComponent(() => import("./Components/AboutUs"));
  const ForgotPassword = asyncComponent(() =>
    import("./Components/ForgotPassword")
  );

  const { isLatestVersion, emptyCacheStorage } = useClearCache();

  useEffect(() => {
    if (!isLatestVersion) {
      emptyCacheStorage();
    }
  }, []);

  return (
    <>
      <Topbar />
      <Switch>
        <Route exact path="/guide">
          <AboutUs />
        </Route>
        <Route exact path="/">
          <Main />
        </Route>
        {/* <Route exact path="/charity">
          <Charity />
        </Route> */}
        <Route exact path="/privacy">
          <Privacy />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/forgot">
          <ForgotPassword />
        </Route>
      </Switch>
      <CookieConsent
        location="bottom"
        buttonText="Accept all cookies"
        cookieName="globaltop20cookie"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
        enableDeclineButton
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
      <Footer />
    </>
  );
};

export default App;
