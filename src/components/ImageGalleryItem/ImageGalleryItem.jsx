import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL }) => {
  return (
    <li className="ImageGalleryItem-item">
      <img
        src={webformatURL}
        alt={largeImageURL}
        className="ImageGalleryItem-image"
      />
    </li>
  );
};


ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired
};

export default ImageGalleryItem;
