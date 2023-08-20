import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import Admin from "./Admin/Admin";
import { Provider } from 'react-redux';
import Store from "./Store"
import Header from "./Header";
import { Footer } from "./shareCenter";
import HandleRoomBooking from "./Components/CommonComponents/HandleBooking";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <Router>
        <Switch>
          <Route path={"/"} render={(props) => <Admin {...props} />} />
          <Route path={"/admin"} render={(props) => <Admin {...props} />} />
          <Route path={'/admin/booking_room'} />
        </Switch>
      </Router>
    </Provider>
    {/* <Footer/> */}
  </React.StrictMode>,
  document.getElementById("root")
);


