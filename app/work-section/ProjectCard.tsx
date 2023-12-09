import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  image,
}: ProjectProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      }}
      className={`relative z-10 h-[550px] w-full items-stretch justify-center overflow-hidden rounded-3xl bg-center py-0 sm:h-[700px] sm:w-[100%] md:h-[650px] md:w-[100%] lg:h-[500px]`}
      initial="initial"
      animate="animate"
    >
      <Image
  src={image}
  alt={name}
  className={`absolute -bottom-2 w-full h-full object-cover ${
    id % 2 === 0 ? "right-0" : "left-0"
  }`}
/>
<div
  className={`absolute text-white bg-slate-800  bg-opacity-90 backdrop-filter backdrop-blur-lg ${
    id % 2 === 0
      ? "left-0 ml-8 lg:ml-14"
      : "right-0 mr-8 lg:mr-14"
  } mt-6 flex items-center justify-center gap-4 lg:mt-10 p-8 rounded-xl`}
>
  <div className="text-content mb-10 md:mb-16 lg:mb-14">
    <AnimatedTitle
      text={name}
      className={
        "max-w-[90%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[450px] lg:text-[48px] lg:leading-none"
      }
      wordSpace={"mr-[0.25em]"}
      charSpace={"-mr-[0.01em]"}
    />
    <AnimatedBody
      text={description}
      className={
        "mt-4 mb-6 md:mb-0 w-full max-w-[457px] text-[16px] font-semibold text-[#95979D]"
      }
    />
  </div>
</div>
    </motion.div>
  );
};

export default ProjectCard;
