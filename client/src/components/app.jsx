import React from "react";
import axios from "axios";
import List from "./list.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    };
    this.get = this.get.bind(this);
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

  render() {
    return (
      <div className="container">
        <img src={this.state.imageList[0]} className="mainPic" />
        <div className="grid">
          <div className="picCol">
            <List imageList={this.state.imageList.slice(1, 3)} />
          </div>
          <div className="picCol2">
            <List imageList={this.state.imageList.slice(3)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
