import React from 'react';
import './styles/Main.css';

const Main = () => (
  <div className="main-container">
    <div className="main-groom-section">
      {/* <span className="groom-deco-container">
        <img id="groom-pic" src="./js/img/groom_deco1.png" alt="" />
      </span> */}
      <div className="groom-img-container">
        <img id="groom-pic" src="./js/img/groom_pic.png" alt="" />
      </div>
      <div className="parent-text-container">
        <p className="text-margin">손정주</p>
        <p className="text-margin">김성순</p>
      </div>
      <div className="groom-name-text-container">
        <p id="name-text">의 차남</p>
        <p>민호</p>
      </div>
    </div>
    <div className="main-bride-section">
      <div className="parent-text-container">
        <p className="text-margin">조호영</p>
        <p className="text-margin">조규옥</p>
      </div>
      <div className="bride-name-text-container">
        <p id="name-text">의 장녀</p>
        <p>윤경</p>
      </div>
      <div className="bride-img-container">
        <img id="bride-pic" src="./js/img/bride_pic.png" alt="" />
      </div>
    </div>
    <div className="grace-text">
      <p className="text-margin">하나님의 사랑으로 만난 두 사람이 이제</p>
      <p>새로운 가정을 이루는 아름다운 약속을 하려합니다.</p>
      <p>언제나 아름답고 주위에 사랑을 나누는 행복한 가정을 이루도록</p>
      <p>오셔서 축복해주시고 지켜봐 주십시오.</p>
    </div>
    <div className="container-divider">
      <img src="./js/img/divider.png" alt="" />
    </div>
    <div className="location-text-container">
      <p className="text-margin"><b>일시:</b> 2018년 5월 28일 Memorial Day 오후 7</p>
      <p className="text-margin"><b>장소:</b> 은혜교회 4337 24 th St, Little Neck, NY 11363</p>
      <p className="text-margin"><b>오시는길:</b> 버스Q12 또는 N20 (도보 3분)</p>
      <p id="last-text">주차 본관주차장</p>
    </div>
  </div>
);

export default Main;
