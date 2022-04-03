import React from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.styles";

//Name:     DirectoryItem
//Type:     Functional Component
//Input:    Props {title, imageUrl,size}
//Output:   <Div> containing an <h1> with the item's title and image
//Purpose:  Use string interpolation to render the background image of each menu item, as well as the title
const DirectoryItem = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </Body>
    </DirectoryItemContainer>
  );
};
export default DirectoryItem;
