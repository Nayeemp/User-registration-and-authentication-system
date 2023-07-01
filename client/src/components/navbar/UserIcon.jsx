/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import defaultAvatar from '../../assets/picture/userAvatar.png';
import UserDropdown from './UserDropdown';
import UserDropdown2 from './UserDropdown2';

function UserIcon() {
  const [userUserDropdown, setUserUserDropdown] = useState(true);
  const { user, avatar } = useSelector((state) => state.auth)

  const [profilePicture, setProfilePicture] = useState([]);

  useEffect(() => {
    if (avatar) {
      setProfilePicture(avatar);
    } else {
      setProfilePicture(defaultAvatar);
    }
  }, [avatar]);

  const userUserDropdownHandler = () => {
    if (userUserDropdown) {
      setUserUserDropdown(false);
    } else {
      setUserUserDropdown(true);
    }
  }

  return (
    <div className="py-3 px-5">
      <div className="relative">
        <span className="text-2xl hover:cursor-pointer hover:text-lime-500" onClick={() => userUserDropdownHandler()}>
          {user ? <img className="w-8 h-8 rounded-full cursor-pointer ring-2 ring-green-300" src={profilePicture} alt="User dropdown" /> : <i className="fas fa-user " />}
        </span>
        {user ? <UserDropdown userUserDropdown={userUserDropdown} /> : <UserDropdown2 userUserDropdown={userUserDropdown} />}

      </div>
    </div>
  )
}

export default UserIcon;
