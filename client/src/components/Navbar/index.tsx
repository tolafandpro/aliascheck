import useStyles from "./styles";
import { useState, useEffect } from "react";
import {
  Typography,
  Box,
  Tab,
  Tabs,
  Toolbar,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Switcher from "../Switcher";
// import Link from "next/link";
import DrawerComp from "./Drawer";

interface Props {
  window?: () => Window;
}

const Navbar: React.FC = () => {
  const classes = useStyles();
  const [value, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {}, []);

  return (
    <>
      <Toolbar className={classes.container}>
        <Typography variant="h1" className={classes.title} component="div">
          Aliascheck
        </Typography>
        {isMatch ? (
          <>
            <DrawerComp />
          </>
        ) : (
          <>
            <Tabs
              sx={{ marginLeft: "auto" }}
              indicatorColor="primary"
              textColor="#031521"
              value={value}
              onChange={(e, value) => setValue(value)}
            >
              <Tab label="Home" />
              <Tab label="Services" />
              <Tab label="FAQs" />
            </Tabs>
            <button className={classes.button}>Sign up</button>
            <Box className={classes.switcher}>
              <Switcher />
            </Box>
          </>
        )}
      </Toolbar>
    </>
  );
};
export default Navbar;
