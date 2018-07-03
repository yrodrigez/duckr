import React, {Component} from 'react'

class MainContainer extends Component {

  state = {
    name: 'Yago',
  };

  render() {
    return <p onClick={() => this.setState({name: 'Otro'})}>Bye {this.state.name}</p>;
  }
}

export default MainContainer;