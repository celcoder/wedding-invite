import React, { PureComponent } from 'react';
import isMobile from './Util';
import './styles/Main.css';

class Main extends PureComponent {
  state = {
    mobileView: false
  };

  componentWillMount() {
    return isMobile.any() && this.setState({ mobileView: true });
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener('resize', this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
  }

  updatePredicate = () => {
    if (!isMobile.any() && window.innerWidth <= 736) {
      this.setState({ mobileView: true });
    }
    if (!isMobile.any() && window.innerWidth > 736) {
      this.setState({ mobileView: false });
    }
  };

  render() {
    return (
      <div className={this.state.mobileView ? 'mobile-main-container' : 'main-container'}>
        <div className={this.state.mobileView ? 'mobile-main-groom-section' : 'main-groom-section'}>
          <div className={this.state.mobileView ? 'mobile-groom-container' : 'groom-container'}>
            <span className="groom-deco-container1">
              <img id="groom-deco1" src="public/js/assets/img/groom_deco1.png" alt="" />
            </span>
            <span className="groom-deco-container2">
              <img id="groom-deco2" src="public/js/assets/img/groom_deco2.png" alt="" />
            </span>
            <span className="groom-img-container">
              <img id="groom-pic" src="public/js/assets/img/groom_pic.png" alt="" />
            </span>
          </div>
          <div className={this.state.mobileView ? 'mobile-groom-text-container' : 'groom-text-container'}>
            <div className="parent-text">
              <p className="text-margin">손정주</p>
              <p className="text-margin">김성순</p>
            </div>
            <div className="sub-text">
              <p id="name-text">의 차남</p>
            </div>
            <div className="groom-name-text">
              <p>민호</p>
            </div>
          </div>
        </div>
        <div className={this.state.mobileView ? 'mobile-main-bride-section' : 'main-bride-section'}>
          <div className="bride-text-container">
            <div className="parent-text">
              <p className="text-margin">조호영</p>
              <p className="text-margin">채규옥</p>
            </div>
            <div className="sub-text">
              <p id="name-text">의 장녀</p>
            </div>
            <div className="bride-name-text">
              <p>윤경</p>
            </div>
          </div>
          <div className={this.state.mobileView ? 'mobile-bride-container' : 'bride-container'}>
            <span className="bride-deco-container1">
              <img id="bride-deco1" src="public/js/assets/img/bride_deco2.png" alt="" />
            </span>
            <span className="bride-deco-container2">
              <img id="bride-deco2" src="public/js/assets/img/bride_deco1.png" alt="" />
            </span>
            <span className="bride-img-container">
              <img id="bride-pic" src="public/js/assets/img/bride_pic.png" alt="" />
            </span>
          </div>
        </div>
        <div className={this.state.mobileView ? 'mobile-grace-text' : 'grace-text'}>
          <p className="text-margin">하나님의 사랑으로 만난 두 사람이 이제</p>
          <p className="text-margin">새로운 가정을 이루는 아름다운 약속을 하려합니다.</p>
          <p className="text-margin">언제나 아름답고 주위에 사랑을 나누는 행복한 가정을 이루도록</p>
          <p className="text-margin">오셔서 축복해 주시고 지켜봐 주십시오.</p>
        </div>
        <div className={this.state.mobileView ? 'mobile-grace-text-mobile' : 'grace-text-mobile'}>
          <p className="text-margin">하나님의 사랑으로 만난 두 사람이 이제 새로운</p>
          <p className="text-margin">가정을 이루는 아름다운 약속을 하려합니다.</p>
          <p className="text-margin">언제나 아름답고 주위에 사랑을 나누는 행복한</p>
          <p className="text-margin">가정을 이루도록 오셔서 축복해 주시고</p>
          <p className="text-margin">지켜봐 주십시오.</p>
        </div>
        <div className="container-divider">
          <img id="divider-img" src="public/js/assets/img/divider.png" alt="" />
        </div>
        <div className={this.state.mobileView ? 'mobile-location-text-container' : 'location-text-container'}>
          <p className="text-margin"><b>일시:</b> 2018년 5월 28일 Memorial Day 오후 7시</p>
          <p className="text-margin"><b>장소:</b> 은혜교회 4337 249th St, Little Neck, NY 11363</p>
          <p className="text-margin"><b>오시는길:</b> 버스Q12 또는 n20 (도보 3분)</p>
          <p id="last-text">주차 본관주차장</p>
        </div>
        <div
          className={this.state.mobileView ? 'mobile-location-text-container-mobile' : 'location-text-container-mobile'}
        >
          <p className="text-margin"><b>일시:</b> 2018년 5월 28일</p>
          <p className="mobile-padding-text">Memorial Day 오후 7시</p>
          <p className="text-margin"><b>장소:</b> 은혜교회 4337 249th St,</p>
          <p className="mobile-padding-text">Little Neck, NY 11363</p>
          <p className="text-margin"><b>오시는길:</b> 버스Q12 또는 n20 (도보 3분)</p>
          <p id="mobile-last-text">주차 본관주차장</p>
        </div>
      </div>
    );
  }
}

export default Main;
