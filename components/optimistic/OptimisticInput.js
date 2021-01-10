/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import styles from "../../styles/optimistic.module.scss";

const OptimisticInput = () => {
  return (
    <div className={styles.input}>
      <div className={styles.inputArrow}></div>
    </div>
  );
};

export default OptimisticInput;
