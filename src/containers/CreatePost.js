import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { createPost } from '../actions'
import { renderField, renderTextAreaField, renderSelectField, renderSelectMultiField } from '../components/Form'

const userOptions = [
  {value: 1, label: "userOne"},
  {value: 2, label: "userTwo"},
  {value: 3, label: "userThuree"},
]

const tagsOptions = [
  {value: "foo", label: "foo"},
  {value: "bar", label: "bar"},
  {value: "hoge", label: "hoge"},
  {value: "fuga", label: "fuga"},
]

let PostForm = (props) => {
  const { handleSubmit, pristine, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name="userId" label="User" component={renderSelectField} options={userOptions} />
      <Field name="title" type="text" label="Title" component={renderField} />
      <Field name="tags" label="Tags" component={renderSelectMultiField} options={tagsOptions} />
      <Field name="body" type="text" label="Body" component={renderTextAreaField} />
      <div style={{marginTop: "30px"}}>
        <button className="btn btn-primary" type="submit" disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

const validate = values => {
  const errors = {}

  if (!values.title) {
    errors.title = 'Required'
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less'
  }

  if (!values.body) {
    errors.body = 'Required'
  }

  return errors
}

PostForm = reduxForm({
    form: "post",
    validate,
    enableReinitialize: true,
})(PostForm)

class CreatePost extends Component {

  handleSubmit() {
    const params = this.props.form.post.values
    // Note: the resource will not be really created on the server but it will be faked as if.
    this.props.dispatch(createPost({params}))
  }

  render() {
    return (
      <PostForm onSubmit={this.handleSubmit.bind(this)} />
    )
  }
}

const select = state => (state)

export default connect(select)(CreatePost)
