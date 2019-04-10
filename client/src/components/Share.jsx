import React, { Component } from "react";
import { Modal } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick() {
    this.setState({
      copied: true
    });
  }

  handleMouseEnter(e) {
    e.target.id = "gallery-hovered";
  }

  handleMouseLeave(e) {
    e.target.id = null;
  }

  render() {
    return (
      <Modal {...this.props} onClose={() => this.setState({ copied: false })}>
        <Modal.Body>
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png"
            className="gallery-closeIcon"
            onClick={this.props.onHide}
          />
          <h4 fontSize="24px" className="gallery-modalTitle">
            Share
          </h4>
          <p fontSize="14px">Check out this awesome listing on Airbnb: </p>
          <p fontSize="14px">Houses for Rent in </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/facebook+icon.png"
            id="gallery-facebookIcon"
          />
          <p
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            Facebook
          </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/twitter+icon.png"
            id="gallery-twitterIcon"
          />
          <p
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            Twitter
          </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/email+icon.png"
            id="gallery-emailIcon"
          />
          <p
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {" "}
            Email
          </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/messenger+icon.png"
            id="gallery-messengerIcon"
          />
          <p
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {"Messenger"}
          </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/copy+icon.png"
            id="gallery-copyIcon"
          />
          <p
            onClick={this.handleClick}
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {this.state.copied ? "Link Copied" : "Copy Link"}
          </p>
          <hr />
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/new+embed.png"
            id="gallery-embedIcon"
          />
          <p
            onClick={this.props.embedClick}
            className="gallery-shareOption"
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          >
            {"Embed"}
          </p>
          <hr />
        </Modal.Body>
      </Modal>
    );
  }
}
