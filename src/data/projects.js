// --- FEATURED PROJECTS ---
export const featuredProjects = [
  {
    id: 'school-portal',
    title: 'School Portal',
    image: '/assets/images/school-portal.png',
    device: 'macbook',
    largeInCard: true,
    tags: ['Java', 'Spring Boot', 'HTML/CSS', 'JavaScript', 'MySQL'],
    description:
      'A comprehensive management system for student data and academic results.',
    problem:
      'Local schools were using manual, paper-based systems for tracking student grades and attendance, leading to errors, inefficiency, and a lack of real-time access for parents.',
    solution: [
      {
        type: 'text',
        value:
          'I designed and built a secure, multi-tenant web application using Java (Spring Boot) for the backend REST API and a dynamic HTML/CSS/JS frontend. It features role-based access control (RBAC) for administrators, teachers, and students/parents.',
      },
      {
        type: 'text',
        value:
          'Teachers can manage courses, enter grades, and track attendance. Students and parents can log in to view results, download report cards, and communicate with staff. The system is fully centralized with a MySQL database.',
      },
    ],
    impact:
      'Adopted by two local schools, resulting in a ~70% reduction in administrative errors. It provided parents with real-time access to their children\'s academic performance, and teachers reported saving an average of 5 hours per week on grading and reporting.',
    links: {
      repo: 'https://github.com/nigelberewere/School-Portal',
      demo: 'https://jeopardyportal.web.app/',
    },
  },
  {
    id: 'intern-connector',
    title: 'Interns & Companies Connector',
    image: '/assets/images/internconnect.png',
    device: 'macbook',
    tags: ['Flutter', 'Dart', 'Firebase', 'Mobile'],
    description:
      'A mobile app matching student interns to relevant employer opportunities.',
    problem:
      'Students struggled to find relevant internships, and companies had difficulty sourcing qualified student talent. The process was manual, relying on career fairs and scattered job postings.',
    solution: [
      {
        type: 'text',
        value:
          'I developed a cross-platform mobile application using Flutter (Dart) for both iOS and Android. The app provides two distinct user-facing portals: one for students and one for company recruiters.',
      },
      {
        type: 'text',
        value:
          'Students can build a profile, upload their resume, and swipe through/apply for internship listings. Companies can post listings, filter student profiles by major/skills, and manage applicants. Firebase (Firestore and Firebase Auth) was used for the entire backend, providing real-time data synchronization and authentication.',
      },
    ],
    impact:
      'Successfully matched over 50 students with internships in its first 3 months. The app streamlined the application process, with companies reporting a 40% faster time-to-hire for intern positions compared to previous methods.',
    links: {
      repo: 'https://github.com/nigelberewere/Intern-Connect',
      demo: 'https://planning-with-ai-d0c11.web.app/',
    },
  },
  {
    id: 'numbers-finance-app',
    title: 'Numbers (Personal Finance App)',
    image: '/assets/images/numbers.jpg',
    device: 'ipad',
    tags: ['Flutter', 'Dart', 'Firebase', 'Data Visualization'],
    description:
      'A personal finance and budget-tracking mobile application.',
    problem:
      'Existing budget apps were often too complex or lacked the specific features needed for simple, on-the-go expense tracking and visualization.',
    solution: [
      {
        type: 'text',
        value:
          'Built a clean, minimalist mobile app with Flutter and Dart, focusing on a fast and intuitive user experience. Users can quickly log expenses and income, categorize transactions, and view their spending habits on interactive charts.',
      },
      {
        type: 'text',
        value:
          'The app uses Firebase for secure user data storage and authentication, allowing users to access their financial data from any device.',
      },
    ],
    impact:
      'As a personal project, it helped me master Flutter state management and Firebase data structuring. It gained a small user base with positive feedback on its simplicity and design.',
    links: {
      repo: 'https://github.com/nigelberewere/Numbers-App',
    },
  },
  {
    id: 'project-staff-manager',
    title: 'Project & Staff Manager',
    image: '/assets/images/customcraft.png',
    device: 'macbook',
    tags: ['Java', 'JavaScript', 'HTML/CSS', 'Firebase'],
    description:
      'An internal operations tool for managing company projects and staff assignments.',
    problem:
      'A local company was using spreadsheets to manage all project assignments, staff schedules, and project timelines, leading to version control issues and difficulty in tracking resource allocation.',
    solution: [
      {
        type: 'text',
        value:
          'I built a web-based dashboard that provided a central source of truth. Managers can create new projects, assign staff based on availability, and track project status. Staff members can view their assignments and log their time.',
      },
      {
        type: 'text',
        value:
          'The system was built with a Java backend for core logic and used Firebase (Realtime Database) for its fast, real-time updates, allowing multiple managers to collaborate without data conflicts. The frontend was built with vanilla JavaScript, HTML, and CSS for lightness and speed.',
      },
    ],
    impact:
      'Eliminated the "spreadsheet chaos" and gave the management team a clear, real-time overview of resource allocation, preventing over-booking and improving project delivery timelines.',
    links: {
      repo: 'https://github.com/nigelberewere/CustomCraftApp',
      demo: 'https://customcraftapp.web.app/',
    },
  },
];

// --- OTHER PROJECTS ---
export const otherProjects = [
  {
    id: 'other-1',
    title: 'Simple E-commerce API',
    description:
      'A RESTful API for a basic e-commerce site built with Java and Spring Boot, featuring product, cart, and order endpoints.',
    tags: ['Java', 'Spring Boot', 'API', 'MySQL'],
    links: {
      repo: 'https://github.com/nigelberewere',
    },
  },
  {
    id: 'other-2',
    title: 'Portfolio Website V1',
    description:
      'My first portfolio, built with plain HTML, CSS, and JavaScript. A great learning experience in design and responsiveness.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    links: {
      repo: 'https://github.com/nigelberewere/portfolio',
      demo: 'https://github.com/nigelberewere/portfolio',
    },
  },
  {
    id: 'puzzle-arcade',
    title: 'Puzzle Arcade (Flutter)',
    description:
      'A mobile arcade of casual puzzle games built with Flutter. Includes Sudoku, Nonogram, Futoshi and several bite-sized logic games with local leaderboards and user profiles.',
    tags: ['Flutter', 'Dart', 'GameDev', 'Firebase'],
    links: {
      repo: 'https://github.com/nigelberewere/puzzle-arcade',
      demo: 'https://github.com/nigelberewere/puzzle-arcade',
    },
  },
];