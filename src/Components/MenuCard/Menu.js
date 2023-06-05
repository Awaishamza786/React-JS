import React, { useState } from "react";
import MenuData from "./MenuData";
import ItemCard from "./ItemCard/ItemCard";
import Navbar from "../NavBar/Navbar";

const Category = [
    ...new Set(
      MenuData.map((data) => {
        return data.category;
      })
    ),
  ];

const Menu = () => {
  const [menuData, setMenuData] = useState(MenuData);
  const [category,setCategory]=useState(Category)


  

  const filterItem = (category) => {
    if (category === "all") {
      setMenuData(MenuData);
    } else {
      const updatedData = MenuData.filter((data) => {
        return data.category === category;
      });
      setMenuData(updatedData);
    }
  };

  return (
    <>
    <Navbar filterItem={filterItem} category={category}/>
    <ItemCard menuData={menuData} />
    </>
  );
};
export default Menu;
