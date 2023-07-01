/* eslint-disable import/prefer-default-export */
import { apiSlice } from '../api/apiSlice';
import { updateProfile } from '../auth/authSlice';

export const ProfilePicApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addProfilePic: builder.mutation({
      query: ({ email, avatar }) => ({
        url: `/user/profile/${email}`,
        method: 'PATCH',
        body: { avatar }
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          // console.log('result = ', result)

          if (result.data?.avatar) {
            localStorage.setItem(
              'profile',
              JSON.stringify({
                avatar: result.data.avatar
              })
            );

            dispatch(updateProfile(result.data.avatar));
          }
        } catch (err) {
          // do nothing
        }
      }
    })
  })
});

export const { useAddProfilePicMutation } = ProfilePicApi;
