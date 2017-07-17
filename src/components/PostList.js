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
        {postsToRender.map((post, index) => (
          <Post key={post.id} post={post} index={index}/>
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
      votes
      published_at
      author{
        name
      }
    }
  }
`

export default graphql(ALL_POSTS_QUERY, { name: 'AllPostsQuery' }) (PostList)
