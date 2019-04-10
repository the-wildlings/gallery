import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Review from "./Review.jsx";

export default class Save extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.value !== "" && !this.state.input) {
      this.setState({
        input: true
      });
    }
    if (e.target.value === "") {
      this.setState({
        input: false
      });
    }
  }

  render() {
    return (
      <Modal {...this.props}>
        <Modal.Body id="gallery-saveModal">
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png"
            className="gallery-closeIcon"
            onClick={this.props.onHide}
          />
          <h4 className="gallery-modalTitle">Save to list</h4>
          <p>Name</p>
          <input
            onChange={this.handleChange}
            id="gallery-saveInput"
            placeholder="  Name your list"
          />
          <br />
          <div id="gallery-buttonHolderHolder">
            <div id="gallery-buttonHolder">
              <Button onClick={this.props.onHide} id="gallery-cancelButton">
                Cancel
              </Button>
              {this.state.input ? (
                <Button id="gallery-createButton">Create</Button>
              ) : (
                <Button id="gallery-faded" disabled>
                  Create
                </Button>
              )}
            </div>
            <div id="gallery-saveWhiteSpace" />
          </div>
          <Review
            name={this.props.name}
            pic={this.props.pic}
            location={this.props.location}
            reviews={this.props.reviews}
            className="gallery-reviewComp"
            id="gallery-saveReview"
            textId="gallery-saveReviewText"
          />
        </Modal.Body>
      </Modal>
    );
  }
}
