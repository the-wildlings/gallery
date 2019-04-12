import React from "react";

const ListEntry = props => {
  return (
    <img
      src={props.pic}
      className={"gallery-listPic" + props.index}
      onDoubleClick={props.handleDoubleClick}
      onMouseEnter={props.handleZoom}
      onMouseLeave={props.handleZoom}
    />
  );
};

export default ListEntry;
