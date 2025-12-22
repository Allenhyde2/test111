import { Home, ChevronDown, Printer, Upload, Download, X } from 'lucide-react';
import { useState } from 'react';

export function MonthlyEducationReportNew() {
  const [year, setYear] = useState('2025');
  const [approvalToggle, setApprovalToggle] = useState(true);

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="flex-1 p-6 max-w-[1000px]">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <Home className="w-4 h-4" />
          <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          <span>산업안전보건법 부문</span>
          <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          <span>1) 안전부문</span>
          <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          <span>교육관리</span>
          <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
          <span className="text-[#FF6B35]">월별교육보고서</span>
        </div>

        {/* Page Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-gray-900">월별교육보고서</h1>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm text-center focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
              />
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">년</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">12</button>
              <button className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">월</button>
            </div>
            <div className="flex items-center gap-2 ml-4">
              <label className="text-sm text-gray-600">인쇄전용으로 출력하기</label>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50 flex items-center gap-2">
                <Printer className="w-4 h-4" />
                저장
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all">
                결재상신
              </button>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 space-y-6">
          {/* 기본정보 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              기본정보
            </h3>
            <div className="space-y-4">
              {/* 문서정보 */}
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">문서정보</label>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="문서" className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <span className="text-sm text-gray-600">-</span>
                  <input type="text" placeholder="소속" className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <span className="text-sm text-gray-600">-</span>
                  <input type="text" placeholder="ABC2서식번호" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <span className="text-sm text-gray-600">-</span>
                  <input type="text" placeholder="소속칭" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <span className="text-sm text-gray-600">-</span>
                  <input type="text" placeholder="ABC2서식 번" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                </div>
              </div>

              {/* 작성 */}
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">작성</label>
                <div className="flex items-center gap-4">
                  <input type="text" placeholder="성명" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <input type="text" placeholder="작성일자" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <input type="text" placeholder="부서명" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <input type="text" value="2025-12-04" readOnly className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50" />
                </div>
              </div>

              {/* 문서관리전표 */}
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">문서관리전표</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
              </div>
            </div>
          </section>

          {/* 교육정보 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육정보
            </h3>
            <div className="space-y-4">
              {/* 교육정보 */}
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">교육정보</label>
                <div className="flex items-center gap-2">
                  <input type="text" placeholder="과정 명칭" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <input type="text" placeholder="장 / 공정 / 부" className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <input type="text" placeholder="종" className="w-24 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                </div>
              </div>

              {/* 교육구분 */}
              <div className="flex gap-4">
                <label className="w-32 text-sm text-gray-700">교육구분</label>
                <div className="flex-1 grid grid-cols-2 gap-x-8 gap-y-3">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">산업안전보건교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">월 1시간 외부교육법실시</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">TBM(조회)</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">안전작업관리교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">소방교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">특별안전보건교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">월 1시간 외부교육법실시</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">안전보건관리교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">근골격계관리교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">기타교육</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                    <span className="text-sm text-gray-700">위험작업관리</span>
                  </label>
                </div>
              </div>
            </div>
          </section>

          {/* 교육비용 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육비용
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">교육비용1</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">구분</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">교육관리</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">교육장비</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">교육경비</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">특별경비</th>
                    <th className="px-4 py-3 text-sm text-gray-700">합계경비</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-r border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                    <td className="px-4 py-3 border-t border-gray-200">
                      <input type="text" className="w-full px-2 py-1 border-0 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 참석자 명단 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              참석자 명단
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">부서별(관계자)</label>
                <input type="text" placeholder="성명" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                <input type="text" placeholder="교육일자" className="w-40 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
              </div>
            </div>
          </section>

          {/* 교육결과 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육결과
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">날짜형</label>
                <div className="flex items-center gap-2 flex-1">
                  <input type="text" placeholder="시작일" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">장소</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
              </div>
              <div className="flex gap-4">
                <label className="w-32 text-sm text-gray-700 pt-2">주요내용</label>
                <textarea rows={4} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"></textarea>
              </div>
            </div>
          </section>

          {/* 교육내역서 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육내역서
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">교육내역서1</label>
                <div className="flex items-center gap-2 flex-1">
                  <input type="text" placeholder="시작일" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
                  <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                    <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <rect x="3" y="4" width="18" height="18" rx="2" strokeWidth="2"/>
                      <line x1="16" y1="2" x2="16" y2="6" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="8" y1="2" x2="8" y2="6" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="3" y1="10" x2="21" y2="10" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <label className="w-32 text-sm text-gray-700">장소</label>
                <input type="text" className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20" />
              </div>
              <div className="flex gap-4">
                <label className="w-32 text-sm text-gray-700 pt-2">주요내용</label>
                <textarea rows={4} className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"></textarea>
              </div>
            </div>
          </section>

          {/* 첨부사항 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              첨부사항
            </h3>
            <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600 space-y-2">
              <p>교육계획 등(교육관련 법 제29조제1항 및 제29조제2항에 따라 귀하의 회사 또는 귀하와 계약관계에 있는 회사의)</p>
              <p>근로자분들이 매월 실시하여야 하는 안전보건 중점교육과제 (날짜, 초과교육 중점교육과제)</p>
              <p>근로자분들이 귀하의 사업장에 있는 유해 ·위험요인과 그에 따른 작업 중 안전조치사항</p>
              <p>근로자분들이 작업 중 사고나 질병 발생 시 응급조치요령</p>
              <p>교육관련에 대해서 일반부서 등의협력업체 포함 신청 관련 기본성 포인트 일반을 업로드 하십니다</p>
            </div>
          </section>

          {/* 안전보건교육 실적 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              안전보건교육 실적
            </h3>
          </section>

          {/* 교육 참석자명 업로드 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육 참석자명 업로드
            </h3>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2">
                <Download className="w-4 h-4" />
                Excel 파일 등록
              </button>
            </div>
          </section>

          {/* 파일첨부 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              파일첨부
            </h3>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                파일첨부
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm bg-white hover:bg-gray-50">
                파일선택
              </button>
              <span className="text-sm text-gray-500">선택파일</span>
            </div>
          </section>

          {/* 파일 업로드 */}
          <section>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                  <Upload className="w-8 h-8 text-gray-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-700 mb-1">파일을 업로드하거나 파일을 끌어다놓으세요.</p>
                  <p className="text-xs text-gray-500">선택 파일 업로드 (최대 5 [건]) / 파일당 최대 50 [Bytes]</p>
                </div>
              </div>
            </div>
          </section>

          {/* 교육 자료 다운로드 */}
          <section>
            <h3 className="text-sm mb-4 flex items-center gap-2">
              <span className="text-[#FF6B35]">●</span>
              교육 자료 다운로드
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">세부명</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">목표민 시작</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">목표민 중용</th>
                    <th className="px-4 py-3 text-sm text-gray-700 border-r border-gray-200">목표관리</th>
                    <th className="px-4 py-3 text-sm text-gray-700">다운로드</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-8 border-t border-gray-200 text-center text-sm text-gray-500" colSpan={5}>
                      자료가 등록되지 않은 교육보고서입니다
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-gray-500 mt-8">
          COPYRIGHT ©2025 Digital SHM System, All rights Reserved. T.070-7907-7979
        </div>
      </div>

      {/* Right Sidebar - 결재 라인설정 */}
      <div className="w-80 bg-white border-l border-gray-200 p-6">
        <div className="sticky top-6">
          {/* 결재신청 버튼 */}
          <button className="w-full px-4 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all mb-4">
            결재신청
          </button>

          {/* 결재 라인설정 */}
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm text-gray-900">결재 라인설정</h3>
              <button className="px-3 py-1 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-xs">
                불러오기
              </button>
            </div>
            
            {/* 결재자 상신 토글 */}
            <div className="flex items-center justify-between py-3 border-b border-gray-200">
              <span className="text-sm text-gray-700">결재자 상신</span>
              <button 
                onClick={() => setApprovalToggle(!approvalToggle)}
                className={`relative w-11 h-6 rounded-full transition-colors ${
                  approvalToggle ? 'bg-green-500' : 'bg-gray-300'
                }`}
              >
                <span 
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    approvalToggle ? 'translate-x-5' : ''
                  }`}
                />
              </button>
            </div>

            {/* 설정자명 보기 */}
            <div className="py-3 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-2">
                <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                <span className="text-sm text-gray-700">설정자명 보기</span>
              </div>
            </div>

            {/* 메일발송체크 */}
            <div className="py-3">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4 text-[#4F46E5] focus:ring-[#4F46E5] rounded" />
                <span className="text-sm text-gray-700">메일발송체크</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2">
            <button className="w-full px-4 py-2 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all">
              결재상신
            </button>
            <button className="w-full px-4 py-2 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-all">
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
