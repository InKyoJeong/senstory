import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import { PlusOutlined, PlusCircleFilled } from "@ant-design/icons";

import Conditional from "../../hocs/Conditional";
import ImagesZoom from "../ImagesZoom";

const PostImages = ({ images }) => {
  const [showImagesZoom, serShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    serShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    serShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          role="presentation"
          src={images[0].src}
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
          style={{ width: "50%", display: "inline-block" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <img
          role="presentation"
          style={{ width: "50%", display: "inline-block" }}
          src={images[1].src}
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
      <div style={{ background: "rgba(0,0,0,0.1)" }}>
        <img
          role="presentation"
          style={{ width: "50%" }}
          src={images[0].src}
          alt={images[0].src}
          onClick={onZoom}
        />
        <div
          role="presentation"
          style={{
            display: "inline-block",
            width: "50%",
            textAlign: "center",
            verticalAlign: "middle",
          }}
          onClick={onZoom}
        >
          <PlusCircleFilled />
          <br />
          {images.length - 1}개의 사진 더보기
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
