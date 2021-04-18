import { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    text: "",
  };

  onChange = (e) => {
    const { value } = e.target;

    this.setState({ text: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { onSubmit } = this.props;

    onSubmit(this.state.text);
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        <header className={styles.Searchbar}>
          <form onSubmit={this.handleSubmit} className={styles.SearchForm}>
            <button type="submit" className={styles.SearchForm_button}>
              <span className={styles.SearchForm_button_label}>Search</span>
            </button>

            <input
              className={styles.SearchForm_input}
              onChange={this.onChange}
              type="text"
              value={text}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
