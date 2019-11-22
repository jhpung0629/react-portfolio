import React from 'react';
import './clock.css';
interface Props {
  
}

interface State {
  date : Date
}

export default class Clock extends React.Component<Props, State> {
  timerID: number;

  constructor(props: Props) {
    super(props);
    this.state = {date: new Date()};
    this.timerID = 0;
  }

  /**
   * 생명주기 메소드 (Lifecycle method)
   * componentDidMount(): 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행.
   */
  componentDidMount() {
    // 수동으로 클래스에 부가적인 필드 추가
    this.timerID = setInterval(
      () => this.tick(), 1000
    );
  }
  /**
   * 생명주기 메소드
   * componenetWillUnmount(): 컴포넌트가 돔에서 삭제된다면 실행.
   */
  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  /**
   * 일반 메소드
   * tick(): 1초마다 State를 갱신해 시간을 렌더링한다.
   */
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render() {
    return (
      <div id="timeStringHeaderWrap">
        <h2 id="timeStringHeader">{this.state.date.toLocaleTimeString()}</h2>
      </div>
    );

  }
}