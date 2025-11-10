'use client';

import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { getAllSearchableData, searchItems, getItemsByType, SearchableItem } from '../utils/searchData';
import BlogImageCarousel from '../components/BlogImageCarousel';

interface SearchResultItemProps {
  item: SearchableItem;
  searchTerm: string;
}

const SearchResultItem = ({ item, searchTerm }: SearchResultItemProps) => {
  const highlightText = (text: string, term: string) => {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, index) => 
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 px-1 rounded">
          {part}
        </mark>
      ) : part
    );
  };

  const truncateContent = (content: string, maxLength: number = 200) => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength) + '...';
  };

  if (item.type === 'blog') {
    return (
      <div className="portfolio-card hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-3">
          <i className="fas fa-blog text-blue-500 mr-2"></i>
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
            Blog Post
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">
          {highlightText(item.title, searchTerm)}
        </h3>
        
        {item.metadata?.images && item.metadata.images.length > 0 && (
          <div className="mb-4">
            <BlogImageCarousel images={item.metadata.images} title={item.title} />
          </div>
        )}
        
        <p className="text-gray-600 mb-3">
          {highlightText(truncateContent(item.content), searchTerm)}
        </p>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Published: {item.date}</span>
          <a href="/blog" className="text-blue-500 hover:text-blue-700">
            View all blog posts →
          </a>
        </div>
      </div>
    );
  }

  if (item.type === 'client') {
    return (
      <div className={`portfolio-card hover:shadow-lg transition-shadow ${
        item.metadata?.isHighlighted ? 'border-2 border-blue-200' : ''
      }`}>
        <div className="flex items-center mb-3">
          <i className="fas fa-building text-green-500 mr-2"></i>
          <span className="bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded">
            Client Experience
          </span>
          {item.metadata?.isNDA && (
            <span className="ml-2 bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
              NDA
            </span>
          )}
        </div>

        <div className="flex items-center mb-4">
          {item.metadata?.logo && (
            <img 
              src={item.metadata.logo} 
              alt={`${item.title} logo`}
              className="w-12 h-12 object-contain mr-4 bg-white p-1 rounded border"
            />
          )}
          <div>
            <h3 className="text-xl font-bold">
              {highlightText(item.title, searchTerm)}
            </h3>
            <p className="text-blue-600 font-semibold">{item.metadata?.role}</p>
            <p className="text-gray-500 text-sm">{item.metadata?.period}</p>
          </div>
        </div>
        
        <p className="text-gray-600 mb-3">
          {highlightText(truncateContent(item.metadata?.description || ''), searchTerm)}
        </p>

        {item.metadata?.technologies && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {item.metadata.technologies.slice(0, 4).map((tech: string, index: number) => (
                <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                  {tech}
                </span>
              ))}
              {item.metadata.technologies.length > 4 && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                  +{item.metadata.technologies.length - 4} more
                </span>
              )}
            </div>
          </div>
        )}
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Period: {item.date}</span>
          <a href="/clients" className="text-blue-500 hover:text-blue-700">
            View all clients →
          </a>
        </div>
      </div>
    );
  }

  if (item.type === 'project') {
    return (
      <div className="portfolio-card hover:shadow-lg transition-shadow">
        <div className="flex items-center mb-3">
          <i className="fas fa-code text-purple-500 mr-2"></i>
          <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded">
            Project
          </span>
        </div>
        
        <h3 className="text-xl font-bold mb-3">
          {highlightText(item.title, searchTerm)}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {highlightText(truncateContent(item.content), searchTerm)}
        </p>
        
        <div className="flex gap-2 mb-3">
          {item.metadata?.repoLink && (
            <a
              href={item.metadata.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-700"
            >
              <i className="fab fa-github mr-1"></i>
              Code
            </a>
          )}
          {item.metadata?.demoLink && (
            <a
              href={item.metadata.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            >
              <i className="fas fa-external-link-alt mr-1"></i>
              Demo
            </a>
          )}
        </div>
        
        <div className="flex justify-between items-center text-sm text-gray-500">
          <span>Date: {item.date}</span>
          <a href="/projects" className="text-blue-500 hover:text-blue-700">
            View all projects →
          </a>
        </div>
      </div>
    );
  }

  return null;
};

export default function SearchPage() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [allItems] = useState(getAllSearchableData());

  useEffect(() => {
    const q = searchParams.get('q');
    if (q) {
      setSearchTerm(q);
    }
  }, [searchParams]);

  const searchResults = useMemo(() => {
    return searchItems(searchTerm, allItems);
  }, [searchTerm, allItems]);

  const blogResults = useMemo(() => {
    return getItemsByType(searchResults, 'blog');
  }, [searchResults]);

  const clientResults = useMemo(() => {
    return getItemsByType(searchResults, 'client');
  }, [searchResults]);

  const projectResults = useMemo(() => {
    return getItemsByType(searchResults, 'project');
  }, [searchResults]);

  const totalResults = searchResults.length;

  return (
    <main className="py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold flex items-center mb-4">
            Search Results
            <div className="ml-4 h-1 flex-1 bg-gradient-to-r from-[#0095d5] to-transparent rounded"></div>
          </h1>
          
          {/* Search Input */}
          <div className="relative mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search blog posts, clients, and projects..."
              className="w-full px-4 py-3 pr-12 text-lg border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>

          {searchTerm && (
            <p className="text-gray-600">
              {totalResults > 0 ? (
                <>
                  Found <strong>{totalResults}</strong> result{totalResults !== 1 ? 's' : ''} for 
                  <strong> "{searchTerm}"</strong>
                </>
              ) : (
                <>No results found for <strong>"{searchTerm}"</strong></>
              )}
            </p>
          )}
        </div>

        {!searchTerm ? (
          <div className="text-center py-12">
            <i className="fas fa-search text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">Start Searching</h2>
            <p className="text-gray-500">
              Enter a search term to find blog posts, client experiences, and projects
            </p>
          </div>
        ) : totalResults === 0 ? (
          <div className="text-center py-12">
            <i className="fas fa-search-minus text-6xl text-gray-300 mb-4"></i>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Results Found</h2>
            <p className="text-gray-500 mb-4">
              Try adjusting your search terms or browse individual sections:
            </p>
            <div className="flex justify-center gap-4">
              <a href="/blog" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Browse Blog
              </a>
              <a href="/clients" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                Browse Clients
              </a>
              <a href="/projects" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600">
                Browse Projects
              </a>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Blog Results Section */}
            {blogResults.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <i className="fas fa-blog text-blue-500 text-2xl mr-3"></i>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Blog Posts ({blogResults.length})
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {blogResults.map((item) => (
                    <SearchResultItem 
                      key={item.id} 
                      item={item} 
                      searchTerm={searchTerm} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Client Results Section */}
            {clientResults.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <i className="fas fa-building text-green-500 text-2xl mr-3"></i>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Client Experience ({clientResults.length})
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {clientResults.map((item) => (
                    <SearchResultItem 
                      key={item.id} 
                      item={item} 
                      searchTerm={searchTerm} 
                    />
                  ))}
                </div>
              </section>
            )}

            {/* Project Results Section */}
            {projectResults.length > 0 && (
              <section>
                <div className="flex items-center mb-6">
                  <i className="fas fa-code text-purple-500 text-2xl mr-3"></i>
                  <h2 className="text-2xl font-bold text-gray-800">
                    Projects ({projectResults.length})
                  </h2>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {projectResults.map((item) => (
                    <SearchResultItem 
                      key={item.id} 
                      item={item} 
                      searchTerm={searchTerm} 
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
