import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {

  render() {
    return (
      <div>
        <h2>Home</h2>
        <p>this is Home.js</p>
      </div>
    )
  }
}

export default connect(state => (state))(Home)
