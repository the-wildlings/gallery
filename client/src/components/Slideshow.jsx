import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ArrowKeysReact from "arrow-keys-react";

export default class Slideshow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      index: this.props.start
    };
    ArrowKeysReact.config({
      left: () => console.log("left"),
      right: () => console.log("right")
    });
  }

  render() {
    // console.log(ArrowKeysReact.events);
    return (
      <Modal {...this.props} size="xl" id="gallery-SSmodalBody">
        <div id="gallery-SScontainer">
          <img
            id="gallery-leftArrow"
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"
            onClick={e => this.props.handleItemClick(e, true)}
          />
          <br />
          <Carousel
            showArrows={false}
            showThumbs={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            selectedItem={this.props.start}
            onClickItem={e => this.props.handleItemClick(e, false)}
            width="100%"
            height="100%"
            transitionTime={40}
            swipeable={false}
            onChange={this.props.transition}
            id="gallery-mainSS"
          >
            {this.props.imageList.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} className="gallery-SSpic" />
                </div>
              );
            })}
          </Carousel>
          <img
            id="gallery-rightArrow"
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"
            onClick={this.props.handleItemClick}
          />
        </div>
      </Modal>
    );
  }
}
