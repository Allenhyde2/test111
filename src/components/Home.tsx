import { Home as HomeIcon, ChevronDown, AlertCircle, TrendingUp, Users, FileText, Clock, Wrench, ShieldAlert, AlertTriangle, StopCircle, QrCode } from 'lucide-react';
import qrCodeImage from 'figma:asset/3f47af7b7e89d550f26b8c9b4c0fd91f2640158e.png';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, PieChart, Pie, Cell } from 'recharts';

export function Home() {
  const [notificationFilter, setNotificationFilter] = useState<'all' | 'approval' | 'tbm'>('all');

  // 결재 진행 상태 데이터 (원형 그래프용)
  const approvalStatusData = [
    { name: '검토요청', value: 3, color: '#dc2626', stage: 1 }, // 빨간색 - 시작 단계
    { name: '검토중', value: 5, color: '#f59e0b', stage: 2 },   // 주황색 - 중간 단계
    { name: '승인대기', value: 4, color: '#eab308', stage: 3 }, // 노란색 - 거의 완료
    { name: '승인완료', value: 8, color: '#22c55e', stage: 4 }, // 초록색 - 완료
  ];

  const COLORS = ['#dc2626', '#f59e0b', '#eab308', '#22c55e'];

  // 공장별 진행 중 작업 데이터
  const ongoingWorkData = [
    { factory: '당진', count: 3 },
    { factory: '포항', count: 2 },
    { factory: '인천', count: 2 },
  ];

  // 출근 인원 데이터
  const attendanceData = {
    total: 57,
    completed: 52,
    percentage: 91
  };

  // 긴급 작업 리스트
  const urgentWorks = [
    '당진공장 A구역 화재감지기 점검',
    '인천공장 크레인 긴급 수리',
    '포항공장 가스누출 점검',
    '당진공장 전기설비 점검',
  ];

  // 공장별 위험도 예측 데이터
  const riskPredictionData = [
    { factory: '당진', current: 65, predicted: 72, threshold: 80 },
    { factory: '포항', current: 58, predicted: 63, threshold: 80 },
    { factory: '인천', current: 71, predicted: 68, threshold: 80 },
  ];

  // 시간대별 위험도 트렌드
  const hourlyRiskData = [
    { time: '06:00', risk: 45 },
    { time: '08:00', risk: 62 },
    { time: '10:00', risk: 68 },
    { time: '12:00', risk: 55 },
    { time: '14:00', risk: 71 },
    { time: '16:00', risk: 78 },
    { time: '18:00', risk: 65 },
    { time: '20:00', risk: 52 },
  ];

  // 위험 요인별 분석
  const riskFactorData = [
    { factor: '화기작업', value: 78 },
    { factor: '고소작업', value: 65 },
    { factor: '밀폐공간', value: 82 },
    { factor: '중량물', value: 58 },
    { factor: '전기작업', value: 71 },
  ];

  // 미진행 TBM 데이터
  const pendingTBMs = [
    { no: 55483, workplace: '인천공장', workName: '(냉각) Off-Line 일상 점검', department: '후판생산팀장', tbmDate: '2025-12-04', author: '김승삼' },
    { no: 55480, workplace: '인천공장', workName: '선소공정 spray 밸브식 점검', department: '설비(관리)협력업체', tbmDate: '2025-12-04', author: '김주현' },
    { no: 55477, workplace: '포항공장', workName: '용접 P-3 Crane 케블 남판 크랜 Magnet Pot 릴 센서 교체', department: '설비(관리)협력업체', tbmDate: '2025-12-04', author: '안병륭' },
  ];

  // 통합 알림 데이터
  const allNotifications = [
    {
      type: 'approval' as const,
      id: 'SW-2024-1201',
      title: '당진공장 A구역 용접작업',
      status: '긴급',
      statusColor: 'bg-red-100 text-red-800',
      author: '김철수',
      date: '2024.12.08',
      actionLabel: '결재'
    },
    {
      type: 'approval' as const,
      id: 'SW-2024-1202',
      title: '포항공장 화기작업 허가',
      status: '대기',
      statusColor: 'bg-yellow-100 text-yellow-800',
      author: '이영희',
      date: '2024.12.08',
      actionLabel: '결재'
    },
    {
      type: 'tbm' as const,
      id: 'TBM-55483',
      title: '(냉각) Off-Line 일상 점검',
      status: '미진행',
      statusColor: 'bg-yellow-100 text-yellow-800',
      author: '인천공장',
      date: '2025-12-04',
      actionLabel: '진행'
    },
    {
      type: 'approval' as const,
      id: 'SW-2024-1203',
      title: '인천공장 D구역 설비점검',
      status: '대기',
      statusColor: 'bg-yellow-100 text-yellow-800',
      author: '박민수',
      date: '2024.12.08',
      actionLabel: '결재'
    },
    {
      type: 'tbm' as const,
      id: 'TBM-55480',
      title: '선소공정 spray 밸브식 점검',
      status: '미진행',
      statusColor: 'bg-yellow-100 text-yellow-800',
      author: '인천공장',
      date: '2025-12-04',
      actionLabel: '진행'
    },
    {
      type: 'tbm' as const,
      id: 'TBM-55477',
      title: '용접 P-3 Crane 케블 남판 크랜 Magnet Pot 릴 센서 교체',
      status: '미진행',
      statusColor: 'bg-yellow-100 text-yellow-800',
      author: '포항공장',
      date: '2025-12-04',
      actionLabel: '진행'
    },
  ];

  // 필터링된 알림
  const filteredNotifications = allNotifications.filter(notification => {
    if (notificationFilter === 'all') return true;
    if (notificationFilter === 'approval') return notification.type === 'approval';
    if (notificationFilter === 'tbm') return notification.type === 'tbm';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
        <HomeIcon className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">Home</span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {/* Card 1 - 결재 대기 문서 with 원형 그래프 */}
        <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl shadow-lg p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <TrendingUp className="w-4 h-4 opacity-80" />
          </div>
          <div className="space-y-1 mb-3">
            <p className="text-xs opacity-90">결재 대기 문서</p>
            <p className="text-2xl font-bold">5건</p>
            <p className="text-xs opacity-75">전일 대비 +2건</p>
          </div>
          {/* 미니 원형 그래프 */}
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <ResponsiveContainer width={60} height={60}>
                  <PieChart>
                    <Pie
                      data={approvalStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={18}
                      outerRadius={28}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {approvalStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-x-2 gap-y-1">
                {approvalStatusData.map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <div 
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0" 
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs opacity-90 truncate">{item.name}</span>
                    <span className="text-xs font-medium">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 - 진행 중 작업 with 막대그래프 */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b] rounded-xl shadow-lg p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5" />
            </div>
            <TrendingUp className="w-4 h-4 opacity-80" />
          </div>
          <div className="space-y-1 mb-3">
            <p className="text-xs opacity-90">진행 중 작업</p>
            <p className="text-2xl font-bold">7건</p>
            <p className="text-xs opacity-75">당진 3건, 포항 2건, 인천 2건</p>
          </div>
          {/* 공장별 막대 그래프 */}
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm">
            <div className="space-y-2">
              {ongoingWorkData.map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="opacity-90">{item.factory}</span>
                    <span className="font-medium">{item.count}건</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-white to-[#4a7ba7] rounded-full transition-all duration-500"
                      style={{ width: `${(item.count / 3) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 - 금일 투입 인원 with 완료율 */}
        <div className="bg-gradient-to-br from-[#4a7ba7] to-[#6a9bc3] rounded-xl shadow-lg p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <TrendingUp className="w-4 h-4 opacity-80" />
          </div>
          <div className="space-y-1 mb-3">
            <p className="text-xs opacity-90">금일 투입 인원</p>
            <p className="text-2xl font-bold">57명</p>
            <p className="text-xs opacity-75">협력업체 근로자 포함</p>
          </div>
          {/* 출근 완료율 표시 */}
          <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs opacity-90">출근 완료</span>
              <span className="text-xs opacity-75">{attendanceData.completed}/{attendanceData.total}명</span>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-4xl font-bold">{attendanceData.percentage}%</div>
            </div>
            <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-white to-[#22c55e] rounded-full transition-all duration-500"
                style={{ width: `${attendanceData.percentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Card 4 - 긴급 작업 with 슬라이드 태그 리스트 */}
        <div className="bg-gradient-to-br from-[#F7931E] to-[#FFB84D] rounded-xl shadow-lg p-4 text-white overflow-hidden">
          <div className="flex items-center justify-between mb-2">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <AlertCircle className="w-4 h-4 opacity-80" />
          </div>
          <div className="space-y-1 mb-3">
            <p className="text-xs opacity-90">긴급 작업</p>
            <p className="text-2xl font-bold">{urgentWorks.length}건</p>
            <p className="text-xs opacity-75">즉시 확인 필요</p>
          </div>
          {/* 긴급 작업 태그 리스트 with 슬라이드업 & 페이드 효과 */}
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm relative h-20 overflow-hidden">
            <div className="animate-slide-up space-y-1.5">
              {[...urgentWorks, ...urgentWorks].map((work, index) => (
                <div 
                  key={index}
                  className="bg-white/20 rounded-md px-2 py-1.5 text-xs border border-white/30 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-1.5">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{work}</span>
                  </div>
                </div>
              ))}
            </div>
            {/* 상단/하단 페이드 효과 */}
            <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-[#F7931E]/30 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[#F7931E] via-[#F7931E]/80 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">안전작업허가서</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">일 안전작업허가서</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#4a7ba7] to-[#6a9bc3] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <Users className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">TBM</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#F7931E] to-[#FFB84D] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">월별교육보고서</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <Wrench className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">일 장비 사용 계획서</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#34D399] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <ShieldAlert className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">위험성평가(수급업체)</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#EF4444] to-[#F87171] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">유해위험요인 점검(개선)요청</p>
        </button>

        <button className="bg-white border-2 border-gray-200 rounded-xl p-4 hover:border-[#FF6B35] hover:shadow-md transition-all group">
          <div className="w-12 h-12 bg-gradient-to-br from-[#DC2626] to-[#EF4444] rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
            <StopCircle className="w-6 h-6 text-white" />
          </div>
          <p className="text-sm text-gray-900 font-medium">작업중지</p>
        </button>
      </div>

      {/* Approval Documents and Pending TBM - Side by Side on Desktop */}
      <div className="flex flex-col lg:flex-row gap-4 mb-4">
        {/* QR Code Section - Left Side (Narrow) */}
        <div className="bg-gradient-to-br from-[#1e3a5f] to-[#2d5a7b] rounded-xl shadow-lg p-4 text-white lg:w-48 flex-shrink-0 lg:self-start">
          <div className="flex flex-col items-center gap-3">
            <div className="w-full">
              <div className="flex items-center gap-2 mb-2">
                <QrCode className="w-4 h-4" />
                <h2 className="text-xs font-bold">디지털 안전 보건관리 시스템</h2>
              </div>
              <p className="text-xs opacity-90 mb-2">모바일에서 QR코드를 스캔하여 안전작업허가서를 빠르게 등록하세요</p>
            </div>
            <div className="flex-shrink-0">
              <div className="bg-white p-2 rounded-xl shadow-lg">
                <img 
                  src={qrCodeImage} 
                  alt="QR Code"
                  className="w-32 h-32 object-cover rounded-lg"
                />
              </div>
            </div>
            <ul className="text-xs opacity-80 space-y-0.5 w-full">
              <li>• 모바일 카메라로 QR코드 스캔</li>
              <li>• 안전작업허가서 즉시 등록</li>
              <li>• 실시간 현장 안전 관리</li>
            </ul>
          </div>
        </div>

        {/* Unified Notifications Section - Right Side (Wide) */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex-1">
          <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900 text-sm font-medium">알림현황</h2>
                <span className="text-xs text-gray-500">({filteredNotifications.length}건)</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <select
                    value={notificationFilter}
                    onChange={(e) => setNotificationFilter(e.target.value as 'all' | 'approval' | 'tbm')}
                    className="appearance-none bg-white border border-gray-300 rounded-lg px-3 py-1.5 pr-8 text-xs text-gray-700 hover:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35] focus:border-transparent transition-all cursor-pointer"
                  >
                    <option value="all">전체</option>
                    <option value="approval">결재대기문서</option>
                    <option value="tbm">안전점검회의</option>
                  </select>
                  <ChevronDown className="w-4 h-4 text-gray-500 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <button className="text-xs text-gray-600 hover:text-[#FF6B35] transition-colors">
                  전체보기 &gt;
                </button>
              </div>
            </div>
          </div>

          <div className="p-3 space-y-1.5 max-h-96 overflow-y-auto">
            {filteredNotifications.map((notification, index) => (
              <div key={index} className="flex items-center justify-between p-2.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium text-white shadow-sm ${
                      notification.type === 'approval' 
                        ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E]' 
                        : 'bg-gradient-to-r from-[#4a7ba7] to-[#6a9bc3]'
                    }`}>
                      {notification.type === 'approval' ? '결재대기문서' : '안전점검회의'}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-xs text-gray-500">{notification.id}</span>
                      <span className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium ${notification.statusColor}`}>
                        {notification.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-900 truncate">{notification.title}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{notification.author} · {notification.date}</p>
                  </div>
                </div>
                <button className={`ml-3 px-3 py-1 text-white rounded-lg hover:shadow-md transition-all text-xs whitespace-nowrap ${
                  notification.type === 'approval'
                    ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E]'
                    : 'bg-gradient-to-r from-[#4a7ba7] to-[#6a9bc3]'
                }`}>
                  {notification.actionLabel}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Risk Prediction Analytics Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden mb-4">
        <div className="px-4 py-3 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-1 h-4 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
              <h2 className="text-gray-900 text-sm font-medium">공장 위험 예측 분석</h2>
              <span className="text-xs text-gray-500">AI 기반 실시간 모니터링</span>
            </div>
            <button className="text-xs text-gray-600 hover:text-[#FF6B35] transition-colors">
              상세보기 &gt;
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* 결재 진행 상태 원형 그래프 - NEW */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm text-gray-700 mb-4 flex items-center gap-2">
                <FileText className="w-4 h-4 text-[#FF6B35]" />
                결재 진행 현황
              </h3>
              <div className="flex flex-col items-center">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={approvalStatusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {approvalStatusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        fontSize: '12px'
                      }} 
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="w-full space-y-2 mt-2">
                  {approvalStatusData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-3 h-3 rounded-full" 
                          style={{ backgroundColor: item.color }}
                        ></div>
                        <span className="text-gray-700">{item.name}</span>
                      </div>
                      <span className="font-medium text-gray-900">{item.value}건</span>
                    </div>
                  ))}
                </div>
              </div>
              {/* 진행 단계 표시 바 */}
              <div className="mt-4 pt-3 border-t border-gray-200">
                <div className="flex items-center justify-between text-xs text-gray-600 mb-1.5">
                  <span>진행 단계</span>
                  <span>40% 완료</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-[#dc2626] via-[#f59e0b] via-[#eab308] to-[#22c55e] rounded-full" style={{ width: '40%' }}></div>
                </div>
                <div className="flex justify-between text-xs mt-1.5">
                  <span className="text-[#dc2626]">시작</span>
                  <span className="text-[#22c55e]">완료</span>
                </div>
              </div>
            </div>

            {/* 공장별 위험도 예측 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm text-gray-700 mb-4 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-[#FF6B35]" />
                공장별 위험도 현황
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={riskPredictionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="factory" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="current" fill="#4a7ba7" name="현재 위험도" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="predicted" fill="#FF6B35" name="예측 위험도" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="threshold" fill="#dc2626" name="임계값" radius={[4, 4, 0, 0]} opacity={0.3} />
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
                  <span className="text-gray-600">인천공장 주의 필요</span>
                </div>
                <span className="text-[#FF6B35]">+7% 증가 예상</span>
              </div>
            </div>

            {/* 시간대별 위험도 트렌드 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm text-gray-700 mb-4 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#4a7ba7]" />
                시간대별 위험도 트렌드
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={hourlyRiskData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} domain={[0, 100]} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="risk" 
                    stroke="#4a7ba7" 
                    strokeWidth={3}
                    dot={{ fill: '#4a7ba7', r: 4 }}
                    activeDot={{ r: 6 }}
                    name="위험도"
                  />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#FF6B35]"></div>
                  <span className="text-gray-600">오후 4시 피크 예상</span>
                </div>
                <span className="text-[#4a7ba7]">평균 63점</span>
              </div>
            </div>

            {/* 위험 요인별 분석 */}
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
              <h3 className="text-sm text-gray-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-[#F7931E]" />
                위험 요인별 분석
              </h3>
              <ResponsiveContainer width="100%" height={220}>
                <RadarChart data={riskFactorData}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="factor" tick={{ fontSize: 11 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} tick={{ fontSize: 11 }} />
                  <Radar 
                    name="위험도" 
                    dataKey="value" 
                    stroke="#FF6B35" 
                    fill="#FF6B35" 
                    fillOpacity={0.5}
                    strokeWidth={2}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      border: '1px solid #e5e7eb',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }} 
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-3 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-[#dc2626]"></div>
                  <span className="text-gray-600">밀폐공간 작업 고위험</span>
                </div>
                <span className="text-[#dc2626]">82점</span>
              </div>
            </div>
          </div>

          {/* Summary Insights */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">고위험 작업 감지</p>
                  <p className="text-xs text-gray-600">인천공장 밀폐공간 작업 진행 중 (위험도 82점)</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg p-4 border border-yellow-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">피크 시간대 경고</p>
                  <p className="text-xs text-gray-600">오후 4시 경 위험도 최고점 도달 예상</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900 mb-1">예방 조치 권고</p>
                  <p className="text-xs text-gray-600">당진공장 화기작업 사전 안전점검 필요</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}