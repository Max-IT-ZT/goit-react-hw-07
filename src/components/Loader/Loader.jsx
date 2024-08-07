import { ProgressBar } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.container}>
      <ProgressBar
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        barColor="#ffa500"
        borderColor="#fff"
        barWidth="50"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}
