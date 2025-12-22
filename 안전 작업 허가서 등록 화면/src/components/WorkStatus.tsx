import { Home, ChevronDown } from 'lucide-react';

export function WorkStatus() {
  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>마이페이지</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">업무현황</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">업무현황</h1>
      </div>

      {/* 전체 분야 Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <h2 className="text-gray-900">전체 분야</h2>
        </div>

        <div className="space-y-2">
          <div className="text-sm text-gray-700">
            <span className="text-gray-600">분야명 : </span>
            <span>안전환경통합전산시스템</span>
          </div>
          <div className="text-sm text-gray-700">
            <span className="text-gray-600">내분야(2) : </span>
            <span>-</span>
          </div>
        </div>
      </div>

      {/* 결재진행 Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
          <h2 className="text-gray-900">결재진행</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">결재진행 중인 문서</div>
            <div className="text-2xl text-gray-900">0개</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">결재작성 문서</div>
            <div className="text-2xl text-gray-900">0개</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">결재예정 문서</div>
            <div className="text-2xl text-gray-900">0개</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-sm text-gray-600 mb-2">결재완료 문서</div>
            <div className="text-2xl text-gray-900">0개</div>
          </div>
        </div>
      </div>

      {/* 방법 Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <h2 className="text-gray-900">방법</h2>
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white">
            다운기
          </button>
        </div>

        <div className="mb-4">
          <p className="text-sm text-gray-600">아래의 업무현황 탭메뉴 내에서 다른데이</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">최근 결재진행 문서 (연대)</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">최근 결재진행 문자 (연대)</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">최근 결재작성 문서 (연대)</span>
          </div>
          <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <span className="text-sm text-gray-700">최근 완료현황 문서 (연대)</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-xs text-gray-500 mt-8">
        COPYRIGHT ©2025 Digital SHM System, All rights Reserved. T.070-7907-7979
      </div>
    </div>
  );
}
