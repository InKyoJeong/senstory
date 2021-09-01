import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import Conditional from '../../../hocs/Conditional';
import ImagesZoom from '../ImagesZoom';
import { ImgWrapper, LeftImg, RightImg, MoreImgWrapper, MoreText, MoreTextWrapper, SigleImg } from './styles';

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
        <SigleImg
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
      <ImgWrapper>
        <LeftImg>
          <img
            role="presentation"
            src={`http://localhost:3065/${images[0].src}`}
            alt={images[0].src}
            onClick={onZoom}
          />
        </LeftImg>
        <RightImg>
          <img
            role="presentation"
            src={`http://localhost:3065/${images[1].src}`}
            alt={images[1].src}
            onClick={onZoom}
          />
        </RightImg>
        <Conditional condition={showImagesZoom}>
          <ImagesZoom images={images} onClose={onClose} />
        </Conditional>
      </ImgWrapper>
    );
  }

  return (
    <>
      <ImgWrapper onClick={onZoom}>
        <LeftImg>
          <img role="presentation" src={`http://localhost:3065/${images[0].src}`} alt={images[0].src} />
        </LeftImg>
        <RightImg>
          <MoreImgWrapper>
            <img role="presentation" src={`http://localhost:3065/${images[1].src}`} alt={images[1].src} />

            <MoreTextWrapper>
              <PlusOutlined />
              <MoreText>{images.length - 1}장</MoreText>
            </MoreTextWrapper>
          </MoreImgWrapper>
        </RightImg>
      </ImgWrapper>

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
