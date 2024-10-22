"use strict";

exports.__esModule = true;
exports.DATA = void 0;

var icons_1 = require("@/components/icons");

var react_icons_1 = require("@radix-ui/react-icons");

var lucide_react_1 = require("lucide-react");

exports.DATA = {
  name: "Guilherme Castel-Branco",
  initials: "GV",
  url: "https://castellbranco.com/",
  location: "Lisbon, Portugal",
  locationLink: "https://www.google.com/maps/place/Lisbon",
  description: "A forward-thinking Software Engineer passionate about solving complex challenges with cutting-edge software and machine learning solutions.",
  summary: "I'm a Software Developer and Data Engineer with 2+ years of experience, specializing in creative data solutions and system optimization. I've worked with companies across Lithuania and Portugal, blending technical skills with creativity to make an impact.",
  avatarUrl: "/me.png",
  skills: ["Python", "SQL", "Typescript", "Databricks", "Pyspark", "LLM", "Java", "Data Analysis", "Web Design", "Project development", "Problem Solver"],
  navbar: [{
    href: "/",
    icon: lucide_react_1.HomeIcon,
    label: "Home"
  }, {
    href: "/blog",
    icon: lucide_react_1.NotebookIcon,
    label: "Backlog"
  }],
  contact: {
    email: "guicbranco1@gmail.com",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/castellbranco",
        icon: icons_1.Icons.github,
        navbar: true
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/guilherme-castel-branco-73a17719b/",
        icon: icons_1.Icons.linkedin,
        navbar: true
      },
      Resume: {
        name: "Resume",
        url: "https://drive.google.com/file/d/1iFImpebQLg-M3MCZBQVisXycZO4B-izt/view",
        icon: icons_1.Icons.resume,
        navbar: true
      }
    }
  },
  features: [{
    Icon: function Icon() {
      return React.createElement("div", {
        className: "flex justify-center items-center transition-all duration-300 group-hover:scale-75 group-hover:translate-x-[-20%] group-hover:translate-y-[-120%]"
      }, React.createElement("img", {
        src: "/ntt.svg",
        alt: "NTT Logo",
        className: "h-35 w-35"
      }));
    },
    name: "Junior Engineer",
    description: "Ntt Data [Jan 2024 - Present]",
    href: "https://www.nttdata.com/global/en/",
    cta: "Know more",
    desc: "Engineered data pipelines using Databricks, SQL, and Python to optimize the Global Energy Market Operating System (GEMOS) for a leading energy provider. Implemented data warehouse architecture for real-time energy market analysis and reporting. Collaborated in an Agile environment, driving innovation and process improvements. Designed scalable data solutions to enhance performance and accuracy, supporting global market operations.",
    technologie: ["Databricks", "Azure", "Pyspark", "Python & SQL"],
    background: React.createElement("image", {
      className: "absolute -right-20 -top-20 opacity-60"
    }),
    className: "lg:row-start-1 lg:row-end-4 lg:col-start-2 lg:col-end-3"
  }, {
    Icon: function Icon() {
      return React.createElement("div", {
        className: "flex justify-center items-center duration-300 group-hover:scale-75 group-hover:translate-x-[-45%] group-hover:translate-y-[-265%]"
      }, React.createElement("img", {
        src: "/cody.png",
        alt: "Codyfight Logo",
        className: "h-20 w-20"
      }));
    },
    name: "Senior Community Manager & Debugger",
    description: "Codyfight [Feb 2022 - Sep 2023]",
    href: "https://codyfight.com/",
    cta: "Know more",
    desc: "Managed community engagement and social media channels to grow an active player base. Debugged the Beta version, collaborating with the development team to enhance gameplay. Developed content strategies to boost player retention and provided key feedback to optimize performance.",
    technologie: ["Solidity", "Marketing", "Software Design", "Social Media", "Better Communication & Teamwork"],
    background: React.createElement("image", {
      className: "absolute -right-20 -top-20 opacity-60"
    }),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3"
  }, {
    Icon: function Icon() {
      return React.createElement(React.Fragment, null, React.createElement(react_icons_1.MixIcon, {
        className: "h-10 w-10 text-gray-800"
      }));
    },
    name: "Ongoing Project",
    description: "A side project that I'm working on",
    href: "/",
    cta: "Know more",
    desc: "",
    technologie: [],
    background: React.createElement("image", {
      className: "absolute -right-20 -top-20 opacity-60"
    }),
    className: "lg:col-start-1 lg:col-end-2 lg:row-start-3 lg:row-end-4 pointer-events-none"
  }, {
    Icon: function Icon() {
      return React.createElement(React.Fragment, null);
    },
    name: "Academic Background",
    description: React.createElement("span", {
      className: "text-sm text-neutral-600 leading-relaxed tracking-wide"
    }, React.createElement("span", {
      className: "block font-semibold text-neutral-800"
    }, "NOVA Information Management School"), React.createElement("span", {
      className: "block"
    }, "Master in Information Management"), React.createElement("span", {
      className: "block mt-2 font-semibold text-neutral-800"
    }, "University of Science of Lisbon"), React.createElement("span", {
      className: "block"
    }, "Bachelor's Degree of Computer Science (BCS)")),
    href: "/",
    cta: "",
    desc: "",
    technologie: [],
    background: React.createElement("image", {
      className: "absolute -right-20 -top-20 opacity-30"
    }),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-1 lg:row-end-2 bg-gray-200 rounded-lg shadow-lg py-2 px-6 flex items-start space-x-4 pointer-events-none"
  }, {
    Icon: function Icon() {
      return React.createElement("div", {
        className: "flex justify-center items-center duration-300 group-hover:scale-75 group-hover:translate-x-[-45%] group-hover:translate-y-[-280%]"
      }, React.createElement("img", {
        src: "/myra_trans.png",
        alt: "Myra Logo",
        className: "h-20 w-20"
      }));
    },
    name: "Founder",
    description: "Myra [Jan 2018 - Present]",
    href: "https://www.instagram.com/myra_pt/",
    cta: "Know more",
    desc: "Founded Myra, a sustainable fashion brand, overseeing product design, marketing, and operations. Developed eco-friendly clothing that attracted media attention and a diverse customer base, blending creativity and sustainability to foster community and innovation.",
    technologie: ["Innovation", "Social Media Platforms", "Google Analytics", "Shopify", "Adobe Photoshop"],
    background: React.createElement("image", {
      className: "absolute -right-20 -top-20 opacity-60"
    }),
    className: "lg:col-start-3 lg:col-end-3 lg:row-start-2 lg:row-end-4"
  }],
  projects: [{
    title: "Mental Health App",
    href: "https://github.com/castellbranco/ML_Mental-Health-App",
    dates: "Oct 2023 - Jan 2024",
    active: true,
    description: "Designed and developed a machine learning-based app for my thesis, aimed at predicting mental health states from text data.",
    technologies: ["Next.js", "Python", "LLM's", "PKL models"],
    links: [{
      type: "Project",
      href: "https://github.com/castellbranco/ML_Mental-Health-App",
      icon: React.createElement(icons_1.Icons.folder, {
        className: "size-3"
      })
    }],
    image: "",
    video: "/MentalApp.mp4"
  }],
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
  reviews: [{
    name: "University of Science of Lisbon",
    username: "Head Coach [Volleyball, Men]",
    body: "September 2024 - Present",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/bug.png"
  }, {
    name: "University Autónoma of Lisbon",
    username: "Head Coach [Volleyball, Women]",
    body: "September 2023 - September 2024",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/fighting.png"
  }, {
    name: "Elo Social",
    username: "IT Support",
    body: "January 2019 - January 2020",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/water.png"
  }, {
    name: "Web Summit",
    username: "Volunteer",
    body: "January 2019 - January 2021",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/ice.png"
  }, {
    name: "Volleyball Athlete",
    username: "Professional/University",
    body: "January 2008 - Present",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/rock.png"
  }, {
    name: "Fluent in Portuguese",
    username: "Born and raised in Portugal",
    body: " ",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/poison.png"
  }, {
    name: "C1 Advanced in English",
    username: "Cambridge University",
    body: " ",
    img: "https://raw.githubusercontent.com/msikma/pokesprite/master/items/tr/ground.png"
  }]
};