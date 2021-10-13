import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import styles from "../ImageGallery/ImageGallery.module.css";
import PropTypes from "prop-types";

const ImageGallery = ({ list, onPictureOpen }) => {
  const imgList = list.map((item) => {
    return (
      <>
        <ImageGalleryItem
          key={item.id}
          pageUrl={item.webformatURL}
          largeUrl={item.largeImageURL}
          tags={item.tags}
          onPictureOpen={onPictureOpen}
        />
      </>
    );
  });

  return <ul className={styles.List}>{imgList}</ul>;
};

export default ImageGallery;

ImageGallery.defaultProps = {
  onPictureOpen: () => {},
};

ImageGallery.propTypes = {
  list: PropTypes.array.isRequired,
  onPictureOpen: PropTypes.func,
};
