import * as React from 'react'
import * as ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import Route from './routes/index'

ReactDOM.render(
  <BrowserRouter>
    <Route />
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
)
