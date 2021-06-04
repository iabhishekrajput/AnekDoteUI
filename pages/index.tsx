import React from "react";
import { Container, Typography, Box, makeStyles } from "@material-ui/core";

import Copyright from "../components/Copyright";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  footer: {
    padding: "1rem",
    position: "fixed",
    bottom: 0,
  },
});

export default function Index() {
  const classes = useStyles();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.container} my={4}>
        <Typography variant="h4">AnekDote</Typography>
      </Box>
      <Box className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
  );
}
