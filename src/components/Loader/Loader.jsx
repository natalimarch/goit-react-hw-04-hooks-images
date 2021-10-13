import React from "react";
import LoaderSpin from "react-loader-spinner";

import styles from "../Loader/Loader.module.css";

const Loader = () => {
  return (
    <LoaderSpin
      className={styles.Load}
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={3000}
    />
  );
};
// class Loader extends React.Component {
//   render() {

//   }
// }

export default Loader;
