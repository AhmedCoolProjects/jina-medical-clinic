import { Button, Paper, Typography } from "@material-ui/core";
import React from "react";

function DoctorCardC({ name, image, speciality }) {
  return (
    <Paper className="doctor_card_paper">
      <div className="doctor_card_content">
        <img
          style={{ height: 90, objectFit: "contain", marginRight: 8 }}
          src={image}
          alt={"name"}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "90%",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: 4,
          }}>
          <Typography
            style={{
              fontSize: 20,
              fontWeight: "600",
              textTransform: "uppercase",
            }}>
            {name}
          </Typography>
          <Typography style={{ color: "rgba(0,0,0,0.6)" }}>
            {speciality}
          </Typography>
        </div>
      </div>
      {/* btns */}
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}>
        <Button style={{ flex: 1 }}>meeting</Button>
        <Button style={{ flex: 1 }}>call</Button>
      </div>
    </Paper>
  );
}

export default DoctorCardC;
