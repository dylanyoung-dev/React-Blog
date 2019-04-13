import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    let url = "http://localhost:3001/posts"
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let posts = data.map((post, index) => {
          return (
            <div key={index}>
              <h3>{post.title}</h3>
              <p>Tags: {post.tags}</p>
            </div>
          )
        })
        this.setState({posts: posts});
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.posts}
      </div>
    );
  }
}

export default App;