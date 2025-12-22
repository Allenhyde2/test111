import { Home, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';

export function FAQ() {
  const [searchType, setSearchType] = useState('제목');
  const [searchText, setSearchText] = useState('');

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>커뮤니티</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>FAQ</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">제목</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">FAQ</h1>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none"
            >
              <option>제목</option>
              <option>작성자</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          <div className="relative flex-1">
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Search"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
            />
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          <button className="px-6 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all whitespace-nowrap">
            검색
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50 w-20">No.</th>
                <th className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50">제목</th>
                <th className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50 w-32">작성자</th>
                <th className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50 w-40">작성일</th>
                <th className="px-6 py-4 text-center text-sm text-gray-700 bg-gray-50 w-28">첨부파일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={5} className="px-6 py-20 text-center text-sm text-gray-500">
                  데이터가 없습니다
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 py-4 border-t border-gray-100">
          <button className="px-2 py-1 text-gray-400 hover:text-gray-600 disabled:opacity-30">
            <ChevronDown className="w-4 h-4 rotate-90" />
            <ChevronDown className="w-4 h-4 rotate-90 -ml-2" />
          </button>
          <button className="px-2 py-1 text-gray-400 hover:text-gray-600 disabled:opacity-30">
            <ChevronDown className="w-4 h-4 rotate-90" />
          </button>
          
          <button className="min-w-[32px] h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white text-sm">
            1
          </button>
          
          <button className="px-2 py-1 text-gray-400 hover:text-gray-600">
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </button>
          <button className="px-2 py-1 text-gray-400 hover:text-gray-600">
            <ChevronDown className="w-4 h-4 -rotate-90" />
            <ChevronDown className="w-4 h-4 -rotate-90 -ml-2" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8">
        COPYRIGHT ©2025 Digital SHM System, All rights Reserved. T.070-7907-7979
      </div>
    </div>
  );
}
