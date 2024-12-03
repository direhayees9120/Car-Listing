import { useState } from "react";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/NavigationBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Blog from "./components/blog/blog";
import About from "./components/about/About";
import Contact from "./components/contacts/Contact";
import AddCar from "./components/add-car/AddCar";
import Listing from "./components/listingPage/Listing";
import PageNotFound from "./components/notfound/PageNotFound";
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import CarDetails from "./components/listingPage/CarDetails";
const App = () => {
const [authToken, setAuthToken] = useState(null);
const [loginUser, setLoginUser] = useState(null);
 
  return (
    <div>
     {/* header section  */}
        <NavigationBar />

{/* react router setup  */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cars" element={<Listing/>} />
          <Route path="/contact" element={<Contact/>} />

          <Route path="/add-car" element={<AddCar/>} />
          <Route path="/cardetails/:id" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
         

{/* footer section */}
        <Footer />

        

    </div>
  );
};

export default App;
