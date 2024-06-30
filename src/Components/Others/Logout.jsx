import React from "react";
import { useNavigate } from "react-router-dom";



function Logout() {
    const navigate = useNavigate();
    localStorage.clear();
    navigate('/');

  return (
<div></div>
  )
}

export default Logout
