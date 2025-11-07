// Sample client data - showcasing HP experience and other work
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

export default function ClientsPage() {
  return (
    <main className="py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 px-8">
          <h1 className="text-4xl font-bold flex items-center">
            Professional Experience
            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#0095d5] to-transparent rounded"></div>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Fortune 500 companies I've worked with and contributed to their success
          </p>
        </div>
        
        <div className="space-y-8">
          {clients.map((client) => (
            <div key={client.id} className="max-w-6xl mx-auto">
              <div className={`portfolio-card ${client.isHighlighted ? 'border-4 border-[#0095d5] bg-gradient-to-br from-blue-50 to-white' : ''}`}>
                {/* Header Section */}
                <div className="flex flex-col md:flex-row items-center mb-6">
                  <div className="mb-4 md:mb-0 md:mr-8">
                    <div className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                      <img
                        src={client.logo}
                        alt={`${client.name} logo`}
                        className="w-24 h-24 md:w-32 md:h-32 object-contain"
                      />
                    </div>
                  </div>
                  
                  <div className="text-center md:text-left flex-1">
                    <div className="flex items-center justify-center md:justify-start mb-3">
                      <span className="bg-gradient-to-r from-[#0095d5] to-[#007bb5] text-white text-sm font-bold px-4 py-2 rounded-full">
                        Fortune 500
                      </span>
                      {client.isNDA && (
                        <span className="ml-2 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                          NDA Project
                        </span>
                      )}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{client.name}</h2>
                    <p className="text-xl text-[#0095d5] font-semibold mb-2">{client.role}</p>
                    <p className="text-gray-600 font-medium">{client.period}</p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-lg leading-relaxed text-gray-700">
                    {client.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#0095d5] mb-3">Technologies & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {client.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#0095d5] text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-[#0095d5] mb-3">Key Achievements</h3>
                  <ul className="space-y-2">
                    {client.achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start">
                        <i className="fas fa-check-circle text-[#0095d5] mr-3 mt-1"></i>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Testimonial */}
                {client.testimonial && (
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-[#0095d5]">
                    <div className="flex items-center mb-3">
                      <i className="fas fa-quote-left text-[#0095d5] text-2xl mr-3"></i>
                      <h4 className="text-lg font-semibold text-gray-800">Client Testimonial</h4>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed">
                      "{client.testimonial}"
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto mt-12">
          <div className="portfolio-card bg-gradient-to-br from-[#0095d5] to-[#007bb5] text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-xl mb-6">
              Let's discuss how my Fortune 500 experience can benefit your project
            </p>
            <a
              href="mailto:rgarcia.7770@gmail.com?subject=Let's work together!"
              className="inline-block bg-white text-[#0095d5] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <i className="fas fa-handshake mr-2"></i>
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
