import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error.data);
  return (
    <div>
      <h1>Welcome to Error Page</h1>
      <p>Unexpected error</p>
      <p>{error.data}</p>
    </div>
  );
};

export default ErrorPage;
