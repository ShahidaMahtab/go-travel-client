import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import About from "./Pages/About/About";
import AddServices from "./Pages/AddServices/AddServices";
import Booking from "./Pages/Booking/Booking";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageBookings from "./Pages/ManageBookings/ManageBookings";
import MyBooking from "./Pages/MyBooking/MyBooking";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <Route path="/addservices">
              <AddServices></AddServices>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/managebookings">
              <ManageBookings></ManageBookings>
            </Route>
            <Route path="/mybooking">
              <MyBooking></MyBooking>
            </Route>
            <PrivateRoute path="/booking/:bookingid">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
