import { useState } from 'react';
import { Home, ChevronDown, Search, Download, Filter, AlertCircle } from 'lucide-react';
import factoryMapImage from 'figma:asset/e8771f56f6d39c0121ba0dde67a281a7a10eab88.png';

export function Dashboard() {
  const [activeView, setActiveView] = useState('map');
  const [selectedFloor, setSelectedFloor] = useState('당진공장');
  const [workTab, setWorkTab] = useState<'field' | 'internal' | 'all'>('field');
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);

  // 현장작업 카테고리
  const fieldWorkCategories = [
    { name: '일반작업', count: 4, color: 'bg-[#FF6B35]' },
    { name: '화기작업', count: 2, color: 'bg-[#F7931E]' },
    { name: '교육작업', count: 1, color: 'bg-[#FFB84D]' },
    { name: '용접외 작업', count: 0, color: 'bg-[#1e3a5f]' },
    { name: '밀폐공간 작업', count: 0, color: 'bg-[#2d5a7b]' },
    { name: '전천안가/자격작업', count: 0, color: 'bg-[#4a7ba7]' },
    { name: '굴착작업', count: 0, color: 'bg-[#6a9bc3]' },
    { name: '방사선 관련 작업', count: 0, color: 'bg-[#8ab8d8]' },
    { name: '기타', count: 0, color: 'bg-gray-400' }
  ];

  // 내부작업 카테고리
  const internalWorkCategories = [
    { name: '제재자', count: 0, color: 'bg-[#FF6B35]' },
    { name: '이동식크레인', count: 0, color: 'bg-[#F7931E]' },
    { name: '고소작업자', count: 0, color: 'bg-[#FFB84D]' },
    { name: '고소작업대', count: 0, color: 'bg-[#1e3a5f]' },
    { name: '골재기', count: 0, color: 'bg-[#2d5a7b]' },
    { name: '기타', count: 0, color: 'bg-gray-400' }
  ];

  // 전체 카테고리
  const allWorkCategories = [
    { name: '일반작업', count: 0, color: 'bg-[#FF6B35]' },
    { name: '화기작업', count: 0, color: 'bg-[#F7931E]' },
    { name: '고소작업', count: 0, color: 'bg-[#FFB84D]' },
    { name: '중장비 작업', count: 0, color: 'bg-[#1e3a5f]' },
    { name: '특별관리 작업', count: 0, color: 'bg-[#2d5a7b]' },
    { name: '중전선/가스관련작업', count: 0, color: 'bg-[#4a7ba7]' },
    { name: '굴착작업', count: 0, color: 'bg-[#6a9bc3]' },
    { name: '방사선 관련 작업', count: 0, color: 'bg-[#8ab8d8]' },
    { name: '기타', count: 0, color: 'bg-gray-400' }
  ];

  // 현재 탭에 따른 카테고리 선택
  const workCategories = 
    workTab === 'field' ? fieldWorkCategories :
    workTab === 'internal' ? internalWorkCategories :
    allWorkCategories;

  // 총 건수 계산
  const totalCount = workCategories.reduce((sum, cat) => sum + cat.count, 0);

  const floors = ['당진공장', '포항공장', '인천공장', '중앙기술연구소'];

  // 공장 섹션별 작업 정보
  const sectionWorks = {
    'A역': { type: '일반작업', count: 2, workers: 12, risk: 'low' },
    'B구역': { type: '일반작업', count: 1, workers: 5, risk: 'low' },
    'C구역': { type: '교육작업', count: 1, workers: 8, risk: 'low' },
    'D구역': { type: '화기작업', count: 1, workers: 6, risk: 'high' },
    'E구역': { type: '화기작업', count: 1, workers: 7, risk: 'high' },
    'F구역': { type: '일반작업', count: 1, workers: 4, risk: 'low' },
    'G구역': { type: '화기작업', count: 1, workers: 9, risk: 'high' },
    'H구역': { type: '일반작업', count: 1, workers: 6, risk: 'low' },
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>대시보드</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">일 안전/장비현황</span>
      </div>

      {/* Page Title */}
      <div className="mb-6">
        <h1 className="text-gray-900 mb-1">일 안전/장비현황</h1>
        <p className="text-sm text-gray-600">실시간 작업 현황 및 장비 운영 상태를 확인하세요</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main Map Area */}
        <div className="xl:col-span-3">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Map Header */}
            <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                  <h2 className="text-gray-900">공정별 작업 종류 현황</h2>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Filter className="w-4 h-4" />
                    <span className="hidden md:inline">필터</span>
                  </button>
                  <button className="px-3 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2">
                    <Download className="w-4 h-4" />
                    <span className="hidden md:inline">내보내기</span>
                  </button>
                </div>
              </div>

              {/* Floor Tabs */}
              <div className="flex gap-2 overflow-x-auto">
                {floors.map((floor) => (
                  <button
                    key={floor}
                    onClick={() => setSelectedFloor(floor)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                      selectedFloor === floor
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {floor}
                  </button>
                ))}
              </div>
            </div>

            {/* Map View */}
            <div className="p-4 md:p-6">
              <div className="relative bg-white rounded-lg border border-gray-300 overflow-hidden">
                {/* Factory Map Image */}
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <img 
                    src={factoryMapImage} 
                    alt="당진공장 도면" 
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                  
                  {/* Clickable Sections Overlay */}
                  {selectedFloor === '당진공장' && (
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 563" preserveAspectRatio="xMidYMid meet">
                      {/* A구역 - 좌측 상단 녹색 영역 */}
                      <polygon
                        points="50,80 220,80 220,190 50,190"
                        fill={hoveredSection === 'A구역' ? 'rgba(255,107,53,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#FF6B35"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(255,107,53,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('A구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="135" y="135" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        A구역
                      </text>
                      
                      {/* B구역 - 좌측 하단 영역 */}
                      <polygon
                        points="50,200 220,200 220,320 50,320"
                        fill={hoveredSection === 'B구역' ? 'rgba(255,107,53,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#FF6B35"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(255,107,53,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('B구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="135" y="260" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        B구역
                      </text>
                      
                      {/* C구역 - 중앙 상단 베이지색 영역 */}
                      <polygon
                        points="230,80 550,80 550,190 230,190"
                        fill={hoveredSection === 'C구역' ? 'rgba(255,184,77,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#FFB84D"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(255,184,77,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('C구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="390" y="135" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        C구역
                      </text>
                      
                      {/* D구역 - 중앙 노란색 영역 */}
                      <polygon
                        points="230,200 550,200 550,320 230,320"
                        fill={hoveredSection === 'D구역' ? 'rgba(247,147,30,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#F7931E"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(247,147,30,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('D구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="390" y="260" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        D구역
                      </text>
                      
                      {/* E구역 - 우측 상단 파란색 영역 */}
                      <polygon
                        points="560,80 780,80 780,190 560,190"
                        fill={hoveredSection === 'E구역' ? 'rgba(247,147,30,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#F7931E"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(247,147,30,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('E구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="670" y="135" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        E구역
                      </text>
                      
                      {/* F구역 - 우측 하단 영역 */}
                      <polygon
                        points="560,200 780,200 780,320 560,320"
                        fill={hoveredSection === 'F구역' ? 'rgba(255,107,53,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#FF6B35"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(255,107,53,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('F구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="670" y="260" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        F구역
                      </text>
                      
                      {/* G구역 - 하단 분홍색 좌측 영역 */}
                      <polygon
                        points="230,330 490,330 490,480 230,480"
                        fill={hoveredSection === 'G구역' ? 'rgba(247,147,30,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#F7931E"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(247,147,30,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('G구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="360" y="405" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        G구역
                      </text>
                      
                      {/* H구역 - 하단 분홍색 우측 영역 */}
                      <polygon
                        points="500,330 780,330 780,480 500,480"
                        fill={hoveredSection === 'H구역' ? 'rgba(255,107,53,0.3)' : 'rgba(255,255,255,0.1)'}
                        stroke="#FF6B35"
                        strokeWidth="3"
                        className="cursor-pointer hover:fill-[rgba(255,107,53,0.2)] transition-all"
                        onMouseEnter={() => setHoveredSection('H구역')}
                        onMouseLeave={() => setHoveredSection(null)}
                      />
                      <text x="640" y="405" textAnchor="middle" fill="#1e3a5f" fontSize="18" fontWeight="700" className="pointer-events-none">
                        H구역
                      </text>

                      {/* Work Markers */}
                      {hoveredSection === 'A구역' && (
                        <>
                          <circle cx="135" cy="110" r="12" fill="#EF4444" opacity="0.9"/>
                          <text x="135" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">2</text>
                        </>
                      )}
                      {hoveredSection === 'B구역' && (
                        <>
                          <circle cx="135" cy="240" r="12" fill="#EF4444" opacity="0.9"/>
                          <text x="135" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'C구역' && (
                        <>
                          <circle cx="390" cy="110" r="12" fill="#10B981" opacity="0.9"/>
                          <text x="390" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'D구역' && (
                        <>
                          <circle cx="390" cy="240" r="12" fill="#F59E0B" opacity="0.9"/>
                          <text x="390" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'E구역' && (
                        <>
                          <circle cx="670" cy="110" r="12" fill="#F59E0B" opacity="0.9"/>
                          <text x="670" y="115" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'F구역' && (
                        <>
                          <circle cx="670" cy="240" r="12" fill="#EF4444" opacity="0.9"/>
                          <text x="670" y="245" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'G구역' && (
                        <>
                          <circle cx="360" cy="385" r="12" fill="#F59E0B" opacity="0.9"/>
                          <text x="360" y="390" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                      {hoveredSection === 'H구역' && (
                        <>
                          <circle cx="640" cy="385" r="12" fill="#EF4444" opacity="0.9"/>
                          <text x="640" y="390" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold">1</text>
                        </>
                      )}
                    </svg>
                  )}
                </div>

                {/* Section Info Popup */}
                {hoveredSection && sectionWorks[hoveredSection as keyof typeof sectionWorks] && (
                  <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 min-w-[200px] z-10">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-medium text-gray-900">{hoveredSection}</h4>
                      <button 
                        onClick={() => setHoveredSection(null)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">작업유형:</span>
                        <span className="font-medium text-gray-900">
                          {sectionWorks[hoveredSection as keyof typeof sectionWorks].type}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">작업건수:</span>
                        <span className="font-medium text-[#FF6B35]">
                          {sectionWorks[hoveredSection as keyof typeof sectionWorks].count}건
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">투입인원:</span>
                        <span className="font-medium text-gray-900">
                          {sectionWorks[hoveredSection as keyof typeof sectionWorks].workers}명
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">위험도:</span>
                        <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                          sectionWorks[hoveredSection as keyof typeof sectionWorks].risk === 'high'
                            ? 'bg-red-100 text-red-700 border border-red-200'
                            : 'bg-green-100 text-green-700 border border-green-200'
                        }`}>
                          {sectionWorks[hoveredSection as keyof typeof sectionWorks].risk === 'high' ? '높음' : '낮음'}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Legend */}
              <div className="mt-4 flex items-center justify-center gap-6 flex-wrap">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#EF4444] rounded-full flex items-center justify-center text-white text-xs">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-gray-700">위험작업</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#F59E0B] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">⚠</span>
                  </div>
                  <span className="text-sm text-gray-700">중점관리작업</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-[#10B981] rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-sm text-gray-700">일반작업</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar - Stats */}
        <div className="xl:col-span-1 space-y-6">
          {/* Work Statistics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-orange-50 to-orange-100">
              <div className="flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h3 className="text-gray-900 font-medium">작업 현황</h3>
              </div>
            </div>

            <div className="p-4">
              {/* Work Type Tabs */}
              <div className="flex gap-2 mb-4">
                <button 
                  onClick={() => setWorkTab('field')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    workTab === 'field'
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  현장작업
                </button>
                <button 
                  onClick={() => setWorkTab('internal')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    workTab === 'internal'
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  내부작업
                </button>
                <button 
                  onClick={() => setWorkTab('all')}
                  className={`flex-1 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                    workTab === 'all'
                      ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  전체
                </button>
              </div>

              {/* Filter Dropdown */}
              <div className="mb-4">
                <label className="block text-xs text-gray-700 mb-2 font-medium">
                  {workTab === 'field' ? '작업공정 현장' : 
                   workTab === 'internal' ? '인원공정 (100T)' : 
                   '인원공정 (100T)'}
                </label>
                <div className="relative">
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:border-[#FF6B35] appearance-none">
                    <option>전체 노출</option>
                    <option>위험작업만</option>
                    <option>일반작업만</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
              </div>

              {/* Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="대상자 불러오기"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35]"
                  />
                  <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Categories List */}
              <div className="space-y-2">
                {workCategories.map((category, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <div className={`w-3 h-3 ${category.color} rounded-sm`}></div>
                      <span className="text-sm text-gray-700">{category.name}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{category.count}건</span>
                  </div>
                ))}

                {/* Total */}
                <div className="flex items-center justify-between p-2 bg-gray-100 rounded-lg mt-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-gray-700 rounded-sm"></div>
                    <span className="text-sm text-gray-900 font-medium">발행 총건수</span>
                  </div>
                  <span className="text-sm font-bold text-gray-900">{totalCount}건</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-gradient-to-br from-[#1a2332] to-[#2a3544] rounded-xl shadow-lg p-4 text-white">
            <h3 className="text-sm font-medium mb-3 opacity-90">금일 작업 요약</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-xs opacity-80">총 작업건</span>
                <span className="text-lg font-bold">{totalCount}건</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs opacity-80">위험작업</span>
                <span className="text-lg font-bold text-[#FF6B35]">
                  {workTab === 'field' ? '4' : '0'}건
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs opacity-80">진행중</span>
                <span className="text-lg font-bold text-yellow-400">
                  {workTab === 'field' ? '3' : '0'}건
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}