import React from "react";
import ReactDOM from "react-dom/client";

// Nested header element using React.createElement
const header = React.createElement("div", { className: "title" }, [
  React.createElement("h1", {}, "I am heading 1 from React.createElement"),
  React.createElement("h2", {}, "I am heading 2"),
  React.createElement("h3", {}, "I am heading 3"),
]);

//create same element using JSX
const JSX = (
  <div>
    <h1>I am heading 1 from JSX</h1>
    <h2>I am heading 2</h2>
    <h3>I am heading 3</h3>
  </div>
);

//Component Composition
const Hello = () => {
  return <h1>I am a Component composition</h1>;
};

//create same element using functional component
const Functionalcomponent = () => {
  return (
    <div>
      {header}
      {JSX}
      <Hello />
      {<Hello />}
      {Hello()}
      {<Hello></Hello>}
      <h1>I am heading from functional component</h1>
      <h2>I am heading 2</h2>
      <h3>I am heading 3</h3>
      <Headercomponent />
    </div>
  );
};

const Logo = () => {
  return <img className="logo" src="https://www.tailorbrands.com/wp-content/uploads/2022/02/icons-27-300x300.png" />;
};

const Searchbar = () => {
  return <input className="searchbar" type="text" placeholder="Search here" />;
};

const Usericon = () => {
  return <img className="usericon" src="https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" />;
};

 //Header component
const Headercomponent = () => {
  return (
    <div className="headercomponent">
      <Logo />
      <Searchbar />
      <Usericon />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

//passing a react element inside the root
root.render(<Functionalcomponent />);
