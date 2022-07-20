import React from "react";
import "./FollowersCard.css";

import { Followers } from "../../Data/FollowersData";

const FollowersCard = () => {
  return (
    <div className="FollowersCard">
      <h3>Quem seguiu você</h3>

      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img src={follower.avatar} alt="" className="followerImg" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className="button fc-button">Seguir</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
