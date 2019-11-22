import React from 'react';
import './button.css';

interface Props {
  text: string
}

interface State {

}

export default class Button extends React.Component<Props, State> {
  render() {
    return (
      <div className="button-wrap">
        <button className="button-primary">{this.props.text}</button>
      </div>
    );
  }
}