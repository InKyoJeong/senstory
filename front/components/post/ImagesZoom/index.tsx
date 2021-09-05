import React, { useState } from 'react';
import Slick from 'react-slick';

import { Overlay, Global, CloseBtn, ImageWrapper, Indicator, SlickWrapper } from './styles';
import { PostImage } from '../../../interfaces/post';

interface ImageZoomProps {
  images: PostImage[];
  onClose: () => void;
}

const ImagesZoom = ({ images, onClose }: ImageZoomProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <div>
        <CloseBtn onClick={onClose} />
      </div>
      <SlickWrapper>
        <div>
          <Slick
            initialSlide={0}
            afterChange={(slide) => setCurrentSlide(slide)}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImageWrapper key={v.src}>
                <img src={`${v.src.replace(/\/thumb\//, '/original/')}`} alt={v.src} />
              </ImageWrapper>
            ))}
          </Slick>
          <Indicator>
            <div>
              {currentSlide + 1} / {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

export default ImagesZoom;
