import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Guilherme Castel-Branco",
  initials: "GV",
  url: "",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  description:
    "A forward-thinking Software Engineer passionate about solving complex challenges with cutting-edge software and machine learning solutions.",
  summary:
    "I’m a Software Developer and Data Engineer with 2+ years of experience, holding a Master’s in Information Management & a degree in Computer Science. I’m passionate about blending creativity with technology, whether it’s optimizing data systems or building solutions that benefit the community. I’ve worked remotely for companies in Lithuania and collaborated with leading organizations in Portugal, such as EDP. Outside of work, I’m a sports enthusiast and enjoy creating projects that bring people together. For me, it’s all about combining technical skills with creativity to make an impact.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "SQL",
    "Typescript",
    "Databricks",
    "Pyspark",
    "LLM",
    "Java",
    "Data Analysis",
    "Web Design",
    "Project development",
    "Problem Solver"
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Backlog" },
  ],
  contact: {
    email: "guicbranco1@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/castellbranco",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guilherme-castel-branco-73a17719b/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Resume: {
        name: "Resume",
        url: "#",
        icon: Icons.resume,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "NTT Data",
      href: "https://www.nttdata.com/global/en/",
      badges: [],
      location: "Remote/Portugal",
      title: "Junior Engineer",
      logoUrl: "/ntt.svg",
      start: "January 2024",
      end: "Present",
      description:
        "Engineered data pipelines using Databricks, SQL, and Python to optimize the Global Energy Market Operating System (GEMOS) for a leading energy provider. Implemented data warehouse architecture for real-time energy market analysis and reporting. Collaborated in an Agile environment, driving innovation and process improvements. Designed scalable data solutions to enhance performance and accuracy, supporting global market operations.",
      technologie: [
        "Databricks",
        "Azure",
        "Pyspark",
        "Python & SQL",
      ],
    },
    {
      company: "Codyfight",
      badges: [],
      href: "https://codyfight.com/",
      location: "Remote",
      title: "Senior Community Manager & Debugger",
      logoUrl: "/cody.png",
      start: "February 2022",
      end: "September 2023",
      description:
        "Led community engagement and managed social media channels to grow and maintain an active player base. Debugged the Beta version of the game, working closely with the development team to improve gameplay and enhance the player experience. Created and executed content strategies for social media, driving player retention and interaction. Provided feedback and collaborated with the team to optimize the game's performance and resolve key technical issues.",
      technologie: [
        "Solidity",
        "Marketing",
        "Software Design",
        "Social Media",
        "Better Communication & Teamwork",
      ],
    },
    {
      company: "Myra",
      badges: [],
      href: "https://www.instagram.com/myra_pt/",
      location: "Insight",
      title: "Founder",
      logoUrl: "/myra.jpg",
      start: "January 2018",
      end: "Present",
      description:
        "Founded and built Myra, a sustainable fashion brand, overseeing everything from product design to marketing and operations. Developed eco-friendly clothing lines that gained media attention and attracted a diverse customer base. Focused on blending creativity and sustainability to create a brand that fosters community and innovation.",
      technologie: [
        "Innovation",
        "Social Media Platforms",
        "Google Analytics",
        "Shopify",
        "Adobe Photoshop",
      ],   
    }
  ],
  education: [
    {
      school: "University of Science of Lisbon",
      href: "https://ciencias.ulisboa.pt/",
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: "/fcul.png",
      start: "2018",
      end: "2022",
    },
    {
      school: "NOVA Information Management School",
      href: "https://www.novaims.unl.pt/",
      degree: "Master in Information Management",
      logoUrl: "/nova.jpg",
      start: "2022",
      end: "2024",
    },
  ],
  projects: [
    {
      title: "Mental Health App",
      href: "https://github.com/castellbranco/ML_Mental-Health-App",
      dates: "Oct 2023 - Jan 2024",
      active: true,
      description:
        "Designed and developed a machine learning-based app for my thesis, aimed at predicting mental health states from text data.",
      technologies: [
        "Next.js",
        "Python",
        "LLM's",
        "PKL models",
      ],
      links: [
        {
          type: "Project",
          href: "https://github.com/castellbranco/ML_Mental-Health-App",
          icon: <Icons.folder className="size-3" />,
        },
      ],
      image: "",
      video:
        "/MentalApp.mp4",
    },
    // {
    //   title: "Magic UI",
    //   href: "https://magicui.design",
    //   dates: "June 2023 - Present",
    //   active: true,
    //   description:
    //     "Designed, developed and sold animated UI components for developers.",
    //   technologies: [
    //     "Next.js",
    //     "Typescript",
    //     "PostgreSQL",
    //     "Prisma",
    //     "TailwindCSS",
    //     "Stripe",
    //     "Shadcn UI",
    //     "Magic UI",
    //   ],
    //   links: [
    //     {
    //       type: "Website",
    //       href: "https://magicui.design",
    //       icon: <Icons.globe className="size-3" />,
    //     },
    //     {
    //       type: "Source",
    //       href: "https://github.com/magicuidesign/magicui",
    //       icon: <Icons.github className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video: "https://cdn.magicui.design/bento-grid.mp4",
    // },
  ],
} as const;
