import React from "react";

const TopSectionItem = ({ itemName, amount }) => {
  return (
    <>
      <h6>
        {itemName}: {amount}
      </h6>
    </>
  );
};

export default TopSectionItem;
