/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import styles from "../../styles/optimistic.module.scss";
import { Col, Row } from "reactstrap";

export default function OptimisticDescription() {
  return (
    <Row>
      <Col className="mx-auto" xs="12" md="10" lg="8">
        <div className={styles.description}>
          <div className={styles.descFooter}>
            <div className={styles.descIcons}></div>
            <div className={styles.descIcons}></div>
            <div className={styles.descIcons}></div>
          </div>
          <div className={styles.descMiddle}></div>
        </div>
      </Col>
    </Row>
  );
}
