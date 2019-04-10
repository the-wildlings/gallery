import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Review from "./Review.jsx";

export default class Embed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dummyHTML:
        "<!DOCTYPE html>" +
        "\n" +
        '<html lang="en">' +
        "\n" +
        "<head>" +
        "\n" +
        "<title>Document</title>" +
        "\n" +
        "</head>" +
        "\n" +
        "<body>" +
        "\n" +
        "</body>" +
        "\n" +
        "</html>",
      showBoxes: false,
      price: false,
      reviews: false,
      links: false,
      index: 0
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.toggleBoxes = this.toggleBoxes.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleMouseEnter(e) {
    e.target.id = "gallery-hovered";
  }

  handleMouseLeave(e) {
    e.target.id = null;
  }

  handleCheck(e) {
    let target = e.target.id;
    this.setState({
      [target]: !this.state[target]
    });
  }

  toggleBoxes(e) {
    e.target.classList.toggle("gallery-flipped");
    this.setState({
      showBoxes: !this.state.showBoxes
    });
  }

  handleItemClick(e, negative) {
    if (negative) {
      if (this.state.index === 0) {
        this.setState({
          index: this.props.images.length - 1
        });
      } else {
        this.setState({
          index: this.state.index - 1
        });
      }
    } else {
      if (this.state.index === this.props.images.length - 1) {
        this.setState({
          index: 0
        });
      } else {
        this.setState({
          index: this.state.index + 1
        });
      }
    }
  }

  render() {
    return (
      <Modal {...this.props} dialogClassName="gallery-embedModal" size="xl">
        <Modal.Body id="gallery-embedBody">
          <div id="gallery-embedContainer">
            <div id="gallery-embedLeft">
              <img
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png"
                onClick={this.props.onHide}
                className="gallery-closeIcon"
              />
              <h4 className="gallery-modalTitle" id="gallery-embedTitle">
                Embed this home
              </h4>
              <p>Copy and paste the following HTML into your website code:</p>
              <textarea
                rows="3"
                cols="50"
                value={this.state.dummyHTML}
                id="gallery-embedInput"
              />
              <br />
              <Button id="gallery-copyButton">Copy HTML</Button>
              <br id="gallery-space" />
              <p
                className="gallery-customCodeText"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
                onClick={this.toggleBoxes}
              >
                Customize your code
              </p>
              <img
                id={this.state.showBoxes ? "gallery-uparrow" : "gallery-arrow"}
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/arrow+icon.png"
              />
              {this.state.showBoxes ? (
                <form id="gallery-embedBoxes">
                  <label
                    className="gallery-label"
                    id="price"
                    onClick={this.handleCheck}
                  >
                    <div
                      className={
                        this.state.price
                          ? "gallery-clicked"
                          : "gallery-checkbox"
                      }
                      onClick={this.handleCheck}
                      id="price"
                    />{" "}
                    Hide the price
                  </label>
                  <br />
                  <label
                    className={"gallery-label"}
                    id="reviews"
                    onClick={this.handleCheck}
                  >
                    <div
                      className={
                        this.state.reviews
                          ? "gallery-clicked"
                          : "gallery-checkbox"
                      }
                      onClick={this.handleCheck}
                      id="reviews"
                    >
                      {this.state.reviews ? (
                        <img
                          className="gallery-check"
                          src="https://s3-us-west-1.amazonaws.com/sharebnbicons/check+icon.png"
                        />
                      ) : null}
                    </div>{" "}
                    Hide the reviews
                  </label>
                  <br />
                  <label
                    className={"gallery-label"}
                    id="links"
                    onClick={this.handleCheck}
                  >
                    <div
                      className="gallery-checkbox"
                      className={
                        this.state.links
                          ? "gallery-clicked"
                          : "gallery-checkbox"
                      }
                      onClick={this.handleCheck}
                      id="links"
                    />{" "}
                    Create "no follow" links
                  </label>
                </form>
              ) : (
                <div id="gallery-whiteSpace" />
              )}
            </div>
            <div id="gallery-embedRight">
              <div id="gallery-embedSScontainer">
                <div id="gallery-preview">
                  <span id="gallery-previewText">PREVIEW</span>
                </div>
                <img
                  src="https://s3-us-west-1.amazonaws.com/sharebnbicons/opaque+heart.png"
                  id="gallery-embedLikeIcon"
                />
                <img
                  id="gallery-embedLeftArrow"
                  src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"
                  onClick={e => this.handleItemClick(e, true)}
                />
                <Carousel
                  showArrows={false}
                  showThumbs={false}
                  showStatus={false}
                  showIndicators={false}
                  showThumbs={false}
                  infiniteLoop={true}
                  selectedItem={this.state.index}
                  width="100%"
                  height="100%"
                  transitionTime={40}
                  swipeable={false}
                >
                  {this.props.images.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item} className="gallery-embedSSpic" />
                      </div>
                    );
                  })}
                </Carousel>
                <img
                  id="gallery-embedRightArrow"
                  src="https://s3-us-west-1.amazonaws.com/sharebnbicons/left+arrow.png"
                  onClick={this.handleItemClick}
                />
                <div>
                  <Review
                    pic={this.props.pic}
                    name={this.props.name}
                    location={this.props.location}
                    reviews={this.props.reviews}
                    bottom={true}
                    className="gallery-reviewComp"
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}
