const Users = [
  {
    personal_details: {
      name: "John Smith",
      username: "jsmith",
      email: "jsmith@example.com",
      phone: "+1-555-123-4567",
      city: "New York",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/61d2e592d137c80012e89477/avatar/61d2e592d137c80012e894771662286028383.jpeg",
      expertise_in: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      about:
        "I am a full-stack developer with experience in building web applications using React and Node.js.",
    },

    academics: {
      university_name: "New York University",
      location: "New York",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 2,
      current_year: 4,
      enrolment_number: "NYU1234",
      university_email: "jsmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/jsmith",
      linkedin: "https://www.linkedin.com/in/jsmith",
      leetcode: "https://leetcode.com/jsmith",
      portfolio: "https://jsmith.github.io",
      hackerrank: "https://www.hackerrank.com/jsmith",
      codechef: "https://www.codechef.com/users/jsmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jsmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-01-01",
      expire_date: "2024-01-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jsmith/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jsmith/ecommerce",
        tech_stack: ["React", "Node.js", "MongoDB"],
        project_date: "2022-05-01",
        description:
          "Built a full-stack e-commerce website using React, Node.js, and MongoDB.",
      },
      {
        title: "Weather App",
        source_code_link: "https://github.com/jsmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/jsmith/weather",
        tech_stack: ["React", "Node.js", "OpenWeatherMap API"],
        project_date: "2022-08-01",
        description:
          "Built a weather application using React and Node.js that displays weather data from OpenWeatherMap API.",
      },
    ],
  },
  {
    personal_details: {
      name: "Mary Johnson",
      username: "mjohnson",
      email: "mjohnson@example.com",
      phone: "+1-555-987-6543",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/61d2e592d137c80012e89477/avatar/61d2e592d137c80012e894771662286028383.jpeg",
      expertise_in: "Data Science",
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
      about:
        "I am a data scientist with experience in Python and R programming languages.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley",
      enrol_in_branch_name: "Statistics",
      year_of_passing: 2018,
      current_semester: 0,
      current_year: 3,
      enrolment_number: "UCB5678",
      university_email: "mjohnson@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/mjohnson",
      linkedin: "https://www.linkedin.com/in/mjohnson",
      leetcode: "https://leetcode.com/mjohnson",
      portfolio: "https://mjohnson.github.io",
      hackerrank: "https://www.hackerrank.com/mjohnson",
      codechef: "https://www.codechef.com/users/mjohnson",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/mjohnson/articles",
    },
    certification: {
      title: "Machine Learning Certification",
      certificate_url: "https://example.com/certificates/machine_learning",
      issue_date: "2021-01-01",
      expire_date: "2023-01-01",
      credential_verification_link:
        "https://example.com/verify/machine_learning",
    },
    projects: [
      {
        title: "Churn Prediction Model",
        source_code_link: "https://github.com/mjohnson/churn",
        deployment_link: "https://churn.example.com",
        demo_link: "https://youtube.com/mjohnson/churn",
        tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        project_date: "2021-05-01",
        description:
          "Built a churn prediction model using Scikit-learn and Pandas to predict customer churn for a telecom company.",
      },
      {
        title: "Data Visualization Dashboard",
        source_code_link: "https://github.com/mjohnson/dashboard",
        deployment_link: "https://dashboard.example.com",
        demo_link: "https://youtube.com/mjohnson/dashboard",
        tech_stack: ["Python", "Plotly", "Dash"],
        project_date: "2021-08-01",
        description:
          "Built a data visualization dashboard using Plotly and Dash to display key metrics for a retail company.",
      },
    ],
  },
  {
    personal_details: {
      name: "Emma Smith",
      username: "esmith",
      email: "esmith@example.com",
      phone: "+1-555-123-4567",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/b4bca6a36ca5f82b0b995df19c6e8b5a",
      expertise_in: "Front-end Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      about:
        "I am a front-end developer with experience in HTML, CSS, JavaScript, and React.",
      city: "New York City",
    },
    academics: {
      university_name: "New York University",
      location: "New York City",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2019,
      current_semester: 0,
      current_year: 2,
      enrolment_number: "NYU1234",
      university_email: "esmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/esmith",
      linkedin: "https://www.linkedin.com/in/esmith",
      leetcode: "https://leetcode.com/esmith",
      portfolio: "https://esmith.github.io",
      hackerrank: "https://www.hackerrank.com/esmith",
      codechef: "https://www.codechef.com/users/esmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/esmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-02-01",
      expire_date: "2024-02-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "React Todo List",
        source_code_link: "https://github.com/esmith/todo",
        deployment_link: "https://todo.example.com",
        demo_link: "https://youtube.com/esmith/todo",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-03-01",
        description:
          "Built a todo list application using React and CSS to keep track of tasks.",
      },
      {
        title: "React Weather App",
        source_code_link: "https://github.com/esmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/esmith/weather",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-04-01",
        description:
          "Built a weather application using React and CSS to display current weather conditions.",
      },
    ],
  },
  {
    personal_details: {
      name: "John Davis",
      username: "jdavis",
      email: "jdavis@example.com",
      phone: "+1-555-234-5678",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/3a8fd0746a912dfa1e6bdc509348aefa",
      expertise_in: "Full-stack Development",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      about:
        "I am a full-stack developer with experience in JavaScript, React, Node.js, Express, and MongoDB.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley, California",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 0,
      current_year: 1,
      enrolment_number: "UCB1234",
      university_email: "jdavis@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/jdavis",
      linkedin: "https://www.linkedin.com/in/jdavis",
      leetcode: "https://leetcode.com/jdavis",
      portfolio: "https://jdavis.github.io",
      hackerrank: "https://www.hackerrank.com/jdavis",
      codechef: "https://www.codechef.com/users/jdavis",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jdavis/articles",
    },
    certification: {
      title: "MongoDB Certification",
      certificate_url: "https://example.com/certificates/mongodb",
      issue_date: "2022-03-01",
      expire_date: "2024-03-01",
      credential_verification_link: "https://example.com/verify/mongodb",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jdavis/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jdavis/ecommerce",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-03-01",
        description:
          "Built an e-commerce website using React, Node.js, Express, MongoDB, and CSS to manage and display products.",
      },
      {
        title: "Social Media App",
        source_code_link: "https://github.com/jdavis/social",
        deployment_link: "https://social.example.com",
        demo_link: "https://youtube.com/jdavis/social",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-04-01",
        description:
          "Built a social media application using React, Node.js, Express, MongoDB, and CSS to create and manage user accounts and posts.",
      },
    ],
  },
  {
    personal_details: {
      name: "John Smith",
      username: "jsmith",
      email: "jsmith@example.com",
      phone: "+1-555-123-4567",
      city: "New York",
      profile_url: "https://avatars.githubusercontent.com/u/74168885?v=4",
      expertise_in: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      about:
        "I am a full-stack developer with experience in building web applications using React and Node.js.",
    },
    academics: {
      university_name: "New York University",
      location: "New York",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 2,
      current_year: 4,
      enrolment_number: "NYU1234",
      university_email: "jsmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/jsmith",
      linkedin: "https://www.linkedin.com/in/jsmith",
      leetcode: "https://leetcode.com/jsmith",
      portfolio: "https://jsmith.github.io",
      hackerrank: "https://www.hackerrank.com/jsmith",
      codechef: "https://www.codechef.com/users/jsmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jsmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-01-01",
      expire_date: "2024-01-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jsmith/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jsmith/ecommerce",
        tech_stack: ["React", "Node.js", "MongoDB"],
        project_date: "2022-05-01",
        description:
          "Built a full-stack e-commerce website using React, Node.js, and MongoDB.",
      },
      {
        title: "Weather App",
        source_code_link: "https://github.com/jsmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/jsmith/weather",
        tech_stack: ["React", "Node.js", "OpenWeatherMap API"],
        project_date: "2022-08-01",
        description:
          "Built a weather application using React and Node.js that displays weather data from OpenWeatherMap API.",
      },
    ],
  },
  {
    personal_details: {
      name: "Mary Johnson",
      username: "mjohnson",
      email: "mjohnson@example.com",
      phone: "+1-555-987-6543",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/61d2e592d137c80012e89477/avatar/61d2e592d137c80012e894771662286028383.jpeg",
      expertise_in: "Data Science",
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
      about:
        "I am a data scientist with experience in Python and R programming languages.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley",
      enrol_in_branch_name: "Statistics",
      year_of_passing: 2018,
      current_semester: 0,
      current_year: 3,
      enrolment_number: "UCB5678",
      university_email: "mjohnson@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/mjohnson",
      linkedin: "https://www.linkedin.com/in/mjohnson",
      leetcode: "https://leetcode.com/mjohnson",
      portfolio: "https://mjohnson.github.io",
      hackerrank: "https://www.hackerrank.com/mjohnson",
      codechef: "https://www.codechef.com/users/mjohnson",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/mjohnson/articles",
    },
    certification: {
      title: "Machine Learning Certification",
      certificate_url: "https://example.com/certificates/machine_learning",
      issue_date: "2021-01-01",
      expire_date: "2023-01-01",
      credential_verification_link:
        "https://example.com/verify/machine_learning",
    },
    projects: [
      {
        title: "Churn Prediction Model",
        source_code_link: "https://github.com/mjohnson/churn",
        deployment_link: "https://churn.example.com",
        demo_link: "https://youtube.com/mjohnson/churn",
        tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        project_date: "2021-05-01",
        description:
          "Built a churn prediction model using Scikit-learn and Pandas to predict customer churn for a telecom company.",
      },
      {
        title: "Data Visualization Dashboard",
        source_code_link: "https://github.com/mjohnson/dashboard",
        deployment_link: "https://dashboard.example.com",
        demo_link: "https://youtube.com/mjohnson/dashboard",
        tech_stack: ["Python", "Plotly", "Dash"],
        project_date: "2021-08-01",
        description:
          "Built a data visualization dashboard using Plotly and Dash to display key metrics for a retail company.",
      },
    ],
  },
  {
    personal_details: {
      name: "Emma Smith",
      username: "esmith",
      email: "esmith@example.com",
      phone: "+1-555-123-4567",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/b4bca6a36ca5f82b0b995df19c6e8b5a",
      expertise_in: "Front-end Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      about:
        "I am a front-end developer with experience in HTML, CSS, JavaScript, and React.",
      city: "New York City",
    },

    academics: {
      university_name: "New York University",
      location: "New York City",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2019,
      current_semester: 0,
      current_year: 2,
      enrolment_number: "NYU1234",
      university_email: "esmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/esmith",
      linkedin: "https://www.linkedin.com/in/esmith",
      leetcode: "https://leetcode.com/esmith",
      portfolio: "https://esmith.github.io",
      hackerrank: "https://www.hackerrank.com/esmith",
      codechef: "https://www.codechef.com/users/esmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/esmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-02-01",
      expire_date: "2024-02-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "React Todo List",
        source_code_link: "https://github.com/esmith/todo",
        deployment_link: "https://todo.example.com",
        demo_link: "https://youtube.com/esmith/todo",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-03-01",
        description:
          "Built a todo list application using React and CSS to keep track of tasks.",
      },
      {
        title: "React Weather App",
        source_code_link: "https://github.com/esmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/esmith/weather",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-04-01",
        description:
          "Built a weather application using React and CSS to display current weather conditions.",
      },
    ],
  },
  {
    personal_details: {
      name: "John Davis",
      username: "jdavis",
      email: "jdavis@example.com",
      phone: "+1-555-234-5678",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/3a8fd0746a912dfa1e6bdc509348aefa",
      expertise_in: "Full-stack Development",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      about:
        "I am a full-stack developer with experience in JavaScript, React, Node.js, Express, and MongoDB.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley, California",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 0,
      current_year: 1,
      enrolment_number: "UCB1234",
      university_email: "jdavis@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/jdavis",
      linkedin: "https://www.linkedin.com/in/jdavis",
      leetcode: "https://leetcode.com/jdavis",
      portfolio: "https://jdavis.github.io",
      hackerrank: "https://www.hackerrank.com/jdavis",
      codechef: "https://www.codechef.com/users/jdavis",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jdavis/articles",
    },
    certification: {
      title: "MongoDB Certification",
      certificate_url: "https://example.com/certificates/mongodb",
      issue_date: "2022-03-01",
      expire_date: "2024-03-01",
      credential_verification_link: "https://example.com/verify/mongodb",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jdavis/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jdavis/ecommerce",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-03-01",
        description:
          "Built an e-commerce website using React, Node.js, Express, MongoDB, and CSS to manage and display products.",
      },
      {
        title: "Social Media App",
        source_code_link: "https://github.com/jdavis/social",
        deployment_link: "https://social.example.com",
        demo_link: "https://youtube.com/jdavis/social",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-04-01",
        description:
          "Built a social media application using React, Node.js, Express, MongoDB, and CSS to create and manage user accounts and posts.",
      },
    ],
  },
  {
    personal_details: {
      name: "John Smith",
      username: "jsmith",
      email: "jsmith@example.com",
      phone: "+1-555-123-4567",
      city: "New York",
      profile_url: "https://avatars.githubusercontent.com/u/74168885?v=4",
      expertise_in: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
      about:
        "I am a full-stack developer with experience in building web applications using React and Node.js.",
    },

    academics: {
      university_name: "New York University",
      location: "New York",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 2,
      current_year: 4,
      enrolment_number: "NYU1234",
      university_email: "jsmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/jsmith",
      linkedin: "https://www.linkedin.com/in/jsmith",
      leetcode: "https://leetcode.com/jsmith",
      portfolio: "https://jsmith.github.io",
      hackerrank: "https://www.hackerrank.com/jsmith",
      codechef: "https://www.codechef.com/users/jsmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jsmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-01-01",
      expire_date: "2024-01-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jsmith/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jsmith/ecommerce",
        tech_stack: ["React", "Node.js", "MongoDB"],
        project_date: "2022-05-01",
        description:
          "Built a full-stack e-commerce website using React, Node.js, and MongoDB.",
      },
      {
        title: "Weather App",
        source_code_link: "https://github.com/jsmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/jsmith/weather",
        tech_stack: ["React", "Node.js", "OpenWeatherMap API"],
        project_date: "2022-08-01",
        description:
          "Built a weather application using React and Node.js that displays weather data from OpenWeatherMap API.",
      },
    ],
  },
  {
    personal_details: {
      name: "Mary Johnson",
      username: "mjohnson",
      email: "mjohnson@example.com",
      phone: "+1-555-987-6543",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/61d2e592d137c80012e89477/avatar/61d2e592d137c80012e894771662286028383.jpeg",
      expertise_in: "Data Science",
      skills: ["Python", "R", "SQL", "Machine Learning", "Data Visualization"],
      about:
        "I am a data scientist with experience in Python and R programming languages.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley",
      enrol_in_branch_name: "Statistics",
      year_of_passing: 2018,
      current_semester: 0,
      current_year: 3,
      enrolment_number: "UCB5678",
      university_email: "mjohnson@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/mjohnson",
      linkedin: "https://www.linkedin.com/in/mjohnson",
      leetcode: "https://leetcode.com/mjohnson",
      portfolio: "https://mjohnson.github.io",
      hackerrank: "https://www.hackerrank.com/mjohnson",
      codechef: "https://www.codechef.com/users/mjohnson",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/mjohnson/articles",
    },
    certification: {
      title: "Machine Learning Certification",
      certificate_url: "https://example.com/certificates/machine_learning",
      issue_date: "2021-01-01",
      expire_date: "2023-01-01",
      credential_verification_link:
        "https://example.com/verify/machine_learning",
    },
    projects: [
      {
        title: "Churn Prediction Model",
        source_code_link: "https://github.com/mjohnson/churn",
        deployment_link: "https://churn.example.com",
        demo_link: "https://youtube.com/mjohnson/churn",
        tech_stack: ["Python", "Scikit-learn", "Pandas", "NumPy"],
        project_date: "2021-05-01",
        description:
          "Built a churn prediction model using Scikit-learn and Pandas to predict customer churn for a telecom company.",
      },
      {
        title: "Data Visualization Dashboard",
        source_code_link: "https://github.com/mjohnson/dashboard",
        deployment_link: "https://dashboard.example.com",
        demo_link: "https://youtube.com/mjohnson/dashboard",
        tech_stack: ["Python", "Plotly", "Dash"],
        project_date: "2021-08-01",
        description:
          "Built a data visualization dashboard using Plotly and Dash to display key metrics for a retail company.",
      },
    ],
  },
  {
    personal_details: {
      name: "Emma Smith",
      username: "esmith",
      email: "esmith@example.com",
      phone: "+1-555-123-4567",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/b4bca6a36ca5f82b0b995df19c6e8b5a",
      expertise_in: "Front-end Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      about:
        "I am a front-end developer with experience in HTML, CSS, JavaScript, and React.",
      city: "New York City",
    },

    academics: {
      university_name: "New York University",
      location: "New York City",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2019,
      current_semester: 0,
      current_year: 2,
      enrolment_number: "NYU1234",
      university_email: "esmith@nyu.edu",
    },
    social_links: {
      github: "https://github.com/esmith",
      linkedin: "https://www.linkedin.com/in/esmith",
      leetcode: "https://leetcode.com/esmith",
      portfolio: "https://esmith.github.io",
      hackerrank: "https://www.hackerrank.com/esmith",
      codechef: "https://www.codechef.com/users/esmith",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/esmith/articles",
    },
    certification: {
      title: "React Certification",
      certificate_url: "https://example.com/certificates/react",
      issue_date: "2022-02-01",
      expire_date: "2024-02-01",
      credential_verification_link: "https://example.com/verify/react",
    },
    projects: [
      {
        title: "React Todo List",
        source_code_link: "https://github.com/esmith/todo",
        deployment_link: "https://todo.example.com",
        demo_link: "https://youtube.com/esmith/todo",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-03-01",
        description:
          "Built a todo list application using React and CSS to keep track of tasks.",
      },
      {
        title: "React Weather App",
        source_code_link: "https://github.com/esmith/weather",
        deployment_link: "https://weather.example.com",
        demo_link: "https://youtube.com/esmith/weather",
        tech_stack: ["React", "JavaScript", "CSS"],
        project_date: "2022-04-01",
        description:
          "Built a weather application using React and CSS to display current weather conditions.",
      },
    ],
  },
  {
    personal_details: {
      name: "John Davis",
      username: "jdavis",
      email: "jdavis@example.com",
      phone: "+1-555-234-5678",
      profile_url:
        "https://findcoder.fra1.digitaloceanspaces.com/3a8fd0746a912dfa1e6bdc509348aefa",
      expertise_in: "Full-stack Development",
      skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
      about:
        "I am a full-stack developer with experience in JavaScript, React, Node.js, Express, and MongoDB.",
      city: "San Francisco",
    },

    academics: {
      university_name: "University of California, Berkeley",
      location: "Berkeley, California",
      enrol_in_branch_name: "Computer Science",
      year_of_passing: 2020,
      current_semester: 0,
      current_year: 1,
      enrolment_number: "UCB1234",
      university_email: "jdavis@berkeley.edu",
    },
    social_links: {
      github: "https://github.com/jdavis",
      linkedin: "https://www.linkedin.com/in/jdavis",
      leetcode: "https://leetcode.com/jdavis",
      portfolio: "https://jdavis.github.io",
      hackerrank: "https://www.hackerrank.com/jdavis",
      codechef: "https://www.codechef.com/users/jdavis",
      geeksforgeek: "https://auth.geeksforgeeks.org/user/jdavis/articles",
    },
    certification: {
      title: "MongoDB Certification",
      certificate_url: "https://example.com/certificates/mongodb",
      issue_date: "2022-03-01",
      expire_date: "2024-03-01",
      credential_verification_link: "https://example.com/verify/mongodb",
    },
    projects: [
      {
        title: "E-commerce Website",
        source_code_link: "https://github.com/jdavis/ecommerce",
        deployment_link: "https://ecommerce.example.com",
        demo_link: "https://youtube.com/jdavis/ecommerce",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-03-01",
        description:
          "Built an e-commerce website using React, Node.js, Express, MongoDB, and CSS to manage and display products.",
      },
      {
        title: "Social Media App",
        source_code_link: "https://github.com/jdavis/social",
        deployment_link: "https://social.example.com",
        demo_link: "https://youtube.com/jdavis/social",
        tech_stack: [
          "React",
          "Node.js",
          "Express",
          "MongoDB",
          "JavaScript",
          "CSS",
        ],
        project_date: "2022-04-01",
        description:
          "Built a social media application using React, Node.js, Express, MongoDB, and CSS to create and manage user accounts and posts.",
      },
    ],
  },
];

export default Users;
