import React from "react";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";

import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="imagem de fundo do card" />
        <img src={Profile} alt="imagem do perfil" />
      </div>
      <div className="ProfileName">
        <span>Helena Paiva</span>
        <span>Fullstack Developer Jr </span>
      </div>
      <div className="FollowStatus">
        <hr />
        <div>
          <div className="Follow">
            <span>6.890</span>
            <span>Seguidores</span>
          </div>
          <div className="vl"></div>
          <div className="Follow">
            <span>490</span>
            <span>Seguindo</span>
          </div>
        </div>
        <hr />
      </div>
      <span>Meu Perfil</span>
    </div>
  );
};

export default ProfileCard;
