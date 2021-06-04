import React from "react";
import { Container, Typography, Box } from "@material-ui/core";

import Copyright from "../components/Copyright";

export default function Index() {
  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography>Hello World</Typography>
        <Copyright />
      </Box>
    </Container>
  );
}
