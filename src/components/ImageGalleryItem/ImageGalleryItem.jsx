
const ImageGalleryItem = ({  webformatURL }) => {
  return (
    <li className="ImageGalleryItem-item">
      <img
        src={webformatURL}
        alt="cat"
        className="ImageGalleryItem-image"
      />
    </li>
  );
};

export default ImageGalleryItem;