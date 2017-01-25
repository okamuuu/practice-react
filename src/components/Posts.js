import React, {Component} from 'react'

// stateless component
export const PostItem = (props) => (
  <div key={props.post.id}>
    <h3>{props.post.title}</h3>
    <p>{props.post.body}</p>
  </div>
)

export default class Posts extends Component {

  constructor(props) {
    console.log("=== constructor ===")
    super(props)
  }

  componentWillMount() {
    console.log("=== componentWillMount ===")
  }

  componentDidMount() {
    console.log("=== componentDidMount ===")
  }

  componentWillReceiveProps() {
    console.log("=== componentWillReceiveProps ===")
  }

  componentWillUpdate() {
    console.log("=== componentWillUpdate ===")
  }

  componentDidUpdate() {
    console.log("=== componentDidUpdate ===")
  }

  componentWillUnmount() {
    console.log("=== componentWillUnmount ===")
  }

  handleButtonClick() {
    alert("Button Clicked!!")
  }

  render() {
    const {posts} = this.props

    return (
      <div className="container">
        <h2>Posts</h2>
        {posts.map((post) => (
          <PostItem post={post} />
        ))}
        <button className="btn btn-default" onClick={this.handleButtonClick.bind(this)}>Push</button>
      </div>
    )
  }
}
