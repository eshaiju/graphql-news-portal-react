import React, { Component } from 'react'
import Post from './Post'
import { graphql, gql } from 'react-apollo'


class PostList extends Component {

  render() {
    if (this.props.AllPostsQuery && this.props.AllPostsQuery.loading) {
      return <div>Loading</div>
    }

    if (this.props.AllPostsQuery && this.props.AllPostsQuery.error) {
      return <div>Error</div>
    }

    const postsToRender = this.props.AllPostsQuery.posts

    return (
      <div>
        {postsToRender.map(post => (
          <Post key={post.id} post={post}/>
        ))}
      </div>
    )
  }

}
const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    posts {
      id
      url
      title
    }
  }
`

export default graphql(ALL_POSTS_QUERY, { name: 'AllPostsQuery' }) (PostList)
