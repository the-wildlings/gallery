import React from "react";

const ListEntry = props => {
  return (
    <img
      src={props.pic}
      className={"gallery-listPic" + props.index}
      onDoubleClick={props.handleDoubleClick}
    />
  );
};

export default ListEntry;
