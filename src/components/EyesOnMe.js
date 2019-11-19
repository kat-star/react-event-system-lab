// Code EyesOnMe Component Here
import React, { Component } from 'react'

export default class EyesOnMe extends Component {

  focusText = () => {
    console.log('Good!')
  }

  blurText = () => {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <button onFocus={this.focusText} onBlur={this.blurText} ></button>
    )
  }
}