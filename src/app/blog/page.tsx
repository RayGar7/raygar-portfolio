import BlogImageCarousel from '../components/BlogImageCarousel';

// Sample blog posts data - in a real app this would come from your CMS/database
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

export default function BlogPage() {
  return (
    <main className="py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 px-8">
          <h1 className="text-4xl font-bold flex items-center">
            Blog Posts
            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#0095d5] to-transparent rounded"></div>
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Thoughts on web development, technology, and my learning journey
          </p>
        </div>
        
        <div className="space-y-6">
          {blogPosts.map((post) => (
            <div key={post.id} className="max-w-4xl mx-auto">
              <div className="portfolio-card">
                <h2 className="text-2xl font-bold mb-4 text-center">{post.title}</h2>
                
                {post.images && post.images.length > 0 && (
                  <BlogImageCarousel images={post.images} title={post.title} />
                )}
                
                <div className="mb-4">
                  <small className="text-gray-400 block mb-4">{post.publishDate}</small>
                  <div className="text-lg leading-relaxed whitespace-pre-line">
                    {post.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
