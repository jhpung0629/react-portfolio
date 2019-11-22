import React from 'react';
import Clock from './clock';
import Ment from './ment';

import './intro.css';

interface Props {

}

interface State {
  
}

export default class Intro extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <div className="intro">
        <div className="intro-wrap">
          <Ment text="Welcome !"/>
          <Clock />
        </div>
      </div>
    );
  }
}