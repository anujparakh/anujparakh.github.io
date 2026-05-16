type WorkExperience = {
  icon: string;
  title: string;
  company: string;
  starting: string;
  ending: string;
  description: Array<string>;
};

type PersonalProject = {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  githubLink?: string;
  demoLink?: string;
  description: Array<string>;
};

export const PERSONAL_PROJECTS: Array<PersonalProject> = [
  {
    title: "webtools",
    subtitle:
      "A collection of simple browser-based utilities for developers — no installation or account required",
    image: "/img/webtools.svg",
    date: "2025",
    githubLink: "https://github.com/anujparakh/webtools",
    demoLink: "https://webtools.anujparakh.dev",
    description: [
      "webtools is a browser-based utility application providing a suite of lightweight developer tools. Built with TypeScript, Vite, and Tailwind CSS, it runs entirely in the browser with no installation or account creation needed.",
      "",
      "The toolkit includes a URL Encoder/Decoder for encoding and decoding URL strings and query parameters, a URL Builder for constructing URLs with editable query parameters supporting JSON values, a JSON Viewer for pretty-printing, validating, sorting keys, and folding JSON with syntax highlighting, and a JWT Viewer for decoding and inspecting JWT tokens to view header, payload, and signature components.",
    ],
  },
  {
    title: "The Media Center",
    subtitle:
      "Wireless remote control application for managing media playback and navigation from mobile devices",
    image: "/img/media-center.svg",
    date: "November 2024",
    githubLink: "https://github.com/anujparakh/the-media-center",
    demoLink: "",
    description: [
      "The Media Center is a wireless remote control application that enables users to manage media playback and interface navigation from their mobile devices over a local network. Built with NestJS backend and Preact frontend, it provides comprehensive media controls including play/pause, skip, mute, and fullscreen functionality.",
      "",
      "Features include a full touchpad with click, double-click, drag, and scroll capabilities, keyboard support for text input and shortcuts, and quick access to streaming services like Netflix and YouTube. The application uses Socket.IO for WebSocket communication and robotjs for system automation, with responsive design optimized for smartphones.",
    ],
  },
  {
    title: "Homescreen",
    subtitle:
      "Customizable homepage with rotating backgrounds and configurable widgets",
    image: "/img/homescreen.svg",
    date: "November 2024",
    githubLink: "https://github.com/anujparakh/homescreen",
    demoLink: "https://homescreen.anujparakh.dev",
    description: [
      "Homescreen is a minimal web application designed as a customizable personal homescreen with dynamic visual elements. Built with TypeScript, Preact, and Tailwind CSS, it features rotating backgrounds curated from Chromecast backgrounds and a settings panel to configure the widgets.",
      "",
      "The application includes three configurable widgets: clock display, date information, and weather data. User preferences are persisted using local storage, with a dedicated settings modal for configuration.",
    ],
  },
  {
    title: "MITS",
    subtitle:
      "Multi-Instrumental-Tactile-Synthesizer is a pair of gloves that can be used to create different kinds of music.",
    image: "/img/Mits.png",
    date: "April 2020",
    githubLink:
      "https://github.com/anujparakh/multi-instrumental-tactile-synthesizer",
    demoLink: "",
    description: [
      "MITS is a pair of gloves that can be used to create different kinds of music. We used Arduino Nano 33 BLEs/LightBlue Bean to connect over bluetooth to a MacOS application that sends MIDI signals to a Digital Audio Workstation (DAW) like Reaper to change instruments and play the notes as required.",
    ],
  },
  {
    title: "govee-bt-lightstrips",
    subtitle: "Node module used to control Govee light strips over BLE",
    image: "/img/lightstrips.png",
    date: "June 2021",
    githubLink: "https://github.com/anujparakh/govee-bt-lightstrips",
    demoLink: "",
    description: [
      "Simple Node module used to control Govee light strips over BLE. I couldn't find a npm package or any other kind of library that supported controlling Govee Bluetooth Lightstrips so I wrote a simple npm package to accomplish that. This package supports all possible functions on the lightstrip, including discovery, connection, brightness and color control. I also published the package on npm for people to use in smart home projects.",
    ],
  },
  {
    title: "Triones Bulbs Controller",
    subtitle:
      "iOS Application providing widget and Siri shortcuts to control triones smart bulbs",
    image: "/img/bulbcontrollerLogo.png",
    date: "June 2021",
    githubLink: "https://github.com/anujparakh/govee-bt-lightstrips",
    demoLink: "",
    description: [
      "This iOS application provides an iOS widget and Siri shortcuts to control triones based smart bulbs. The current app is buggy and does not provide siri support. So, I created an iOS application to do that.",
      "",
      "I created a Node.js server using the noble library to connect to the bulbs and send commands to them. This server waits for POST requests with the command and the iOS widget and shortcuts send requests to this server.",
    ],
  },
  {
    title: "PackAdvisor",
    subtitle: "Web Application to help people pack for trips",
    image: "/img/packadvisor.png",
    date: "March 2020",
    githubLink: "https://github.com/pablo8954/CSCE_315_HCI",
    demoLink: "",
    description: [
      "Packadvisor is a web application created to help people pack for trips. The app can help a user pack by providing information about the destination and the trip including weather, timezone change, currency conversions, translations etc. The user can also create packing lists and login using Google to save information.",
      "",
      "I was the lead frontend developer on the four person team that created this application. The app uses Node.js and MongoDB for the backend and utilizes several REST APIs to get details about a user's trips.",
    ],
  },
  {
    title: "Phantom Guitar",
    subtitle:
      "Used a bluetooth arduino style device with an accelerometer to recreate playing Air Guitar",
    image: "/img/lbb.png",
    date: "April 2016",
    githubLink: "https://github.com/anujparakh/phantom-guitar",
    description: [
      "I used the LightBlue Bean, which is a bluetooth Arduino-style device with an acceloremeter to recreate playing Air Guitar. I wrote Android and MacOS apps where the user can select guitar chords to play, and then use the Bean like a guitar pick, strumming in air while getting the feeling and sound of playing a guitar.",
    ],
  },
];

export const WORK_EXPERIENCES: Array<WorkExperience> = [
  {
    icon: "/img/credera-logo.png",
    title: "Senior Full Stack Engineering Consultant",
    company: "Credera",
    starting: "Jan 2024",
    ending: "Present",
    description: [
      "Led a cross-functional pod of full-stack engineers responsible for designing, building, and scaling an eCommerce storefront. In this role I balanced hands-on technical work with leadership — mentoring engineers, guiding architectural decisions, and partnering with product stakeholders to shape roadmaps that deliver measurable business impact.",
      "Played a key role in the development and maintenance of a multi-client eCommerce platform, driving an annual revenue of over $10 million.",
      "Functioned as a full-stack developer, leveraging Next.js, Tailwind CSS, and Java Spring Boot to implement a range of features supporting the eCommerce platform's operations and performance.",
      "Spearheaded the implementation of features such as last-mile delivery notifications and third-party vendor integrations for catalog, inventory, and order updates, enhancing the functionality and efficiency of the eCommerce platform.",
    ],
  },
  {
    icon: "/img/credera-logo.png",
    title: "Full Stack Engineering Consultant",
    company: "Credera",
    starting: "Sep 2021",
    ending: "Jan 2024",
    description: [
      "Worked with a client to help unify their business verticals' sites and apps into one experience in order to provide a single branded set of tools, improve speed to market, simplify end user experience, and improve the development process.",
      "Implemented and worked on APIs in Scala Play as well as Java Spring in order to unify the two different verticals and modernize 15+ year old code.",
      "Utilized eCommerce platform to design and implement eShops using Next.js, Tailwind and Spring Boot microservices.",
    ],
  },
  {
    icon: "/img/boeinglogo.png",
    title: "Software Engineering Intern",
    company: "The Boeing Company",
    starting: "May 2020",
    ending: "Aug 2020",
    description: [
      "Implemented features in a project that connects airplane systems to the ground using cloud technology while working in a team.",
      "Developed code in TypeScript working with Microsoft Azure and Cosmos DB using Node.js and restify.",
    ],
  },
  {
    icon: "/img/tamulogo.png",
    title: "Computer Science Peer Teacher",
    company: "Texas A&M University",
    starting: "Aug 2019",
    ending: "Dec 2019",
    description: [
      "Helped students in intro level computer science courses in labs by explaining concepts, debugging code and showing examples.",
    ],
  },
  {
    icon: "/img/NILogo.jpg",
    title: "Software Engineering Intern",
    company: "National Instruments",
    starting: "May 2019",
    ending: "Aug 2019",
    description: [
      "Designed and developed a project from start to completion in C++ for an embedded system to save manufacturing time and cost.",
      "Helped debug both embedded code and driver level code to implement code fixes and enhancements.",
    ],
  },
  {
    icon: "/img/tamulogo.png",
    title: "Physics Undergraduate Teaching Fellow",
    company: "Texas A&M University",
    starting: "Jan 2019",
    ending: "May 2019",
    description: [
      "Worked as a UTF for the Physics department, where I helped students with their Engineering Physics 1 courses by explaining topics and solving problems.",
    ],
  },
  {
    icon: "/img/BioEyeLogo.jpeg",
    title: "Software Engineering Intern",
    company: "BioEye",
    starting: "May 2018",
    ending: "Aug 2018",
    description: [
      "Worked on a project involving machine learning to provide a mobile eye tracking solution to detect early onset dementia.",
      "Designed and developed the backend using Node.js and MongoDB, and helped implement script fixes on Linux using CMake.",
    ],
  },
];

export const PROGRAMMING_LANGUAGES = [
  "Java",
  "TypeScript",
  "C/C++",
  "Python",
  "JavaScript",
  "Swift",
  "Scala",
  "C#",
  "Dart",
  "SQL",
  "Ruby",
  "Objective C/C++",
  "HTML",
  "CSS",
];

export const TECHNOLOGIES = [
  "React",
  "Next.js",
  "Redux",
  "Spring Boot",
  "Tailwind",
  "Material UI",
  "React Native",
  "Flutter",
  ".NET",
  "Node.js",
  "Cucumber",
  "Jest",
  "Playwright",
  "Selenium",
  "JUnit",
  "Kubernetes",
  "AWS",
  "Azure",
  "MongoDB",
];

export const TOOLS = [
  "Git",
  "VSCode",
  "Copilot",
  "Claude Code",
  "Cursor",
  "Bash",
  "IntelliJ",
  "Postman",
  "Docker",
  "XCode",
  "Emacs",
  "Jira",
  "Azure DevOps",
  "Vim",
  "GitHub",
  "GitLab",
  "Perforce",
  "Boost",
  "CMake",
  "Jenkins",
  "Visual Studio",
  "Android Studio",
];
