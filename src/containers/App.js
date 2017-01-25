import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import Notifications from 'reapop'
import theme from 'reapop-theme-wybo'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Notifications theme={theme}/>
        <h1>Single Page Application</h1>
        <p><Link to="/">Home</Link> | <Link to="/posts">Posts</Link> | <Link to="/posts/create">Create Post</Link></p>
        <div style={{ marginTop: '1.5em' }}>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(state => (state))(App)
