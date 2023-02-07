const { default: ImageGalleryItem } = require("components/ImageGalleryItem/ImageGalleryItem")


const ImageGallery = ({ items, onClick }) => {
  return (
    <ul className="ImageGallery" onClick={onClick}>
      {items.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;