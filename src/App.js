import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

/**
 * App structure for reference
 *
 * Header
 *        Logo (Title)
 *        Nav items (Right side)
 *        Cart
 * Body
 *          SearchBar
 *          RestaurantList
 *              Restaurant Card (many cards)
 *                    image
 *                    name
 *                    ratings
 *                    cusisine
 *
 * Footer
 *        Links
 *        Copyright
 */

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
