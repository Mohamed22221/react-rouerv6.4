import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate()
  console.log(error)
  return (
    <div>
      <h2>Oops!</h2>
      <p> {error.statusText || error.message}</p>
      <button onClick={()=> navigate('/' , {replace:true})}>Back To Home</button>
    </div>
  );
};

export default ErrorPage;
