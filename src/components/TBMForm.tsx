import { useState } from 'react';
import { Home, ChevronDown, Calendar, Upload, FileText, X } from 'lucide-react';

export function TBMForm({ onClose }: { onClose: () => void }) {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>출입관리 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>작업 전 안전점검회의(TBM)</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">작업 전 안전점검회의(TBM)</span>
      </div>

      {/* Page Title */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-gray-900 mb-1">작업 전 안전점검회의(TBM)</h1>
          <p className="text-sm text-gray-600">
            <span className="text-[#FF6B35]">등록</span> &gt; 작업 전 안전점검회의(TBM)
          </p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white">
            인쇄
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white">
            목록
          </button>
        </div>
      </div>

      {/* Form Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        {/* Section 1: 작업 및 안전점검회의(TBM) */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">작업 및 안전점검회의(TBM)</h2>
          </div>

          <div className="grid grid-cols-4 border border-gray-300">
            <div className="col-span-4 grid grid-cols-4 border-b border-gray-300">
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">사업장명</span>
              </div>
              <div className="px-4 py-3 border-r border-gray-300 flex items-center">
                <div className="relative w-full">
                  <select className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none">
                    <option>선택</option>
                    <option>포항공장</option>
                    <option>인천공장</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">사업장 주관 부서/협력업체</span>
              </div>
              <div className="px-4 py-3 flex items-center gap-2">
                <input
                  type="text"
                  className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                  placeholder=""
                />
                <button className="px-3 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all whitespace-nowrap">
                  검색
                </button>
              </div>
            </div>

            <div className="col-span-4 grid grid-cols-4 border-b border-gray-300">
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">작업명</span>
              </div>
              <div className="px-4 py-3 border-r border-gray-300 flex items-center">
                <input
                  type="text"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">작업</span>
              </div>
              <div className="px-4 py-3 flex items-center">
                <div className="relative w-full">
                  <select className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none">
                    <option>선택</option>
                  </select>
                  <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="col-span-4 grid grid-cols-4 border-b border-gray-300">
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">작업장소</span>
              </div>
              <div className="px-4 py-3 border-r border-gray-300 flex items-center">
                <input
                  type="text"
                  className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                  placeholder=""
                />
              </div>
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">작업기간</span>
              </div>
              <div className="px-4 py-3 flex items-center gap-2">
                <div className="relative flex-1">
                  <input
                    type="date"
                    className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                  />
                  <Calendar className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <span className="text-gray-400">~</span>
                <div className="relative flex-1">
                  <input
                    type="date"
                    className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                  />
                  <Calendar className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="col-span-4 grid grid-cols-4">
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 flex items-center">
                <span className="text-sm text-gray-700">작업내용</span>
              </div>
              <div className="col-span-3 px-4 py-3">
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 resize-none"
                  rows={3}
                  placeholder=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: 작업개요/안전조치사항 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
              <h2 className="text-gray-900">작업개요/안전조치사항</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">허가번호와 연결하여 불러오시겠습니까?</span>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="loadPermit" className="w-4 h-4" />
                <span className="text-sm">예</span>
              </label>
              <label className="flex items-center gap-1 cursor-pointer">
                <input type="radio" name="loadPermit" className="w-4 h-4" defaultChecked />
                <span className="text-sm">아니오</span>
              </label>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-gray-300">
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">분류</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">작업개요(작성자)</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">안전조치사항</span>
            </div>

            <div className="px-4 py-3 border-r border-b border-gray-300">
              <div className="relative">
                <select className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none">
                  <option>선택</option>
                </select>
                <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="px-4 py-3 border-r border-b border-gray-300">
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 resize-none"
                rows={2}
                placeholder=""
              />
            </div>
            <div className="px-4 py-3 border-b border-gray-300">
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 resize-none"
                rows={2}
                placeholder=""
              />
            </div>

            <div className="col-span-3 px-4 py-2 bg-gray-50">
              <button className="px-4 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all">
                등록
              </button>
            </div>
          </div>
        </div>

        {/* Section 3: 참여인원현황 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">참여인원현황</h2>
          </div>

          <div className="border border-gray-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">선택</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">참여인원분류</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">사번 / 성명 / 소속 / 휴대폰 번호</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-center text-sm text-gray-700">작업자정보</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-8 text-center text-sm text-gray-400 border-r border-gray-300" colSpan={4}>
                    데이터가 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 4: 교육자료현황 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">교육자료현황</h2>
          </div>

          <div className="border border-gray-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">선택</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">교육명</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">교육내용</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-center text-sm text-gray-700">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-8 text-center text-sm text-gray-400 border-r border-gray-300" colSpan={4}>
                    데이터가 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Section 5: TBM 사진 첨부 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">TBM 사진 첨부</h2>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">파일을 선택하세요</p>
                <p className="text-xs text-gray-500">이미지 파일을 끌어다 놓거나 클릭하여 업로드하세요</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">파일을 선택하세요</p>
                <p className="text-xs text-gray-500">이미지 파일을 끌어다 놓거나 클릭하여 업로드하세요</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 6: 작업 전 안전점검 체크리스트 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
              <h2 className="text-gray-900">작업 전 안전점검 체크리스트</h2>
              <span className="text-xs text-gray-500">※첨 안전점검체크리스트를 작성을 작성하지 않으면 등록 할 수 없습니다.</span>
            </div>
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all">
              등록
            </button>
          </div>

          <div className="grid grid-cols-2 border border-gray-300">
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">안전점검체크리스트 여부</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">TBM에 적용 할 추가 문서</span>
            </div>
            <div className="px-4 py-3 border-r border-gray-300 flex items-center justify-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="checklist" className="w-4 h-4" defaultChecked />
                <span className="text-sm">예</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="checklist" className="w-4 h-4" />
                <span className="text-sm">아니오</span>
              </label>
            </div>
            <div className="px-4 py-3 flex items-center">
              <input
                type="text"
                className="flex-1 px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                placeholder=""
              />
            </div>
          </div>
        </div>

        {/* Section 7: 작업 및 작업 관련서류 첨부 문서 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
              <h2 className="text-gray-900">작업 및 작업 관련서류 첨부 문서</h2>
            </div>
          </div>

          <div className="grid grid-cols-3 border border-gray-300">
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">문서명칭</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">TBM에 적용하는 관련서류 첨부(선택)</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">비고</span>
            </div>

            <div className="px-4 py-3 border-r border-b border-gray-300">
              <div className="relative">
                <select className="w-full px-3 py-1.5 pr-8 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 bg-white appearance-none">
                  <option>선택</option>
                </select>
                <ChevronDown className="absolute right-2 top-2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
            <div className="px-4 py-3 border-r border-b border-gray-300">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attachDoc" className="w-4 h-4" defaultChecked />
                <span className="text-sm">예</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer mt-1">
                <input type="radio" name="attachDoc" className="w-4 h-4" />
                <span className="text-sm">아니오</span>
              </label>
            </div>
            <div className="px-4 py-3 border-b border-gray-300">
              <input
                type="text"
                className="w-full px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20"
                placeholder=""
              />
            </div>

            <div className="col-span-3 px-4 py-2 bg-gray-50">
              <button className="px-4 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all">
                등록
              </button>
            </div>
          </div>
        </div>

        {/* Section 8: 부서별 점검 (화재폭발 관련 위험) */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
              <h2 className="text-gray-900">부서별 점검 : 화재폭발 관련 위험작업을 수행 하기 위해 관리 주관 부서 주임급 이상 또는 대리인</h2>
            </div>
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all whitespace-nowrap">
              부서별 점검 불러오기
            </button>
          </div>

          <div className="grid grid-cols-4 border border-gray-300">
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">점검부서명</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">관리</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-r border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">생산</span>
            </div>
            <div className="bg-gray-50 px-4 py-3 border-b border-gray-300 text-center">
              <span className="text-sm text-gray-700">설비</span>
            </div>

            <div className="px-4 py-3 border-r border-b border-gray-300">
              <span className="text-sm text-gray-700">작업장의 가연성물질 제거조치 및 잔유물 확인</span>
            </div>
            <div className="px-4 py-3 border-r border-b border-gray-300 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire1_manage" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>
            <div className="px-4 py-3 border-r border-b border-gray-300 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire1_prod" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>
            <div className="px-4 py-3 border-b border-gray-300 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire1_equip" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>

            <div className="px-4 py-3 border-r border-gray-300">
              <span className="text-sm text-gray-700">인화성물질/위험물 반입시 소방서 신고 여부 확인</span>
            </div>
            <div className="px-4 py-3 border-r border-gray-300 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire2_manage" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>
            <div className="px-4 py-3 border-r border-gray-300 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire2_prod" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>
            <div className="px-4 py-3 text-center">
              <label className="flex items-center justify-center gap-2 cursor-pointer">
                <input type="radio" name="fire2_equip" className="w-4 h-4" />
                <span className="text-sm">양호</span>
              </label>
            </div>
          </div>
        </div>

        {/* Section 9: 사전준비 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">사전준비</h2>
          </div>

          <div className="border border-gray-300">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">No</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">안전보호구명</th>
                  <th className="px-4 py-3 border-r border-b border-gray-300 text-center text-sm text-gray-700">수량</th>
                  <th className="px-4 py-3 border-b border-gray-300 text-center text-sm text-gray-700">비고</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-8 text-center text-sm text-gray-400 border-r border-gray-300" colSpan={4}>
                    데이터가 없습니다.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">파일을 선택하세요</p>
                <p className="text-xs text-gray-500">파일을 끌어다 놓거나 클릭하여 업로드하세요 (최대 5 MB)</p>
              </div>
            </div>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-sm text-gray-600 mb-1">파일을 선택하세요</p>
                <p className="text-xs text-gray-500">파일을 끌어다 놓거나 클릭하여 업로드하세요 (최대 5 MB)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 10: 비상연락 */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
            <h2 className="text-gray-900">비상연락</h2>
          </div>

          <div className="border border-gray-300">
            <div className="grid grid-cols-4 border-b border-gray-300">
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 text-center">
                <span className="text-sm text-gray-700">이름</span>
              </div>
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 text-center">
                <span className="text-sm text-gray-700">역할</span>
              </div>
              <div className="bg-gray-50 px-4 py-3 border-r border-gray-300 text-center">
                <span className="text-sm text-gray-700">전화번호</span>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center">
                <span className="text-sm text-gray-700">관리</span>
              </div>
            </div>
            <div className="px-4 py-8 text-center text-sm text-gray-400">
              데이터가 없습니다.
            </div>
          </div>
        </div>

        {/* Section 11: 특기사항 */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-[#4F46E5] to-[#7C3AED] rounded-full"></div>
              <h2 className="text-gray-900">특기사항</h2>
            </div>
            <button className="px-4 py-1.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded text-sm hover:shadow-lg transition-all">
              등록
            </button>
          </div>

          <textarea
            className="w-full px-4 py-3 border border-gray-300 rounded text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 resize-none"
            rows={4}
            placeholder="특기사항을 입력하세요"
          />
        </div>
      </div>

      {/* Bottom Action Buttons */}
      <div className="flex justify-center gap-2 mb-8">
        <button 
          onClick={onClose}
          className="px-6 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white"
        >
          취소
        </button>
        <button className="px-6 py-2.5 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all">
          저장
        </button>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500">
        COPYRIGHT ©2025 Digital SHM System, All rights Reserved. T.070-7907-7979
      </div>
    </div>
  );
}