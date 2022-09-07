import React, { useEffect, useState } from "react";
import Doctor from "./Doctor/Doctor";
import "./Doctors.css";

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch("/doctors.json")
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <div>
      <section className="about" id="about">
        <h1 className="heading">
          {" "}
          Our Experienced <span>Doctors</span>{" "}
        </h1>
      </section>
      <div className="doctors-container">
        {doctors.map((doctor) => {
          return <Doctor doctor={doctor} key={doctor.id}></Doctor>;
        })}
      </div>
    </div>
  );
};

export default Doctors;
