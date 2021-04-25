import React from "react";
import TopSectionItem from "./TopSectionItem";

const TopSection = () => {
  return (
    <div
      style={{ borderRadius: "20px" }}
      className="text-dark bg-light border border-black shadow mx-2 text-center p-2 bg-pink ">
      <h3>WALLET BALANCE </h3>
      <TopSectionItem itemName="TOKEN BALANCE" amount="200" />
      <TopSectionItem itemName="NAIRA BALANCE" amount="200" />
    </div>
  );
};

export default TopSection;
