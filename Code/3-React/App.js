const heading = React.createElement(
    "h1",
    {
      title: "heading",
      style: { backgroundColor: "teal" },
      className: "headingClass",
      id: "headingID",
    },
    "I am Heading 1"
  );

  console.log(heading);

  const heading2 = React.createElement(
    "h2",
    {
      title: "heading",
      style: { backgroundColor: "yellow" },
      className: "headingClass",
      id: "headingID",
    },
    "I am Heading 2"
  );

  const container = React.createElement("div", { id: "container" }, [
    heading,
    heading2,
  ]);

  const root = ReactDOM.createRoot(document.getElementById("root"));

  //passing a react element inside the root
  root.render(container);