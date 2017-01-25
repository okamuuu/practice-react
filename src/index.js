import React from 'react'
import { render } from 'react-dom'
import Root from './Root'

render(
  <Root />,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./Root', function() {
    const NextApp = require('./Root').default
    render(<NextApp/>, document.getElementById('root'))
  })
}
