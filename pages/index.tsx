import React from "react";
import {
  Container,
  Typography,
  Box,
  makeStyles,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/router";

import Copyright from "../components/Copyright";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  footer: {
    padding: "1rem",
    position: "fixed",
    bottom: 0,
  },
});

export default function Index() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <Container maxWidth="md" className={classes.root}>
      <Box className={classes.container} my={4}>
        <Typography variant="h4">AnekDote</Typography>
        <Button
          variant="contained"
          onClick={() => {
            router.push("/signup");
          }}
        >
          Sign Up
        </Button>
      </Box>
      <Box className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
  );
}
