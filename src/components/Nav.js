import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const logOutHandler = () => {
    //api
    navigate("/", { replace: true });
  };
  const id = 1;
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="info">info</Link>
        </li>
        <li>
          <Link to={`${id}/edit`}>edit</Link>
        </li>
        <li onClick={logOutHandler}>logout</li>
      </ul>
    </div>
  );
};

export default Nav;
