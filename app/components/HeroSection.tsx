"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const HeroSection = () => {
  return (
    <section id="home" className="lg:px-20">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 lg:flex-row lg:space-x-4 lg:text-left">
  
        <div className="md:mt-2 lg:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Raji!</h1>
          <p className="px-[1.4rem] md:px-[1.8rem] lg:px-0 text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
              Software <span className="text-[#ff0404]">Engineer</span>{" "}
            </span>
            skilled in javaScript [ReactJS]. I build scalable web apps, solving complex problems creatively.
            </p>
          <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>

      <div className="mt-8 md:mt-12 lg:mt-2 lg:w-1/2">
          <Image
            src="/hero_shot.png"
            alt="profile"
            width={325}
            height={325}
            className="shadow rounded-lg"
          />
        </div>

      </div>
      
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection