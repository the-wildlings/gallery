import React from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import ListEntry from "./listEntry.jsx";
import Slideshow from "./Slideshow.jsx";
import Save from "./Save.jsx";
import Share from "./Share.jsx";
import Embed from "./Embed.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      name: "TEMP TEST",
      location: "LOCATION TEMP",
      reviews: Math.round(Math.random() * 400) + 50,
      showSS: false,
      showShare: false,
      showSave: false,
      showEmbed: false,
      SSstart: 0
    };
    this.get = this.get.bind(this);
    this.embedClick = this.embedClick.bind(this);
    this.SStransition = this.SStransition.bind(this);
    this.handleDoubleCLick = this.handleDoubleCLick.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    let id = Math.floor(Math.random() * 50) + 1;
    console.log(id);
    axios
      .get(`/api/photos/${id}`)
      .then(data => {
        this.setState({
          imageList: data.data[0].urls
        });
      })
      .catch(err => console.error(err));
  }

  embedClick() {
    this.setState({
      showShare: false,
      showEmbed: true
    });
  }

  SStransition(e) {
    this.setState({
      SSstart: e
    });
  }

  handleDoubleCLick(e) {
    let className = e.target.className;
    if (className === "gallery-mainPic") {
      this.setState({
        SSstart: 0,
        showSS: true
      });
    } else {
      let index = parseInt(className[className.length - 1]) + 1;
      this.setState({
        SSstart: index,
        showSS: true
      });
    }
  }

  handleItemClick(e, negative) {
    if (negative) {
      if (this.state.SSstart === 0) {
        this.setState({
          SSstart: this.state.imageList.length - 1
        });
      } else {
        this.setState({
          SSstart: this.state.SSstart - 1
        });
      }
    } else {
      if (this.state.SSstart === this.state.imageList.length - 1) {
        this.setState({
          SSstart: 0
        });
      } else {
        this.setState({
          SSstart: this.state.SSstart + 1
        });
      }
    }
  }

  render() {
    let SSclose = () => this.setState({ showSS: false });
    let saveClose = () => this.setState({ showSave: false });
    let shareClose = () => this.setState({ showShare: false });
    let embedClose = () => this.setState({ showEmbed: false });
    return (
      <div>
        <div className="gallery-container">
          <img
            src={this.state.imageList[0]}
            className="gallery-mainPic"
            onDoubleClick={this.handleDoubleCLick}
          />
          {this.state.imageList.slice(1, 5).map((item, index) => {
            return (
              <ListEntry
                pic={item}
                key={index}
                index={index}
                handleDoubleClick={this.handleDoubleCLick}
              />
            );
          })}
          <div id="gallery-buttonContainer">
            <Button
              variant="primary"
              onClick={() => this.setState({ showShare: true })}
              id="gallery-shareButton"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/share+icon.png"
                id="gallery-shareIcon"
              />
              <p className="gallery-inlineButtonText">Share</p>
            </Button>
            <Button
              variant="primary"
              onClick={() => this.setState({ showSave: true })}
              id="gallery-saveButton"
            >
              <img
                src="https://s3-us-west-1.amazonaws.com/sharebnbicons/heart+icon.png"
                id="gallery-likeIcon"
              />
              <p className="gallery-inlineButtonText">Save</p>
            </Button>
          </div>
          <Button
            variant="primary"
            onClick={() => this.setState({ showSS: true })}
            id="gallery-SSbutton"
          >
            <p className="gallery-SSbuttonText">View Photos</p>
          </Button>
        </div>
        <Slideshow
          show={this.state.showSS}
          onHide={SSclose}
          imageList={this.state.imageList}
          start={this.state.SSstart}
          transition={this.SStransition}
          handleItemClick={this.handleItemClick}
        />
        <Save
          show={this.state.showSave}
          onHide={saveClose}
          name={this.state.name}
          location={this.state.location}
          reviews={this.state.reviews}
          pic={this.state.imageList[0]}
        />
        <Embed
          show={this.state.showEmbed}
          onHide={embedClose}
          images={this.state.imageList}
          name={this.state.name}
          location={this.state.location}
          reviews={this.state.reviews}
        />
        <Share
          show={this.state.showShare}
          onHide={shareClose}
          embedClick={this.embedClick}
        />
      </div>
    );
  }
}

export default App;
{
  /* <List imageList={this.state.imageList.slice(1)} /> */
}
