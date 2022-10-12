import PropTypes from 'prop-types';
import {
  ImageGalleryElement,
  ImageGalleryImg,
} from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ id, preview, alt, url, onShowLargeImg }) => {
  return (
    <ImageGalleryElement
      key={id}
      onClick={() => {
        onShowLargeImg({ url, alt });
      }}
    >
      <ImageGalleryImg src={preview} alt={alt} />
    </ImageGalleryElement>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  onShowLargeImg: PropTypes.func.isRequired,
};
