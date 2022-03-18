import React from "react";
import "./menu-item.styles.scss";

//Name:     MenuItem
//Type:     Functional Component
//Input:    Props {title, imageUrl,size}
//Output:   <Div> containing an <h1> with the item's title and image
//Purpose:  Use string interpolation to render the background image of each menu item, as well as the title
const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;
