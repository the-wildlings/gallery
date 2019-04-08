import React from "react";
import ListEntry from "./listEntry.jsx";

const List = props => {
  return (
    <div className="grid-container">
      {props.imageList.map((item, index) => {
        return <ListEntry pic={item} key={index} index={index} />;
      })}
    </div>
  );
};

export default List;
