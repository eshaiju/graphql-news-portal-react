import React, { Component } from 'react'

class Post extends Component {

  render() {
    return (
      <div>
        <div>{this.props.post.title} ({this.props.post.url})</div>
      </div>
    )
  }

  _voteForPost = async () => {
    // ... you'll implement this in chapter 6
  }

}

export default Post
