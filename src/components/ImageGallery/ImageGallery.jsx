const { default: ImageGalleryItem } = require("components/ImageGalleryItem/ImageGalleryItem")


const ImageGallery = ({items}) => {
    return (
      <ul className="ImageGallery">
        {items.map(({ id, webformatURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
          />
        ))}
      </ul>
    );
}

export default ImageGallery;