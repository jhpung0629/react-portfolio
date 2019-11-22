import React from 'react';
import './icon.css';

interface Props{
  imgPath: string;
}

interface State{

}

export default class Icon extends React.Component<Props, State> {
  render() {
    return (
      <div className="intro-icon">
        <img src={this.props.imgPath} alt={this.props.imgPath}/>
      </div>
    );
  }
}