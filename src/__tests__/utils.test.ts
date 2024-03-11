import { filterJobs } from "../utils";

const mockJobs = [
  {
    id: 12,
    company: "Typemaster",
    logo: "./assets/logos/typemaster.svg",
    logoBackground: "hsl(22, 89%, 52%)",
    position: " Senior Technical Lead Engineer",
    postedAt: "1mo ago",
    contract: "Full Time",
    location: "MockCity",
    website: "https://example.com/typemaster",
    apply: "https://example.com/typemaster/apply",
    description:
      "We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.",
    requirements: {
      content:
        "Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.",
      items: [
        "5-7 years of experience in infrastructure engineering of applications",
        "Experience in web application security analysis and resolution.",
        "Experience working within a modern Javascript workflow through technologies such as: GitHub, CSS Preprocessors, Styled Components, Single Page Application frameworks and Module Bundlers (Webpack etc.)",
        "Experience in implementing A/B Tests",
        "Hands on experience with React/Redux in a production application",
      ],
    },
    role: {
      content:
        "Here's the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.",
      items: [
        "Security audit of web application with an emphasis on commerce/transactional flows",
        "Maintain and improve security skills, knowledge, and training through professional development, including participating in tech conferences and wider tech community forums",
        "Work on a modern stack including React and Django.",
        "Enforce code quality through test driven development via unit tests and automated tests.",
      ],
    },
  },
  {
    id: 13,
    company: "Crowdfund",
    logo: "./assets/logos/crowdfund.svg",
    logoBackground: "hsl(157, 57%, 50%)",
    position: "Front-end Developer",
    postedAt: "1mo ago",
    contract: "Full Time",
    location: "United Kingdom",
    website: "https://example.com/crowdfund",
    apply: "https://example.com/crowdfund/apply",
    description:
      "We’re hiring a Front-end Developer to help create the front-end experience for Crowdfund’s management interface. As our ideal candidate, you’re an adept user of the front-end stack (React, Yarn, webpack, Babel, SCSS, JSX, GraphQL) and an avid learner of new frameworks. You enjoy building excellent user experiences as well as reusable components that other developers can use to solve similar problems. You love open-source and being part of a thriving developer community and understand that strong businesses enable great enduring communities.",
    requirements: {
      content:
        "As a mid-level developer, we expect you to have a complete understanding of JavaScript, CSS, and HTML, and proven experience building and deploying single-page applications at scale. Experience with modern JavaScript application frameworks is a given, but you also have the ability to think outside the frameworks.",
      items: [
        "Multiple years of React experience",
        "Good eye for detail",
        "Passion for great user experience and API design",
        "Comfortable working with cross-functional and cross-cultural teams",
      ],
    },
    role: {
      content:
        "We want people who are passionate about building apps that you and your peers will love. We are looking for an experienced Front-end Developer who shares our passion for making complex applications appear simple for our customers. We’ll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You’ll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.",
      items: [
        "Working with our team to build out our React/Typescript/GraphQL stack",
        "Collaborating with product and design to increase conversions and improve user experience",
        "Building new, efficient, and scalable front-end applications that will interface with public and internal APIs",
        "Writing clean, maintainable, and testable code",
        "Work with backend teams to solve complex problems",
      ],
    },
  },
  {
    id: 14,
    company: "Coffeeroasters",
    logo: "./assets/logos/coffeeroasters.svg",
    logoBackground: "hsl(29, 60%, 87%)",
    position: "Junior Full-Stack Developer",
    postedAt: "1mo ago",
    contract: "Part Time",
    location: "United Kingdom",
    website: "https://example.com/coffeeroasters",
    apply: "https://example.com/coffeeroasters/apply",
    description:
      "We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.",
    requirements: {
      content:
        "This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.",
      items: [
        "A degree in Computer Science or an equivalent engineering foundation.",
        "Experience in Python and/or JavaScript.",
        "Ability to thrive in a fast-paced startup.",
        "Someone who loves to learn and is passionate about helping others.",
      ],
    },
    role: {
      content:
        "We're looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.",
      items: [
        "Write frontend code and build UI to implement new features. Includes taking in data from our API, structuring that data, and displaying it.",
        "Build backend code for API.",
        "Consistently improve our platform so we can deliver features quickly with high reliability and scalability.",
        "Apply user experience methodology and best practices to translate user needs and business requirements into engaging user-centered design.",
        "Write/maintain documentation for the client and other team members.",
      ],
    },
  },
];

// const setFilteredJobsMock: jest.Mock<void, [any[]]> = jest.fn();

describe("test suite 1", () => {
  test("filter jobs by location and position ", () => {
    const filteredJobs = filterJobs("MockCity", "Senior", true, mockJobs);
    expect(filteredJobs).toEqual([
      {
        id: 12,
        company: "Typemaster",
        logo: "./assets/logos/typemaster.svg",
        logoBackground: "hsl(22, 89%, 52%)",
        position: " Senior Technical Lead Engineer",
        postedAt: "1mo ago",
        contract: "Full Time",
        location: "MockCity",
        website: "https://example.com/typemaster",
        apply: "https://example.com/typemaster/apply",
        description:
          "We are looking for a talented tech lead to join a team that creates large-scale, highly-performant web applications. This team creates highly visible and responsive user interfaces used by millions of people.",
        requirements: {
          content:
            "Our work is not just about the code: we seek a tech lead who cares deeply about user experience and how their work impacts users. An ideal candidate has extensive experience as a full-stack software engineer, including experience with both Django and React/Redux, our stack. This role is perfect for a seasoned full-stack developer who is looking to grow both as an engineer and technical product owner. We want someone who takes the initiative to learn, enjoys thoughtful code review, and has a history collaborating with other software engineers to develop best patterns and practices.",
          items: [
            "5-7 years of experience in infrastructure engineering of applications",
            "Experience in web application security analysis and resolution.",
            "Experience working within a modern Javascript workflow through technologies such as: GitHub, CSS Preprocessors, Styled Components, Single Page Application frameworks and Module Bundlers (Webpack etc.)",
            "Experience in implementing A/B Tests",
            "Hands on experience with React/Redux in a production application",
          ],
        },
        role: {
          content:
            "Here's the role: sling code, architect new systems, mentor junior engineers, and manage product as a tech lead on Typemaster’s growing dev team. You will work directly with Typemaster’s two technical co-founders and other engineers in a culture that includes clean code, extensive testing, rapid iteration, and the values you bring to the table. You will come to own one of our product lines, and will have the ability to contribute to multiple projects.",
          items: [
            "Security audit of web application with an emphasis on commerce/transactional flows",
            "Maintain and improve security skills, knowledge, and training through professional development, including participating in tech conferences and wider tech community forums",
            "Work on a modern stack including React and Django.",
            "Enforce code quality through test driven development via unit tests and automated tests.",
          ],
        },
      },
    ]);
  });

  test("Filter jobs with no match", () => {
    const filteredJobs = filterJobs(
      "NonExistentCity",
      "Junior",
      true,
      mockJobs
    );

    expect(filteredJobs).toEqual([]);
  });

  test("Filter jobs with empty location and position", () => {
    const filteredJobs = filterJobs("", "", false, mockJobs);

    expect(filteredJobs).toEqual(mockJobs);
  });
  test("Filter jobs with location and without position", () => {
    const filteredJobs = filterJobs("United Kingdom", "", false, mockJobs);

    expect(filteredJobs).toEqual([
      {
        id: 13,
        company: "Crowdfund",
        logo: "./assets/logos/crowdfund.svg",
        logoBackground: "hsl(157, 57%, 50%)",
        position: "Front-end Developer",
        postedAt: "1mo ago",
        contract: "Full Time",
        location: "United Kingdom",
        website: "https://example.com/crowdfund",
        apply: "https://example.com/crowdfund/apply",
        description:
          "We’re hiring a Front-end Developer to help create the front-end experience for Crowdfund’s management interface. As our ideal candidate, you’re an adept user of the front-end stack (React, Yarn, webpack, Babel, SCSS, JSX, GraphQL) and an avid learner of new frameworks. You enjoy building excellent user experiences as well as reusable components that other developers can use to solve similar problems. You love open-source and being part of a thriving developer community and understand that strong businesses enable great enduring communities.",
        requirements: {
          content:
            "As a mid-level developer, we expect you to have a complete understanding of JavaScript, CSS, and HTML, and proven experience building and deploying single-page applications at scale. Experience with modern JavaScript application frameworks is a given, but you also have the ability to think outside the frameworks.",
          items: [
            "Multiple years of React experience",
            "Good eye for detail",
            "Passion for great user experience and API design",
            "Comfortable working with cross-functional and cross-cultural teams",
          ],
        },
        role: {
          content:
            "We want people who are passionate about building apps that you and your peers will love. We are looking for an experienced Front-end Developer who shares our passion for making complex applications appear simple for our customers. We’ll give you the freedom to do what you do best, so you should feel comfortable owning your work from start to finish, as well as bringing fresh ideas to the table that can make our products, development experience, and team better. You’ll have the opportunity to work closely with designers, product managers, and other engineers across the stack to make ideas a reality.",
          items: [
            "Working with our team to build out our React/Typescript/GraphQL stack",
            "Collaborating with product and design to increase conversions and improve user experience",
            "Building new, efficient, and scalable front-end applications that will interface with public and internal APIs",
            "Writing clean, maintainable, and testable code",
            "Work with backend teams to solve complex problems",
          ],
        },
      },
      {
        id: 14,
        company: "Coffeeroasters",
        logo: "./assets/logos/coffeeroasters.svg",
        logoBackground: "hsl(29, 60%, 87%)",
        position: "Junior Full-Stack Developer",
        postedAt: "1mo ago",
        contract: "Part Time",
        location: "United Kingdom",
        website: "https://example.com/coffeeroasters",
        apply: "https://example.com/coffeeroasters/apply",
        description:
          "We’re looking for a Junior Full-Stack Developer to join our Product and Engineering team. This is an exciting opportunity to work on building our core web application.",
        requirements: {
          content:
            "This is an entry level full stack developer position that will assist in developing the next generation apps and APIs. You will be a contributor to agile teams by providing services that ensure Coffeeroasters is aligning technology efforts with business information needs. The intent is to develop a junior full stack developer to become a well-rounded API developer ready to take on any challenging opportunity.",
          items: [
            "A degree in Computer Science or an equivalent engineering foundation.",
            "Experience in Python and/or JavaScript.",
            "Ability to thrive in a fast-paced startup.",
            "Someone who loves to learn and is passionate about helping others.",
          ],
        },
        role: {
          content:
            "We're looking for a dynamic individual who is no stranger to building well-designed, performant and effective front-end web applications that support complex business rules/flows. You will start by learning from the experiences of our current team and our current offerings and become intimately familiar with our codebase. You will leverage your experience to establish best practices for web development and drive the team and the codebase to a higher level.",
          items: [
            "Write frontend code and build UI to implement new features. Includes taking in data from our API, structuring that data, and displaying it.",
            "Build backend code for API.",
            "Consistently improve our platform so we can deliver features quickly with high reliability and scalability.",
            "Apply user experience methodology and best practices to translate user needs and business requirements into engaging user-centered design.",
            "Write/maintain documentation for the client and other team members.",
          ],
        },
      },
    ]);
  });
  test("filter united kingdom with full time job and empty position", () => {
    const filteredJobs = filterJobs("United Kingdom", "", true, mockJobs);
    expect(filteredJobs).toContainEqual(mockJobs[1]);
  });
});
