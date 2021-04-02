import React from "react";
import DoctorCardC from "./DoctorCardC";
import doctorImg from "../assets/doctor.png";

const doctorInfo = [
  {
    name: "Ahmed Bargady",
    image: doctorImg,
    speciality: "neurologist",
  },
  {
    name: "Sujin Lee",
    image: doctorImg,
    speciality: "Diagnostic radiology",
  },
  {
    name: "Hayat Haida",
    image: doctorImg,
    speciality: "cardiothoracic surgeon",
  },
  {
    name: "Jeen Green",
    image: doctorImg,
    speciality: "neurologist",
  },
  {
    name: "Smith Brown",
    image: doctorImg,
    speciality: "pulmonologist",
  },
  {
    name: "Sara Been",
    image: doctorImg,
    speciality: "cardiothoracic surgeon",
  },
  {
    name: "Jhon Garol",
    image: doctorImg,
    speciality: "pulmonologist",
  },
];

function DoctorsInfoC() {
  return (
    <div className="doctor_info">
      {doctorInfo.map((info) => (
        <DoctorCardC
          key={info.name}
          name={info.name}
          image={info.image}
          speciality={info.speciality}
        />
      ))}
    </div>
  );
}

export default DoctorsInfoC;
