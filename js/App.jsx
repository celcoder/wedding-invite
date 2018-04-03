import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

import './styles/App.css';

const App = () => (
  <div className="container">
    <Header />
    <div className="header-mobile-divider" />
    <Main />
    <Footer />
  </div>
);

export default App;