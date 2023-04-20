import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "@/components/BackgroundCircles";
import Link from "next/link";
import Image from "next/image";

function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I am Adnan",
      "Guy-who-loves-Coffe.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div
      className="h-screen flex flex-col space-y-8 items-center justify-center 
      p-5 text-center overflow-hidden md:pt-44"
    >
      <BackgroundCircles />

      <Image
        src="/CV-image.jpg"
        alt="hero-image"
        width={144}
        height={144}
        className="rounded-full relative h-36 w-36 mx-auto object-cover"
      />

      <div className="z-20 pt-6">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px]">
          web developer
        </h2>
        <h1 className="text-4xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>

      <div className="z-20">
        <Link href="#about">
          <button className="heroButton">About</button>
        </Link>
        <Link href="#experience">
          <button className="heroButton">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="heroButton">Skills</button>
        </Link>
        <Link href="#projects">
          <button className="heroButton">Projects</button>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
