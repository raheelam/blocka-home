import React from "react";

const ListItem = ({ description, amount, date }) => {
  return (
    <li className="list-group-item text-dark font-weight-bold d-flex justify-content-between ">
      <p className="m-0 p-0">{date}</p>
      <p className="m-0 p-0">{description}</p>
      <p className="m-0 p-0">{amount}</p>
    </li>
  );
};

export default ListItem;
