import { Button, TextField } from "@material-ui/core";
import React from "react";

function SubscribeC() {
  return (
    <div className="sub_all">
      {/* left side */}
      <div className="sub_left_side">
        <h1>Contact Us</h1>
        <h2>06 1234-5478</h2>
        <h2>05 1234-5478</h2>
        <p>
          Nr° 451, Bloc J,
          <br /> Madinat EL Wahda, Casablanca
        </p>
      </div>
      {/* right side */}
      <div className="sub_right_side">
        <h1>Subscribe For Any News</h1>
        <TextField
          style={{ width: "100%" }}
          placeholder="enter your email"
          label="Email"
        />
        <TextField
          style={{ width: "100%", marginTop: 32, marginBottom: 32 }}
          placeholder="enter your feedback please"
          label="Feedback / Message"
        />
        <Button
          variant="contained"
          style={{
            color: "#fff",
            backgroundColor: "#362d5e",
            borderRadius: 30,
            width: "50%",
          }}>
          Subscribe
        </Button>
      </div>
    </div>
  );
}

export default SubscribeC;
