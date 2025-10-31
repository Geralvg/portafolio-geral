export const navLinks = [
  {
    id: 1,
    name: 'Inicio',
    href: '#home',
  },
  {
    id: 2,
    name: 'Sobre mí',
    href: '#about',
  },
  {
    id: 3,
    name: 'Trabajo',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contacto',
    href: '#contact',
  },
];
//Reseñas de clientes
export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];



export const myProjects = [
  {
    title: 'AutoDoc - Automatización y gestión eficiente de documentos',
    desc: 'AUTODOC es una solución de software que automatiza y gestiona eficientemente los documentos de los aprendices del SENA durante su etapa productiva, ofreciendo plantillas personalizables, roles de usuario y un flujo de trabajo ágil que optimiza la creación y manejo de documentos.',
    subdesc:
      'Aplicación web desarrollada con arquitectura PHP MVC, MySQL y JavaScript que automatiza la generación de documentos oficiales del SENA, integrando plantillas dinámicas, control de roles y exportación a formatos Word y PDF. Proyecto interno con sitio informativo disponible en Netlify.',
    href: 'https://autodocexpo.netlify.app/',
    texture: '/textures/project/proyectoAutodoc.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#192A16FF',
      border: '0.2px solid #1EAA9EFF',
      boxShadow: '0px 0px 60px 0px #30AA364D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.png',
      },
      {
        id: 2,
        name: 'HTML',
        path: 'assets/html.png',
      },
      {
        id: 3,
        name: 'Css',
        path: '/assets/css.png',
      },
      {
        id: 4,
        name: 'Js',
        path: '/assets/js.png',
      },
      {
        id: 5,
        name: 'Mysql',
        path: '/assets/mysql.png',
      },
    ],
  },
  // {
  //   title: 'LiveDoc - Real-Time Google Docs Clone',
  //   desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
  //   subdesc:
  //     'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
  //   href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
  //   texture: '/textures/project/project2.mp4',
  //   logo: '/assets/project-logo2.png',
  //   logoStyle: {
  //     backgroundColor: '#13202F',
  //     border: '0.2px solid #17293E',
  //     boxShadow: '0px 0px 60px 0px #2F6DB54D',
  //   },
  //   spotlight: '/assets/spotlight2.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

// Íconos para las órbitas del SkillGalaxy (opcional si luego los pasas por props)
export const skillOrbits = [
  { id: 1,  label: 'HTML',          icon: '/assets/html.png',     radius: 2.1, speed: 0.7,  height: 0.2 },
  { id: 2,  label: 'CSS',           icon: '/assets/css.png',      radius: 2.6, speed: 0.55, height: 0.2 },
  { id: 3,  label: 'JavaScript',    icon: '/assets/js.png',       radius: 3.1, speed: 0.9,  height: 0.2 },
  { id: 4,  label: 'PHP',           icon: '/assets/php.png',      radius: 3.6, speed: 0.6,  height: 0.2 },
  { id: 5,  label: 'Node.js',       icon: '/assets/node.png',     radius: 4.1, speed: 0.7,  height: 0.2 },
  { id: 6,  label: 'Flutter/Dart',  icon: '/assets/flutter.png',  radius: 4.6, speed: 0.5,  height: 0.2 },
  { id: 7,  label: 'MySQL',         icon: '/assets/mysql.png',    radius: 5.1, speed: 0.8,  height: 0.2 },
  { id: 8,  label: 'PostgreSQL',    icon: '/assets/postgres.png', radius: 5.6, speed: 0.65, height: 0.2 },
  { id: 9,  label: 'Figma',         icon: '/assets/figma.png',    radius: 6.1, speed: 0.75, height: 0.2 },
];

// Tarjetas de categorías (mapea esto como antes mapeabas clientReviews)
export const skillCategories = [
  {
    id: 1,
    title: 'Metodologías & Desarrollo',
    items: [
      'Scrum y trabajo colaborativo',
      'APIs REST en Node.js',
      'Arquitectura MVC en PHP',
      'Documentación bajo norma IEEE',
    ],
  },
  {
    id: 2,
    title: 'Versionamiento & Calidad',
    items: [
      'Git y GitHub (ramas, PRs, issues)',
      'Buenas prácticas / código limpio',
      'Mensajería de commits clara y revisiones',
    ],
  },
  {
    id: 3,
    title: 'Bases de Datos & Herramientas',
    items: [
      'MySQL y PostgreSQL',
      'Modelado E-R y relacional',
      'DBeaver y MySQL Workbench',
    ],
  },
  {
    id: 4,
    title: 'Diseño UI/UX',
    items: [
      'Figma: prototipado y componentes',
      'Diseño responsivo y auto-layout',
      'Animaciones y uso de variables',
    ],
  },
  {
    id: 5,
    title: 'Habilidades Blandas',
    items: [
      'Responsable y organizada',
      'Comunicación asertiva',
      'Trabajo en equipo',
      'Aprendizaje continuo y proactividad',
    ],
  },
];

export const workExperiences = [
  {
    id: 1,
    name: 'AutoDoc CPIC',
    pos: 'Proyecto Académico Destacado',
    duration: '2024 - 2025',
    title:
      'Desarrollo de un software para automatizar y gestionar documentos administrativos en el CPIC. Implementé arquitectura MVC en PHP, MySQL y metodologías ágiles Scrum.',
    icon: '/assets/project-logo1.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'SENA',
    pos: 'Tecnóloga en anális y desarrollo de software',
    duration: '2024 - 2026',
    title:
      'Durante mi formación en el SENA, adquirí habilidades en desarrollo web y móvil, bases de datos, control de versiones y diseño UI/UX en Figma.',
    icon: '/assets/sena.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Reconocimientos a la Excelencia',
    pos: 'Responsabilidad y Dedicación',
    duration: '2024 - 2025',
    title:
      'Reconocida por mi compromiso, proactividad y desempeño académico en el SENA, destacando por mi responsabilidad y resultados en proyectos de software.',
    icon: '/assets/trophy.png',
    animation: 'salute',
  },
];
