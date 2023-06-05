import React from "react";
import "../style.css";

const Navbar = ({ filterItem, category }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={() => filterItem("all")}>
            ALL
          </button>
          {category.map((data) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(data)}
              >
                {data}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
