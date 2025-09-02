import "./ImageBox.scss";

const ImageBox = ({ pictures, index, onClick }) => {
  const imageArray = pictures[index].map((picture, i) => {
    return (
      <div>
        <div className={`loadingBox boxID`}>
          <p>Loading...</p>
        </div>
        <img
          className="imageID"
          key={i}
          src={pictures[index][i]}
          onClick={() => onClick(pictures[index][i])}
          style={{ display: "none" }}
          onLoad={() => {
            document
              .getElementsByClassName("imageID")
              [i].setAttribute("style", "display: block;");
            document
              .getElementsByClassName("boxID")
              [i].setAttribute("style", "display: none;");
          }}
        />
      </div>
    );
  });

  return <div className="imageContainer">{imageArray}</div>;
};

export default ImageBox;
