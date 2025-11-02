import BlogPreview from './components/BlogPreview';
import LogoCarousel from './components/LogoCarousel';
import { getImagePath } from './utils/imagePath';

export default function Home() {
  return (
    <main className="py-8">
      {/* Hero Logo Carousel - First thing users see */}
      <LogoCarousel />

      {/* Small Companies Section */}
      <div className="max-w-4xl mx-auto mb-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-700 mb-3">
            Supporting Local & Small Businesses
          </h2>
          <p className="text-lg text-gray-600">
            Bringing enterprise-quality development to growing companies
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* Logo */}
            <div className="mb-6 md:mb-0 md:mr-8">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <img
                  src={getImagePath("/logos/small-companies/raw-xocolatl.jpg")}
                  alt="Raw Xocolatl logo"
                  className="w-32 h-32 md:w-40 md:h-40 object-contain"
                />
              </div>
            </div>
            
            {/* Company Info */}
            <div className="text-center md:text-left max-w-md">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <span className="bg-gradient-to-r from-amber-600 to-amber-700 text-white text-sm font-bold px-4 py-2 rounded-full">
                  Small Business
                </span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                Raw Xocolatl
              </h3>
              <p className="text-lg text-amber-700 font-semibold mb-3">
                Artisan Chocolate Company
              </p>
              <div className="text-gray-600">
                <i className="fas fa-heart mr-2 text-amber-600"></i>
                Supporting local craftsmanship with professional web presence
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600 italic">
            "Every business deserves enterprise-quality development, regardless of size."
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="portfolio-card">
          <h1 className="text-4xl font-bold mb-6">About</h1>
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg mb-6 border-l-4 border-[#0095d5]">
            <div className="flex items-center mb-4">
              <div className="bg-[#0095d5] text-white px-4 py-2 mr-4 rounded-lg font-bold text-lg mg-8">
                HP, Inc.
              </div>
              <div className="bg-[#0095d5] text-white px-4 py-2 mr-4 rounded-lg font-bold text-lg">
                Foxconn
              </div>
              <div className="bg-[#0095d5] text-white px-4 py-2 mr-4 rounded-lg font-bold text-lg">
                Intuit
              </div>
            </div>
            <p className="text-lg leading-relaxed text-gray-700">
              <strong>Former Big Tech Company Developer</strong> with enterprise-level experience in building scalable web applications. 
              I bring Fortune 500 company standards and practices to every project. 
            </p>
          </div>
          <p className="text-lg leading-relaxed mb-6">
            <a
              href="https://www.hp.com/us-en/home.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0095d5] font-bold"
            >
              <strong>Hewlett-Packard (HP)</strong>
            </a>, 
            where I worked on enterprise-scale applications and learned industry best practices. My development journey started in 
            Summer 2017 with my first internship at a startup in Lubbock, TX.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Having worked at HP, I bring enterprise-level expertise to web development, including scalable architecture patterns, 
            code quality standards, and collaborative development practices. I'm now seeking new opportunities to apply this 
            Fortune 500 experience to innovative projects. If you're an employer looking for a developer with proven 
            enterprise experience, let's connect!
          </p>
          <div className="text-center mt-8">
            <a
              href="mailto:rgarcia.7770@gmail.com?subject=I'm an employer and I would like to get in contact!"
              className="mail-link inline-block hover:scale-110 transition-transform"
            >
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-4xl mx-auto mb-8" />

      {/* Local Business Services Section */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="portfolio-card bg-gradient-to-br from-blue-50 to-white border-2 border-[#0095d5]">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-[#0095d5] to-[#007bb5] text-white px-4 py-2 rounded-lg font-bold text-lg mr-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              Local Services
            </div>
            <div className="text-2xl font-bold text-[#0095d5]">Brownsville & RGV</div>
          </div>
          
          <h2 className="text-3xl font-bold mb-4 text-[#0095d5]">Website Development for Local Businesses</h2>
          
          <p className="text-lg leading-relaxed mb-4 text-gray-700">
            Bringing <strong>Fortune 500 development standards</strong> to small and local businesses in 
            <strong className="text-[#0095d5]"> Brownsville, Texas</strong> and throughout the 
            <strong className="text-[#0095d5]"> Rio Grande Valley (RGV)</strong>. I specialize in creating 
            professional, modern websites that help local businesses establish their digital presence and compete effectively.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#0095d5]">Services Offered:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#0095d5] mr-3 mt-1"></i>
                  <span>Custom business websites</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#0095d5] mr-3 mt-1"></i>
                  <span>E-commerce solutions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#0095d5] mr-3 mt-1"></i>
                  <span>Mobile-responsive design</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-[#0095d5] mr-3 mt-1"></i>
                  <span>SEO optimization</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-[#0095d5]">Why Choose Enterprise Experience:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-star text-[#0095d5] mr-3 mt-1"></i>
                  <span>Fortune 500 quality standards</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-[#0095d5] mr-3 mt-1"></i>
                  <span>Professional project management</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-[#0095d5] mr-3 mt-1"></i>
                  <span>Scalable, future-proof solutions</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-star text-[#0095d5] mr-3 mt-1"></i>
                  <span>Local market understanding</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-[#0095d5] text-white p-4 rounded-lg text-center">
            <p className="text-lg mb-3">
              <strong>Ready to elevate your local business with enterprise-grade web development?</strong>
            </p>
            <a
              href="mailto:rgarcia.7770@gmail.com?subject=Website Development for My Local Business"
              className="inline-block bg-white text-[#0095d5] px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              <i className="fas fa-handshake mr-2"></i>
              Let's Build Your Website
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="max-w-4xl mx-auto mb-8" />

      {/* Recent Blog Posts Section */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 px-8">
          <h1 className="text-4xl font-bold flex items-center">
            Recent Blog Posts
            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#0095d5] to-transparent rounded"></div>
          </h1>
        </div>
        
        {/* Blog previews - for now we'll show placeholder content */}
        <BlogPreview />
      </div>
    </main>
  );
}
