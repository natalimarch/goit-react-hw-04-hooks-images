import styles from "../ImageGalleryItem/ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ pageUrl, largeUrl, tags, onPictureOpen }) => {
  return (
    <li
      className={styles.Item}
      onClick={() => {
        onPictureOpen(largeUrl);
      }}
    >
      <img src={pageUrl} alt={tags} className={styles.Image} />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  pageUrl: PropTypes.string.isRequired,
  largeUrl: PropTypes.string.isRequired,
  onPictureOpen: PropTypes.func.isRequired,
  tags: PropTypes.string,
};
