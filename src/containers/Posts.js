import React, {Component} from 'react'
import { connect } from 'react-redux'
import Notifications from 'reapop'
import theme from 'reapop-theme-wybo'

import { fetchRequest } from '../actions'
import { PostItem } from '../components/Posts'
import { getPosts } from '../actions'

class Posts extends Component {

  handleButtonClick() {
    this.props.dispatch(getPosts({userId: 1}))
  }

  render() {
    const {posts} = this.props.fetch

    return (
      <div className="container">
        <Notifications theme={theme}/>
        <h2>Posts</h2>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
        <button className="btn btn-default" onClick={this.handleButtonClick.bind(this)}>Push</button>
      </div>
    )
  }
}

const select = state => (state)

export default connect(select)(Posts)
