import React from "react";

const ListEntry = props => {
  return (
    <div>
      <img src={props.pic} className="listPic" />
    </div>
  );
};

export default ListEntry;
