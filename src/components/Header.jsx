import React from "react";
import { HeaderContainer, HeroOne } from "./Header.element";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const Toggle = () => {
    const trailer = document.querySelector(".trailer");
    const logo = document.querySelector(".logoContainer");
    const video = document.querySelector("video");
    trailer.classList.toggle("active");
    logo.classList.toggle("active");
    if (trailer.classList === "active") {
      video.play();
    } else {
      video.pause();
    }
  };

  return (
    <>
      <HeaderContainer>
        <div className="logoContainer">
          <img
            src="https://i.ibb.co/6WvxsDJ/Friday-the-13th-game-logo.png"
            alt=""
          />
        </div>
        <nav>
          <ul className="navMenu">
            <li>
              <a href="">Jason</a>
            </li>
            <li>
              <a href="">Counselor</a>
            </li>
            <li>
              <a href="">About Game</a>
            </li>
          </ul>
        </nav>
      </HeaderContainer>
      <HeroOne>
        <h1 className="mainText">Welcome to camp Crytal Lake</h1>
        <button className="HeroMainBtn" onClick={Toggle}>
          Watch trailer
        </button>
        <div className="trailer">
          <video
            src="src\assets\video\Friday the 13th_ The Game - Official Announcement Trailer.mp4"
            controls="true"
          ></video>
          <GrClose onClick={Toggle} className="BtnClose" />
        </div>
      </HeroOne>
    </>
  );
};

export default Header;
