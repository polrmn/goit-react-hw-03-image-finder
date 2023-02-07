
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

export default ImageGalleryItem;