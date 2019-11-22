import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';
import './common.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';

interface Props{

}
interface State{


}

export default class About extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

  }
  render() {
    return (
      <div id="about" className="about-wrap">
        <div>
          <h1 className="display-1 font-weight-bold text-center">About</h1>
          <p id="about-p" className="mt-5 text-center text-break font-weight-normal">
            저는 프론트엔드를 공부하고 있습니다. <br />
            풀스택 개발자를 목표로 하고 있습니다. <br />
            가장 흥미 있는 분야는 웹 입니다. <br />
            React와 TypeScript를 공부 중입니다. <br />
          </p>
        </div>
      </div>
    );
  }
}