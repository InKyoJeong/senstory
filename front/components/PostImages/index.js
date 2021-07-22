import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined, PlusCircleFilled } from "@ant-design/icons";

import Conditional from "../../hocs/Conditional";
import ImagesZoom from "../ImagesZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <Conditional condition={showImagesZoom}>
          <ImagesZoom images={images} onClose={onClose} />
        </Conditional>
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <img
          role="presentation"
          style={{ width: "50%", height: "300px", display: "inline-block" }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", height: "300px", display: "inline-block" }}
          src={`http://localhost:3065/${images[1].src}`}
          alt={images[1].src}
          onClick={onZoom}
        />
        <Conditional condition={showImagesZoom}>
          <ImagesZoom images={images} onClose={onClose} />
        </Conditional>
      </>
    );
  }

  return (
    <>
      <div
        style={{
          background: "linear-gradient(-45deg, #505f66, gray)",
        }}
        onClick={onZoom}
      >
        <img
          role="presentation"
          style={{ width: "50%", height: "300px" }}
          src={`http://localhost:3065/${images[0].src}`}
          alt={images[0].src}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
        >
          <PlusOutlined />{" "}
          <span style={{ fontSize: "20px", color: "black" }}>
            {images.length - 1}장
          </span>
        </div>
      </div>

      <Conditional condition={showImagesZoom}>
        <ImagesZoom images={images} onClose={onClose} />
      </Conditional>
    </>
  );
};

PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
};

export default PostImages;
