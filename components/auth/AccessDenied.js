/**@jsxRuntime classic */
/**@jsx jsx */

import { Container, jsx } from "theme-ui";
import styles from "../../styles/403.module.scss";

export default function AccessDenied() {
  return (
    <Container>
      <div className={styles.app}>
        <div>Sing in First!!</div>
        <div className="txt">
          403_Forbidden<span className={styles.blink}>_</span>
        </div>
      </div>
    </Container>
  );
}
