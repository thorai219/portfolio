import { Switch, Route, Redirect } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <AboutUs />
      </Route>
      <Route exact path="/work">
        <OurWork />
      </Route>
      <Route exact path="/contact">
        <ContactUs />
      </Route>
      <Redirect path="/" />
    </Switch>
  );
};

export default Routes;
