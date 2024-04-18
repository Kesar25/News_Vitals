import React, { Component } from 'react'
import PropTypes from 'prop-types'
import News from './components/News'
import Navbar from './components/Navbar'

export default class App extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <>
      <Navbar/>
      <News/>
      </>
    )
  }
}
