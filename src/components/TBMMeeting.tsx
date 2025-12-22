import { useState } from 'react';
import { Home, ChevronDown, Calendar, FileDown, Printer, Plus, Search, Building2, User, CheckCircle, AlertCircle, BarChart3 } from 'lucide-react';
import { TBMForm } from './TBMForm';

interface TBMRecord {
  no: number;
  workplace: string;
  workName: string;
  department1: string;
  department2: string;
  tbmDate: string;
  author: string;
  specialStatus: string;
  status: 'completed' | 'pending' | 'in-progress';
}

export function TBMMeeting() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);

  const mockData: TBMRecord[] = [
    { no: 55484, workplace: '포항공장', workName: 'SPC공장', department1: '다공이사이', department2: '다공이사이', tbmDate: '2025-12-04', author: '김기원', specialStatus: 'N', status: 'in-progress' },
    { no: 55483, workplace: '인천공장', workName: '(냉각) Off-Line 일상 점검', department1: '후판생산팀장', department2: '박동GAS', tbmDate: '2025-12-04', author: '김승삼', specialStatus: 'N', status: 'pending' },
    { no: 55482, workplace: '인천공장', workName: '(솔저) Off-Line 일상 점검', department1: '후판생산팀장', department2: '박동GAS', tbmDate: '2025-12-03', author: '김승삼', specialStatus: 'N', status: 'completed' },
    { no: 55481, workplace: '인천공장', workName: '임기포 북벽 TR 교체 작업', department1: '설(관리)협력업체', department2: '100톤 컨기', tbmDate: '2025-12-04', author: '김동철', specialStatus: 'N', status: 'in-progress' },
    { no: 55480, workplace: '인천공장', workName: '선소공정 spray 밸브식 점검', department1: '설비(관리)협력업체', department2: '선소공정', tbmDate: '2025-12-04', author: '김주현', specialStatus: 'N', status: 'pending' },
    { no: 55479, workplace: '포항공장', workName: 'Green Bar(철도차) 일상점 #코크비 및 영장설비전 시작전 구비', department1: '주식회사 타트물산', department2: '주식회사 타트물산', tbmDate: '2025-12-04', author: '양우천', specialStatus: 'N', status: 'completed' },
    { no: 55478, workplace: '인천공장', workName: 'Main Compressor GA250VSD 스크랩 수수 교체작업', department1: '에스파워월(주)', department2: '에스파워월(주)', tbmDate: '2025-12-04', author: '왕재빈', specialStatus: 'N', status: 'in-progress' },
    { no: 55477, workplace: '포항공장', workName: '용접 P-3 Crane 케블 남판 크랜 Magnet Pot 릴 센서 교체', department1: '설비(관리)협력업체', department2: '현성컨기', tbmDate: '2025-12-04', author: '안병륭', specialStatus: 'N', status: 'pending' },
    { no: 55476, workplace: '포항공장', workName: '동조페일 포장관리실 절강 플지식절', department1: '다공이사이', department2: '', tbmDate: '2025-12-04', author: '선재현', specialStatus: 'N', status: 'completed' },
    { no: 55475, workplace: '포항공장', workName: 'PCS제품(12/4,5건)', department1: '', department2: '(주)엔진엔테크스', tbmDate: '2025-12-04', author: '정점일', specialStatus: 'N', status: 'in-progress' },
  ];

  if (showForm) {
    return <TBMForm onClose={() => setShowForm(false)} />;
  }

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>출입관리 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">작업 전 안전점검회의(TBM)</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">작업 전 안전점검회의(TBM)</h1>
        <p className="text-sm text-gray-600">작업 전 안전점검회의 현황을 관리합니다</p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <div className="p-4 md:p-6 border-b md:border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-5 md:mb-5">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
            <h2 className="text-gray-900">검색 조건</h2>
          </div>
          
          <div className="space-y-4">
            {/* Mobile Simplified Filters */}
            <div className="block md:hidden space-y-3">
              {/* TBM 실시일 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">TBM 실시일</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              
              {/* 공정 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">공정</label>
                <div className="relative">
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 사업장 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">사업장</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">포항공장</option>
                    <option value="2">인천공장</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 공정/조직 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">공정/조직</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">가공팀</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 검색어 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">검색어</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="회의명을 입력하세요"
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 검색 버튼 */}
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white rounded-lg text-sm hover:shadow-lg transition-all">
                검색
              </button>
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:block">
              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                {/* 사업장명 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">사업장명</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                      <option value="">전체</option>
                      <option value="1">포항공장</option>
                      <option value="2">인천공장</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* TBM 실시일 */}
                <div className="lg:col-span-2">
                  <label className="block text-sm text-gray-700 mb-2 font-medium">TBM 실시일</label>
                  <div className="flex items-center gap-2">
                    <div className="relative flex-1">
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                      />
                      <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    <span className="text-gray-400 font-medium">~</span>
                    <div className="relative flex-1">
                      <input
                        type="date"
                        className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                      />
                      <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* 작업 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">작업</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                      <option>전체</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* 검색조건 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">검색조건</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                      <option>전체</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* 적용일자 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">적용일자</label>
                  <div className="relative">
                    <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                      <option>선택</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* 검색어 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">검색어</label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="검색어를 입력하세요"
                      className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                    <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* 검색 버튼 */}
                <div className="flex items-end">
                  <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                    <Search className="w-4 h-4" />
                    <span>검색</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex flex-col md:flex-row justify-end gap-2">
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2 bg-white">
            <FileDown className="w-4 h-4" />
            <span>List Excel 다운로드</span>
          </button>
          <button className="md:hidden px-4 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2" onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4" />
            <span>신규작성</span>
          </button>
          <button className="hidden md:flex px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all items-center gap-2 bg-white">
            <Printer className="w-4 h-4" />
            <span>선택 후 인쇄</span>
          </button>
          <button className="hidden md:flex px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all items-center gap-2" onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4" />
            <span>신규작성</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Items per page selector - Desktop only */}
        <div className="hidden md:block p-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <select 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 transition-all bg-white"
          >
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
            <option value={100}>100개씩 보기</option>
          </select>
        </div>

        {/* Mobile Card View */}
        <div className="block md:hidden p-4 space-y-3">
          {mockData.map((record, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              {/* Status Badge */}
              <div className="p-3 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] flex items-center gap-2">
                <span className="bg-white text-[#4F46E5] px-2.5 py-0.5 rounded-full text-xs font-medium">
                  진행중
                </span>
              </div>

              {/* Card Content */}
              <div className="p-4 space-y-2.5">
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">사업장</span>
                  <span className="text-gray-900 ml-auto">{record.workplace}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">작업명</span>
                  <span className="text-gray-900 ml-auto text-right">{record.workName}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">일 안전작업허가 연계여부</span>
                  <span className="text-gray-900 ml-auto">{record.specialStatus}</span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">상태</span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ml-auto">
                    정상
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <BarChart3 className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 text-xs">위험물량 등 여부 안내</span>
                  <span className="text-gray-900 ml-auto">{record.specialStatus}</span>
                </div>
              </div>

              {/* Report Button */}
              <div className="p-3 border-t border-gray-100">
                <button className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">보고하기</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-20">No.</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">사업장명</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">작업명</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">소속1</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">소속2</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">TBM 실시일</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">작성자</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">특정작성여부</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">상태</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {mockData.map((record, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors cursor-pointer">
                  <td className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-100">{record.no}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100">{record.workplace}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100">{record.workName}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100">{record.department1}</td>
                  <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100">{record.department2}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-100">{record.tbmDate}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900 border-r border-gray-100">{record.author}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">{record.specialStatus}</td>
                  <td className="px-4 py-3 text-center text-sm text-gray-900">
                    {record.status === 'completed' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">완료</span>}
                    {record.status === 'pending' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">대기</span>}
                    {record.status === 'in-progress' && <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">진행중</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-center gap-1">
            <button className="p-2 rounded hover:bg-gray-100 transition-colors">
              <ChevronDown className="w-4 h-4 rotate-90 text-gray-600" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm text-gray-600">&lt;</span>
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((page) => (
              <button
                key={page}
                className={`px-3 py-1.5 rounded text-sm min-w-[32px] transition-colors ${
                  page === 11
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                    : 'hover:bg-gray-100 text-gray-600'
                }`}
              >
                {page}
              </button>
            ))}
            <span className="px-2 text-gray-400">/</span>
            <span className="px-2 text-gray-600 text-sm">5548</span>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors">
              <span className="text-sm text-gray-600">&gt;</span>
            </button>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors">
              <ChevronDown className="w-4 h-4 -rotate-90 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 text-center text-xs text-gray-500">
        COPYRIGHT ©2025 Digital SHM System, All rights Reserved. T.070-7907-7979
      </div>
    </div>
  );
}