import React from 'react';

import AvatarUserTest from "../../../public/user-test.jpg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
      <a className="navbar-brand" href="#">
        <div className="logo">
        <span className="icon">
        </span>
          <span className="text"> netflut </span>
          <span className="icon">
        </span>
        </div>
      </a>

      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#navbarNetflut"
              aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNetflut">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Trang chủ</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Phim T.hình</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Phim</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Mới & Phổ biến</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Danh sách của tôi</a>
          </li>
        </ul>

        <div className="nav-right">
          <div className="form-search nav-right-item">
            <button className="btn">
              <i className="fa fa-search" aria-hidden="true"></i>
            </button>
            <input name="key_search" className="form-control" type="text" placeholder="Search"/>
          </div>

          <div className="group-notification nav-right-item">
            <div className="dropdown">
              <a className="btn dropdown-toggle" href="#" role="button" id="dropdownNotification" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-bell" aria-hidden="true"></i>
                <span className="count-notification">3</span>
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownNotification">
                <ul className="list-unstyled">
                  <li className="media">
                    <img className="mr-3" src={AvatarUserTest} alt="Generic placeholder image"/>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">List-based media object</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium cumque quos
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <img className="mr-3" src={AvatarUserTest} alt="Generic placeholder image"/>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">List-based media object</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium cumque quos
                      </p>
                    </div>
                  </li>
                  <li className="media">
                    <img className="mr-3" src={AvatarUserTest} alt="Generic placeholder image"/>
                    <div className="media-body">
                      <h6 className="mt-0 mb-1">List-based media object</h6>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium cumque quos
                      </p>
                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <div className="nav-right-item dropdown-user">
            <div className="dropdown">
              <a className="btn dropdown-toggle" href="#" role="button" id="dropdownMenuUser" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <img src={AvatarUserTest} alt="avatar-user" className="avatar-user"/>
              </a>

              <div className="dropdown-menu" aria-labelledby="dropdownMenuUser">
                <a className="dropdown-item" href="#">Thông tin</a>
                <a className="dropdown-item" href="#">Tài khoản</a>
                <a className="dropdown-item" href="#">Trung tâm trợ giúp</a>
                <a className="dropdown-item" href="#">Đăng xuất khỏi Netflut</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};


export default Navbar;
