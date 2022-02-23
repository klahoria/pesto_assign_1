import React from "react";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

export default (WrappedComponent) => {
  const hocComponent = ({ ...props }) => (
    <Grid container spacing={2} display="flex" justifyContent={'center'} alignItems={"center"} style={{height:'calc(100%)'}}>
      <Grid item xs={10}>
        <WrappedComponent {...props} />
      </Grid>
    </Grid>
  );

  hocComponent.propTypes = {};

  return hocComponent;
};
