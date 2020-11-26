import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../../../../public/images/user.png';

const itemSidebar = (props) => {

};

const NavbarLeft = () => {
  const hideNavigation = () => {
    document.querySelector('body').classList.remove('sidebar-open');
    document.querySelector('body').classList.remove('sidebar-collapse');
  };

  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{position: 'fixed'}}>
      {/* <!-- Brand Logo --> */}
      <Link to={'/admin'} className="brand-link">
        {/* <img src="./public/image/logo-test.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" /> */}
        <span className="brand-text font-weight-light">Netflut</span>
      </Link>

      {/* <!-- Sidebar --> */}
      <div className="sidebar">
        {/* <!-- Sidebar user panel (optional) --> */}
        <div className="user-panel mt-3 pb-3 mb-3 d-flex">
          <div className="image">
            <img src={avatar} className="img-circle elevation-2" alt="User Image" />
          </div>
          <div className="info">
            <Link to={'/admin'} className="d-block">Xin chào Admin!</Link>
          </div>
        </div>

        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-2">
          <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li className="nav-item" onClick={hideNavigation} >
              <Link to={'/admin'} className="nav-link active">
                <i className="fas fa-home"/>
                <p>
                  Trang chủ
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={hideNavigation}>
              <Link to={'/admin/sale'} className="nav-link">
                <i className="fas fa-receipt"/>
                <p>
                  Đơn hàng
                   <span className="right badge badge-danger">New</span>
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={hideNavigation}>
              <Link to={'/admin/product'} className="nav-link">
                <i className="fas fa-th"/>
                <p>
                  Sản phẩm
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={hideNavigation}>
              <Link to={'/admin/category'} className="nav-link">
                <i className="fas fa-sitemap"/>
                <p>
                  Loại sản phẩm
                </p>
              </Link>
            </li>

            <li className="nav-item" onClick={hideNavigation}>
              <Link to={'/admin/setting'} className="nav-link">
                <i className="fas fa-user-cog"/>
                <p>
                  Cài đặt
                </p>
              </Link>
            </li>


          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default NavbarLeft;