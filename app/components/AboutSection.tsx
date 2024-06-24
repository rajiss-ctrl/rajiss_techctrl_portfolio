import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Styled-component" },
  { skill: "chakra-ui" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "redux" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Raji Sarafadeen Sanjo and I am a{" "}
              <span className="font-bold">{"highly passionate"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, 
              <span className="font-bold">{" driven"}</span> software engineer
              
            </p>
            <br />
            <p>
            As a proactive learner, I expanded my skills in web development through esteemed platforms like Coursera in HTML, CSS, and JavaScript (2021 certificate) and SoloLearn (2021). Additionally, I gained practical experience as an intern at Kodecamp (2022), where I worked on an LMS project, solidifying my proficiency in ReactJS and furthering my passion for creating remarkable digital experiences.
            </p>
            <br />
            <p>
            Avidly Pursuing My Passions: Reading, Sports, Traveling. Constantly Seeking Fresh Experiences, I Engage in Diverse Hobbies, Always Learning.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-teal-500">
                never stop growing
              </span>{" "}
              and that's what I have a strong passion for. I'm excited to see where my career takes me and always open to new opportunities that come my way. 🙂
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src="/about.png"
              alt=""
              width={325}
              height={325}
              className="hidden md:block md:relative md:bottom-4 md:left-28 md:z-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection