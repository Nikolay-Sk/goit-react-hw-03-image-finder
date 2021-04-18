import Loader from "react-loader-spinner";
import style from "./Spinner.module.css";

const SpinnerComponent = () => {
  return (
    <div className={style.loader}>
      <Loader
        type="BallTriangle"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000}
      />
    </div>
  );
};

export default SpinnerComponent;
