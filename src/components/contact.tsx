import React from 'react';

interface Props {

}

interface State {

}

export default class Contact extends React.Component<Props, State> {
  render() {
    return (
      <>
      <div id="contact" className="common-wrap">
        <div>
          <div>
            <h1 className="display-1 font-weight-bold text-center">Contact</h1>
          </div>
          <br></br>
          <div className="mt-20">
            <h4>EMAIL : jhpung0629@gmail.com</h4>
          </div>
          <br></br>
          <div className="mt-20">
            <h4>H . P : 010-3786-3607</h4>
          </div>
        </div>
      </div>
      </>
    );
  }
}