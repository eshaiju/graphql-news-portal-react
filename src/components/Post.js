import React, { Component } from 'react'
import { timeDifferenceForDate } from '../utils'

class Post extends Component {

  render() {
    return (
      <div>
        <div className='flex mt2 items-start'>
          <div className='flex items-center'>
            <span className='gray'>{this.props.index + 1}.</span>
            {<div className='ml1 gray f11' onClick={() => this._voteForPost()}>▲</div>}
          </div>
          <div className='ml1'>
            <div>{this.props.post.title} ({this.props.post.url})</div>
            <div className='f6 lh-copy gray'>{this.props.post.votes} votes | by {this.props.post.author ? this.props.post.author.name : 'Unknown'} {timeDifferenceForDate(this.props.post.published_at)}</div>
          </div>
        </div>
      </div>
    )
  }

  _voteForPost = async () => {
    // ...
  }

}

export default Post
