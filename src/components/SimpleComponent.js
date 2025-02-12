import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  constructor(props){
    super(props)
    this.state = {mood: 'happy'}
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
  (this.state.mood === 'happy') ? this.setState({mood: 'sad'}) : this.setState({mood: 'happy'})
  }

  render(){
    return(
      <div onClick={this.handleClick}>
        {this.state.mood}
      </div>
    )
  }
}
