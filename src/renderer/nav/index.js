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
              to="/land"
              style={listStyle}
            >
              <Dot />
              <i className="material-icons-round d-flex  align-items-center">
                home{' '}
              </i>{' '}
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/login"
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
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                search{' '}
              </i>
              Search
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/sermon"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                speaker_notes{' '}
              </i>
              Sermon
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/activity"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                diversity_2{' '}
              </i>
              Activities
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/broadcast"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                campaign{' '}
              </i>
              Broadcast
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/finance_dash"
              className={({ isActive }) =>
                isActive
                  ? 'nav-link d-flex  align-items-center link setActive'
                  : 'nav-link d-flex  align-items-center link'
              }
              style={listStyle}
            >
              <i className="material-icons-round d-flex  align-items-center">
                currency_exchange{' '}
              </i>
              Finance
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
              <i className="material-icons-round d-flex  align-items-center">
                settings{' '}
              </i>{' '}
              Settings
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
