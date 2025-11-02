// Sample blog posts data - in a real app this would come from your CMS/database
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with NextJS",
    content: `NextJS is a powerful React framework that makes building web applications easier. In this post, I'll share my experience learning NextJS and some tips for beginners.

NextJS offers many benefits over plain React:
- Server-side rendering out of the box
- Automatic code splitting
- Built-in routing system
- API routes for backend functionality
- Excellent developer experience

When I first started learning NextJS, I was amazed by how much functionality came built-in. The file-based routing system means you just create files in the pages directory (or app directory in the new App Router) and NextJS automatically creates routes for you.

The learning curve from React to NextJS is pretty gentle, especially if you're already comfortable with React concepts like components, props, and state management.`,
    publishDate: "2024-01-15",
    image: null,
  },
  {
    id: 2,
    title: "Django to NextJS Migration",
    content: `Moving from Django templates to NextJS components requires understanding how React works. Here's what I learned during my portfolio migration.

The biggest difference is the templating system. Django uses template inheritance with blocks, while React uses component composition. Instead of extending a base template, you create reusable components.

Django template syntax like {% for %} and {% if %} becomes JavaScript map() and conditional rendering in React. Variables are no longer surrounded by {{ }}, but are JavaScript expressions in JSX.

Styling also changes significantly. Instead of linking CSS files in your base template, you can use CSS modules, styled-components, or utility frameworks like Tailwind.

The migration was challenging but rewarding. NextJS offers much better performance and a more modern development experience.`,
    publishDate: "2024-01-10",
    image: null,
  },
  {
    id: 3,
    title: "CSS Styling in Modern Web Development",
    content: `CSS has evolved tremendously over the years. From plain CSS to preprocessors to CSS-in-JS, let's explore the modern approaches to styling web applications.

Traditional CSS is still relevant, but modern tools make development much easier:

**CSS Preprocessors (Sass, Less):**
- Variables and mixins
- Nesting
- Functions and calculations

**CSS-in-JS (styled-components, emotion):**
- Component-scoped styles
- Dynamic styling based on props
- No class name conflicts

**Utility Frameworks (Tailwind CSS):**
- Rapid development
- Consistent design system
- Smaller bundle sizes

Each approach has its place, and the choice often depends on your project requirements and team preferences. In modern React applications, I often use a combination of Tailwind for layout and spacing, with CSS modules or styled-components for complex component styling.`,
    publishDate: "2024-01-05",
    image: null,
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
                {post.image && (
                  <img src={post.image} className="w-full h-48 object-cover rounded mb-4" alt={post.title} />
                )}
                
                <h2 className="text-2xl font-bold mb-4 text-center">{post.title}</h2>
                
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
