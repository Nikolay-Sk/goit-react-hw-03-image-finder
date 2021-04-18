import style from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ changePage }) => (
  <div className={style.ButtonPosition}>
    <button onClick={changePage} type="button" className={style.Button}>
      Load More
    </button>{" "}
  </div>
);

Button.propTypes = {
  changePage: PropTypes.func.isRequired,
};

export default Button;
