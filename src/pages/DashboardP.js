import React, { Fragment } from "react";
// cores
import {
  Divider,
  Typography,
  CssBaseline,
  Grid,
  Container,
} from "@material-ui/core";
// components
import ServiceCardC from "../components/ServiceCardC";
import CopyrightC from "../components/CopyrightC";
import HeaderC from "../components/HeaderC";
import CarouselC from "../components/CarouselC";
// svgs
import blood from "../assets/blood.svg";
import analysis from "../assets/analysis.svg";
import brain from "../assets/brain.svg";
import heart from "../assets/heart.svg";
import heartListen from "../assets/heartListen.svg";
import medicalResearch from "../assets/medicalResearch.svg";
import medicalBed from "../assets/medicalBed.svg";
import medicalSign from "../assets/medicalSign.svg";
import medicine from "../assets/medicine.svg";
import pummon from "../assets/pummon.svg";
import radio from "../assets/radio.svg";
import vaccin from "../assets/vaccin.svg";
import DoctorsInfoC from "../components/DoctorsInfoC";
import SubscribeC from "../components/SubscribeC";

const services = [
  { name: "Blood Testing", image: blood },
  { name: "Analysis", image: analysis },
  { name: "Neurology ", image: brain },
  { name: "Cardiothoracic", image: heart },
  { name: "Heartbeat medical", image: heartListen },
  { name: "Medical genetics", image: medicalResearch },
  { name: "50 Medical Beds", image: medicalBed },
  { name: "Medical biochemistry", image: medicalSign },
  { name: "Medicaments", image: medicine },
  { name: "pulmonologist", image: pummon },
  { name: "Radiology", image: radio },
  { name: "Vaccination", image: vaccin },
];

export default function DashboardP() {
  return (
    <Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeaderC title="Jina" />
        <main>
          <CarouselC />
          {/* icons */}
          <Grid item xs={12}>
            <Container maxWidth="md">
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                style={{ marginTop: 32 }}
                noWrap>
                Our Services
              </Typography>
              <Divider style={{ marginBottom: 25, marginTop: 10, height: 2 }} />
              <Grid container spacing={4}>
                {services.map((service) => (
                  <ServiceCardC key={service.name} service={service} />
                ))}
              </Grid>
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                align="left"
                style={{ marginTop: 32 }}
                noWrap>
                Meet Our Doctors
              </Typography>
              <Divider style={{ marginBottom: 25, marginTop: 10, height: 2 }} />
            </Container>
          </Grid>
        </main>

        <DoctorsInfoC />
        <SubscribeC />
      </Container>
      <CopyrightC />
    </Fragment>
  );
}
