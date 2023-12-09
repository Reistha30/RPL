import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const Competence = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="competence"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <AnimatedTitle
          text={"My Technical Competence"}
          className={
            "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
          }
          wordSpace={"mr-[14px]"}
          charSpace={"mr-[0.001em]"}
        />

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[12px] font-medium leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[12px] md:leading-relaxed lg:mb-16 lg:max-w-[90%] lg:text-[20px] ">
            <AnimatedBody
              text={
                "I possess a strong foundation in computer operation and maintenance, including familiarity with basic technical operations."
              }
            />
            <AnimatedBody
              text={
                "Proficient in operating various office software suites, enabling efficient and effective office administration."
              }
            />
            <AnimatedBody
              text={
                "Skilled in visual programming, allowing for creative and interactive software development."
              }
            />
            <AnimatedBody
              text={
                "Experienced in object-oriented programming (OOP) principles, facilitating robust and scalable software design."
              }
            />
            <AnimatedBody
              text={
                "Competent in database programming, ensuring efficient data storage, retrieval, and management."
              }
            />
            <AnimatedBody
              text={
                "Proficient in web programming, delivering dynamic and responsive web applications."
              }
            />
            <AnimatedBody
              text={
                "Advanced programming skills, enabling the development of complex and sophisticated software solutions."
              }
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
  <div className="flex flex-col gap-4 md:gap-3">
    <AnimatedTitle
      text={"Possible Job Roles"}
      className={
        "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
      }
      wordSpace={"mr-[0.25em]"}
      charSpace={"mr-[0.01em]"}
    />
    <ul className="list-disc pl-6">
      <li>Web Development</li>
      <li>Game Development</li>
      <li>Application Development</li>
      <li>IT Consulting</li>
      <li>Office Administration</li>
    </ul>
  </div>
</div>

        </div>
        <div className=" flex flex-col md:-mt-0 lg:mt-60">
          <SongCarousel />
        </div>
      </div>
    </section>
  );
};

export default Competence;
