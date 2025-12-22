import { useState } from 'react';
import { Home, ChevronDown, Calendar, FileDown, Search, Plus } from 'lucide-react';

export function DailyEquipmentPlan() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>출입관리 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">일 장비사용 계획서</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">일 장비사용 계획서</h1>
        <p className="text-sm text-gray-600">일일 장비 사용 계획을 관리합니다</p>
      </div>

      {/* Filter & Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
            <h2 className="text-gray-900">검색 조건</h2>
          </div>
          
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

            {/* 검색 버튼 */}
            <div className="flex items-end">
              <button className="w-full px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
                <Search className="w-4 h-4" />
                <span>검색</span>
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="p-4 flex justify-end gap-2">
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center gap-2 bg-white">
            <FileDown className="w-4 h-4" />
            <span>List Excel 다운로드</span>
          </button>
          <button className="px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <Plus className="w-4 h-4" />
            <span>신규등록</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Items per page selector */}
        <div className="p-4 border-b border-gray-200 flex items-center gap-2 bg-gradient-to-r from-gray-50 to-white">
          <select 
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white"
          >
            <option value={10}>10개씩 보기</option>
            <option value={20}>20개씩 보기</option>
            <option value={50}>50개씩 보기</option>
            <option value={100}>100개씩 보기</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
              <tr>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-16">No.</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">사업장명</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">상태</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">등록일자</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">
                  물품명<br />
                  <span className="text-[10px] text-gray-500">(작업 분류)</span>
                </th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">작업시작일</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">시작시간</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">종료시간</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">구분</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">현황별</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">작업장/지원</th>
                <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">비고</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              <tr>
                <td colSpan={12} className="px-4 py-20 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-400">
                    <svg className="w-16 h-16 mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                    </svg>
                    <p className="text-sm font-medium">표시할 데이터가 없습니다.</p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-center gap-1">
            <button className="p-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <ChevronDown className="w-4 h-4 rotate-90 text-gray-600" />
            </button>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <span className="text-sm text-gray-600">&lt;</span>
            </button>
            <button className="px-3 py-1.5 rounded bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-sm min-w-[32px] shadow-md">
              1
            </button>
            <button className="px-3 py-1.5 rounded hover:bg-gray-100 transition-colors text-sm text-gray-600 min-w-[32px]">
              2
            </button>
            <span className="px-2 text-gray-400">/</span>
            <span className="px-2 text-gray-600 text-sm">1</span>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
              <span className="text-sm text-gray-600">&gt;</span>
            </button>
            <button className="p-2 rounded hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
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