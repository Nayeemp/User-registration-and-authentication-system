/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { userLoggedOut } from '../../features/auth/authSlice';

function UserDropdown({ userUserDropdown }) {
  const { user, email } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(userLoggedOut());
    localStorage.clear();
  }

  return (
    <div
      className={`absolute right-0 top-13 bg-white rounded-lg shadow text-base divide-y divide-gray-300 h ${userUserDropdown && 'hidden'}`}
    >
      <div className="px-4 py-3">
        <span className="block text-sm text-gray-900 dark:text-white text-center">
          {user}

        </span>
        <span
          className="block text-sm text-gray-500 truncate dark:text-gray-400 text-center"
        >
          {email}

        </span>
      </div>
      <ul className="py-2" aria-labelledby="user-menu-button">

        <li>
          <Link
            to="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
          >
            Profile
          </Link>
        </li>

        <li>
          <span
            onClick={logoutHandler}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white text-center"
          >
            Sign out

          </span>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdown;
