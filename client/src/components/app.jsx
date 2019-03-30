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
    axios
      .get(`/api/photos/${this.props.id}`)
      .then(data => {
        this.setState({
          imageList: data.data[0].urls
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <img src={this.state.imageList[0]} className="mainPic" />
        <List imageList={this.state.imageList.slice(1)} />
      </div>
    );
  }
}

export default App;
