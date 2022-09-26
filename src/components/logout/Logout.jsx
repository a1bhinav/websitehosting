import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/api/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("userId");
        localStorage.removeItem("userTestAttempted");
        localStorage.removeItem("userLearningAttempted");
        navigate("/", { replace: true });

        if (!(res.status === 200)) {
          throw new Error(res.error);
        }
      })
      .catch((err) => {
        navigate("/", { replace: true });

        console.log(err);
      });
  });

  return (
    <>
    </>
  );
};

export default Logout;