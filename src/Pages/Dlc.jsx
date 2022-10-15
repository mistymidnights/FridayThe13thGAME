import React from "react";
import { BtnStoreCustom, CardDLC, DlcContainer } from "./Dlc.element";

const Dlc = () => {
  return (
    <DlcContainer>
      <h1 className="titleNews">DLC</h1>
      <div className="landscapeContainer">
        <CardDLC>
          <img
            className="dlcimg"
            src="https://media.discordapp.net/attachments/701164137081733201/1030940820842479696/Sin_titulo.jpg"
            alt=""
          />
          <a
            href="https://store.steampowered.com/app/735000/Friday_the_13th_The_Game__Costume_Party_Counselor_Clothing_Pack/?curator_clanid=24981309"
            target="_blank"
          >
            <BtnStoreCustom />
          </a>
        </CardDLC>
        <div className="rightContainer">
          <h2>Halloween costume pack</h2>
          <p>
            The counselors are dressing up and getting into the holiday spirit
            for Halloween! Each of the original 10 counselors are showing up to
            Camp Crystal Lake in their favorite costumes! After installation you
            can select costumes from the various offerings in the counselor
            customization screen via the main menu or during character select in
            any lobby. Assign each costume with the click of a button!
          </p>
          <div className="dlcGallery">
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/735000/ss_23d25a6d3298b53c9023d7850627ec6bf2ca1959.600x338.jpg?t=1509030096"
              alt=""
            />
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/735000/ss_d8456e12a17fe5f801ecbbc1eec934e0d6d37370.600x338.jpg?t=1509030096"
              alt=""
            />
            <img
              src="https://cdn.akamai.steamstatic.com/steam/apps/735000/ss_6e5e8ece6f10cd74fd9d4096be86d3a6e37dc7a8.600x338.jpg?t=1509030096"
              alt=""
            />
          </div>
        </div>
      </div>
    </DlcContainer>
  );
};

export default Dlc;
