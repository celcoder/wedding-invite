const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/gi);
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/gi);
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/gi);
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/gi);
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/gi) || navigator.userAgent.match(/WPDesktop/gi);
  },
  any() {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  }
};

export default isMobile;