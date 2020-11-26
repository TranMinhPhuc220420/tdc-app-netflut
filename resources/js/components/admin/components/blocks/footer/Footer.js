import React from 'react';

const Footer = (props) => {
  const setHideNavigationMobile = () => {
    document.querySelector('body').classList.toggle('sidebar-open');
    document.querySelector('body').classList.toggle('sidebar-collapse');
  };

  return (
    <div>
      <footer className="main-footer">
        <div className="float-right d-none d-sm-inline">
        </div>
        <strong>Copyright &copy; 2020-2025
          <a href="mailTo:tranminhphuc220420@gmail.com">Phuc.IT</a>.
        </strong> All rights reserved.
      </footer>
        <div id="sidebar-overlay" onClick={setHideNavigationMobile}>
        </div>
    </div>
  )
};

export default Footer;