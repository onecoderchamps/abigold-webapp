import { useState, useEffect } from "react";
import * as animationData from "../../../assets/gifs/maintenance.json";
import Lottie from "react-lottie";

const UserList = ({ pageProps }) => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };


  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-gray-100">
      <Lottie options={defaultOptions} height={300} width={300} />
      <div className="mt-4 text-xl font-semibold text-black">
        Website Under Development 
      </div>
    </div>
  );
};

export default UserList;
