import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Slideshow extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
      index: this.props.start
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e) {
    console.log("click");
    if (this.state.index === this.props.imageList.length - 1) {
      this.setState({
        index: 0
      });
    } else {
      this.setState({
        index: this.state.index + 1
      });
    }
  }

  render() {
    return (
      <Modal {...this.props} size="xl">
        <Modal.Header closeButton />
        <Carousel
          showIndicators={false}
          showThumbs={false}
          infiniteLoop={true}
          selectedItem={this.state.index}
          onClickItem={this.handleItemClick}
          width="100%"
          useKeyboardArrows={true}
          transitionTime={40}
          swipeable={false}
          onChange={this.props.transition}
        >
          {this.props.imageList.map((item, index) => {
            return (
              <div key={index}>
                <img src={item} />
              </div>
            );
          })}
        </Carousel>
      </Modal>
    );
  }
}
