import React from 'react';
import './common.css';
interface Props {

}

interface State {

}

export default class Footer extends React.Component<Props, State> {
  render() {
    return (
      <>
        <div className="footer">
          <div className="container text-center">
            <h5 id="copyright">Copyright@2019 JungHyeonPung all right reserved.</h5>
          </div>
        </div>
      </>
    );
  }
}