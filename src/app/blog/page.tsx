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
    title: "Selling for Raw Xocolatl",
    content: `
      Alongisde building a website for my client, I also offered services as a vendor for Raw Xocolatl, a small local chocolate company and selling their handmade products at farmers markets and community events. My responsibilities included setting up tables, engaging with customers, explaining the craft behind the products, processing payments and managing inventory. This experience taught me essential skills in customer service, sales and adaptability—learning that selling isn't about pushing products, but about connecting with people and understanding their needs. The communication and problem-solving skills I developed there translate directly to my work today, whether I'm explaining technical concepts to clients or adapting to different project requirements.
      
      Lastly, I would love to sell your product too!
      `,
    publishDate: "2021-04-15",
    images: [
      '/blog/selling-raw-xocolatl.jpg'
    ],
  },
  {
    id: 3,
    title: "Promoted for QuickBooks in About Two Month",
    content: `This is a true story of how I was promoted from a position in about a month. Firstly, I was hired as a tech support agent for the project Quickbooks Online at a call center company that outsources customer support roles.
     During training, I try my best to lock in and learn as much of the material as possible. As it relates to the Quickbooks Online product. Let me tell you people. Quickbooks Online is a very powerful tool. Yes, it's very complicated. It has a lot of bells and whistles, but I have seen first hand how. People with zero experience in business accounting. Have leveraged the tools from Quickbooks Online to build successful empires. 
     Throughout my time in training and in my first weeks of calls. I paid every attention to. What my customers calling in were doing that led them to become successful with this product. 
     I can now S say that when the day comes that I want to own my own company, have my own employees, I have the tools needed. To be in good terms with the IRS. To keep track of my expenses. To invoice my clients. To manage my cash flow. And to make sure that come tax season, I have everything in order to file my taxes correctly and on time.
     Now back to my story of how I was promoted in about two months. So after my first month of calls, I was already getting positive feedback from my quality analysts on my calls. I was also getting great customer satisfaction survey results from my customers.
     Thankfully, this is an environment where such accomplishments do not go unnoticed. In fact, they were celebrated and it was a matter of time before someone higher up the ladder took notice of my performance. My hire date was effective September 25, 2025. And my promotion date was effective November 12, 2025. Thus totalling 1 month, two weeks, and 3 days.
     My new responsibility includes sharing what worked with others, helping new hires get up to speed faster, assisting with difficult calls. And being a role model for others to follow. All of these are responsibilites I am looking forward to exercising the best to my potential. `,
    publishDate: "2021-04-15",
    images: [
      '/logos/quickbooks.svg'
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
