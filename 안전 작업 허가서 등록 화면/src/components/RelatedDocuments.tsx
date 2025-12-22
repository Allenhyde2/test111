import { FileText, ChevronDown, User, BookOpen, Shield } from 'lucide-react';

export function RelatedDocuments() {
  return (
    <aside className="w-full lg:w-80 bg-white border border-gray-200 lg:border-t-0 lg:border-l rounded-lg lg:rounded-none overflow-hidden lg:overflow-y-auto">
      {/* 관련문서 */}
      <div className="p-4 border-b border-gray-200">
        <button className="w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#1a2332] to-[#2a3544] text-white rounded-lg hover:shadow-lg transition-all">
          <span className="font-medium">관련문서</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {/* 작성안내/부서 */}
      <div className="p-4">
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-gray-900 font-medium">작성안내</h3>
            <button className="px-3 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white text-xs rounded-lg hover:shadow-lg transition-all font-medium">
              화면안내
            </button>
          </div>

          {/* 작성자 정보 */}
          <div className="bg-white rounded-xl p-4 space-y-3 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-full flex items-center justify-center shadow-md">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-900 font-medium">ABCD회사 내부</div>
                <div className="text-xs text-gray-500">회로선</div>
              </div>
            </div>

            {/* Toggle */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-600 font-medium">자동저장</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gradient-to-r peer-checked:from-[#FF6B35] peer-checked:to-[#F7931E]"></div>
              </label>
            </div>
          </div>
        </div>

        {/* 안전 안내사항 */}
        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-300">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-[#FF6B35]" />
            <h4 className="text-sm text-gray-900 font-medium">안전 주요사항</h4>
          </div>
          <ul className="text-xs text-gray-700 space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B35] mt-0.5">•</span>
              <span>모든 필수 항목을 입력해주세요</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B35] mt-0.5">•</span>
              <span>작업 전 안전 교육을 이수하셔야 합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B35] mt-0.5">•</span>
              <span>허가서는 작업 시작 전 승인되어야 합니다</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B35] mt-0.5">•</span>
              <span>비상 연락망을 반드시 확인하세요</span>
            </li>
          </ul>
        </div>

        {/* 참고자료 */}
        <div className="mt-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="w-5 h-5 text-gray-600" />
            <h4 className="text-sm text-gray-900 font-medium">참고자료</h4>
          </div>
          <div className="space-y-2">
            <a href="#" className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#FF6B35] transition-colors p-2 rounded hover:bg-white">
              <FileText className="w-4 h-4" />
              <span>안전작업 매뉴얼.pdf</span>
            </a>
            <a href="#" className="flex items-center gap-2 text-xs text-gray-600 hover:text-[#FF6B35] transition-colors p-2 rounded hover:bg-white">
              <FileText className="w-4 h-4" />
              <span>작업허가서 작성예시.pdf</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}