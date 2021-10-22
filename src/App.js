import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import OrderProvider from "./utilites/context/OrderProvider";
import Cart from "./utilites/Pages/Cart/Cart";
import FoodItemDetails from "./utilites/Pages/FoodItemDetails/FoodItemDetails";
import Home from "./utilites/Pages/Home/Home/Home";
import Login from "./utilites/Pages/Login/Login";
import Footer from "./utilites/Pages/Shared/Footer/Footer";
import Header from "./utilites/Pages/Shared/Header/Header";
import SignUp from "./utilites/Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <OrderProvider>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/food/:id">
              <FoodItemDetails />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
          <Footer />
        </OrderProvider>
      </Router>
    </div>
  );
}

export default App;
