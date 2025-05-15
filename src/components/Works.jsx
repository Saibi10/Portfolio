import React, { useEffect, useRef } from "react";
import { Tilt } from "react-tilt";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Colors for card borders - will cycle through these
const borderColors = [
  "border-t-[#ff5e62]",
  "border-t-[#0084ff]",
  "border-t-[#00c6ff]",
  "border-t-[#8e2de2]"
];

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const cardRef = useRef(null);
  const borderColor = borderColors[index % borderColors.length];

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "top center",
          scrub: true,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <div ref={cardRef} className="w-full">
      <Tilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 450,
          glare: true,
          "max-glare": 0.1,
        }}
        className="w-full h-full"
      >
        <div
          className={`bg-[#0a0b13] rounded-xl overflow-hidden shadow-lg hover:shadow-[#4040b1]/50 
                    transition-all duration-300 h-full flex flex-col border-t-2 ${borderColor}`}
        >
          <div className="relative w-full h-[160px] overflow-hidden">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(source_code_link, "_blank")}
                className="black-gradient w-8 h-8 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:border-white/30 transition-all"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-4 pt-8">
              <h3 className="text-white font-bold text-[16px] tracking-wide leading-tight">{name}</h3>
            </div>
          </div>

          <div className="p-4 flex-1 flex flex-col">
            <p className="text-secondary text-[12px] leading-[18px] line-clamp-3 flex-1">{description}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {tags.map((tag, tagIndex) => {
                // Calculate a unique color for each tag based on its index
                const tagColors = ["bg-[#0066ff]/10", "bg-[#ff3366]/10", "bg-[#33ff99]/10", "bg-[#cc33ff]/10"];
                const bgColor = tagColors[tagIndex % tagColors.length];

                return (
                  <span
                    key={`${name}-${tag.name}`}
                    className={`text-[10px] font-medium ${tag.color} px-2 py-0.5 rounded-full ${bgColor} border border-[#ffffff10]`}
                  >
                    #{tag.name}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

const Works = () => {
  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[14px] max-w-3xl leading-[24px]">
          Following projects showcase my skills and experience through real-world examples of my
          work. Each project reflects my ability to solve complex problems, work with different
          technologies, and manage projects effectively.
        </p>
      </div>

      <div className="works-container mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => window.open("https://github.com/", "_blank")}
          className="bg-[#1d1836] py-2 px-6 rounded-lg text-sm text-white font-semibold hover:bg-[#2b2663] transition-colors shadow-md hover:shadow-[#4040b1]/20"
        >
          See More Projects
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
