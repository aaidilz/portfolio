import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, SmartLink, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Aidil",
  lastName: "Fikri",
  name: `Muhammad Aidil Fikri`,
  role: "Offensive Security Engineer",
  avatar: "/images/avatar.jpg",
  email: "biastan@proton.me",
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
  title: `${person.name} (Aaidilz) | ${person.role}`,
  description: `Explore Muhammad Aidil Fikri's portfolio: offensive security, vulnerability research, mobile, API and web application assessments, and practical security tools.`,
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
  description: `${person.name} — offensive security, vulnerability research, and practical tooling. Explore my approach, experience, and selected projects.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "My approach",
    description: (
      <>
        <Text as="p" variant="heading-strong-xl">
          I like understanding systems deeply enough to question their assumptions.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak">
          I’m Aidil, an offensive security engineer with assessment experience across mobile
          applications, APIs, and web applications. I enjoy tracing how an application
          handles data, where trust changes hands, and what happens when the expected path breaks.
        </Text>
        <Text as="p" variant="body-default-l" onBackground="neutral-weak">
          My approach connects investigation with clear evidence: understand the behavior,
          reproduce the issue, explain its impact, and make the next step actionable.
          I also build applications and tools, which helps me reason about vulnerabilities
          from both the tester’s and the developer’s perspective.
        </Text>
      </>
    ),
  },
  work: {
    display: true,
    title: "Experience",
    experiences: [
      {
        company: "Independent Security Researcher",
        timeframe: "2025 – Present",
        role: "Security Assessment & Vulnerability Research",
        achievements: [
          <>
            Received acknowledgment for identifying a <strong>security vulnerability at
            a major hospital in West Java</strong>. The organization’s identity and technical
            details remain confidential.
          </>,
          <>
            Contributed to security assessments of <strong>mobile applications, API endpoints,
            and web applications</strong>, helping identify weaknesses and inform security
            improvements.
          </>,
          <>
            Participate in <strong>private bug bounty programs</strong>, researching
            vulnerabilities within each program’s authorized scope and disclosure requirements.
          </>,
          <>
            Support efforts to strengthen application security by documenting findings,
            explaining their potential impact, and providing actionable remediation guidance.
          </>,
          <>
            Build custom Nuclei templates and reconnaissance workflows to automate
            repeatable checks and support deeper manual investigation.
          </>,
        ],
        images: [],
      },
      {
        company: "BYPAS — Cybersecurity Study Club",
        timeframe: "2026",
        role: "Initiator & Community Builder",
        achievements: [
          <>
            Initiated and helped build <strong>BYPAS, a cybersecurity study club</strong>,
            creating a space for students to learn, explore, and practice cybersecurity together.
            {" "}<SmartLink href="https://bypas.unpas.ac.id">BYPAS website</SmartLink>
            {" · "}<SmartLink href="https://www.instagram.com/bypas_id/">@bypas_id</SmartLink>
          </>,
          <>
            Built a <strong>Docker-based interactive Linux learning environment</strong>
            {" "}for undergraduate students starting out in web security.
          </>,
          <>
            Designed containerized exercises covering command-line workflows and
            server-side vulnerabilities, with an emphasis on learning through practice.
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
        description: (
          <>
            <strong>Bachelor’s Program in Information Technology</strong>
            <br />
            Connecting academic learning with hands-on work in application security,
            software development, and security research. Through BYPAS, I also help
            build a learning community where students explore cybersecurity together.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "What I work with",
    skills: [
      {
        title: "Mobile, API & Web Security",
        description: (
          <>
            My strongest focus is testing mobile applications, API endpoints, and web
            applications, alongside security hardening. I combine established tools from
            the Kali Linux ecosystem with custom tooling to investigate application
            behavior, validate weaknesses, and guide practical improvements to security.
          </>
        ),
        tags: [
          { name: "Mobile Security" },
          { name: "API Security" },
          { name: "Web Security" },
          { name: "Security Hardening" },
          { name: "Kali Linux" },
          { name: "Custom Tooling" },
        ],
        images: [],
      },
      {
        title: "Agentic AI & Continuous Security Auditing",
        description: (
          <>
            I build agentic AI workflows that run recurring security audits and integrate
            with application CI/CD pipelines through configured test harnesses. The goal
            is to make security checks part of ongoing development, with repeatable
            execution and findings that support further investigation and remediation.
          </>
        ),
        tags: [
          { name: "Agentic AI" },
          { name: "Security Automation" },
          { name: "CI/CD Integration" },
          { name: "Test Harnesses" },
          { name: "Recurring Audits" },
        ],
        images: [],
      },
      {
        title: "Software Development & DevOps",
        description: (
          <>
            I work with Python, Next.js, and SQL/NoSQL databases to build applications,
            data workflows, and custom tools. My work also spans DevOps and AI automation,
            connecting application development with delivery workflows and automated tasks.
            This development experience informs how I assess systems and approach hardening.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "Next.js", icon: "nextjs" },
          { name: "SQL" },
          { name: "NoSQL" },
          { name: "DevOps" },
          { name: "AI Automation" },
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
  description: `Security tools, web applications, and software projects by ${person.name}. Explore practical work in offensive security and software development.`,
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
