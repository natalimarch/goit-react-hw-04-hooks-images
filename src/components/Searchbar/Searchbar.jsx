import { useState } from "react";
import styles from "./Searchbar.module.css";
import PropTypes from "prop-types";
import { fields } from "./fields";

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  const handleChange = ({ target }) => {
    const { value } = target;
    // const newValue = type === "checkbox" || type === "radio" ? checked : value;
    setQuery(value);
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <button type="submit" className={styles.SearchFormButton}>
          <span className={styles.SearchFormButtonLabel}></span>
        </button>

        <input
          {...fields.query}
          className={styles.SearchFormInput}
          value={query}
          onChange={handleChange}
        />
      </form>
    </header>
  );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

// class Searchbar extends Component {
//   state = {
//     query: "",
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.query.trim() === "") {
//       return;
//     }
//     this.props.onSubmit(this.state.query);
//     this.setState({
//       query: "",
//     });
//   };

//   handleChange = ({ target }) => {
//     const { name, value, type, checked } = target;
//     const newValue = type === "checkbox" || type === "radio" ? checked : value;
//     this.setState({
//       [name]: newValue,
//     });
//   };

//   render() {
//     const { query } = this.state;
//     const { handleSubmit, handleChange } = this;

//     return (
//       <header className={styles.Searchbar}>
//         <form onSubmit={handleSubmit} className={styles.SearchForm}>
//           <button type="submit" className={styles.SearchFormButton}>
//             <span className={styles.SearchFormButtonLabel}></span>
//           </button>

//           <input
//             {...fields.query}
//             className={styles.SearchFormInput}
//             value={query}
//             onChange={handleChange}
//           />
//         </form>
//       </header>
//     );
//   }
// }
