import React from "react";
import { FooterContainer } from "./Footer.element";

const Footer = () => {
  return (
    <FooterContainer>
      <div className="leftLogosFooter">
        <div>
          <img src="http://f13game.com/images/xbox-one.png" alt="" />
        </div>
        <div>
          <img src="http://f13game.com/images/ps4.png" alt="" />
        </div>
        <div>
          <img src="http://f13game.com/images/steam.png" alt="" />
        </div>
        <div>
          <img src="http://f13game.com/images/esrb.png" alt="" />
        </div>
        <div>
          <img src="http://f13game.com/images/pegi.png" alt="" />
        </div>
      </div>
      <div className="rightFooter">
        <p>
          FRIDAY THE 13TH and all related characters and elements are trademarks
          of and © New Line Productions, Inc. and Horror, Inc. (each to the
          extent of their interest). © 2017 Gun Media Holdings, Inc. All Rights
          Reserved. Gun MediaTM and the Gun MediaTM logo are trademarks and/or
          registered trademarks of Gun Media Holdings, Inc. throughout the
          world. IllFonicTM and the IllFonicTM logo are trademarks and/or
          registered trademarks of IllFonic, LLC throughout the world. Gun Media
          Terms of Use | Privacy Policy Friday the 13th: The Game Terms of Use |
          Code of Conduct End User Licence Agreement |
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
