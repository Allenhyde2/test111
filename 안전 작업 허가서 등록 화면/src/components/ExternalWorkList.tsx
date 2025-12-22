import { useState } from 'react';
import { Home, ChevronDown, Calendar, Search, FileDown, Printer, Plus } from 'lucide-react';

interface WorkItem {
  id: number;
  no: number;
  workplace: string;
  status: string;
  statusColor: 'blue' | 'red';
  company: string;
  workContent: string;
  workDays: string;
  supervisor: string;
  tbm: string;
  priority: number;
}

interface ExternalWorkListProps {
  onNavigate: (page: 'external-work-detail') => void;
}

export function ExternalWorkList({ onNavigate }: ExternalWorkListProps) {
  const [workItems] = useState<WorkItem[]>([
    {
      id: 1,
      no: 69,
      workplace: '포항공장',
      status: '토요일',
      statusColor: 'blue',
      company: '주식회사 티드콤',
      workContent: '사각형 와이어식 측벽형 고 교체, 사각형 외유벽식 부문 교체, 안전문 호온방지 부문 교체, 사각형 부분, 사각형 확장시 측벽형 호른 구축',
      workDays: '포항공장 GFRP, ...',
      supervisor: '포항',
      tbm: '4',
      priority: 1
    },
    {
      id: 2,
      no: 68,
      workplace: '인천공장',
      status: '토요일',
      statusColor: 'blue',
      company: '한성당업',
      workContent: '100T 제강 탄집 사각형 환기력',
      workDays: '인천공장 100T',
      supervisor: '포항',
      tbm: '2',
      priority: 2
    },
    {
      id: 3,
      no: 67,
      workplace: '포항공장',
      status: '토요일',
      statusColor: 'blue',
      company: '재어리트너스',
      workContent: 'PC5계획(12/4,금)',
      workDays: '포항공장 형강공장',
      supervisor: '이진영',
      tbm: '1',
      priority: 1
    },
    {
      id: 4,
      no: 66,
      workplace: '포항공장',
      status: '토요일',
      statusColor: 'blue',
      company: '재어리트너스',
      workContent: 'PC5계획(12/4,금)',
      workDays: '포항공장 형강공장',
      supervisor: '이진영',
      tbm: '1',
      priority: 1
    },
    {
      id: 5,
      no: 65,
      workplace: '포항공장',
      status: '토요일',
      statusColor: 'blue',
      company: '재어리트너스',
      workContent: '형강계획(12/4,금)',
      workDays: '포항공장 형강 계...',
      supervisor: '이진영',
      tbm: '3',
      priority: 3
    },
    {
      id: 6,
      no: 64,
      workplace: '포항공장',
      status: '토요일',
      statusColor: 'blue',
      company: '재어리트너스',
      workContent: '형강계획(12/4,금)',
      workDays: '포항공장 형강 계...',
      supervisor: '이진영',
      tbm: '3',
      priority: 3
    },
    {
      id: 7,
      no: 63,
      workplace: '포항공장',
      status: '작업완료',
      statusColor: 'red',
      company: '삼룡산업',
      workContent: '일관전선 단자배선',
      workDays: '포항공장 CS 정상',
      supervisor: '포항',
      tbm: '8',
      priority: 8
    },
    {
      id: 8,
      no: 62,
      workplace: '포항공장',
      status: '작업완료',
      statusColor: 'red',
      company: '재어리트너스',
      workContent: '단조 5 노선(12/4,수목)',
      workDays: '포항공장 형강 계...',
      supervisor: '포항',
      tbm: '1',
      priority: 1
    },
    {
      id: 9,
      no: 61,
      workplace: '포항공장',
      status: '작업완료',
      statusColor: 'red',
      company: '재어리트너스',
      workContent: 'CS광역 및 고입 적정계획(12/4,수목)',
      workDays: '포항공장 CS 계동...',
      supervisor: '포항',
      tbm: '6',
      priority: 6
    },
    {
      id: 10,
      no: 60,
      workplace: '인천공장',
      status: '작업완료',
      statusColor: 'red',
      company: '스카이개발',
      workContent: 'R.C.D타입 BOX 및 CABLE 교체, 절규소자기, LANCE 건조 교체, 분사대지 건조 교체',
      workDays: '인천공장 100T',
      supervisor: '포항',
      tbm: '7',
      priority: 7
    }
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  return (
    <div className="max-w-full mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>출입관리 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>일 안전작업허가서</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">외부공사·작업</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">외부공사·작업</h1>
        <p className="text-sm text-gray-600">외부 공사 및 작업 현황을 관리합니다</p>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Search Filters */}
        <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
            <h2 className="text-gray-900">검색 조건</h2>
          </div>
          
          <div className="space-y-4">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 사업장명 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">사업장명</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">포항공장</option>
                    <option value="2">당진공장</option>
                    <option value="3">인천공장</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 작업기간 */}
              <div className="lg:col-span-2">
                <label className="block text-sm text-gray-700 mb-2 font-medium">작업기간</label>
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

              {/* 작업자명 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">작업자명</label>
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* 신청일자 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">신청일자</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">오늘</option>
                    <option value="2">최근 7일</option>
                    <option value="3">최근 30일</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 구분 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">구분</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">공사</option>
                    <option value="2">작업</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 안전책임자명 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">안전책임자명</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">김철수</option>
                    <option value="2">이영희</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* 중점작업일부 */}
              <div>
                <label className="block text-sm text-gray-700 mb-2 font-medium">중점작업일부</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="">전체</option>
                    <option value="1">중점작업</option>
                    <option value="2">일반작업</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Third Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-3">
                <label className="block text-sm text-gray-700 mb-2 font-medium">검색조건</label>
                <div className="relative">
                  <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none">
                    <option value="company">업체명</option>
                    <option value="work">작업내용</option>
                    <option value="supervisor">작업일수</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              <div className="lg:col-span-9">
                <label className="block text-sm text-gray-700 mb-2 font-medium">검색어</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="키워드를 입력하세요"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                  <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Search Button */}
            <div className="flex justify-center mt-6">
              <button className="px-10 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>검색</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap gap-2">
            <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center gap-2 bg-white">
              <FileDown className="w-4 h-4" />
              <span className="hidden sm:inline">List Excel 다운로드</span>
              <span className="sm:hidden">Excel</span>
            </button>
            <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center gap-2 bg-white">
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">신청 등 인쇄</span>
              <span className="sm:hidden">인쇄</span>
            </button>
          </div>
          <button className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>전구역등록</span>
          </button>
        </div>

        {/* Items per page selector */}
        <div className="px-4 md:px-6 py-3 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">표시 개수:</span>
              <div className="relative">
                <select 
                  value={itemsPerPage}
                  onChange={(e) => setItemsPerPage(Number(e.target.value))}
                  className="px-3 py-1.5 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white appearance-none"
                >
                  <option value="10">10개</option>
                  <option value="20">20개</option>
                  <option value="50">50개</option>
                  <option value="100">100개</option>
                </select>
                <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="text-sm text-gray-600">
              총 <span className="font-medium text-[#FF6B35]">{workItems.length}</span>건
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-16">No.</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-700 border-r border-gray-200 w-32">사업장명</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-24">상태</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-700 border-r border-gray-200 w-40">업체명</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">작업내용</th>
                <th className="px-4 py-3.5 text-left text-xs font-semibold text-gray-700 border-r border-gray-200 w-40">작업일수</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-24">TBM 여부</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 w-24">중점작업</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {workItems.map((item) => (
                <tr key={item.id} className="hover:bg-gray-50 transition-colors cursor-pointer" onClick={() => onNavigate('external-work-detail')}>
                  <td className="px-4 py-3.5 text-center text-sm text-gray-700 border-r border-gray-100">{item.no}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-900 border-r border-gray-100 font-medium">{item.workplace}</td>
                  <td className="px-4 py-3.5 text-center border-r border-gray-100">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.statusColor === 'blue'
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 border-r border-gray-100">{item.company}</td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 border-r border-gray-100">
                    <div className="line-clamp-2">{item.workContent}</div>
                  </td>
                  <td className="px-4 py-3.5 text-sm text-gray-700 border-r border-gray-100">{item.workDays}</td>
                  <td className="px-4 py-3.5 text-center text-sm border-r border-gray-100">
                    <span className={`inline-flex items-center justify-center px-2 py-1 rounded text-xs font-medium ${
                      item.supervisor === '포항' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-orange-50 text-orange-700 border border-orange-200'
                    }`}>
                      {item.supervisor === '포항' ? '완료' : '미진행'}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-center text-sm">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white text-xs font-medium">
                      {item.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 md:px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-center gap-1">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="px-3 py-2 hover:bg-white rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm text-gray-700 border border-transparent hover:border-gray-300"
            >
              {'<<'}
            </button>
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="px-3 py-2 hover:bg-white rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed text-sm text-gray-700 border border-transparent hover:border-gray-300"
            >
              {'<'}
            </button>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-3 py-2 rounded-lg text-sm transition-all font-medium ${
                  page === currentPage
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                    : 'hover:bg-white text-gray-700 border border-transparent hover:border-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            <button 
              onClick={() => setCurrentPage(currentPage + 1)}
              className="px-3 py-2 hover:bg-white rounded-lg transition-all text-sm text-gray-700 border border-transparent hover:border-gray-300"
            >
              {'>'}
            </button>
            <button 
              onClick={() => setCurrentPage(11)}
              className="px-3 py-2 hover:bg-white rounded-lg transition-all text-sm text-gray-700 border border-transparent hover:border-gray-300"
            >
              {'>>'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}