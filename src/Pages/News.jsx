import React from "react";
import { CardContainer, NewsContainer } from "./News.element";

const News = () => {
  return (
    <NewsContainer>
      <h1 className="titleNews">Latest news</h1>
      <div className="flexNews">
        <CardContainer>
          <div className="imgCard">
            <img
              src="https://media.discordapp.net/attachments/701164137081733201/1029925742475219065/cabin.jpg?width=1175&height=666"
              alt=""
            />
          </div>
          <div className="textCard">
            <h2>Virtual Cabin 2.0</h2>
            <p className="cardContent" id="cardContent">
              The Virtual Cabin 2.0 is an improved and enlarged version of our
              'Virtual Cabin' that was offered to fans on PC during development
              of the game.
            </p>
            <div className="readMoreContainer">
              <a className="readMore" href="#">
                READ MORE
              </a>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="imgCard">
            <img
              src="https://i.pinimg.com/originals/9c/04/87/9c048729103be4174a7d1cb6de594c51.jpg"
              alt=""
            />
          </div>
          <div className="textCard">
            <h2>Dedicated Servers Update</h2>
            <p className="cardContent">
              Will the Dedicated Servers for Xbox One and PlayStation 4 be
              released with the engine update patch? No. The engine update patch
              is, however, a critical component in getting Dedicated Servers
              functioning on consoles, and is absolutely required for us to get
              there.
            </p>
            <div className="readMoreContainer">
              <a className="readMore" href="#">
                READ MORE
              </a>
            </div>
          </div>
        </CardContainer>
        <CardContainer>
          <div className="imgCard">
            <img
              src="https://www.gamespot.com/a/uploads/original/123/1239113/3275417-friday.png"
              alt=""
            />
          </div>
          <div className="textCard">
            <h2>Savini Jason</h2>
            <p className="cardContent">
              Savini Jason seems to be designed with more vanity than he can
              feasibly use in the hands of a casual player. That aside, his
              primary playstyle seems to border on the "slasher" archetype, in
              which Jason benefits from attacking and pursuing counselors
              outright as opposed to grabbing them and diversifying his kills.
            </p>
            <div className="readMoreContainer">
              <a className="readMore" href="#">
                READ MORE
              </a>
            </div>
          </div>
        </CardContainer>
      </div>
    </NewsContainer>
  );
};

export default News;
