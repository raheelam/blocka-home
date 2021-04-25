import React from "react";
import ListItem from "./ListItem";

const ActivityList = () => {
  return (
    <ul className="list-group mb-5 pb-5">
      <ListItem date="Date" description="Description" amount="Amount" />
      <ListItem date="1/1/21" description="Sent" amount="N200.00" />
      <ListItem date="1/1/21" description="Received" amount="N200.00" />
      <ListItem date="1/1/21" description="Sent" amount="N200.00" />
      <ListItem date="1/1/21" description="Received" amount="N200.00" />
      <ListItem date="1/1/21" description="Received" amount="N200.00" />
      <ListItem date="1/1/21" description="Sent" amount="N200.00" />
      <ListItem date="1/1/21" description="Sent" amount="N200.00" />
      <ListItem date="1/1/21" description="Sent" amount="N200.00" />
    </ul>
  );
};

export default ActivityList;
