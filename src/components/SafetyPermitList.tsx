import { useState } from 'react';
import { Home, ChevronRight, Search, Calendar, Building2, FileText, Download, Printer, Settings, Plus, ChevronDown, ChevronLeft, Filter } from 'lucide-react';

interface PermitData {
  id: number;
  facilityName: string;
  searchCount: string;
  workName: string;
  workPeriod: string;
  department: string;
  createdDate: string;
  author: string;
  status: string;
}

interface SafetyPermitListProps {
  onNavigate: (page: 'permit-register') => void;
}

export function SafetyPermitList({ onNavigate }: SafetyPermitListProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useState({
    startDate: '',
    endDate: '',
    facility: '',
    searchKeyword: ''
  });
  const [itemsPerPage, setItemsPerPage] = useState('10');

  // 샘플 데이터 (현재 비어있음)
  const permits: PermitData[] = [];

  const totalPages = 1;

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronRight className="w-3 h-3" />
        <span>출입관리 부문</span>
        <ChevronRight className="w-3 h-3" />
        <span className="text-[#FF6B35]">안전작업허가서</span>
      </div>

      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-gray-900 mb-1">안전작업허가서</h1>
          <p className="text-sm text-gray-600">등록된 안전작업허가서를 조회하고 관리하세요</p>
        </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Search Section */}
        <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
            <h2 className="text-gray-900">검색 조건</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* 작성일 시작 */}
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-700 mb-2 font-medium">작성일 기간</label>
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    value={searchParams.startDate}
                    onChange={(e) => setSearchParams({...searchParams, startDate: e.target.value})}
                  />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <span className="text-gray-400 font-medium">~</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    value={searchParams.endDate}
                    onChange={(e) => setSearchParams({...searchParams, endDate: e.target.value})}
                  />
                  <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* 사업장 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">사업장</label>
              <div className="relative">
                <select 
                  className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white"
                  value={searchParams.facility}
                  onChange={(e) => setSearchParams({...searchParams, facility: e.target.value})}
                >
                  <option value="">전체</option>
                  <option value="pohang">포항제철소</option>
                  <option value="dangjin">당진제철소</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 검색조건 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">검색 구분</label>
              <div className="relative">
                <select className="w-full px-3 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                  <option value="">전체</option>
                  <option value="workName">작업명</option>
                  <option value="partner">협력체</option>
                  <option value="department">발주부서</option>
                  <option value="author">작성자</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 검색 입력 */}
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-700 mb-2 font-medium">검색어</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="검색어를 입력하세요"
                  className="w-full px-4 py-2.5 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  value={searchParams.searchKeyword}
                  onChange={(e) => setSearchParams({...searchParams, searchKeyword: e.target.value})}
                />
                <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 상태 필터 */}
            <div className="lg:col-span-2">
              <label className="block text-sm text-gray-700 mb-2 font-medium">승인 상태</label>
              <div className="flex gap-2">
                <button className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-all">
                  전체
                </button>
                <button className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm hover:border-green-500 hover:bg-green-50 transition-all">
                  승인
                </button>
                <button className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm hover:border-yellow-500 hover:bg-yellow-50 transition-all">
                  대기
                </button>
                <button className="flex-1 px-3 py-2.5 border border-gray-300 rounded-lg text-sm hover:border-red-500 hover:bg-red-50 transition-all">
                  반려
                </button>
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

        {/* Action Buttons */}
        <div className="px-4 md:px-6 py-4 border-b border-gray-200 bg-gray-50">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-medium">총 <span className="text-[#FF6B35]">0</span>건</span>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center gap-2">
                <Download className="w-4 h-4 text-gray-600" />
                <span>Excel</span>
              </button>
              <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 hover:border-gray-400 transition-colors flex items-center gap-2">
                <Printer className="w-4 h-4 text-gray-600" />
                <span>인쇄</span>
              </button>
              <button className="px-5 py-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                onClick={() => onNavigate('permit-register')}
              >
                <Plus className="w-4 h-4" />
                <span>신규등록</span>
              </button>
            </div>
          </div>
        </div>

        {/* Items Per Page Selector */}
        <div className="px-4 md:px-6 py-3 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="relative">
              <select 
                className="px-3 py-2 pr-8 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(e.target.value)}
              >
                <option value="10">10개씩 보기</option>
                <option value="20">20개씩 보기</option>
                <option value="50">50개씩 보기</option>
                <option value="100">100개씩 보기</option>
              </select>
              <ChevronDown className="absolute right-2 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">No.</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">사업장명</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">협력체</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">공사/작업명</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">작업기간</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">발주부서</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">작성일</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">작성자</th>
                <th className="px-4 py-3.5 text-center text-xs font-semibold text-gray-700 whitespace-nowrap">상태</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {permits.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-24 text-center">
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                        <FileText className="w-8 h-8 text-gray-400" />
                      </div>
                      <div>
                        <p className="text-gray-500 mb-1">조회된 데이터가 없습니다</p>
                        <p className="text-sm text-gray-400">검색 조건을 변경하거나 새로운 허가서를 등록해주세요</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ) : (
                permits.map((permit) => (
                  <tr key={permit.id} className="hover:bg-gradient-to-r hover:from-[#FF6B35]/5 hover:to-transparent transition-all cursor-pointer group">
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.id}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.facilityName}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.searchCount}</td>
                    <td className="px-4 py-4 text-sm text-gray-900 text-center font-medium group-hover:text-[#FF6B35] transition-colors">{permit.workName}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.workPeriod}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.department}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.createdDate}</td>
                    <td className="px-4 py-4 text-sm text-gray-700 text-center">{permit.author}</td>
                    <td className="px-4 py-4 text-center">
                      <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${
                        permit.status === '승인' 
                          ? 'bg-green-100 text-green-700 border border-green-200' 
                          : permit.status === '대기'
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          : 'bg-red-100 text-red-700 border border-red-200'
                      }`}>
                        {permit.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-4 md:px-6 py-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-center gap-1">
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <ChevronLeft className="w-4 h-4 -ml-3" />
            </button>
            
            <button 
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(currentPage - 1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex gap-1 mx-2">
              {currentPage === 1 && (
                <>
                  <button className="min-w-[32px] h-8 px-2 rounded-lg bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-sm font-medium shadow-md">
                    1
                  </button>
                  {totalPages > 1 && (
                    <button className="min-w-[32px] h-8 px-2 rounded-lg bg-white border border-gray-300 text-gray-600 text-sm hover:bg-gray-50 transition-colors">
                      2
                    </button>
                  )}
                </>
              )}
            </div>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(currentPage + 1)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <button 
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(totalPages)}
              className="p-2 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
              <ChevronRight className="w-4 h-4 -ml-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-6 p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-[#1E3A8A] to-[#3B82F6] rounded-full flex items-center justify-center text-white text-xs font-bold shadow-sm">
            i
          </div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-gray-900 mb-2.5">안내사항</h4>
            <ul className="text-xs text-gray-700 space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B35] font-bold mt-0.5">•</span>
                <span>안전작업허가서는 작업 시작 전 반드시 승인을 받아야 합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B35] font-bold mt-0.5">•</span>
                <span>허가서 신규 등록 후 관련 부서의 승인이 필요합니다.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FF6B35] font-bold mt-0.5">•</span>
                <span>작업 종료 후에는 완료 보고를 진행해주세요.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}