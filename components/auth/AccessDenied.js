/**@jsxRuntime classic */
/**@jsx jsx */

import { Button, Container, jsx } from "theme-ui";
import { signIn } from "next-auth/client";
export default function AccessDenied() {
  return (
    <Container>
      <h1>AccessDenied</h1>
      <Button onClick={signIn}>Sign in</Button>
    </Container>
  );
}
