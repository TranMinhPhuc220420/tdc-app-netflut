import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { setMenu } from '../../../../actions'

import avatar from '../../../../public/images/user.png';

const NavbarLeft = () => {
  const listMenuMav = useSelector(state => state.menu);
  const dispatch = useDispatch();


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

            {listMenuMav.map((item, index) => (
              <li key={index} className="nav-item"
                  onClick={() => {
                    //create list template
                    let listTemp = [...listMenuMav];
                    //Remove item are choosing
                    listTemp.forEach((itemRef, index) => {
                      itemRef.isActive = false;
                    });

                    //Set active for item choosing
                    item.isActive = true;

                    //Commit set data state
                    dispatch(setMenu(listTemp));
                  }} >

                <Link to={item.path} className={item.isActive ? 'nav-link active': 'nav-link'}>
                  <i className={item.iconCls}/>
                  <p>{item.text}</p>
                </Link>
              </li>
            ))}

          </ul>
        </nav>
      </div>
    </aside>
  )
};

export default NavbarLeft;
