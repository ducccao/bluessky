import React from "react";
import { Box, withStyles, Grid } from "@material-ui/core";
import "./../sass/svg.css";
import Footer from "./Footer";
import { Link, withRouter, Redirect } from "react-router-dom";
import UsersLogin from "./Users/UsersLogin";
import SocialMedia from "./SocialMedia";
import classnames from "classnames";
const style = (theme) => ({
  social_icon_css: {
    height: 30,
    width: 30,
  },
  but_css: {
    background: "transparent",
    outline: "none",
    border: "none",
    cursor: "pointer",
    height: "fit-content",
    width: "fit-content",
    padding: 15,
    "&:hover": {
      "& path": {
        fill: "black",
      },
    },
  },
  width_50: {
    width: "50%",
  },
  footer_coponent_css: {
    marginTop: "10%",
  },
  //  animation slider
  test: {
    height: "100%",
    width: "100%",
  },
  father: {
    overflow: "hidden",
    position: "relative",
  },
  child: {
    position: "absolute",
    transition: "0.5s",
  },
  child_1: {
    top: 0,
    left: "50%",
    transform: "translate(-50%, 0)",
  },
  child_2: {
    top: 0,
    left: "100%",
  },
  hideSocialMedia: {
    left: 0,
    transform: "translate(-100%, 0)",
  },
  showUsersLogin: {
    left: 0,
  },
});

let log = console.log;

class Social extends React.Component {
  loginHandle = (event) => {
    // log("footer is touching social");
    const { location } = this.props;

    // history.push("/social/users/login");
    // location.pathname = "/social/users/login";

    // log(location);
    // log(history);
    // log("event " + event);

    if (location.pathname === "/social") {
      return true;
    } else if (location.pathname === "/users/login") {
      return false;
    }
    // return true;
  };
  hideSocialMedia = () => {
    const { location } = this.props;
    if (location.pathname !== "/social") {
      return true;
    }
    return false;
  };
  showUsersLogin = () => {
    const { location } = this.props;
    if (location.pathname === "/users/login") {
      return true;
    }
    return false;
  };

  // Làm hiệu ứng slider - test từ hover sang click rồi sang handle
  // Tìm cách viết điều kiện classes ==>> npm classnames
  // Làm từ CSS sang material ui
  render() {
    const { classes } = this.props;
    return (
      <Grid>
        <Grid item>
          {/* {this.loginHandle() ? <SocialMedia /> : <UsersLogin />} */}
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
            height="50vh"
          >
            <div id="special" className={classes.father}>
              <div
                className={classnames(classes.child + " " + classes.child_1, {
                  [classes.hideSocialMedia]: this.hideSocialMedia() === true,
                })}
              >
                <SocialMedia />
              </div>
              <div
                className={classnames(classes.child + " " + classes.child_2, {
                  [classes.showUsersLogin]: this.showUsersLogin() === true,
                })}
              >
                <UsersLogin />
              </div>
            </div>
          </Box>
        </Grid>
        <Grid item className={classes.footer_coponent_css}>
          <Footer loginHandle={this.loginHandle} />
        </Grid>
      </Grid>
    );
  }
}

export default withRouter(withStyles(style)(Social));
