import React from "react";

const ListEntry = props => {
  return <img src={props.pic} className={"gallery-listPic" + props.index} />;
};

export default ListEntry;
