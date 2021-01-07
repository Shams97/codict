/**@jsxRuntime classic */
/**@jsx jsx */
import { jsx } from "theme-ui";
import styles from "../../styles/optimistic.module.scss";
import { Table, Row, Col } from "reactstrap";

export default function OptimisticTable() {
  return (
    <Row className="mt-4">
      <Col
        md="8"
        className="mx-auto"
        lg="6"
        sx={{
          marginTop: "4rem",
        }}
      >
        <Table className={styles.table} bordered>
          <tbody>
            <tr>
              <th className={styles.tableHead}></th>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
            </tr>
            <tr>
              <th className={styles.tableHead}></th>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
            </tr>
            <tr>
              <th className={styles.tableHead}></th>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
              <td className={styles.tableData}></td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
}
