import React from "react";
import "./ImageBox.scss";

const Image = ({ imageSrc, onClick }) => {
  const [isDoneLoading, setIsDoneLoading] = React.useState(false);

  return (
    <div className="Image">
      <img
        className={`${isDoneLoading ? "" : "hidden"}`}
        key={imageSrc}
        src={imageSrc}
        onClick={() => onClick()}
        onLoad={() => setIsDoneLoading(true)}
      />
      {!isDoneLoading && (
        <div className="loading-box">
          <p>Loading...</p>
        </div>
      )}
    </div>
  );
};

const ImageBox = ({ images, onClick }) => {
  const imageArray = images.map((image) => (
    <Image imageSrc={image} onClick={() => onClick(image)} />
  ));

  return <div className="ImageBox">{imageArray}</div>;
};

export default ImageBox;
