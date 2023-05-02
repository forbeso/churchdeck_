import React from 'react';
import { NavLink } from 'react-router-dom';

import Dot from '../marker';

import './style.scss';

const listStyle = {
  textDecoration: 'none',
};

function Nav() {
  return (
    <div className="topnav">
      <div>
        <div className="mt-4 mb-5 bold logo">
          {/* <span className="material-icons-round d-flex align-items-center">
                    church
                </span>  */}
          churchdeck
        </div>
      </div>

      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              to="/search"
              style={listStyle}
            >

              <i className="material-icons-round d-flex  align-items-center">
                search{' '}
              </i>{' '}
              Find
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                password{' '}
              </i>
              Login
            </NavLink>
          </li>



          <li className="nav-item">
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-outlined d-flex  align-items-center">
                stacked_bar_chart{' '}
              </i>{' '}
              Data
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
