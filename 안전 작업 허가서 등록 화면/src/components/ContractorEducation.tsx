import { Home, ChevronDown, Search, Download } from 'lucide-react';
import { useState } from 'react';
import { EducationDetail } from './EducationDetail';

interface EducationMaterial {
  no: number;
  title: string;
  author: string;
  date: string;
  hasAttachment: boolean;
}

export function ContractorEducation() {
  const [searchType, setSearchType] = useState('제목');
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMaterial, setSelectedMaterial] = useState<number | null>(null);

  const materials: EducationMaterial[] = [
    { no: 8, title: 'TBM app 설치', author: '양두팀', date: '2025-03-27', hasAttachment: true },
    { no: 7, title: 'D-Safe 안전작업허가 프로세스 메뉴얼 프로세스 개선 반영', author: '송희수', date: '2025-03-11', hasAttachment: true },
    { no: 6, title: 'D-Safe 현장책임자_사례자금', author: '양두팀', date: '2025-02-03', hasAttachment: true },
    { no: 5, title: 'D-Safe 현장책임자_사례자금', author: '양두팀', date: '2025-02-03', hasAttachment: true },
    { no: 4, title: 'D-Safe_내부작업허가/사내수리 안전현장업자 안내문서', author: '양두팀', date: '2025-01-27', hasAttachment: true },
    { no: 3, title: 'D-Safe_안전작업허가, 일 안전작업허가_외부공사_안내문서', author: '양두팀', date: '2025-01-27', hasAttachment: true },
    { no: 2, title: 'D-Safe 로그인 및 설치방법 안내문서_윈도우 추가 등', author: '양두팀', date: '2025-01-27', hasAttachment: true },
    { no: 1, title: 'D-Safe 소개영상', author: '양두팀', date: '2025-01-27', hasAttachment: true },
  ];

  if (selectedMaterial !== null) {
    return <EducationDetail onBack={() => setSelectedMaterial(null)} />;
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>자료실</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>수금업체 교육자료</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">제목</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">수금업체 교육자료</h1>
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
              {materials.map((material) => (
                <tr key={material.no} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-center text-sm text-gray-700">{material.no}</td>
                  <td className="px-6 py-4 text-sm text-gray-900 text-left cursor-pointer" onClick={() => setSelectedMaterial(material.no)}>
                    {material.title}
                  </td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700">{material.author}</td>
                  <td className="px-6 py-4 text-center text-sm text-gray-700">{material.date}</td>
                  <td className="px-6 py-4 text-center">
                    {material.hasAttachment && (
                      <button className="inline-flex items-center justify-center p-1.5 hover:bg-gray-100 rounded transition-colors">
                        <Download className="w-4 h-4 text-gray-500" />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
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
          
          <button className="min-w-[32px] h-8 flex items-center justify-center rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-sm">
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