import React, { PureComponent } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import isMobile from './Util';

import './styles/App.css';

class App extends PureComponent {
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
      <div className={this.state.mobileView ? "mobile-container" : "container"}>
        <Header />
        <div className={this.state.mobileView ? 'header-mobile-divider' : 'header-divider'} />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
