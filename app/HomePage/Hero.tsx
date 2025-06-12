"use client";
import React from "react";
import { WavyBackground } from "../../components/ui/wavy-background";
import Button from "./Button";
import Text from "./Text";

export default function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        {/* Hi, I’m Asif Foisal */}
        <Text></Text>
      </p>
      <p className="text-base md:text-xl mt-4 translate-y-[-16rem] text-white font-normal inter-var text-center">
        Creative Web Designer & Developer bringing ideas to life through code.
      </p>
      <p className="text-base md:text-xl mt-2 translate-y-[-16rem] text-white font-normal inter-var text-center">
        I craft modern, responsive, and user-friendly websites using technologies like React, Tailwind CSS, Node.js, and MongoDB.
      </p>
      <Button></Button>
    </WavyBackground>
  );
}
