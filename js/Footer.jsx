import React, { PureComponent } from 'react';
import GoogleMap from './GoogleMap';
import './styles/Footer.css';
import isMobile from './Util';

class Footer extends PureComponent {
  state = {
    mobileView: false
  }

  componentWillMount() {
    return isMobile.any() && this.setState({mobileView: true});
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
      <div className={this.state.mobileView ? "mobile-footer-container" : "footer-container"}>
        <GoogleMap />
        <div className={this.state.mobileView ? "mobile-footer-text-container" : "footer-text-container"}>
          <p id={this.state.mobileView ? "mobile-made-by" : "made-by"}>
            Designed by <a href="" className="url-link">Jesse</a> and coded by <a href="" className="url-link">Ethan</a> with <span role="img" aria-label="Heart" id="heart">❤️</span>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer;
