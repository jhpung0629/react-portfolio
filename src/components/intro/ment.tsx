import React from 'react';
import './ment.css';

interface Props {
  text: string
}

interface State {
  text: string,
  position: number
}

export default class Ment extends React.Component<Props, State> {
  
  timerID: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      text: "",
      position: 0
    };
    this.timerID = 0;
  }
  /**
   * 생명주기 메소드 (Lifecycle method)
   * componentDidMount(): 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행.
   */
  componentDidMount() {
    // 수동으로 클래스에 부가적인 필드 추가
    this.timerID = setInterval(
      () => this.tick(), 200
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
    const curPosition = this.state.position;
    if(curPosition > this.props.text.length) {
     /* this.setState({
        position: 0,
      })*/
      clearInterval(this.timerID);
    }else {
      const str = this.props.text.substring(0,this.state.position);
      this.setState({
        text: str,
        position: curPosition + 1
      });
    }
    
  }
  render() {
    return (
      <div id="introMent">
        {this.state.text}
      </div>
    );
  }
}