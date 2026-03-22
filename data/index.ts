export const DATA = {
  home: {
    hero: {
      name: "Wendy Paraizo",
      title: "Frontend Developer",
      subtitle:
        "Crafting engaging, delightful experiences that users can see, touch, and click.",
    },
    skills: {
      sectionTitle: "Skills & Hobbies",
      sectionDescription:
        "Specialized in creating modern digital experiences with cutting-edge technologies",
      overview: [
        {
          name: "Aesthetic Coding",
          level: 95,
          icon: "lucide:layout-dashboard",
          color: "primary",
        },
        {
          name: "DIY Tech Projects",
          level: 90,
          icon: "lucide:code",
          color: "secondary",
        },
        {
          name: "Crafting Arts",
          level: 85,
          icon: "lucide:scissors",
          color: "success",
        },
        {
          name: "Dog Walking",
          level: 100,
          icon: "lucide:footprints",
          color: "warning",
        },
      ],
    },
    testimonials: {
      sectionTitle: "Testimonials",
      sectionDescription: "What team members say about working together",
      items: [
        {
          id: 1,
          name: "Dongli Liu",
          role: "Machine Learning Engineer",
          content:
            "I truly feel lucky to have worked alongside such a talented and dedicated teammate. I’m glad I could contribute by finding and implementing solutions like MediaPipe and Transformers, but ASignal wouldn’t have reached its full potential without your creativity and dedication.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=1",
        },
        {
          id: 2,
          name: "Deqa Yusuf",
          role: "Backend Developer",
          content:
            "I have had countless opportunities to work with Wendy on so many exciting projects. I am most proud of our capstone project, as we really got to showcase our learned talents and skills. I would collaborate together again in a heartbeat",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=2",
        },
        {
          id: 3,
          name: "Harpreet Singh",
          role: "Software Engineer",
          content:
            "The semester long project web dev project we built together received full marks. It was a great experience working together.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=5",
        },
        {
          id: 4,
          name: "Abba Hammond",
          role: "Project Manager",
          content:
            "I truly appreciate all of the hardwork and dedication Wendy contributed as the team leader.",
          avatar: "https://img.heroui.chat/image/avatar?w=100&h=100&u=6",
        },
      ],
    },
  },
  about: {
    profile: {
      name: "Wendy Paraizo",
      title: "Frontend Developer",
      image: "/wendy.jpeg",
      description: [
        "Greetings, I'm Wendy Paraizo and have a passion for fun design and clean code. I focus on building beautiful, functional, and high-performance websites.",
        "My approach is both technical yet aesthetic. I really enjoy taking on the challenge of turning complex problems into fun user experiences. I work primarily with modern frameworks like React and Node.JS.",
        "Outside of code, I enjoy engaging in physical activities and always pushing the boundaries of learning new things.",
      ],
    },
    education: [ { title: "Centennial College", 
      date: "2022 - 2025", 
      icon: "mdi:palette", 
      description: "Earned an advanced diploma in AI Software Engineering. I gained strong skills in software development, user interface engineering, data structures, and connections.", 
    }, 
  ],
    experience: [
      {
        title: "Makers Making Change",
        date: "2025 - Present",
        icon: "mdi:monitor-dashboard",
        description:
          "Lead creative and development teams to build custom devices that combine innovation with user empathy. Adapting existing open-source designs to meet specific needs of those with disabilities.",
      },
    ],
    technologies: {
      frontend: {
        description: "I craft dynamic, responsive UIs using modern JavaScript frameworks and CSS tools.",
        tools: [
          { name: "React", icon: "logos:react" },
          { name: "Next.js", icon: "skill-icons:nextjs-dark" },
          { name: "Tailwind", icon: "logos:tailwindcss-icon" },
          { name: "TypeScript", icon: "logos:typescript-icon" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      backend: {
        description: "I build fast APIs and scalable backends using Node.js and Python.",
        tools: [
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "Python", icon: "logos:python" },
          { name: "MySQL", icon: "logos:mysql-icon" },
          { name: "PostgresSQL", icon: "logos:postgresql" },
          { name: "OpenAI", icon: "simple-icons:openai" },
        ],
      },
    },
  },
  projects: {
    sectionTitle: "Featured Projects",
    sectionDescription: "A selection of projects showcasing my frontend skills and AI integration expertise.",
    work: [
      {
        id: 1,
        title: "Visitara",
        description:
          "A community-focused review platform that lets users discover, rate, and share your honest experiences with local businesses.",
        image: "/visitara-screenshot.png", 
        gallery: [
          "/visitara-screenshot.png",
        ],
        category: "Web Development",
        details:
          "Vistara is a Yelp-inspired platform designed to promote local businesses to new customers. Built with a focus on user experience, allowing anyone to sign up and start rating restaurants or services instantly. Behind the scenes, I implemented a robust MongoDB database to handle user reviews and business data, ensuring a fast and reliable experience for all.",
        github: "https://github.com/your-username/vistara", 
        live: "https://vistara-f.onrender.com/",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "MongoDB", icon: "logos:mongodb-icon" },
          { name: "Node.js", icon: "logos:nodejs-icon" },
          { name: "TailwindCSS", icon: "logos:tailwindcss-icon" },
        ],
      },
      {
        id: 2,
        title: "Interactive V-day Card",
        description:
          "A playful, interactive Valentine's Day card featuring Bubu and Dudu with a 'No' button that is impossible to click.",
        image: "/bemine.png", 
        gallery: [],
        category: "Interactive",
        details:
          "This cutesy project focuses on DOM manipulation and event listeners. This fun little project was made early on in my tech career. Although I have advanced, this is something I wanted to include to show my progess! I used HTML, CSS, and Vanilla JavaScript, to create a fun experience, featuring Bubu and Dudu, where reaching for the 'No' is an impossible task, making 'Yes' the only choice!",
        github: "https://github.com/papagwens/bemine",
        live: "https://papagwens.github.io/bemine/",
        tech: [
          { name: "JavaScript", icon: "logos:javascript" },
          { name: "HTML5", icon: "logos:html-5" },
          { name: "CSS3", icon: "logos:css-3" },
        ],
      },
      {
        id: 4,
        title: "Student Persistence Predictor",
        description: "A predictor tool that uses AI to tell if a student is on track to pass based on the data entered.",
        image: "/spp.png", 
        gallery: [],
        category: "AI & Full Stack",
        details: "This Full-Stack Intelligent App was made in a group effort to simplify complex data. The UI was a simple form where the data was entered to display an output of a fail or pass!",
        github: "https://github.com/dongligroup/ml-nn-studentpersistence", 
        live: "",
        tech: [
          { name: "React", icon: "logos:react" },
          { name: "Flask", icon: "logos:flask" },
          { name: "TensorFlow", icon: "logos:tensorflow" },
          { name: "JavaScript", icon: "logos:javascript" },
        ],
      },
    ],
  },
  contact: {
    heading: "Have a project in mind? Get in touch and let's create something mind-blowing.",
    location: {
      mapSrc: "https://www.google.com/maps/embed?pb=...", 
      address: "Toronto, ON",
    },
  },
  morphingTexts: {
    about: ["Creative", "Passionate", "Developer"] as const,
    projects: ["My Work", "Creations", "Experiments", "Innovations"] as const,
    contact: ["Let's", "Build", "Together"] as const,
  },
  navigation: [
    { name: "Home", href: "/", icon: "lucide:home" },
    { name: "About", href: "/about", icon: "lucide:user" },
    { name: "Contact", href: "/contact", icon: "lucide:send" },
  ],
  footer: {
    name: "Wendy Paraizo",
    description: "Always interested in new projects and collaborations.",
    contact: {
      email: "wendy.paraizo@gmail.com",
      location: "Toronto, ON",
    },
    socialLinks: [
      { platform: "GitHub", url: "https://github.com/Papagwens", icon: "mdi:github" },
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/wendy-paraizo/", icon: "mdi:linkedin" },
    ],
    services: ["Frontend Development", "UI/UX Design", "AI Implementation"],
  },
} as const;