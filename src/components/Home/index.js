import React, {Component} from 'react';
import './index.scss';

export class Home extends Component {

  render(){
    return <div className={'container'}>
      <p className={'title'}>Duckr</p>
      <p className={'slogan'}>{'The real time, cloud, base, modular, scalable, growth hack, social platform. In the cloud'}</p>
    </div>;
  }
}