import React from "react";
import Directory from "../../components/directory/directory.component";
import "./homepage.styles.scss";

//Name:     HomePage
//Type:     Functional Component
//Input:    None
//Output:   <Directory> wrapped in a <Div>
//Purpose:  Call the HomePage Component to render the entire directory
const HomePage = () => (
  <div className="homepage">
    <Directory />
  </div>
);

export default HomePage;
