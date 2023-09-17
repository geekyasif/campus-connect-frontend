export const queryCategory = [
  {
    id: "123",
    slug: "frontend-development",
    title: "Frontend Development",
  },
  {
    id: "124",
    slug: "backend-development",
    title: "Backend Development",
  },
  {
    id: "162",
    slug: "data-analytics",
    title: "Data Analytics",
  },
  {
    id: "163",
    slug: "cloud-security",
    title: "Cloud Security",
  },
  {
    id: "164",
    slug: "game-design",
    title: "Game Design",
  },
  {
    id: "165",
    slug: "blockchain-technology",
    title: "Blockchain Technology",
  },
  {
    id: "167",
    slug: "mobile-gaming",
    title: "Mobile Gaming",
  },
  {
    id: "170",
    slug: "cloud-computing-services",
    title: "Cloud Computing Services",
  },
  {
    id: "172",
    slug: "computer-networks",
    title: "Computer Networks",
  },
  {
    id: "173",
    slug: "programming-languages",
    title: "Programming Languages",
  },
  {
    id: "179",
    slug: "operating-systems",
    title: "Operating Systems",
  },
  {
    id: "180",
    slug: "software-development",
    title: "Software Development",
  },
  {
    id: "184",
    slug: "cloud-storage",
    title: "Cloud Storage",
  },
  {
    id: "185",
    slug: "database-design",
    title: "Database Design",
  },
  {
    id: "186",
    slug: "ui-ux-design",
    title: "UI/UX Design",
  },
  {
    id: "187",
    slug: "software-testing",
    title: "Software Testing",
  },
  {
    id: "189",
    slug: "internet-of-things-iot",
    title: "Internet of Things (IoT)",
  },
  {
    id: "190",
    slug: "cloud-architecture",
    title: "Cloud Architecture",
  },
  {
    id: "192",
    slug: "machine-vision",
    title: "Machine Vision",
  },
  {
    id: "193",
    slug: "software-engineering",
    title: "Software Engineering",
  },
  {
    id: "196",
    slug: "computer-vision",
    title: "Computer Vision",
  },
  {
    id: "197",
    slug: "human-computer-interaction",
    title: "Human-Computer Interaction",
  },
  {
    id: "198",
    slug: "cloud-migration",
    title: "Cloud Migration",
  },
  {
    id: "200",
    slug: "iot-security",
    title: "IoT Security",
  },
  {
    id: "2010",
    slug: "other",
    title: "Other",
  },
];

export const queryData = [
  {
    queryId: "101",
    user: {
      userId: "1",
      profileUrl: "https://example.com/user1.jpg",
      userName: "John Doe",
      userEmail: "john.doe@example.com",
    },
    title: "How to use React hooks?",
    description:
      "I'm trying to understand how to use React hooks in my project.",
    tags: ["React", "hooks"],
    category: "Frontend Development",
    date: "2023-09-16T10:30:00Z",
    comments: [
      {
        commentId: "2011111",
        user: {
          userId: "2",
          profileUrl: "https://example.com/user2.jpg",
          userName: "Jane Smith",
          userEmail: "jane.smith@example.com",
        },
        comment:
          "You can use the useState and useEffect hooks to manage state and side effects in functional components.",
        replies: [
          {
            replyId: "301",
            user: {
              userId: "1",
              profileUrl: "https://example.com/user1.jpg",
              userName: "Harish",
              userEmail: "john.doe@example.com",
            },
            comment: "Thanks! That helps a lot.",
            replies: [
              {
                replyId: "302",
                user: {
                  userId: "2",
                  profileUrl: "https://example.com/user2.jpg",
                  userName: "Jane Smith",
                  userEmail: "jane.smith@example.com",
                },
                comment: "Got it! Thanks for the explanation.",
              },
              {
                replyId: "3011",
                user: {
                  userId: "1",
                  profileUrl: "https://example.com/user1.jpg",
                  userName: "John Doe",
                  userEmail: "john.doe@example.com",
                },
                comment: "Got it! Thanks for the explanation",
              },
            ],
          },
          {
            replyId: "3011",
            user: {
              userId: "1",
              profileUrl: "https://example.com/user1.jpg",
              userName: "John Doe",
              userEmail: "john.doe@example.com",
            },
            comment: "Got it! Thanks for the explanation",
          },
          {
            replyId: "3012",
            user: {
              userId: "1",
              profileUrl: "https://example.com/user1.jpg",
              userName: "Asif",
              userEmail: "john.doe@example.com",
            },
            comment: "Thanks! That helps a lot.",
          },
        ],
      },
      {
        commentId: "2019083",
        user: {
          userId: "1",
          profileUrl: "https://example.com/user1.jpg",
          userName: "John Doe",
          userEmail: "john.doe@example.com",
        },
        comment:
          "You can use the JOIN clause to combine rows from two or more tables based on a related column between them.",
        replies: [
          {
            replyId: "302",
            user: {
              userId: "2",
              profileUrl: "https://example.com/user2.jpg",
              userName: "Jane Smith",
              userEmail: "jane.smith@example.com",
            },
            comment: "Got it! Thanks for the explanation.",
            replies: [
              {
                replyId: "302",
                user: {
                  userId: "2",
                  profileUrl: "https://example.com/user2.jpg",
                  userName: "Jane Smith",
                  userEmail: "jane.smith@example.com",
                },
                comment: "Got it! Thanks for the explanation.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    queryId: "102",
    user: {
      userId: "2",
      profileUrl: "https://example.com/user2.jpg",
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
    },
    title: "How to perform a JOIN in SQL?",
    description: "I need to retrieve data from two tables using a SQL JOIN.",
    tags: ["SQL", "database"],
    category: "Database",
    date: "2023-09-16T11:00:00Z",
    comments: [
      {
        commentId: "2033",
        user: {
          userId: "1",
          profileUrl: "https://example.com/user1.jpg",
          userName: "John Doe",
          userEmail: "john.doe@example.com",
        },
        comment:
          "You can use the JOIN clause to combine rows from two or more tables based on a related column between them.",
        replies: [
          {
            replyId: "302",
            user: {
              userId: "2",
              profileUrl: "https://example.com/user2.jpg",
              userName: "Jane Smith",
              userEmail: "jane.smith@example.com",
            },
            comment: "Got it! Thanks for the explanation.",
          },
        ],
      },
    ],
  },
  {
    queryId: "1111",
    user: {
      userId: "1",
      profileUrl: "https://example.com/user1.jpg",
      userName: "John Doe",
      userEmail: "john.doe@example.com",
    },
    title: "How to use React hooks?",
    description:
      "I'm trying to understand how to use React hooks in my project.",
    tags: ["React", "hooks"],
    category: "Frontend Development",
    date: "2023-09-16T10:30:00Z",
    comments: [
      {
        commentId: "1111",
        user: {
          userId: "2",
          profileUrl: "https://example.com/user2.jpg",
          userName: "Jane Smith",
          userEmail: "jane.smith@example.com",
        },
        comment:
          "You can use the useState and useEffect hooks to manage state and side effects in functional components.",
        replies: [
          {
            replyId: "301",
            user: {
              userId: "1",
              profileUrl: "https://example.com/user1.jpg",
              userName: "John Doe",
              userEmail: "john.doe@example.com",
            },
            comment: "Thanks! That helps a lot.",
          },
        ],
      },
    ],
  },
  {
    queryId: "105",
    user: {
      userId: "2",
      profileUrl: "https://example.com/user2.jpg",
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
    },
    title: "How to perform a JOIN in SQL?",
    description: "I need to retrieve data from two tables using a SQL JOIN.",
    tags: ["SQL", "database"],
    category: "Database",
    date: "2023-09-16T11:00:00Z",
    comments: [
      {
        commentId: "21203",
        user: {
          userId: "1",
          profileUrl: "https://example.com/user1.jpg",
          userName: "John Doe",
          userEmail: "john.doe@example.com",
        },
        comment:
          "You can use the JOIN clause to combine rows from two or more tables based on a related column between them.",
        replies: [
          {
            replyId: "302",
            user: {
              userId: "2",
              profileUrl: "https://example.com/user2.jpg",
              userName: "Jane Smith",
              userEmail: "jane.smith@example.com",
            },
            comment: "Got it! Thanks for the explanation.",
            replies: [
              {
                replyId: "302",
                user: {
                  userId: "2",
                  profileUrl: "https://example.com/user2.jpg",
                  userName: "Jane Smith",
                  userEmail: "jane.smith@example.com",
                },
                comment: "Got it! Thanks for the explanation.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    queryId: "106",
    user: {
      userId: "3",
      profileUrl: "https://example.com/user3.jpg",
      userName: "Sarah Johnson",
      userEmail: "sarah.johnson@example.com",
    },
    title: "How to deploy a React app on Netlify?",
    description:
      "I want to deploy my React app on Netlify. Can someone provide step-by-step instructions?",
    tags: ["React", "deployment", "Netlify"],
    category: "Frontend Development",
    date: "2023-09-16T12:00:00Z",
    comments: [
      {
        commentId: "204",
        user: {
          userId: "4",
          profileUrl: "https://example.com/user4.jpg",
          userName: "Michael Johnson",
          userEmail: "michael.johnson@example.com",
        },
        comment:
          "You can follow the official Netlify documentation for deploying React apps. It provides detailed instructions.",
        replies: [
          {
            replyId: "303",
            user: {
              userId: "3",
              profileUrl: "https://example.com/user3.jpg",
              userName: "Sarah Johnson",
              userEmail: "sarah.johnson@example.com",
            },
            comment: "Thank you! I'll check it out.",
          },
        ],
      },
    ],
  },
  {
    queryId: "107",
    user: {
      userId: "1",
      profileUrl: "https://example.com/user1.jpg",
      userName: "John Doe",
      userEmail: "john.doe@example.com",
    },
    title: "How to use React hooks?",
    description:
      "I'm trying to understand how to use React hooks in my project.",
    tags: ["React", "hooks"],
    category: "Frontend Development",
    date: "2023-09-16T10:30:00Z",
    comments: [
      {
        commentId: "2011",
        user: {
          userId: "2",
          profileUrl: "https://example.com/user2.jpg",
          userName: "Jane Smith",
          userEmail: "jane.smith@example.com",
        },
        comment:
          "You can use the useState and useEffect hooks to manage state and side effects in functional components.",
        replies: [
          {
            replyId: "301",
            user: {
              userId: "1",
              profileUrl: "https://example.com/user1.jpg",
              userName: "John Doe",
              userEmail: "john.doe@example.com",
            },
            comment: "Thanks! That helps a lot.",
          },
        ],
      },
    ],
  },
  {
    queryId: "108",
    user: {
      userId: "2",
      profileUrl: "https://example.com/user2.jpg",
      userName: "Jane Smith",
      userEmail: "jane.smith@example.com",
    },
    title: "How to perform a JOIN in SQL?",
    description: "I need to retrieve data from two tables using a SQL JOIN.",
    tags: ["SQL", "database"],
    category: "Database",
    date: "2023-09-16T11:00:00Z",
    comments: [
      {
        commentId: "211203",
        user: {
          userId: "1",
          profileUrl: "https://example.com/user1.jpg",
          userName: "John Doe",
          userEmail: "john.doe@example.com",
        },
        comment:
          "You can use the JOIN clause to combine rows from two or more tables based on a related column between them.",
        replies: [
          {
            replyId: "302",
            user: {
              userId: "2",
              profileUrl: "https://example.com/user2.jpg",
              userName: "Jane Smith",
              userEmail: "jane.smith@example.com",
            },
            comment: "Got it! Thanks for the explanation.",
          },
        ],
      },
    ],
  },
  {
    queryId: "103",
    user: {
      userId: "3",
      profileUrl: "https://example.com/user3.jpg",
      userName: "Sarah Johnson",
      userEmail: "sarah.johnson@example.com",
    },
    title: "How to deploy a React app on Netlify?",
    description:
      "I want to deploy my React app on Netlify. Can someone provide step-by-step instructions?",
    tags: ["React", "deployment", "Netlify"],
    category: "Frontend Development",
    date: "2023-09-16T12:00:00Z",
    comments: [
      {
        commentId: "204",
        user: {
          userId: "4",
          profileUrl: "https://example.com/user4.jpg",
          userName: "Michael Johnson",
          userEmail: "michael.johnson@example.com",
        },
        comment:
          "You can follow the official Netlify documentation for deploying React apps. It provides detailed instructions.",
        replies: [
          {
            replyId: "303",
            user: {
              userId: "3",
              profileUrl: "https://example.com/user3.jpg",
              userName: "Sarah Johnson",
              userEmail: "sarah.johnson@example.com",
            },
            comment: "Thank you! I'll check it out.",
          },
        ],
      },
    ],
  },
  {
    queryId: "114",
    user: {
      userId: "4",
      profileUrl: "https://example.com/user4.jpg",
      userName: "Michael Johnson",
      userEmail: "michael.johnson@example.com",
    },
    title: "How to implement authentication in a React app?",
    description:
      "I need to add user authentication to my React app. What are the best practices?",
    tags: ["React", "authentication"],
    category: "Frontend Development",
    date: "2023-09-16T13:00:00Z",
    comments: [
      {
        commentId: "205",
        user: {
          userId: "5",
          profileUrl: "https://example.com/user5.jpg",
          userName: "Emily Davis",
          userEmail: "emily.davis@example.com",
        },
        comment:
          "You can use libraries like Firebase Authentication or implement your own server-side authentication with JWT tokens.",
        replies: [
          {
            replyId: "304",
            user: {
              userId: "4",
              profileUrl: "https://example.com/user4.jpg",
              userName: "Michael Johnson",
              userEmail: "michael.johnson@example.com",
            },
            comment: "Thank you for the suggestions!",
          },
        ],
      },
    ],
  },
  {
    queryId: "1105",
    user: {
      userId: "5",
      profileUrl: "https://example.com/user5.jpg",
      userName: "Emily Davis",
      userEmail: "emily.davis@example.com",
    },
    title: "How to optimize images for the web?",
    description:
      "I have a large number of images on my website. What's the best way to optimize them for performance?",
    tags: ["web development", "performance", "images"],
    category: "Frontend Development",
    date: "2023-09-16T14:00:00Z",
    comments: [
      {
        commentId: "206",
        user: {
          userId: "6",
          profileUrl: "https://example.com/user6.jpg",
          userName: "Daniel Kim",
          userEmail: "daniel.kim@example.com",
        },
        comment:
          "You can use tools like ImageMagick or online services like TinyPNG to compress and optimize your images.",
        replies: [
          {
            replyId: "305",
            user: {
              userId: "5",
              profileUrl: "https://example.com/user5.jpg",
              userName: "Emily Davis",
              userEmail: "emily.davis@example.com",
            },
            comment: "Thanks! I'll give those a try.",
          },
        ],
      },
    ],
  },
  {
    queryId: "1106",
    user: {
      userId: "6",
      profileUrl: "https://example.com/user6.jpg",
      userName: "Daniel Kim",
      userEmail: "daniel.kim@example.com",
    },
    title: "Best practices for SEO in 2023?",
    description:
      "What are the current best practices for optimizing a website for search engines in 2023?",
    tags: ["SEO", "web development"],
    category: "Digital Marketing",
    date: "2023-09-16T15:00:00Z",
    comments: [
      {
        commentId: "207",
        user: {
          userId: "7",
          profileUrl: "https://example.com/user7.jpg",
          userName: "Olivia Martinez",
          userEmail: "olivia.martinez@example.com",
        },
        comment:
          "Some key SEO practices include optimizing for mobile, creating high-quality content, and building high-quality backlinks.",
        replies: [
          {
            replyId: "306",
            user: {
              userId: "6",
              profileUrl: "https://example.com/user6.jpg",
              userName: "Daniel Kim",
              userEmail: "daniel.kim@example.com",
            },
            comment: "Thank you for the advice!",
          },
        ],
      },
    ],
  },
  {
    queryId: "1107",
    user: {
      userId: "7",
      profileUrl: "https://example.com/user7.jpg",
      userName: "Olivia Martinez",
      userEmail: "olivia.martinez@example.com",
    },
    title: "How to create a successful email marketing campaign?",
    description:
      "I'm looking for tips on creating and managing an effective email marketing campaign.",
    tags: ["email marketing", "digital marketing"],
    category: "Digital Marketing",
    date: "2023-09-16T16:00:00Z",
    comments: [
      {
        commentId: "208",
        user: {
          userId: "8",
          profileUrl: "https://example.com/user8.jpg",
          userName: "Ethan Williams",
          userEmail: "ethan.williams@example.com",
        },
        comment:
          "Segment your audience, create compelling content, and analyze your metrics to refine your campaigns for better results.",
        replies: [
          {
            replyId: "307",
            user: {
              userId: "7",
              profileUrl: "https://example.com/user7.jpg",
              userName: "Olivia Martinez",
              userEmail: "olivia.martinez@example.com",
            },
            comment: "Thank you! I'll keep that in mind.",
          },
        ],
      },
    ],
  },
  {
    queryId: "2108",
    user: {
      userId: "8",
      profileUrl: "https://example.com/user8.jpg",
      userName: "Ethan Williams",
      userEmail: "ethan.williams@example.com",
    },
    title: "What are the latest trends in UX/UI design?",
    description:
      "I'm curious about the current trends in user experience (UX) and user interface (UI) design.",
    tags: ["UX/UI design", "web development"],
    category: "Design",
    date: "2023-09-16T17:00:00Z",
    comments: [
      {
        commentId: "209",
        user: {
          userId: "9",
          profileUrl: "https://example.com/user9.jpg",
          userName: "Ava Johnson",
          userEmail: "ava.johnson@example.com",
        },
        comment:
          "Some current trends include microinteractions, dark mode, and 3D elements in design.",
        replies: [
          {
            replyId: "308",
            user: {
              userId: "8",
              profileUrl: "https://example.com/user8.jpg",
              userName: "Ethan Williams",
              userEmail: "ethan.williams@example.com",
            },
            comment: "Thank you for sharing! I'll look into those.",
          },
        ],
      },
    ],
  },
  {
    queryId: "1209",
    user: {
      userId: "9",
      profileUrl: "https://example.com/user9.jpg",
      userName: "Ava Johnson",
      userEmail: "ava.johnson@example.com",
    },
    title: "How to set up a CI/CD pipeline with Jenkins?",
    description:
      "I need guidance on configuring a continuous integration/continuous deployment pipeline with Jenkins.",
    tags: ["CI/CD", "DevOps"],
    category: "DevOps",
    date: "2023-09-16T18:00:00Z",
    comments: [
      {
        commentId: "210",
        user: {
          userId: "10",
          profileUrl: "https://example.com/user10.jpg",
          userName: "Liam Davis",
          userEmail: "liam.davis@example.com",
        },
        comment:
          "You can start by installing and configuring Jenkins on your server, then create and automate your build and deployment processes.",
        replies: [
          {
            replyId: "309",
            user: {
              userId: "9",
              profileUrl: "https://example.com/user9.jpg",
              userName: "Ava Johnson",
              userEmail: "ava.johnson@example.com",
            },
            comment: "Thank you! I'll follow those steps.",
          },
        ],
      },
    ],
  },
  {
    queryId: "1210",
    user: {
      userId: "10",
      profileUrl: "https://example.com/user10.jpg",
      userName: "Liam Davis",
      userEmail: "liam.davis@example.com",
    },
    title: "How to troubleshoot common networking issues?",
    description:
      "I'm experiencing some network problems and need advice on troubleshooting them.",
    tags: ["networking", "IT"],
    category: "Information Technology",
    date: "2023-09-16T19:00:00Z",
    comments: [
      {
        commentId: "211",
        user: {
          userId: "1",
          profileUrl: "https://example.com/user1.jpg",
          userName: "John Doe",
          userEmail: "john.doe@example.com",
        },
        comment:
          "You can start by checking your network cables, router settings, and running network diagnostic tools to identify and resolve the issues.",
        replies: [
          {
            replyId: "310",
            user: {
              userId: "10",
              profileUrl: "https://example.com/user10.jpg",
              userName: "Liam Davis",
              userEmail: "liam.davis@example.com",
            },
            comment: "Thank you! I'll try those steps.",
          },
        ],
      },
    ],
  },
];
