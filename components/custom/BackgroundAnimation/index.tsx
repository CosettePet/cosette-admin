"use client";

import Lottie from "lottie-react";
import AirPlane from './AirPlane.json';

export default function BackgroundAnimation () {

  return <Lottie
    loop
    animationData={AirPlane}
    className="w-full h-auto"
  />
};

