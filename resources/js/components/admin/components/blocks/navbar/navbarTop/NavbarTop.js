import React from 'react';
import avatar from '../../../../public/images/user.png';
import { Link } from 'react-router-dom';

import './NavbarTop.scss';

const BellBadget = (props) => {
  return (
    <li id="dropdownNotification" className="nav-item dropdown mr-3">
      <button className="btn" id="dropdownNotification-btn" data-toggle="dropdown">
        <i className="far fa-bell"/>
        <span className="badge badge-warning navbar-badge"> 0 </span>
      </button>

      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <span className="dropdown-header">15 Notifications</span>
        <div className="dropdown-divider"/>
        <Link to={'/admin/messages'} className="dropdown-item">
          <i className="fas fa-envelope mr-2"/> 4 new messages
          <span className="float-right text-muted text-sm">3 mins</span>
        </Link>
        <div className="dropdown-divider"/>
        <Link to={'/admin'} className="dropdown-item">
          <i className="fas fa-users mr-2"/> 8 friend requests
          <span className="float-right text-muted text-sm">12 hours</span>
        </Link>
        <div className="dropdown-divider"/>
        <Link to={'/admin'} className="dropdown-item">
          <i className="fas fa-file mr-2"/> 3 new reports
          <span className="float-right text-muted text-sm">2 days</span>
        </Link>
        <div className="dropdown-divider"/>
        <Link to={'/admin'} className="dropdown-item dropdown-footer">See All Notifications</Link>
      </div>
    </li>
  )
};

const DrdMenuActions = (props) => {
  return (
    <li id="dropdownMenuActionsAdmin" className="nav-item dropdown">
      <button className="btn dropdown-toggle" id="dropdownMenuActionsAdmin-body" data-toggle="dropdown">
        <img className="avatar-admin" src={avatar} alt="avatar admin"/>
      </button>

      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
        <Link to={'/admin/account'} className="dropdown-item">
          <i className="far fa-user-circle mr-2"/> Tài khoản
        </Link>
        <Link to={'/admin/profile'}  className="dropdown-item">
          <i className="far fa-id-card mr-2"/> Hồ sơ
        </Link>
        <div className="dropdown-divider"/>
        <Link to={'/admin/logout'}  className="dropdown-item">
          <i className="fas fa-sign-out-alt mr-2"/> Đăng xuất
        </Link>
      </div>
    </li>
  )
};

const NavbarTop = () => {
  const hideNavigation = () => {
    if (document.documentElement.clientWidth >= 992) {
      document.querySelector('body').classList.toggle('sidebar-collapse');
    } else {
      // document.querySelector('body').classList.remove('sidebar-collapse');
      document.querySelector('body').classList.toggle('sidebar-open', 'sidebar-collapse');
    }

  };

  return (
    <nav className="shadow-sm main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <button className="btn" data-widget="pushmenu" onClick={hideNavigation}>
            <i className="fas fa-bars"/>
          </button>
        </li>
      </ul>

      <ul className="navbar-nav ml-auto">
        {/* bell notification and count */}
        <BellBadget/>

        {/* dropdown to more action of admin */}
        <DrdMenuActions/>
      </ul>
    </nav>
  )
};

export default NavbarTop;