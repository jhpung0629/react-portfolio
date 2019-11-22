import React from 'react';
import './common.css'
interface Props{}
interface State{}

export default class Skills extends React.Component<Props, State> {

  render() {
    return (
      <div id="skills" className="skills-wrap">
        <div>
          <h1 className="display-1 font-weight-bold text-center">Skills</h1>
          <div className="row mt-5">
            <div className="col-xl">
              <div className="media">
                <img src="/img/c.png" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">C</h5>
                  <p>CLI 멀티쓰레딩 소켓통신 FTP서버 만들어봤습니다.</p>
                  <div>
                    <span className="badge badge-primary">좋음</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="media">
                <img src="/img/cpp.png" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">C++</h5>
                  <p>스택, 큐, 링크드 리스트, 트리 구현
                  STL(vector, map, queue) 사용경험 있습니다.
                  </p>
                  <div>
                    <span className="badge badge-primary">좋음</span>
                    <span className="badge badge-success">주언어</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="media">
                <img src="/img/java.png" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">Java</h5>
                  <p>JavaFX를 사용한 GUI 프로그래밍 경험이 있습니다.
                  </p>
                  <div>
                    <span className="badge badge-danger">사용한지 오래됨</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-xl">
              <div className="media">
                <img src="/img/javascript.png" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">Javascript</h5>
                  <p>Vanila JavaScript 사용후 ES5, ES6, TypeScript 학습중입니다.</p>
                  <div>
                    <span className="badge badge-warning">아직 미숙</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="media">
                <img src="/img/react.png" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">React</h5>
                  <p> 현재 사이트가 React로 구현한 첫 결과물입니다.
                  </p>
                  <div>
                    <span className="badge badge-warning">아직 미숙</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="media">
                <img src="/img/php.jpg" className="mr-3" alt="..." width="100px" height="100px" />
                <div className="media-body">
                  <h5 className="mt-0">PHP</h5>
                  <p>PHP기반 프레임워크 CodeIgniter, Laravel로 백엔두 구현 경험 있습니다.
                  </p>
                  <div>
                    <span className="badge badge-primary">좋음</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}