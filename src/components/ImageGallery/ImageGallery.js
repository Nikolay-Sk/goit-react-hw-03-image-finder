import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={styles.ImageGallery}>
      {images.map((element) => (
        <ImageGalleryItem
          key={element.id}
          url={element.webformatURL}
          alt={element.tags}
          modalImage={element.largeImageURL}
          openModal={openModal}
        />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGallery;
