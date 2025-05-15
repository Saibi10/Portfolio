import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  bazaar,
  gameaccounts,
  ecommerceApp,
  pacman,
  gymManagement,
  tourismSystem,
  unityGame,
  wordChainGame,
} from '../assets'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "App Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "Full Stack Web Application",
    company_name: "Game Accounts Marketplace",
    icon: web,
    iconBg: "#E6DEDD",
    date: "April 2025",
    points: [
      "An online game accounts marketplace. Fully functional and responsive Frontend/Backend",
      "Built using modern web technologies including React, Node.js, and MongoDB",
      "Implemented secure user authentication and payment processing",
      "Created responsive UI with Tailwind CSS for optimal viewing on all device sizes",
    ],
  },
  {
    title: "Ecommerce Mobile App",
    company_name: "Online Store Application",
    icon: mobile,
    iconBg: "#383E56",
    date: "March 2025",
    points: [
      "A small fully functional mobile app like an online store for ecommerce with Node.js backend",
      "Developed with React Native for cross-platform functionality",
      "Implemented product catalog, shopping cart, and checkout functionality",
      "Integrated with RESTful APIs for product management and order processing",
    ],
  },
  {
    title: "Multi-threaded 2D Game",
    company_name: "Pacman Game",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "April 2024",
    points: [
      "On Linux using pthreads and GLUT, made a 2D pacman game using OS/Synchronization concepts",
      "Implemented multi-threading for efficient game mechanics and AI movement",
      "Applied OS concepts like thread synchronization and mutex locks",
      "Created smooth animations and collision detection using OpenGL",
    ],
  },
  {
    title: "Desktop Applications",
    company_name: "Management Systems",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2024",
    points: [
      "Using C-forms and SQL Database, made an online Central Gym Centre for whole country",
      "Using Java Fx and SQL Database, made a Tourism Management System",
      "Implemented robust database design with proper relationships and normalization",
      "Created intuitive user interfaces for efficient data entry and management",
    ],
  },
  {
    title: "2D Unity Game",
    company_name: "Screw Pin Jam Game",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "August 2024",
    points: [
      "2D Screw Pin Jam Game, using C# and Unity resources",
      "Implemented game mechanics, physics, and scoring system",
      "Created engaging level designs and progression system",
      "Optimized performance for smooth gameplay experience",
    ],
  },
  {
    title: "Socket Programming",
    company_name: "Word Chain Game",
    icon: backend,
    iconBg: "#383E56",
    date: "Nov 2024",
    points: [
      "Simple Word Chain game for Multiple Players using SFML and Socket Programming",
      "Implemented real-time multiplayer functionality with socket connections",
      "Designed protocol for game state synchronization across clients",
      "Created engaging UI with SFML graphics library",
    ],
  },
  {
    title: "Other Programming Projects",
    company_name: "Various Game & System Applications",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Oct 2022 to May 2025",
    points: [
      "2D Tetris and Space Shooter Game using OOP Principles",
      "Interplanetary File System using B-Trees and Data Structures Principles",
      "2D Pacman Game in Assembly Language",
      "Multi Objective Shortest Path using Parallel Distribution Computing Concepts",
      "Single Source Shortest Path using Parallel Distribution Computing Concepts",
      "Discord Bot for managing Loans and payments (Active for all my friends)"
    ],
  },
];

const projects = [
  {
    name: "Game Accounts Marketplace",
    description:
      "A full stack web application for online game accounts marketplace with fully functional and responsive Frontend/Backend. Provides secure user authentication and payment processing.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "white-text-gradient",
      }
    ],
    image: gameaccounts,
    source_code_link: "https://github.com/Hussnainulabidin/PlayTrade",
  },
  {
    name: "Ecommerce Mobile App",
    description:
      "A small fully functional mobile app designed as an online store for ecommerce with Node.js backend. Features product catalog, shopping cart, and checkout functionality.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      }
    ],
    image: bazaar,
    source_code_link: "https://github.com/Saibi10/Bazaar",
  },
  {
    name: "Multi-threaded 2D Game",
    description:
      "A 2D Pacman game developed on Linux using pthreads and GLUT, implementing OS/Synchronization concepts. Features multi-threading for efficient game mechanics and AI movement.",
    tags: [
      {
        name: "c++",
        color: "blue-text-gradient",
      },
      {
        name: "pthreads",
        color: "green-text-gradient",
      },
      {
        name: "glut",
        color: "pink-text-gradient",
      },
      {
        name: "opengl",
        color: "white-text-gradient",
      }
    ],
    image: pacman,
    source_code_link: "https://github.com/Saibi10/Pacman",
  },
  {
    name: "Gym Management System",
    description:
      "A comprehensive desktop application that manages an online Central Gym Centre for the whole country. Built with C-forms and SQL Database with robust database design.",
    tags: [
      {
        name: "c-sharp",
        color: "blue-text-gradient",
      },
      {
        name: "windows-forms",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      }
    ],
    image: gymManagement,
    source_code_link: "https://github.com/Saibi10/Flex_Trainer",
  },
  {
    name: "Tourism Management System",
    description:
      "A desktop application built with Java FX and SQL Database for managing tourism operations. Features an intuitive user interface for efficient data entry and management.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      }
    ],
    image: tourismSystem,
    source_code_link: "https://github.com/Saibi10/Valit",
  },
  {
    name: "2D Unity Game",
    description:
      "A 2D Screw Pin Jam Game developed using C# and Unity resources. Includes game mechanics, physics, scoring system, and engaging level designs with progression system.",
    tags: [
      {
        name: "unity",
        color: "blue-text-gradient",
      },
      {
        name: "c-sharp",
        color: "green-text-gradient",
      },
      {
        name: "game-design",
        color: "pink-text-gradient",
      }
    ],
    image: unityGame,
    source_code_link: "https://github.com/Gazi0/ScrewPinJam",
  },
  {
    name: "Word Chain Game",
    description:
      "A multiplayer Word Chain game using SFML and Socket Programming. Features real-time multiplayer functionality with socket connections and game state synchronization across clients.",
    tags: [
      {
        name: "sfml",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "sockets",
        color: "pink-text-gradient",
      }
    ],
    image: wordChainGame,
    source_code_link: "https://github.com/Saibi10/Socket-Programming-Word-Chain-Game-in-C-",
  },
  {
    name: "Discord Payment Bot",
    description:
      "A Discord Bot for managing loans and payments, actively used by friends. Provides automated tracking and management of financial transactions within Discord servers.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "discord-api",
        color: "pink-text-gradient",
      }
    ],
    image: ecommerceApp,
    source_code_link: "https://github.com/Saibi10/Finance.gg",
  }
];

export { services, experiences, projects };
