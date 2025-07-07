import React from "react";

const Header = () => {
  return (
    <div>
      <div>Header {import.meta.env.VITE_API_URL}</div>
      <div className="collection">
        <a href="#!" className="collection-item">
          0% APR available for qualified buyers
        </a>
      </div>
    </div>
  );
};

export default Header;
