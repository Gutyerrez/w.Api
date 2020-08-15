import React from 'react'
import {
  Routes as Switch,
  Route
} from 'react-router-dom'

export default () => {
  return (
    <Switch>
      <Route path="/" element={<h1>Hello world!</h1>} />
    </Switch>
  )
}
