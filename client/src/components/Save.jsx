import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
        <Modal.Body>
          <img
            src="https://s3-us-west-1.amazonaws.com/sharebnbicons/close+icon.png"
            className="gallery-closeIcon"
            onClick={this.props.onHide}
          />
          <h4 className="gallery-modalTitle">Save to List</h4>
          <p>Name</p>
          <input onChange={this.handleChange} />
          <Button variant="secondary" onClick={this.props.onHide}>
            Cancel
          </Button>
          {this.state.input ? (
            <Button variant="primary" className="gallery-colored">
              Create
            </Button>
          ) : (
            <Button className="gallery-faded">Create</Button>
          )}
        </Modal.Body>
        <Modal.Footer>
          <p>TODO</p>
        </Modal.Footer>
      </Modal>
    );
  }
}
