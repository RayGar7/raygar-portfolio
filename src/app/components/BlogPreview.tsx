// Sample blog posts data - in a real app this would come from your CMS/database
const sampleBlogPosts = [
  {
    id: 1,
    title: "Getting Started with NextJS",
    content: "NextJS is a powerful React framework that makes building web applications easier. In this post, I'll share my experience learning NextJS and some tips for beginners...",
    publishDate: "2024-01-15",
    image: null,
  },
  {
    id: 2,
    title: "Django to NextJS Migration",
    content: "Moving from Django templates to NextJS components requires understanding how React works. Here's what I learned during my portfolio migration...",
    publishDate: "2024-01-10",
    image: null,
  },
  {
    id: 3,
    title: "CSS Styling in Modern Web Development",
    content: "CSS has evolved tremendously over the years. From plain CSS to preprocessors to CSS-in-JS, let's explore the modern approaches to styling web applications...",
    publishDate: "2024-01-05",
    image: null,
  },
];

export default function BlogPreview() {
  return (
    <div className="space-y-6">
      {sampleBlogPosts.map((post) => (
        <div key={post.id} className="max-w-4xl mx-auto">
          <div className="portfolio-card">
            {post.image && (
              <a href={`/blog/${post.id}`}>
                <img src={post.image} className="w-full h-48 object-cover rounded mb-4" alt={post.title} />
              </a>
            )}
            
            <h2 className="text-2xl font-bold mb-4 text-center">{post.title}</h2>
            
            <div className="mb-4">
              <small className="text-gray-300 block mb-2">{post.publishDate}</small>
              <p className="text-lg leading-relaxed">
                {post.content.split(' ').slice(0, 30).join(' ')}...
              </p>
            </div>
            
            <div className="mt-4">
              <a 
                href={`/blog/${post.id}`}
                className="text-[#0095d5] hover:text-[#007bb5] hover:shadow-[0_0_1px_#0095d5] transition-all"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
