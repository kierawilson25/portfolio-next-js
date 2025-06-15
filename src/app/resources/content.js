import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Kiera",
  lastName: "Wilson",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/Headshot.jpg",
  email: "kiera.wilson025@gmail.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/kierawilson25",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/kiera-wilson-115601176",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/Headshot.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Hey You, Welcome to Kiera World.</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Habit Tracker</strong></>,
    href: "https://habit-tracker-two-lemon.vercel.app/",
  },
  subline: (
    <>
      Its my world, you're just living in it. This portfolio show cases my work from undergrad, graduate school, and my professional career. 
      <br /> This site is a work in progress and not all skills or projects have been added yet, check my github for my most recent work. Click around and stay awhile. 
    </>
  ),
};

const about = {
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
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Kiera Wilson is a Minneapolis based software engineer with a passion for creativity and enginuity. She holds a Bachelors of Science in Computer Science
        and is currently pursing a Masters Degreen in Software Engineering from her Alama Mater, University of St. Thomas. Her combination of engineering 
        and business education stratigically positions her as a one of a kind developer. Kiera is not only dedicated to crafting 
        quick solutions but also sustainable ones. Documentation and readable code is a must for her. Her work is characterized by strong results leadership and 
        creativity. She is always looking for new challenges and opportunities to grow her skills.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Ameriprise Financial",
        timeframe: "2024 - Present",
        role: "Software Engineer",
        achievements: [
          <>
            Lead a team of developers to implement targeted marketing campaigns, driving conversions and 
            generating over 300 million in revenue.
          </>,
          <>
            Develop and communicate teams road map to kep business partners and product owners. Gather Requirements
            for campaigns from stakeholders and translate them into technical specifications for the team to execute on. 
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
        company: "Ameriprise Financial",
        timeframe: "2022 - 2024",
        role: "Programmer Analyst II",
        achievements: [
          <>
            Supported over 22 product teams by developing solutions to
            extract information from DOM and javascript variables for
            website analytics collection.
          </>,
          <>
            Developed a next.js web app utility that increased analytics speed
            to market by 20%.
          </>,
        ],
        images: [],
      },
      {
        company: "Ameriprise Financial",
        timeframe: "2021 - 2022",
        role: "User Experience Engineer",
        achievements: [
          <>
            Contributed to the design engine platform at Ameriprise by providing developers
            with a set of reusable components and design patterns.
          </>,
          <>
            Collaborated with designers and mobile app developers to create a comprehensive
            component library in Sketch, enabling consistent and efficient design.
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
        name: "University of St. Thomas",
        description: <>Bachelors of Science in Computer Science with a Minor in Business Administration.</>,
      },
      {
        name: "University of St. Thomas",
        description: <>Masters in Software Engineering. Expected completion: May 2027.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Adobe Target - Personalization",
        description: <>Certified Adobe Target Business Professional - Able to confiure highly effective marketing capaigns through front end technology.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/Adobe.jpg",
            alt: "Adobe Logo image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Adobe Launch - Data Collection",
        description: <>3 years of experience in front end data collection, supporting over 22 product teams.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/Adobe-tag-manager-logo.jpg",
            alt: "Adobe Launch Tag manaer Logo image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Tailwind.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/habit-tracker.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Javascript",
        description: <>5 years of experience working with javscript on  enterprise level front end apps.</>,
        images: [
          {
            src: "/images/skills/javascript-logo.jpg",
            alt: "Javascript logo image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Java",
        description: <>6 year of experience working with Java, developing strong skills in OOP.</>,
        images: [
          {
            src: "/images/skills/java-logo.jpg",
            alt: "Java logo image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>Experience working with python to build backend technologies as well as for building cloud infrastructure.</>,
        images: [
          {
            src: "/images/skills/python-logo.jpg",
            alt: "Python logo image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "AWS",
        description: <>Completed Cloud Computing and Infrastructure as Code course focused in AWS in graduate school.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/skills/aws-logo.jpg",
            alt: "AWS logo image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
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
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
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
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
