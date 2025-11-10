// Consolidated search data from all pages
export interface SearchableItem {
  id: string;
  title: string;
  content: string;
  type: 'blog' | 'client' | 'project';
  date?: string;
  metadata?: any;
}

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "My Experience as a Contractor at HP, Inc.",
    content: `Yes I was indeed used to work at HP, Inc. but as a contractor, not a direct employee for HP. Being a contractor is a common and respected way companies bring in specialized talent for specific projects. 
    As a matter of fact, I had this position for a little over 2 years from October 17, 2022 until I was laid off due to budget cuts in early 2025. 

During my time at HP, I worked primarily on two major projects that had significant business impact.

**HP Docking Station Diagnostic Application**

My main project was developing a web application for HP's docking station division that revolutionized how customers get tech support. Think of it as a smart troubleshooting tool that customers could use themselves instead of calling HP's support line.

Here's how it worked: When someone had issues with their HP monitor or docking station, instead of waiting on hold for tech support, they could visit our application. The software would walk them through a series of diagnostic steps, automatically detect common problems, and provide step-by-step solutions they could follow on their own.

This was a game-changer for HP's business. Every time a customer solved their own problem using our app instead of calling support, HP saved money on support staff costs. When you multiply that by thousands of customers using the tool every month, the cost savings became substantial. The application empowered users to fix their own tech issues while significantly reducing HP's operating expenses.

**Factory Operations Project (Under NDA)**

I also worked on a critical factory-side project that I can't discuss in detail due to Non-Disclosure Agreements. What I can share is that this project had massive financial impact - potentially saving HP millions of dollars in operational costs.

This factory project is actually how I got the opportunity to collaborate with Foxconn, another Fortune 500 company. Through my contracting role at HP, I worked directly with Foxconn teams on manufacturing-related software solutions. This cross-company collaboration gave me invaluable experience working with multiple enterprise-level organizations simultaneously.

**The Enterprise Experience**

Working on these projects taught me how enterprise software development differs from smaller projects. When your application needs to handle thousands of users and directly impact a company's bottom line, every line of code matters. The testing, security, and reliability standards are at a completely different level.

These experiences - from building customer-facing diagnostic tools to factory optimization systems - give me a unique perspective that I bring to every project today, whether it's for a Fortune 500 company or a local business in Brownsville.`,
    publishDate: "2024-11-08",
    images: [
      '/blog/IMG_3727.JPG',
      '/blog/IMG_4709.JPG',
      '/blog/IMG_5429.JPG',
      '/blog/IMG_6405.JPG',
      '/blog/IMG_6472.JPG',
      '/blog/IMG_6551.JPG',
      '/blog/IMG_6814.JPG'
    ],
  },
  {
    id: 2,
    title: "Sellling for Raw Xocolatl",
    content: `Moving from Djano templates to NextJS components requires understanding how React works. Here's what I learned during my portfolio migration.

The biggest difference is the templating system. Django uses template inheritance with blocks, while React uses component composition. Instead of extending a base template, you create reusable components.

Django template syntax like {% for %} and {% if %} becomes JavaScript map() and conditional rendering in React. Variables are no longer surrounded by {{ }}, but are JavaScript expressions in JSX.

Styling also changes significantly. Instead of linking CSS files in your base template, you can use CSS modules, styled-components, or utility frameworks like Tailwind.

The migration was challenging but rewarding. NextJS offers much better performance and a more modern development experience.`,
    publishDate: "2021-04-15",
    images: [
      '/blog/selling-raw-xocolatl.jpg'
    ],
  },
];

// Clients data
const clients = [
  {
    id: 1,
    name: "Hewlett-Packard (HP, Inc)",
    role: "Software Developer",
    period: "2022 - 2025",
    logo: "/logos/hp.png",
    description: `Developed enterprise-scale web applications serving millions of users globally. Worked with cross-functional teams to deliver high-quality software solutions using modern web technologies. I was hired as a contractor through BoldTek, LLC.`,
    technologies: ["JavaScript", "Angular", ".NET"],
    achievements: [
      "Played an instrumental role in the frontend development of a factory-side project that improved efficiency and operating costs of the factory.",
      "Also played an instrumental role in the frontend of an HP consumer-facing product where we created a desktop application to troubleshoot and diagnose HP products such as their monitors and docking stations.",
      "Mentored junior developers and even designed the architecture for one of their small projects.",
    ],
    testimonial: "Rey's work has been amazing. Everyone has been saying the same thing. - Paban Sarma, President and CEO of BoldTek, LLC. My direct boss.",
    isHighlighted: true
  },
  {
    id: 2,
    name: "Foxconn Czech Partnership",
    role: "Software Engineer (HP Assignment)",
    period: "2023 - 2025",
    logo: "/logos/Foxconn.png",
    description: `International collaboration project as part of my HP employment, working indirectly with Foxconn's Czech-Slovakian office on supply chain test engineering initiatives. Served as a software engineer, coordinating with international project managers and industrial engineers while developing cutting-edge solutions.`,
    technologies: ["Apache Kafka", "Docker", "Redis", "Microservices", "Enterprise Architecture"],
    achievements: [
      "Successfully collaborated with international teams across multiple time zones",
      "Fine-tuned the UI/UX of a mobile-screen sized application for optimal factory use efficiency",
      "Implemented real-time data processing systems using Apache Kafka",
      "Designed containerized solutions with Docker for scalable deployment",
      "Integrated Redis caching systems for high-performance applications",
      "Facilitated technical communications between HP and Foxconn engineering teams",
      "Delivered enterprise-grade solutions for supply chain optimization"
    ],
    testimonial: "Your contributions over the past year have been invaluable, especially hard work on the factory side project UI changes, enhancements and bug fixes you implemented have significantly improved our user interface. Additionally, your detailed explanations have been instrumental in helping to understand and address the issues more effectively. - Satish Uphadiyay, Project Manager",
    isHighlighted: true,
    isNDA: true
  },
  {
    id: 4,
    name: "Intuit QuickBooks Online",
    role: "Technical Support Specialist",
    period: "2023 - Present",
    logo: "/logos/qb.png",
    description: `Providing expert technical support for QuickBooks Online, helping thousands of small business owners resolve complex accounting software issues. Working directly with enterprise-level systems and customer-facing solutions.`,
    technologies: ["QuickBooks Online", "Customer Support Tools", "Troubleshooting", "API Integration", "Database Management"],
    achievements: [
      "Troubleshooted and guided customers through complex QuickBooks Online issues",
      "Have received at least 5 10 out of 10 customer satisfaction ratings from customers year to date",
      "Maintained high customer satisfaction scores while handling technical escalations",
      "Provided technical expertise for QuickBooks Online platform issues",
      "Collaborated with engineering teams to identify and resolve system bugs"
    ],
    testimonial: null,
    isHighlighted: true
  }
];

// Projects data
const projects = [
  {
    id: 1,
    title: "Portfolio Website v5",
    content: `A personal portfolio website built with Django and Bootstrap. Features a blog system, project showcase, and admin interface for content management.

Key features:
- Django backend with SQLite database
- Bootstrap responsive design
- Blog with rich text editor
- Project portfolio with image uploads
- Contact form with email integration
- Admin dashboard for content management

This project helped me learn Django's MVT architecture, template inheritance, and form handling. The pine theme with gradient backgrounds gives it a unique look.`,
    publishDate: "2024-01-01",
    repoLink: "https://github.com/username/portfolio-v5",
    demoLink: "https://portfolio-v5-demo.herokuapp.com",
  },
  {
    id: 2,
    title: "NextJS Portfolio Migration",
    content: `Migration of my Django portfolio to NextJS with modern React patterns and Tailwind CSS. This project represents my learning journey into modern frontend development.

Technologies used:
- NextJS 14 with App Router
- React components and hooks
- Tailwind CSS for styling
- TypeScript for type safety
- Responsive design principles

The migration involved converting Django templates to React components, moving from Bootstrap to Tailwind, and implementing modern development practices.`,
    publishDate: "2024-01-20",
    repoLink: "https://github.com/username/nextjs-portfolio",
    demoLink: null,
  },
  {
    id: 3,
    title: "E-commerce Dashboard",
    content: `A comprehensive dashboard for managing e-commerce operations built with React and Node.js. Features real-time analytics, inventory management, and order processing.

Key features:
- Real-time sales analytics with charts
- Inventory tracking and alerts
- Order management system
- Customer relationship management
- Payment processing integration
- Responsive design for mobile and desktop

This project showcases my ability to work with complex data flows, real-time updates, and integration with third-party services.`,
    publishDate: "2023-12-15",
    repoLink: "https://github.com/username/ecommerce-dashboard",
    demoLink: "https://ecommerce-dashboard-demo.vercel.app",
  },
  {
    id: 4,
    title: "Task Management API",
    content: `A RESTful API built with Node.js and Express for managing tasks and projects. Features user authentication, role-based permissions, and real-time notifications.

Technical highlights:
- JWT authentication and authorization
- MongoDB with Mongoose ODM
- Socket.io for real-time features
- Express.js middleware and routing
- API documentation with Swagger
- Unit and integration testing

This backend project demonstrates my skills in API design, database modeling, and server-side development.`,
    publishDate: "2023-11-30",
    repoLink: "https://github.com/username/task-management-api",
    demoLink: null,
  },
];

// Normalize data into searchable format
export const getAllSearchableData = (): SearchableItem[] => {
  const searchableItems: SearchableItem[] = [];

  // Convert blog posts
  blogPosts.forEach(post => {
    searchableItems.push({
      id: `blog-${post.id}`,
      title: post.title,
      content: post.content,
      type: 'blog',
      date: post.publishDate,
      metadata: {
        images: post.images,
        publishDate: post.publishDate
      }
    });
  });

  // Convert clients
  clients.forEach(client => {
    const content = `${client.description} ${client.achievements.join(' ')} ${client.testimonial || ''}`;
    searchableItems.push({
      id: `client-${client.id}`,
      title: client.name,
      content: content,
      type: 'client',
      date: client.period,
      metadata: {
        role: client.role,
        period: client.period,
        logo: client.logo,
        description: client.description,
        technologies: client.technologies,
        achievements: client.achievements,
        testimonial: client.testimonial,
        isHighlighted: client.isHighlighted,
        isNDA: client.isNDA
      }
    });
  });

  // Convert projects
  projects.forEach(project => {
    searchableItems.push({
      id: `project-${project.id}`,
      title: project.title,
      content: project.content,
      type: 'project',
      date: project.publishDate,
      metadata: {
        publishDate: project.publishDate,
        repoLink: project.repoLink,
        demoLink: project.demoLink
      }
    });
  });

  return searchableItems;
};

// Simple search function
export const searchItems = (query: string, items: SearchableItem[]): SearchableItem[] => {
  if (!query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  
  return items.filter(item => 
    item.title.toLowerCase().includes(searchTerm) ||
    item.content.toLowerCase().includes(searchTerm)
  ).sort((a, b) => {
    // Prioritize title matches
    const aTitle = a.title.toLowerCase().includes(searchTerm);
    const bTitle = b.title.toLowerCase().includes(searchTerm);
    
    if (aTitle && !bTitle) return -1;
    if (!aTitle && bTitle) return 1;
    
    return 0;
  });
};

// Get items by type
export const getItemsByType = (items: SearchableItem[], type: 'blog' | 'client' | 'project'): SearchableItem[] => {
  return items.filter(item => item.type === type);
};
