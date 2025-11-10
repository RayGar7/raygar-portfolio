'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAllSearchableData, searchItems } from '../utils/searchData';

interface GlobalSearchProps {
  className?: string;
}

export default function GlobalSearch({ className = '' }: GlobalSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [quickResults, setQuickResults] = useState<any[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const allItems = getAllSearchableData();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (searchTerm.trim()) {
      const results = searchItems(searchTerm, allItems).slice(0, 6); // Show max 6 quick results
      setQuickResults(results);
      setIsOpen(true);
    } else {
      setQuickResults([]);
      setIsOpen(false);
    }
  }, [searchTerm, allItems]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
      setIsOpen(false);
      setSearchTerm('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog': return 'fas fa-blog text-blue-500';
      case 'client': return 'fas fa-building text-green-500';
      case 'project': return 'fas fa-code text-purple-500';
      default: return 'fas fa-file text-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'blog': return 'Blog';
      case 'client': return 'Client';
      case 'project': return 'Project';
      default: return 'Item';
    }
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <form onSubmit={handleSearch} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Search blog, clients, projects..."
          className="w-full px-4 py-2 pr-10 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          <i className="fas fa-search"></i>
        </button>
      </form>

      {/* Quick Results Dropdown */}
      {isOpen && (quickResults.length > 0 || searchTerm.trim()) && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {quickResults.length > 0 ? (
            <>
              {quickResults.map((result) => (
                <div
                  key={result.id}
                  className="px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  <div className="flex items-start space-x-3">
                    <i className={`${getTypeIcon(result.type)} mt-1`}></i>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">
                          {result.title}
                        </h4>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                          {getTypeLabel(result.type)}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {truncateText(result.content, 120)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* View All Results Link */}
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
                <button
                  onClick={() => {
                    router.push(`/search?q=${encodeURIComponent(searchTerm.trim())}`);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                  className="w-full text-left text-sm text-blue-600 hover:text-blue-800 font-medium"
                >
                  View all results for "{searchTerm}" →
                </button>
              </div>
            </>
          ) : (
            <div className="px-4 py-3 text-sm text-gray-500 text-center">
              No results found for "{searchTerm}"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
