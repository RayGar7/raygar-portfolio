// Sample project data - in a real app this would come from your database
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

export default function ProjectsPage() {
  return (
    <main className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 px-8">
          <h1 className="text-4xl font-bold flex items-center">
            Projects
            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#0095d5] to-transparent rounded"></div>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            A showcase of my development work and learning projects
          </p>
        </div>
        
        <div className="space-y-6">
          {projects.map((project) => (
            <div key={project.id} className="max-w-4xl mx-auto">
              <div className="portfolio-card">
                <h2 className="text-2xl font-bold mb-4 text-center">{project.title}</h2>
                
                <div className="mb-6">
                  <small className="text-gray-400 block mb-4">{project.publishDate}</small>
                  <div className="text-lg leading-relaxed whitespace-pre-line">
                    {project.content}
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  {project.repoLink && (
                    <a
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white rounded-lg font-semibold hover:bg-gray-700 transition-all transform hover:scale-105"
                    >
                      <i className="fab fa-github mr-2"></i>
                      View Code
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-[#0095d5] text-white rounded-lg font-semibold hover:bg-[#007bb5] transition-all transform hover:scale-105"
                    >
                      <i className="fas fa-external-link-alt mr-2"></i>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
