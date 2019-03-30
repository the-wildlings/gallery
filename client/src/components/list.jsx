import React from "react";
import ListEntry from "./listEntry.jsx";

const List = props => {
  return (
    <div>
      {props.imageList.map((item, index) => {
        return <ListEntry pic={item} key={index} />;
      })}
    </div>
  );
};

export default List;
