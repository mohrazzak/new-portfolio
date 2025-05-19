import { initScrollReveal } from "./scrollReveal.js";
import { hoverChangeExperience } from "./hoverChangeExperience.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));
const d = new Date("2024-04-01"), n = new Date(), m = n.getMonth() - d.getMonth() + 12 * (n.getFullYear() - d.getFullYear()), y = Math.floor(m / 12);
console.log(`${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()} - Present (${y ? y + 'y ' : ''}${m % 12 ? m % 12 + 'm' : ''})`);

hoverChangeExperience(
  ".unifiSolutions",
  `• Led the development of an internal Asset Management system, improving resource visibility and control across departments.<br>
   • Engineered a real-time IoT alert system to proactively detect and resolve operational issues.<br>
   • Refactored backend services using NestJS and Redis, significantly enhancing performance and scalability.<br>
   • Collaborated with cross-functional teams to align technical solutions with business goals and ensure smooth delivery.`,
  "Senior Backend Developer",
  "Unifi Solutions",
  `${d.toLocaleString('default', { month: 'short' })} ${d.getFullYear()} - Present (${y ? y + 'y ' : ''}${m % 12 ? m % 12 + 'm' : ''})`
);

hoverChangeExperience(
  ".raizer",
  `• Interned at Raizer, contributing to a web-based platform for managing and automating employee salary communications.<br>
   • Helped design and implement secure features for generating and delivering salary emails through the platform.<br>
   • Analyzed system workflows to improve HR process efficiency and reduce manual tasks.<br>
   • Emphasized clean code and maintainability while ensuring data privacy compliance.`,
  "Intern Backend Developer",
  "Raizer",
  "Nov 2023 - Jan 2024 (3 months)"
);

hoverChangeExperience(
  ".easyApp",
  `• Worked as a Fullstack Developer on a copouns application, contributing to both frontend and backend systems.<br>
   • Optimized backend performance using Node.js and MongoDB to support 200+ transactions per second and reduce query latency.<br>
   • Integrated Firebase push notifications and WhatsApp login, improving user retention and trust through seamless engagement.`,
  "Fullstack Developer",
  "Easy App",
  "Jul 2023 - Oct 2023 (4 months)"
);

hoverChangeDescription(
  ".node",
  "Node.js is a JavaScript runtime for building fast, scalable server-side applications."
);

hoverChangeDescription(
  ".nestjs",
  "NestJS is a progressive Node.js framework for building efficient and maintainable back-end systems."
);

hoverChangeDescription(
  ".redis",
  "Redis is an in-memory data store used for caching, real-time data, and performance optimization."
);

hoverChangeDescription(
  ".postgres",
  "PostgreSQL is a powerful, open-source SQL database known for its reliability and advanced features."
);

hoverChangeDescription(
  ".mongodb",
  "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents."
);

hoverChangeDescription(
  ".react",
  "React is a JavaScript library for building user interfaces using components and state management."
);

hoverChangeDescription(
  ".svelte",
  "Svelte is a modern frontend framework that compiles code to highly optimized JavaScript at build time."
);

hoverChangeDescription(
  ".tailwind",
  "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces."
);

hoverChangeDescription(
  ".docker",
  "Docker is a platform for developing, shipping, and running applications inside lightweight containers."
);

hoverChangeDescription(
  ".firebase",
  "Firebase is a platform by Google that provides backend services like authentication, real-time databases, and notifications."
);

hoverChangeDescription(
  ".swagger",
  "Swagger is a tool for designing, documenting, and testing RESTful APIs with a clear interface."
);

hoverChangeDescription(
  ".typescript",
  "TypeScript is a statically typed superset of JavaScript that improves code quality and developer productivity."
);

hoverChangeDescription(
  ".javascript",
  "JavaScript is a core web language used for creating dynamic and interactive web experiences."
);

hoverChangeDescription(
  ".git",
  "Git is a distributed version control system used for tracking code changes and collaborating in teams."
);
