import React from "react";

const Review = props => {
  return (
    <div className="gallery-reviewComp" id={props.id ? props.id : null}>
      {props.pic ? <img src={props.pic} id="gallery-reviewPic" /> : null}
      <div id={props.textId ? props.textId : null}>
        <p className="gallery-reviewTitle">{props.name}</p>
        <p id="gallery-locationText">{props.location}</p>
        <div id="gallery-starHolder">
          <div id="gallery-starArr">
            <img
              src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
              className="gallery-starIcon"
            />
            <img
              src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
              className="gallery-starIcon"
            />
            <img
              src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
              className="gallery-starIcon"
            />
            <img
              src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
              className="gallery-starIcon"
            />
            <img
              src="https://s3-us-west-1.amazonaws.com/sharebnbicons/star+icon2.png"
              className="gallery-starIcon"
            />
          </div>
          <p className="gallery-reviewTitle" id="gallery-reviewText">
            {props.reviews} reviews
          </p>
        </div>
        {props.bottom ? (
          <div>
            <hr />
            <div id="gallery-bottomHolder">
              <p id="gallery-bottomText">View on Sharebnb</p>
              <img
                id="gallery-sharebnbIcon"
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/sharebnb+icon.png"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Review;
