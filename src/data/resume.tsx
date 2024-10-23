import { Icons } from "@/components/icons";
import {
  MixIcon
} from "@radix-ui/react-icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Guilherme Castel-Branco",
  initials: "GV",
  url: "https://castellbranco.com/",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  description:
    "A forward-thinking Software Engineer passionate about solving complex challenges with cutting-edge software and machine learning solutions.",
  summary:
    "I'm a Software Developer and Data Engineer with 2+ years of experience, specializing in creative data solutions and system optimization. I've worked with companies across Lithuania and Portugal, blending technical skills with creativity to make an impact.",
  avatarUrl: `/me.png`,
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
  features: [
    {
      Icon: () =>
        <div className="flex justify-center items-center transition-all duration-300 group-hover:scale-75 group-hover:translate-x-[-20%] group-hover:translate-y-[-120%]">
          <img src={`/ntt.svg`} alt="NTT Logo" className="h-35 w-35" />
        </div>,
      name: "Junior Engineer",
      description: "Ntt Data [Jan 2024 - Present]",
      href: "https://www.nttdata.com/global/en/",
      cta: "Know more",
      desc:
        "Engineered data pipelines using Databricks, SQL, and Python to optimize the Global Energy Market Operating System (GEMOS) for a leading energy provider. Implemented data warehouse architecture for real-time energy market analysis and reporting. Collaborated in an Agile environment, driving innovation and process improvements. Designed scalable data solutions to enhance performance and accuracy, supporting global market operations.",
      technologie: [
        "Databricks",
        "Azure",
        "Pyspark",
        "Python & SQL",
      ],
      background: <image className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3",
    },
    {
      Icon: () =>
        <div className="flex justify-center items-center duration-300 group-hover:scale-75 group-hover:translate-x-[-45%] group-hover:translate-y-[-265%]">
          <img src={`/cody.png`} alt="Codyfight Logo" className="h-20 w-20" />
        </div>,
      name: "Senior Community Manager & Debugger",
      description: "Codyfight [Feb 2022 - Sep 2023]",
      href: "https://codyfight.com/",
      cta: "Know more",
      desc:
        "Managed community engagement and social media channels to grow an active player base. Debugged the Beta version, collaborating with the development team to enhance gameplay. Developed content strategies to boost player retention and provided key feedback to optimize performance.",
      technologie: [
        "Solidity",
        "Marketing",
        "Software Design",
        "Social Media",
        "Better Communication & Teamwork",
      ],
      background: <image className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: () =>
        <>
          <MixIcon className="h-10 w-10 text-gray-800" />
        </>,
      name: "Ongoing Project",
      description: "A side project that I'm working on",
      href: "/",
      cta: "Know more",
      desc: "",
      technologie: [],
      background: <image className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 pointer-events-none",
    },
    {
      Icon: () => <></>,
      name: "Academic Background",
      description: (
        <span className="text-sm text-neutral-600 leading-relaxed tracking-wide">
          <span className="block font-semibold text-neutral-800">
            NOVA Information Management School
          </span>
          <span className="block">Master in Information Management</span>
          <span className="block mt-2 font-semibold text-neutral-800">
            University of Science of Lisbon
          </span>
          <span className="block">
            Bachelor&apos;s Degree of Computer Science (BCS)
          </span>
        </span>
      ),
      href: "/",
      cta: "",
      desc: "",
      technologie: [],
      background: <image className="absolute -right-20 -top-20 opacity-30" />,
      className:
        "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-gray-200 rounded-lg shadow-lg py-2 px-6 flex items-start space-x-4 pointer-events-none",
    },
    {
      Icon: () =>
        <div className="flex justify-center items-center duration-300 group-hover:scale-75 group-hover:translate-x-[-45%] group-hover:translate-y-[-280%]">
          <img src={`/myra_trans.png`} alt="Myra Logo" className="h-20 w-20" />
        </div>,
      name: "Founder",
      description: "Myra [Jan 2018 - Present]",
      href: "https://www.instagram.com/myra_pt/",
      cta: "Know more",
      desc:
        "Founded Myra, a sustainable fashion brand, overseeing product design, marketing, and operations. Developed eco-friendly clothing that attracted media attention and a diverse customer base, blending creativity and sustainability to foster community and innovation.",
      technologie: [
        "Innovation",
        "Social Media Platforms",
        "Google Analytics",
        "Shopify",
        "Adobe Photoshop",
      ],
      background: <image className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4",
    },
  ],
  extra: [
    {
      company: "University of Science of Lisbon",
      href: "https://ciencias.ulisboa.pt/",
      badges: [],
      location: "Lisbon, Portugal",
      title: "Head Coach [Volleyball, Men]",
      logoUrl: `/fcul.png`,
      start: "September 2024",
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
      company: "University Autónoma of Lisbon",
      badges: [],
      href: "https://autonoma.pt/",
      location: "Lisbon, Portugal",
      title: "Head Coach [Volleyball, Women]",
      logoUrl: `/UAL.jpg`,
      start: "September 2023",
      end: "September 2024",
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
      company: "Elo Social",
      badges: [],
      href: "https://www.elosocial.org/",
      location: "Lisbon, Portugal",
      title: "IT Support",
      logoUrl: `/fcul.jpg`,
      start: "January 2019",
      end: "January 2020",
      description:
        "Founded and built Myra, a sustainable fashion brand, overseeing everything from product design to marketing and operations. Developed eco-friendly clothing lines that gained media attention and attracted a diverse customer base. Focused on blending creativity and sustainability to create a brand that fosters community and innovation.",
      technologie: [
        "Innovation",
        "Social Media Platforms",
        "Google Analytics",
        "Shopify",
        "Adobe Photoshop",
      ],
    },
    {
      company: "Web Summit",
      badges: [],
      href: "https://websummit.com/",
      location: "Lisbon, Portugal",
      title: "Volunteer",
      logoUrl: `/myra.jpg`,
      start: "January 2019",
      end: "January 2021",
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
      `/MentalApp.mp4`,
    },
  ],
        // {
    //   title: "Mental Health App",
    //   href: "https://github.com/castellbranco/ML_Mental-Health-App",
    //   dates: "Oct 2023 - Jan 2024",
    //   active: true,
    //   description:
    //     "Designed and developed a machine learning-based app for my thesis, aimed at predicting mental health states from text data.",
    //   technologies: [
    //     "Next.js",
    //     "Python",
    //     "LLM's",
    //     "PKL models",
    //   ],
    //   links: [
    //     {
    //       type: "Project",
    //       href: "https://github.com/castellbranco/ML_Mental-Health-App",
    //       icon: <Icons.folder className="size-3" />,
    //     },
    //   ],
    //   image: "",
    //   video:
    //     "/MentalApp.mp4",
    // },
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
reviews: [
  {
    name: "University of Science of Lisbon",
    username: "Head Coach [Volleyball, Men]",
    body: "September 2024 - Present",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/bug.png",
  },
  {
    name: "University Autónoma of Lisbon",
    username: "Head Coach [Volleyball, Women]",
    body: "September 2023 - September 2024",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/fighting.png",
  },
  {
    name: "Elo Social",
    username: "IT Support",
    body: "January 2019 - January 2020",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/water.png",
  },
  {
    name: "Web Summit",
    username: "Volunteer",
    body: "January 2019 - January 2021",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/ice.png",
  },
  {
    name: "Volleyball Athlete",
    username: "Professional/University",
    body: "January 2008 - Present",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/rock.png",
  },
  {
    name: "Fluent in Portuguese",
    username: "Born and raised in Portugal",
    body: " ",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/poison.png",
  },
  {
    name: "C1 Advanced in English",
    username: "Cambridge University",
    body: " ",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/ground.png",
  },
],
} as const;
