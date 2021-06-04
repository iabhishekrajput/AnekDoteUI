import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

import ProTip from "../components/ProTip";
import Link from "../components/Link";
import Copyright from "../components/Copyright";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js with TypeScript example
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
