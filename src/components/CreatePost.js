import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'


class CreatePost extends Component {

  state = {
    title: '',
    url: ''
  }

  render() {
    return (
      <div>
        <div className='flex flex-column mt3'>
          <input
            className='mb2'
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })}
            type='text'
            placeholder='A title for the link'
          />
          <input
            className='mb2'
            value={this.state.url}
            onChange={(e) => this.setState({ url: e.target.value })}
            type='text'
            placeholder='The URL for the link'
          />
        </div>
        <button
          onClick={() => this._createPost()}
        >
          Submit
        </button>
      </div>
    )
  }

  _createPost = async () => {
    const { title, url } = this.state
    await this.props.createPostMutation({
      variables: {
        title,
        url
      }
    })
    this.props.history.push(`/`)
  }

}

const CREATE_POST_MUTATION = gql`
  mutation CreatePostMutation($title: String!, $url: String!) {
    createPost(
      input: { title: $title,
      url: $url }
    ){
      post{
        id
        url
        title
        published_at
      }
    }
  }
`
export default graphql(CREATE_POST_MUTATION, { name: 'createPostMutation' })(CreatePost)
