import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import deshboardRoutes from "./routes"
import WidgetsIcon from '@mui/icons-material/Widgets';
import ListAltIcon from '@mui/icons-material/ListAlt';


const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "20px 30px",
  },
}));

export default function Header(props) {
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());

    return () => {
      window.removeEventListener("resize", () => setResponsiveness());
    };
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {femmecubatorLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{femmecubatorLogo}</div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return props.routes.map((route) => {
      if (route.name === "Post Your Property") {
        return (
          <Link
            {...{
              component: RouterLink,
              to: route.layout + route.path,
              color: "inherit",
              style: { textDecoration: "none" },
              key: route.name,
            }}
          >
            <MenuItem style={{ backgroundColor: "orange" }}>
              {route.name}
            </MenuItem>
          </Link>
        );
      } if (route.name === "Menu") {
        return (
          <Link
            {...{
              component: RouterLink,
              to: route.layout + route.path,
              color: "inherit",
              style: { textDecoration: "none" },
              key: route.name,
            }}
          >
            <MenuItem style={{ backgroundColor: "orange" }}>
              <WidgetsIcon/>{route.name}
            </MenuItem>
          </Link>
        )
      }if (route.name === "My Booking") {
        return (
          <Link
            {...{
              component: RouterLink,
              to: route.layout + route.path,
              color: "inherit",
              style: { textDecoration: "none" },
              key: route.name,
            }}
          >
            <MenuItem style={{ backgroundColor: "green" }}>
              <ListAltIcon/>{route.name}
            </MenuItem>
          </Link>
        )
      }
      else {
        return (
          <Link
            {...{
              component: RouterLink,
              to: route.layout + route.path,
              color: "inherit",
              style: { textDecoration: "none" },
              key: route.name,
            }}
          >
            <MenuItem>{route.name}</MenuItem>
          </Link>
        );
      }
    });
  };

  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      <marquee>Book your next room here.</marquee>
    </Typography>
  );

  const getMenuButtons = () => {
    return props.routes.map((route) => {
      console.log("name===>", route.name)
      if (route.name === "Home") {
        return (
          <Button
            {...{
              key: route.name,
              color: "inherit",
              to: route.layout + route.path,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {route.name}
          </Button>
        )
      }
      if (route.name === "Post Your Property") {
        return (
          <Button
            {...{
              key: route.name,
              color: "inherit",
              to: route.layout + route.path,
              component: RouterLink,
              className: menuButton,
            }}
            style={{
              backgroundColor: "orange"
            }}
          >
            {route.name}
          </Button>
        )
      }if (route.name === "My Booking") {
        return (
          <Button
            {...{
              key: route.name,
              color: "inherit",
              to: route.layout + route.path,
              component: RouterLink,
              className: menuButton,
            }}
            style={{
              backgroundColor: "orange"
            }}
          >
            <ListAltIcon/>
            {route.name}
          </Button>
        )
      }
      if (route.name === "Menu") {
        return (
          <Button
            {...{
              key: route.name,
              color: "inherit",
              to: route.layout + route.path,
              component: RouterLink,
              className: menuButton,
            }}
            style={{
              backgroundColor: "orange"
            }}
          >
            <WidgetsIcon />
            {route.name}
          </Button>
        )
      }
      else {
        return (
          <Button
            {...{
              key: route.name,
              color: "inherit",
              to: route.layout + route.path,
              component: RouterLink,
              className: menuButton,
            }}
          >
            {route.name}
          </Button>
        );
      }
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}
