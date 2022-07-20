import React, { useState, useRef } from "react";
import Profile from "../../img/profile.jpeg";
import {
  UilScenery,
  UilPlayCircle,
  UilLocationPoint,
  UilSchedule,
  UilTimes,
} from "@iconscout/react-unicons";
import "./PostShare.css";

const PostShare = () => {
  const [image, setImage] = useState(false);
  const imageRef = useRef();

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setImage({
        image: URL.createObjectURL(img),
      });
    }
  };

  return (
    <>
      <div className="PostShare">
        <img src={Profile} alt="" />
        <div>
          <input type="text" placeholder="O que está acontecendo?" />
          <div className="postOptions">
            <div
              className="option"
              style={{ color: "var(--photo)" }}
              onClick={() => imageRef.current.click()}
            >
              <UilScenery />
              Foto
            </div>
            <div className="option" style={{ color: "var(--video)" }}>
              <UilPlayCircle />
              Video
            </div>
            <div className="option" style={{ color: "var(--location)" }}>
              <UilLocationPoint />
              Localização
            </div>
            <div className="option" style={{ color: "var(--schedule)" }}>
              <UilSchedule />
              Cronograma
            </div>
            <button className="button ps-button">Enviar</button>
            <div style={{ display: "none" }}>
              <input
                type="file"
                name="myImage"
                ref={imageRef}
                onChange={onImageChange}
              />
            </div>
          </div>
          {image && (
            <div className="previewImage">
              <UilTimes onClick={() => setImage(false)} />
              <img src={image.image} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PostShare;
