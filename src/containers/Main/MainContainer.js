import React, {Component} from 'react'
import "./index.scss"
class MainContainer extends Component {


  render() {
    return <div className="container">
      <div className="inner-container">{this.props.children}</div>
    </div>;
  }
}

export default MainContainer;