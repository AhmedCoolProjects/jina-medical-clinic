import React from "react";
import Carousel from "react-material-ui-carousel";
import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import "../styles/carouselC.scss";
import doctorImg from "../assets/doctor.png";

const useStyles = makeStyles((theme) => ({
  mainFeaturedCardContent: {
    position: "relative",
    zIndex: 1,
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
}));
function Project({ item }) {
  const classes = useStyles();
  return (
    <Paper
      className="Project"
      style={{
        background: "transparent",
      }}
      elevation={0}>
      <img
        alt="this_is"
        src={doctorImg}
        style={{
          height: "90%",
          objectFit: "contain",
          position: "absolute",
          right: "5%",
          top: "5%",
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedCardContent}>
            <Typography
              component="h1"
              variant="h2"
              color="inherit"
              gutterBottom>
              {item.name}
            </Typography>
            <Typography
              style={{ marginLeft: 15 }}
              variant="h5"
              color="inherit"
              paragraph>
              {item.description}
            </Typography>
          </div>
        </Grid>
      </Grid>

      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
}

const items = [
  {
    name: "First Slide",
    description: "You can choose any image you want to display here.",
  },
  {
    name: "Second Slide",
    description:
      "Also you can add custimized buttons to interact with the user and improve the user experience in your web site.",
  },
  {
    name: "Third Slide ",
    description:
      "You can make your carousel on the autoplay mode or not, also you can choose if you want to activate swiping on the slides to move.",
  },
  {
    name: "Fourth Slide",
    description: "Finaly, you can add as you want of slides .",
  },
];

export default function CarouselC() {
  return (
    <Carousel
      className="SecondExample"
      autoPlay
      animation="slide"
      timeout={600}>
      {items.map((item, index) => {
        return <Project item={item} key={index} />;
      })}
    </Carousel>
  );
}
