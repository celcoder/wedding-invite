import React, { PureComponent } from 'react';
import isMobile from './Util';
import './styles/Header.css';

/* in production change src="./js" to public/js" */

class Header extends PureComponent {
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
      <div className={this.state.mobileView ? "mobile-header-container" : "header-container"}>
        <div className={this.state.mobileView ? "mobile-header-banner-container" : "header-banner-container"}>
          <div className={this.state.mobileView ? "mobile-header-banner-content" : "header-banner-content"}>
            <p id={this.state.mobileView ? "mobile-header-text-first" : "header-text-first"}>The Wedding Celebration of</p>
            <img id={this.state.mobileView ? "mobile-header-banner-img" : "header-banner-img"} src="public/js/assets/img/banner_header.png" alt="" />
            <p id={this.state.mobileView ? "mobile-header-text-last" : "header-text-last"}>05.28.18 Memorial Day 7PM</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
