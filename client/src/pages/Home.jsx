import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Allplants from "../Allplants";
import Plants from "../components/Plants";
import MainLayout from "../layouts/MainLayout";

import Donation from "../components/Donation"

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s plants`
      : "Plant.io";
  }, [authState]);

  return (
    <>
      <MainLayout>
        {!isLoggedIn ? (
          <div className="bg-primary text-white h-[40vh] py-8 text-center">
            <h1 className="text-2xl"> Welcome to Plant.io</h1>
            <Link
              to="/signup"
              className="mt-10 text-xl block space-x-2 hover:space-x-4"
            >
              <span className="transition-[margin]">
                Your ultimate app for plant enthusiasts and green thumbs!
              </span>
              <span className="relative ml-4 text-base transition-[margin]">
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
            <Donation />
            <>
              <Allplants />
            </>

          </div>
        ) : (
          <>
            <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
              Welcome {authState.user.name}
            </h1>
            <Plants />
          </>
        )}
      </MainLayout>
    </>
  );
};

export default Home;
