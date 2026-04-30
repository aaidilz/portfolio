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
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: " Security Researcher (Independent)",
        timeframe: "2025 - Present",
        role: "Independent Vulnerability Researcher",
        achievements: [
          <>
            Identified and responsibly disclosed critical vulnerabilities across various web
            applications and system architectures, focusing on OWASP Top 10 and business logic flaws.
          </>,
          <>
            Developed custom Nuclei templates and automated reconnaissance workflows to increase
            vulnerability detection efficiency by 40% in large-scale attack surfaces.
          </>,
          <>
            Conducted deep-dive security analysis on system-level defenses, specifically researching
            eBPF-based monitoring and Micro-VM isolation to mitigate Privilege Escalation.
          </>,
          <>
            Leveraged local AI models and custom scripts to audit Software Bill of Materials (SBOM)
            and analyze reachable vulnerabilities in complex dependency trees.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/projects/project-01/cover-01.jpg",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      {
        company: "Cybersecurity Matriculation Program",
        timeframe: "2026",
        role: "Interactive Learning Developer",
        achievements: [
          <>
            Engineered an interactive, Docker-based Linux learning game designed to streamline
            web security matriculation for university students.
          </>,
          <>
            Containerized specialized environments to provide hands-on experience in command-line
            navigation and server-side security without compromising host stability.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Pasundan Bandung",
        description: <>Studied Information Technology.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied offensive security.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Vulnerability Research & Automation",
        description: (
          <>
            Expert in orchestrating large-scale reconnaissance and vulnerability scanning
            using <strong>Agentic AI</strong>. Proficient in developing custom templates for
            detecting business logic flaws and OWASP Top 10 vulnerabilities with high precision.
          </>
        ),
        tags: [
          { name: "Agentic AI", icon: "terminal" },
          { name: "OWASP", icon: "shield" },
          { name: "Burp Suite", icon: "bug" },
        ],
        images: [],
      },
      {
        title: "Linux System Administration & Hardening",
        description: (
          <>
            Expert in managing and hardening <strong>Linux-based</strong> environments.
            Skilled in local infrastructure deployment, including containerization for isolated services. Proficient in
            system performance tuning and kernel-level monitoring for stable, high-performance operations.
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