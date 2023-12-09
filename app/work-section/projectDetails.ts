export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "RPL",
    description:
      "Selamat datang di Dunia Rekayasa Perangkat Lunak (RPL)! Di sini, setiap baris kode adalah kisah pengembangan, dan setiap laptop adalah portal menuju solusi inovatif. Jelajahi perjalanan kami dalam merancang sistem canggih, menulis kode yang memukau, dan membentuk masa depan teknologi. Bersama RPL, mari kita jembatani kreativitas dan teknologi untuk menciptakan pengalaman digital yang tak terlupakan!",
    image: require(".//../../public/projects/gambar-rpl1.jpg"),

  },
  {
    id: 1,
    name: "Pembelajaran",
    description:
      "Ayo bergabung dalam dunia Rekayasa Perangkat Lunak (RPL) bersama guru luar biasa ini! Terinspirasi untuk memasuki keajaiban coding dan inovasi. Dengan pengajaran yang penuh semangat, setiap kelas menjadi petualangan baru. Segera ikuti jejak para pengembang perangkat lunak handal, karena di dalam RPL, kita mencipta dan mengubah dunia digital bersama-sama!.",
    image: require(".//../../public/projects/gambar-rpl2.jpg"),

  },
  {
    id: 2,
    name: "Intership",
    description:
      "Melangkah ke dunia nyata Rekayasa Perangkat Lunak (RPL) melalui kegiatan magang. Setiap garis kode adalah sebuah pelajaran, setiap tantangan adalah panggung pengembangan. Magang membawa kita pada perjalanan eksplorasi teknologi, memperdalam pemahaman konsep, dan memupuk keterampilan kolaborasi dalam industri IT. Inilah kesempatan untuk merasakan atmosfer pengembangan perangkat lunak sejati dan membangun pondasi kuat bagi karir di dunia coding.",
    image: require(".//../../public/projects/gambar-rpl3.jpg"),

  },
  // {
  //   id: 4,
  //   name: "Carpooling Service",
  //   description:
  //     "TMTM helps Covenant University students find fellow students who are headed to the same location, so they can share a ride and split the cost.",
  //   technologies: ["Material UI", "React", "Formik"],
  //   github: "https://github.com/victorcodess/carpooling-service",
  //   demo: "",
  //   image: require(".//../../public/projects/carpool-new.webp"),
  //   available: false,
  // },
  // {
  //   id: 5,
  //   name: "MLSC.ng",
  //   description:
  //     "This is platform for Microsoft Learn Student Ambassadors to shorten links, append their sharing IDs and generate event certificates.",
  //   technologies: ["Next.js", "Next Auth", "Tailwind CSS"],
  //   github: "https://github.com/msp-nigeria/mlsc.ng-frontend",
  //   demo: "",
  //   image: require(".//../../public/projects/mlsc.png"),
  //   available: false,
  // },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    available: false,
  },
];
