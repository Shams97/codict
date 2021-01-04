/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import styles from "../../styles/optimisticLine.module.scss";

const OptimisticLine = () => {
  return (
    <div
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className={styles.circleBg}></div>
      <div className={styles.linebg}></div>
    </div>
  );
};

export default OptimisticLine;
