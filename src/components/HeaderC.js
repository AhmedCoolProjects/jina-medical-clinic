import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import { Button } from "@material-ui/core";
import logo from "../assets/logo.svg";
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function HeaderC() {
  const classes = useStyles();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}>
      <MenuItem>
        <Button
          startIcon={<LocationOnIcon />}
          style={{
            textDecoration: "underline",
            fontSize: 10,
            color: "blue",
          }}>
          Find Us
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          startIcon={<AccessTimeIcon />}
          style={{
            textDecoration: "underline",
            fontSize: 10,
            color: "blue",
          }}>
          working time
        </Button>
      </MenuItem>
      <MenuItem>
        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: 40 }}
          startIcon={<AccountCircle />}>
          Register
        </Button>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        elevation={0}
        style={{ background: "transparent" }}
        position="static">
        <Toolbar>
          <IconButton>
            <img
              src={logo}
              alt="this_is"
              style={{ width: "1.3em", height: "1.3em" }}
            />
          </IconButton>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button
              startIcon={<LocationOnIcon />}
              style={{
                textDecoration: "underline",
                fontSize: 10,
                color: "blue",
              }}>
              Find Us
            </Button>
            <Button
              startIcon={<AccessTimeIcon />}
              style={{
                textDecoration: "underline",
                fontSize: 10,
                color: "blue",
              }}>
              working time
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ borderRadius: 40 }}
              startIcon={<AccountCircle />}>
              Register
            </Button>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit">
              <MoreIcon style={{ color: "black" }} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
