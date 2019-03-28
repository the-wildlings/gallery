import React from 'react';
import axios from 'axios';
import List from './list.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageList: []
    }
    this.get = this.get.bind(this);
  }
  
  componentDidMount() {
    this.get()
  }

  get() {
    axios
      .get('/api/api')
      .then((data) => this.setState({
        imageList: data.data
      }))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div>
        <List imageList={this.state.imageList}/>
      </div>
    )
  }
}

export default App;