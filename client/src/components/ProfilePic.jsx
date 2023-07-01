/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar-edit';
import { useSelector } from 'react-redux';
import defaultAvatar from '../assets/picture/userAvatar.png';
import { useAddProfilePicMutation } from '../features/profilePic/profilePicApi';
import Error from './Error';
import Success from './Success';

function ProfilePic() {
  const [modal, setModal] = useState(false);
  const [imgCrop, setImgCrop] = useState(false);
  const [storeImage, setStoreImage] = useState([]);
  const [profilePicture, setProfilePicture] = useState([]);

  const { email, avatar } = useSelector((state) => state.auth);

  useEffect(() => {
    if (avatar) {
      setProfilePicture(avatar);
    } else {
      setProfilePicture(defaultAvatar);
    }
  }, [avatar]);

  const [addProfilePic, {
    isLoading, isError, error, data
  }] = useAddProfilePicMutation()

  console.log('error = ', error);
  console.log('data = ', data);

  let uploadedProfilePicture = null;

  if (storeImage?.length !== 0) {
    uploadedProfilePicture = storeImage.map((buffer) => buffer.imgCrop);
    console.log('uploadedProfilePicture  = ', uploadedProfilePicture);
  }

  const onCrop = (view) => {
    setImgCrop(view);
  }

  const onClose = () => {
    setImgCrop(null);
  }

  const saveImage = () => {
    setStoreImage([...storeImage, { imgCrop }]);
    setModal(false);
  }

  const modalOpen = () => {
    setStoreImage([]);
    setModal(true);
  }

  const modalClose = () => {
    setModal(false);
  }

  const uploadProfile = () => {
    addProfilePic({ email, avatar: uploadedProfilePicture });
  }

  return (
    <div>

      <div className="max-w-md mx-auto m-10">
        <h2 className="font-bold text-center text-lg">Update Profile Picture</h2>

        <div className="flex justify-center  p-5">
          <img className="w-36 h-36 rounded-full cursor-pointer ring-2 ring-green-300" src={(uploadedProfilePicture?.length) ? uploadedProfilePicture : profilePicture} alt="User dropdown" onClick={modalOpen} />
        </div>

        <div className="w-full flex justify-center m-3">
          <button
            type="button"
            className="text-lg bg-black hover:bg-gray-800 text-white px-14 py-0.5 cursor-pointer rounded-sm"
            onClick={uploadedProfilePicture ? uploadProfile : modalOpen}
          >
            {uploadedProfilePicture ? 'Save' : 'Add a image'}
          </button>
        </div>

        {isError && <Error message="there is an error" /> }
        {data && <Success message="Profile picture updated successfully" />}

        {/* <div className="flex justify-between">
          <button
            type="button"
            className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200"
          >
            Skip
          </button>

          <button
            type="button"
            className="inline-block rounded bg-blue-200 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-blue-100 focus:bg-blue-100 focus:outline-none focus:ring-0 active:bg-blue-200"
          >
            next
          </button>
        </div> */}
      </div>

      <div
        id="hs-vertically-centered-modal"
        className={`hs-overlay w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto  ${!modal && 'hidden'}`}
      >
        <div
          className="mt-7 opacity-100 duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center"
        >
          <div
            className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]"
          >
            <div
              className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700"
            >
              <h3 className="font-bold text-gray-800 dark:text-white">Profile Pic</h3>
              <button
                type="button"
                className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
                onClick={modalClose}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="w-3.5 h-3.5"
                  width="8"
                  height="8"
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
            <div className="p-4 overflow-y-auto">

              <div>
                <Avatar
                  width={390}
                  height={295}
                  onCrop={onCrop}
                  onClose={onClose}
                />
              </div>

            </div>
            <div
              className="flex justify-center py-3 px-4 border-t "
            >
              <button
                type="button"
                className="py-3 px-10 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                href="#"
                onClick={saveImage}
                disabled={isLoading}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProfilePic;
