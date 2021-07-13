import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  typhographyStyles: {
    flex: 1,
  },
}));
const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.typhographyStyles}>
            Shop for fun and learn material UI
          </Typography>
          <ShoppingCartIcon />
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
