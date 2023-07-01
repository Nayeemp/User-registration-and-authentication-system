import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile, userLoggedIn } from '../features/auth/authSlice';

function useLocalAuthCheck() {
  const [authChecked, setAuthChecked] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const localAuth = localStorage.getItem('auth');
    const localProfile = localStorage.getItem('profile');
    // console.log(localAuth);
    if (localAuth) {
      const auth = JSON.parse(localAuth);
      if (auth?.accessToken && auth?.user && auth?.email) {
        // console.log(auth);
        dispatch(
          userLoggedIn({
            accessToken: auth.accessToken,
            user: auth.user,
            email: auth.email
          })
        );
      }
    }

    if (localProfile) {
      const profile = JSON.parse(localProfile);
      dispatch(updateProfile(profile.avatar))
    }

    setAuthChecked(true);
  }, [dispatch, setAuthChecked]);

  return authChecked;
}

export default useLocalAuthCheck;
