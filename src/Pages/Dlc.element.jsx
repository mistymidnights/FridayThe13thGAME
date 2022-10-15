import styled from "@emotion/styled";

export const DlcContainer = styled.div`
  height: 1088px;
  width: 100%;
  background-image: url("https://media.discordapp.net/attachments/701164137081733201/1030180567075016734/backhero3.png?width=1172&height=664");
  background-size: cover;
  position: absolute;
  top: 1750px;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const BtnStoreCustom = styled.div`
  height: 156px;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url("https://media.discordapp.net/attachments/701164137081733201/1030934109352104066/btnstore.png");
  &:hover {
    border: none;
    border-color: transparent;
  }
`;

export const CardDLC = styled.div`
  height: 559px;
  width: 346px;
  display: flex;
  flex-direction: column;
`;
