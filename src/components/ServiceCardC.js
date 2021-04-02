import React from "react";
import { ChevronRight } from "@material-ui/icons";
import {
  Typography,
  Grid,
  IconButton,
  CardActionArea,
} from "@material-ui/core";

function ServiceCardC({ service }) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <CardActionArea
        style={{
          alignItems: "center",
          textAlign: "center",
          justifyContent: "space-around",
          minHeight: 200,
          backgroundColor: "rgba(255,255,255,0.3)",
        }}>
        <img
          style={{ margin: 20, height: "80%", objectFit: "contain" }}
          src={service.image}
          alt={service.name}
        />
        <Typography
          component="h3"
          variant="h6"
          color="inherit"
          align="center"
          noWrap>
          {service.name}
        </Typography>
        <IconButton
          style={{
            position: "absolute",
            top: 0,
            right: 0,
          }}>
          <ChevronRight style={{ color: "#8f74f6" }} />
        </IconButton>
      </CardActionArea>
    </Grid>
  );
}
export default ServiceCardC;
