import React from "react";
import injectSheet from "react-jss";
import PropTypes from "prop-types";

import nosLogo from "./../../assets/domainname.png";

const styles = {
  logoContainer: {
    display: "block",
    maxWidth: "100%",
    position: "relative"
  },
  nosLogo: {
    animation: "nOS-logo-spin infinite 3s linear",
  },
  "@keyframes nOS-logo-spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  }
};

const SpinningLogo = ({ classes }) => (
  <div className={classes.logoContainer}>
    <img src={nosLogo}  alt="nOS logo" key="nosLogo" />
  </div>
);

SpinningLogo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default injectSheet(styles)(SpinningLogo);
