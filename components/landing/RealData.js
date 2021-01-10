/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import styles from "../../styles/optimistic.module.scss";
import { useEffect, useState } from "react";

const RealData = ({ number, word }) => {
  const [roll, setRoll] = useState(0);

  useEffect(() => {
    let i = 0;

    while (i < number) {
      setTimeout(() => {
        setRoll(() => {
          return i;
        });
      }, 500);
      i++;
    }
  }, []);
  return (
    <div className={styles.realWrapper}>
      <div>{roll}</div>
      <div>{word}</div>
    </div>
  );
};
export default RealData;
