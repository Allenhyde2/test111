import { useState } from 'react';
import { Home, ChevronDown, Calendar, User, Building2, MapPin, Clock, AlertTriangle, FileText, Download, Printer, CheckCircle, XCircle, Edit, Save, ArrowLeft, ChevronRight, Plus, Trash2, Upload } from 'lucide-react';

interface ExternalWorkDetailProps {
  onBack: () => void;
}

export function ExternalWorkDetail({ onBack }: ExternalWorkDetailProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    'applicant': true,
    'workType': true,
    'workInfo': true,
    'workPeriod': true,
    'safetyManager': true,
    'workers': true,
    'equipment': true,
    'riskAssessment': true,
    'safetyMeasures': true,
    'workMethod': true,
    'emergencyContact': true,
    'approval': true
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // 프로세스 단계
  const processSteps = [
    { label: '등록', status: 'completed' },
    { label: '입문', status: 'completed' },
    { label: '작업중', status: 'current' },
    { label: '작업완료', status: 'pending' },
    { label: '출문', status: 'pending' }
  ];

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
        <button onClick={onBack} className="text-gray-600 hover:text-[#FF6B35] transition-colors">
          외부공사·작업
        </button>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">작업 상세</span>
      </div>

      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <button 
              onClick={onBack}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <h1 className="text-gray-900 mb-0">외부공사·작업 상세정보</h1>
          </div>
          <p className="text-sm text-gray-600 ml-14">작업 상세 정보를 확인하고 관리하세요</p>
        </div>
        <div className="flex gap-2 ml-14 md:ml-0">
          <button className="px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all flex items-center gap-2 bg-white">
            <Printer className="w-4 h-4" />
            <span>인쇄</span>
          </button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2">
            <Save className="w-4 h-4" />
            <span>저장</span>
          </button>
        </div>
      </div>

      {/* Process Steps */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <div key={index} className="flex items-center flex-1">
              <div className="flex flex-col items-center flex-1">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold mb-2 ${
                  step.status === 'completed' 
                    ? 'bg-gradient-to-br from-green-500 to-green-600 text-white' 
                    : step.status === 'current'
                    ? 'bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}>
                  {step.status === 'completed' ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    index + 1
                  )}
                </div>
                <span className={`text-sm font-medium ${
                  step.status === 'current' ? 'text-[#FF6B35]' : 'text-gray-600'
                }`}>{step.label}</span>
              </div>
              {index < processSteps.length - 1 && (
                <div className={`h-0.5 flex-1 mx-2 ${
                  processSteps[index + 1].status === 'completed' || processSteps[index + 1].status === 'current'
                    ? 'bg-gradient-to-r from-green-500 to-[#FF6B35]'
                    : 'bg-gray-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {/* 허가 신청자 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('applicant')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">허가 신청자</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['applicant'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['applicant'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">업체명</label>
                  <input
                    type="text"
                    value="주식회사 티드콤"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">대표자명</label>
                  <input
                    type="text"
                    value="김대표"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">사업자등록번호</label>
                  <input
                    type="text"
                    value="123-45-67890"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">연락처</label>
                  <input
                    type="text"
                    value="02-1234-5678"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">사업장 주소</label>
                  <input
                    type="text"
                    value="서울특별시 강남구 테헤란로 123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">신청자</label>
                  <input
                    type="text"
                    value="김철수"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">직책</label>
                  <input
                    type="text"
                    value="현장소장"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 작업 구분 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('workType')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업 구분</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workType'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['workType'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업 형태</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white">
                    <option>공사</option>
                    <option>작업</option>
                    <option>점검</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">공종</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white">
                    <option>전기</option>
                    <option>기계</option>
                    <option>토목</option>
                    <option>건축</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업 규모</label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white">
                    <option>대규모</option>
                    <option>중규모</option>
                    <option>소규모</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 작업 정보 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('workInfo')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업 정보</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workInfo'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['workInfo'] && (
            <div className="p-4 md:p-6">
              {/* 안전작업허가서 정보 불러오기 */}
              <div className="mb-6 p-4 bg-gray-50 border border-gray-300 rounded-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-[#FF6B35]" />
                    <span className="text-sm font-medium text-gray-900">기존 안전작업허가서에서 정보 불러오기</span>
                  </div>
                  <button className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>정보 불러오기</span>
                  </button>
                </div>
              </div>

              {/* 작업허가 정보 */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#FF6B35] rounded-full"></div>
                  작업허가 정보
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">허가서 번호</label>
                    <input
                      type="text"
                      value="PTW-2024-001234"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">허가 유형</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white">
                      <option>일반작업허가</option>
                      <option>화기작업허가</option>
                      <option>밀폐공간작업허가</option>
                      <option>고소작업허가</option>
                      <option>굴착작업허가</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">허가 상태</label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-white">
                      <option>승인대기</option>
                      <option>승인완료</option>
                      <option>작업중</option>
                      <option>작업완료</option>
                      <option>반려</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* 기본 작업 정보 */}
              <div>
                <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <div className="w-1 h-4 bg-[#FF6B35] rounded-full"></div>
                  기본 작업 정보
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">사업장</label>
                    <input
                      type="text"
                      value="포항공장"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업장소</label>
                    <input
                      type="text"
                      value="GFRP 공정"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">발주부서</label>
                    <input
                      type="text"
                      value="설비팀"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업명</label>
                    <input
                      type="text"
                      value="사각형 와이어식 측벽형 고 교체 작업"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                  <div className="lg:col-span-3">
                    <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업내용</label>
                    <textarea
                      value="사각형 와이어식 측벽형 고 교체, 사각형 외유벽식 부문 교체, 안전문 호온방지 부문 교체, 사각형 부분, 사각형 확장시 측벽형 호른 구축"
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 작업 기간 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('workPeriod')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업 기간</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workPeriod'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['workPeriod'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">시작일</label>
                  <div className="relative">
                    <input
                      type="date"
                      value="2024-12-01"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">종료일</label>
                  <div className="relative">
                    <input
                      type="date"
                      value="2024-12-15"
                      className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                    <Calendar className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업시작시간</label>
                  <input
                    type="time"
                    value="09:00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">작업종료시간</label>
                  <input
                    type="time"
                    value="18:00"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 안전 책임자 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('safetyManager')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">안전 책임자</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['safetyManager'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['safetyManager'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">책임자명</label>
                  <input
                    type="text"
                    value="포항"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">연락처</label>
                  <input
                    type="text"
                    value="010-9999-8888"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">자격증</label>
                  <input
                    type="text"
                    value="산업안전기사"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">소속</label>
                  <input
                    type="text"
                    value="주식회사 티드콤"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 작업자 명단 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('workers')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업자 명단</h2>
              </div>
              <div className="flex items-center gap-3">
                {isEditing && (
                  <button className="px-3 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded text-xs hover:shadow-lg transition-all flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    추가
                  </button>
                )}
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workers'] ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </button>
          {expandedSections['workers'] && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-16">No.</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">성명</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">생년월일</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">연락처</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">직종</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">안전교육</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">건강상태</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { no: 1, name: '김철수', birth: '1985-03-15', phone: '010-1234-5678', job: '전기기사', edu: true, health: '양호' },
                    { no: 2, name: '이영희', birth: '1990-07-22', phone: '010-2345-6789', job: '배관공', edu: true, health: '양호' },
                    { no: 3, name: '박민수', birth: '1988-11-08', phone: '010-3456-7890', job: '용접공', edu: true, health: '양호' },
                    { no: 4, name: '정수현', birth: '1992-05-30', phone: '010-4567-8901', job: '안전관리자', edu: true, health: '양호' },
                  ].map((worker) => (
                    <tr key={worker.no} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-100">{worker.no}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100 font-medium">{worker.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{worker.birth}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{worker.phone}</td>
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-100">{worker.job}</td>
                      <td className="px-4 py-3 text-center border-r border-gray-100">
                        {worker.edu ? (
                          <CheckCircle className="w-4 h-4 text-green-600 mx-auto" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600 mx-auto" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          {worker.health}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 사용 장비 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('equipment')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">사용 장비</h2>
              </div>
              <div className="flex items-center gap-3">
                {isEditing && (
                  <button className="px-3 py-1.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded text-xs hover:shadow-lg transition-all flex items-center gap-1">
                    <Plus className="w-3 h-3" />
                    추가
                  </button>
                )}
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['equipment'] ? 'rotate-180' : ''}`} />
              </div>
            </div>
          </button>
          {expandedSections['equipment'] && (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-gray-50 to-white border-b-2 border-gray-200">
                  <tr>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200 w-16">No.</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">장비명</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 border-r border-gray-200">규격/모델</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 border-r border-gray-200">수량</th>
                    <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700">점검상태</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { no: 1, name: '고소작업대', spec: 'MEWP-15m', qty: 2, status: '정상' },
                    { no: 2, name: '용접기', spec: 'TIG-300A', qty: 3, status: '정상' },
                    { no: 3, name: '크레인', spec: '5톤', qty: 1, status: '정상' },
                    { no: 4, name: '전동공구세트', spec: 'BOSCH-PRO', qty: 5, status: '정상' },
                  ].map((equipment) => (
                    <tr key={equipment.no} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-100">{equipment.no}</td>
                      <td className="px-4 py-3 text-sm text-gray-900 border-r border-gray-100 font-medium">{equipment.name}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r border-gray-100">{equipment.spec}</td>
                      <td className="px-4 py-3 text-center text-sm text-gray-700 border-r border-gray-100">{equipment.qty}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700 border border-green-200">
                          {equipment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* 위험성 평가 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('riskAssessment')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">위험성 평가</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['riskAssessment'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['riskAssessment'] && (
            <div className="p-4 md:p-6">
              <div>
                <label className="block text-xs text-gray-600 mb-2 font-medium">주요 위험요인</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  defaultValue="1. 고소작업 시 추락 위험&#10;2. 중량물 취급 시 낙하 위험&#10;3. 용접 시 화재 위험&#10;4. 전기작업 시 감전 위험"
                />
              </div>
            </div>
          )}
        </div>

        {/* 안전 조치사항 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('safetyMeasures')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">안전 조치사항</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['safetyMeasures'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['safetyMeasures'] && (
            <div className="p-4 md:p-6">
              <div>
                <label className="block text-xs text-gray-600 mb-2 font-medium">안전대책</label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  defaultValue="1. 안전대 착용 및 안전난간 설치&#10;2. 중량물 취급 시 신호수 배치&#10;3. 소화기 비치 및 화기작업 허가&#10;4. 전기작업 전 전원 차단 확인"
                />
              </div>
            </div>
          )}
        </div>

        {/* 작업 방법 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('workMethod')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업 방법</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['workMethod'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['workMethod'] && (
            <div className="p-4 md:p-6">
              <div>
                <label className="block text-xs text-gray-600 mb-2 font-medium">작업 절차</label>
                <textarea
                  rows={5}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  placeholder="작업 절차를 단계별로 입력하세요"
                />
              </div>
            </div>
          )}
        </div>

        {/* 비상연락망 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('emergencyContact')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">비상연락망</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['emergencyContact'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['emergencyContact'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">119 소방서</label>
                  <input
                    type="text"
                    value="119"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all bg-gray-50"
                    readOnly
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">현장 책임자</label>
                  <input
                    type="text"
                    value="010-9999-8888"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1.5 font-medium">안전관리자</label>
                  <input
                    type="text"
                    value="010-8888-7777"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 승인 현황 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <button
            onClick={() => toggleSection('approval')}
            className="w-full p-4 md:p-5 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-colors"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">승인 현황</h2>
              </div>
              <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${expandedSections['approval'] ? 'rotate-180' : ''}`} />
            </div>
          </button>
          {expandedSections['approval'] && (
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-600 mb-3">신청</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">김철수</div>
                      <div className="text-xs text-gray-500">주식회사 티드콤</div>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">2024-12-08 09:00</div>
                </div>

                <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                  <div className="text-sm text-gray-600 mb-3">검토</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green-700" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">정수현</div>
                      <div className="text-xs text-gray-500">안전관리팀</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-300">
                      승인완료
                    </span>
                    <span className="text-xs text-gray-500">2024-12-08 10:30</span>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg">
                  <div className="text-sm text-gray-600 mb-3">최종승인</div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-gray-500" />
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">이진영</div>
                      <div className="text-xs text-gray-500">현장관리팀</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-300">
                      대기중
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 pt-4">
          <button 
            onClick={onBack}
            className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-gray-700"
          >
            목록으로
          </button>
          <div className="flex gap-3">
            <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-all text-gray-700">
              임시저장
            </button>
            <button className="px-8 py-3 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg hover:shadow-lg transition-all">
              승인 요청
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}