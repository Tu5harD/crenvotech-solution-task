"use client";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import OurStrength from "@/components/OurStrength";
import ReservationContact from "@/components/ReservationContact";
import React from "react";

const page = () => {
  return (
    <div>
      <Hero />
      <Menu />
      <Intro />
      <OurStrength />
      <ReservationContact />
    </div>
  );
};

export default page;
