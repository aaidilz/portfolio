import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aidil",
  lastName: "Fikri",
  name: `Muhammad Aidil Fikri`,
  role: "Offensive Security Engineer",
  avatar: "/images/avatar.jpg",
  email: "muhaidfik@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Bahasa", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and security engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aaidilz",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aaidilz",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/aaidilz/",
    essential: true,
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@aaidilz",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "Notes",
    icon: "book",
    link: "https://aaidilz.github.io/note",
    essential: true,
  }
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Securing Systems, Building Experiences.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      Providing actionable vulnerability research and defensive insights with a focus on evidence-based remediation.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am an offensive cybersecurity expert with a strong focus on in-depth technical (low-level) aspects and systems. I’m the kind of person who enjoys dissecting how a system works and how to protect it effectively.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent Security Researcher",
        timeframe: "2025 – Present",
        role: "Vulnerability Researcher & Security Automation Engineer",
        achievements: [
          <>
            Identified and responsibly disclosed critical vulnerabilities in web applications
            and distributed system architectures, with emphasis on OWASP Top 10 weaknesses
            and complex business logic flaws.
          </>,
          <>
            Engineered custom Nuclei templates and automated end-to-end reconnaissance
            pipelines, improving vulnerability detection efficiency by <strong>40%</strong> across
            large-scale attack surfaces.
          </>,
          <>
            Conducted in-depth research on kernel-level defense mechanisms — including
            <strong> eBPF-based runtime monitoring</strong> and Micro-VM isolation strategies —
            to evaluate and mitigate privilege escalation vectors.
          </>,
          <>
            Integrated local AI models with custom tooling to perform automated SBOM audits
            and reachability analysis across complex third-party dependency trees.
          </>,
        ],
        images: [],
      },
      {
        company: "Cybersecurity Matriculation Program",
        timeframe: "2026",
        role: "Interactive Learning Developer",
        achievements: [
          <>
            Architected a <strong>Docker-based interactive Linux learning environment</strong>,
            purpose-built to accelerate web security onboarding for undergraduate students.
          </>,
          <>
            Designed containerized lab scenarios providing safe, hands-on exposure to
            CLI workflows and server-side vulnerability exploitation — fully isolated
            from host infrastructure.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Universitas Pasundan, Bandung",
        description: <>Bachelor's program in Information Technology.</>,
      },
      {
        name: "Build the Future",
        description: <>Specialized training in offensive security techniques and penetration testing methodologies.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Vulnerability Research & Security Automation",
        description: (
          <>
            Proficient in orchestrating large-scale reconnaissance and vulnerability assessment
            pipelines using <strong>Agentic AI</strong> and custom tooling. Experienced in
            crafting precise detection templates for OWASP Top 10 vulnerabilities and
            non-trivial business logic flaws across diverse attack surfaces.
          </>
        ),
        tags: [
          { name: "Agentic AI", icon: "terminal" },
          { name: "OWASP Top 10", icon: "shield" },
          { name: "Burp Suite", icon: "bug" },
          { name: "Nuclei", icon: "zap" },
        ],
        images: [],
      },
      {
        title: "Linux System Administration & Hardening",
        description: (
          <>
            Experienced in deploying and hardening <strong>Linux-based</strong> production
            environments. Skilled in containerization, local infrastructure management,
            and kernel-level performance tuning for secure, high-availability operations.
          </>
        ),
        tags: [
          { name: "Ubuntu", icon: "ubuntu" },
          { name: "Bash Scripting", icon: "terminal" },
          { name: "Docker", icon: "container" },
          { name: "Kernel Tuning", icon: "cpu" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };