import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "NextLeveFunding",
    description:
      "Prop firm web App .",
    image: "/NEXTLEVEL.png",
    github: "/",
    link: "https://nextlevelfunding.co.uk",
  },
  {
    name: "StockTrack",
    description:
      "StockTrack is a web app that can be use to keep track of stock and inventories to make informed business decisions.",
    image: "/stocktracker.png",
    github: "https://github.com/rajiss-ctrl/stocktrack",
    link: "https://stocktrack.vercel.app/",
  },
  {
    name: "KodeCamp LMS",
    description:
      "Learning Management System.",
    image: "/kodecamp.png",
    github: "",
    link: "https://lms.kode.camp/",
  },
  {
    name: "Fylo",
    description: "Fylo is a fully responsive web application home page to give user ability to view the site on any devices.",
    image: "/fylo.jpg",
    github: "https://rajiss-ctrl.github.io/fyloapp/",
    link: "/",
  },
  
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-500 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection