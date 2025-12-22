import { Home, ChevronDown, Download, FileText, Calendar } from 'lucide-react';
import { useState } from 'react';

interface MonthlyEducationReportProps {
  onNavigate?: (page: 'monthly-education-report-new') => void;
}

export function MonthlyEducationReport({ onNavigate }: MonthlyEducationReportProps) {
  const [selectedYear, setSelectedYear] = useState('2025년');
  const [searchType, setSearchType] = useState('전체');
  const [workplace, setWorkplace] = useState('사업장명');
  const [searchKeyword, setSearchKeyword] = useState('');

  const months = [
    '전월', '1월', '2월', '3월', '4월', '5월', 
    '6월', '7월', '8월', '9월', '10월', '11월', '12월'
  ];

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>산업안전보건법 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>1) 안전부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">월별교육보고서</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">월���교육보고서</h1>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-center gap-3">
          {/* Year Selection */}
          <div className="relative">
            <select 
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
              className="w-32 px-4 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none"
            >
              <option>2023년</option>
              <option>2024년</option>
              <option>2025년</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Calendar Button */}
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-500" />
          </button>

          {/* Search Type */}
          <div className="relative">
            <select 
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none"
            >
              <option>전체</option>
              <option>필수교육</option>
              <option>선택교육</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>

          {/* Search Condition Label */}
          <span className="text-sm text-gray-700 px-2">검색 조건</span>

          {/* Workplace */}
          <div className="relative">
            <select 
              value={workplace}
              onChange={(e) => setWorkplace(e.target.value)}
              className="w-32 px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none"
            >
              <option>사업장명</option>
              <option>서울사업장</option>
              <option>부산사업장</option>
            </select>
            <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
          </div>
          
          {/* Search Input */}
          <div className="relative flex-1">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="검색어를 입력해주세요"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
            />
            <svg className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" strokeWidth="2"/>
              <path d="m21 21-4.35-4.35" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Search Button */}
          <button className="px-6 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all whitespace-nowrap">
            검색
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-end gap-2 mb-4">
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white flex items-center gap-2">
          <Download className="w-4 h-4" />
          List Excel 다운로드
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white">
          교육 등록
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white">
          교육서식 다운
        </button>
        <button className="px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all" onClick={() => onNavigate?.('monthly-education-report-new')}>
          신규작성
        </button>
      </div>

      {/* Results Count */}
      <div className="mb-2">
        <span className="text-sm text-gray-600">10개씩 보기</span>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50 w-16">No.</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">대상명칭</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">실험명칭</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">일시별명칭</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">교육주관</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">교육장명(화상실 명)</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">교육날짜</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">약정명</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">과명부</th>
                <th className="px-4 py-4 text-center text-sm text-gray-700 bg-gray-50">관련부서</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={10} className="px-6 py-20 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <FileText className="w-12 h-12 text-gray-300" />
                    <span className="text-sm text-gray-500">조회된 데이터가 없습니다.</span>
                  </div>
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
          <button className="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            2
          </button>
          <button className="min-w-[32px] h-8 flex items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100">
            3
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