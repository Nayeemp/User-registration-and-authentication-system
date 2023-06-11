import React from 'react';
import { useFetchDataQuery } from '../features/api/apiSlice';
import Error from './Error';

function Home() {
  const {
    isLoading, isError, data, error, isSuccess
  } = useFetchDataQuery();

  // what to render

  let content;

  if (isLoading && !isError) {
    content = <h1>Loading..</h1>;
  }
  if (!isLoading && isError) {
    // console.log(error);
    if (error?.data?.message) {
      content = <Error message={error.data.message} />;
    } else {
      content = <Error message="There is an error" />;
    }
  }

  if (isSuccess) {
    content = data.data;
  }

  return (
    <div className="m-2 p-5 border-solid border-2 border-gray-200 rounded-md mt-4 text-center">
      {content}
    </div>
  );
}

export default Home;
