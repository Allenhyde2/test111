import { useState } from 'react';
import { Home, Calendar, Users, ChevronDown, HelpCircle, Save, Send, AlertCircle, Upload, FileText, UserPlus, Trash2, Plus, CheckCircle, Building2, User, Download, X, Search } from 'lucide-react';

interface Worker {
  id: number;
  name: string;
  position: string;
  birthDate: string;
  certificate: string;
  checked: boolean;
}

export function SafetyPermitForm() {
  const [activeTab, setActiveTab] = useState('basic');
  const [workers, setWorkers] = useState<Worker[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [isWorkerModalOpen, setIsWorkerModalOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);

  // 모달용 더미 사용자 데이터
  const [availableUsers] = useState([
    { id: 1, name: '김철수', workplace: '당산공장, 포항공장, 인천공장, 중앙...', team: '압연공정팀', dept: '신설분자스-어열팀', certificate: '손수슨 사원 (******-813386)' },
    { id: 2, name: '이영희', workplace: '당산공장, 포항공장, 인천공장, 중앙...', team: '신설분자스-어열팀', dept: '신설분자스-어열팀', certificate: '에션원 사원 (*****-4345)' },
    { id: 3, name: '박민수', workplace: '당산공장, 포항공장, 인천공장, 중앙...', team: '에스엘이염씨', dept: '에스엘이염씨', certificate: '박돌로 사원 (*****-g100f)' },
    { id: 4, name: '정수진', workplace: '당산공장, 포항공장, 인천공장, 중앙...', team: '에스엘이염씨', dept: '에스엘이염씨', certificate: '김명로 사원 (**********38716)' },
    { id: 5, name: '최동욱', workplace: '당산공장, 포항공장, 인천공장, 중앙...', team: '에스엘이염씨', dept: '에스엘이염씨', certificate: '김미규 사원 (****-6145)' },
  ]);
  const [modalSelectedUsers, setModalSelectedUsers] = useState<number[]>([]);
  const [modalSelectAll, setModalSelectAll] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchType, setSearchType] = useState('이름');

  const addWorker = () => {
    setIsWorkerModalOpen(true);
  };

  const toggleSelectAll = () => {
    const newSelectAll = !selectAll;
    setSelectAll(newSelectAll);
    setWorkers(workers.map(w => ({ ...w, checked: newSelectAll })));
  };

  const toggleWorkerCheck = (id: number) => {
    const updatedWorkers = workers.map(w => 
      w.id === id ? { ...w, checked: !w.checked } : w
    );
    setWorkers(updatedWorkers);
    setSelectAll(updatedWorkers.length > 0 && updatedWorkers.every(w => w.checked));
  };

  const toggleModalUserSelect = (userId: number) => {
    if (modalSelectedUsers.includes(userId)) {
      setModalSelectedUsers(modalSelectedUsers.filter(id => id !== userId));
    } else {
      setModalSelectedUsers([...modalSelectedUsers, userId]);
    }
  };

  const toggleModalSelectAll = () => {
    if (modalSelectAll) {
      setModalSelectedUsers([]);
      setModalSelectAll(false);
    } else {
      setModalSelectedUsers(availableUsers.map(u => u.id));
      setModalSelectAll(true);
    }
  };

  const addSelectedUsersToWorkers = () => {
    const selectedUsers = availableUsers.filter(u => modalSelectedUsers.includes(u.id));
    const newWorkers = selectedUsers.map((u, idx) => ({
      id: workers.length > 0 ? Math.max(...workers.map(w => w.id)) + idx + 1 : idx + 1,
      name: u.name,
      position: u.team,
      birthDate: u.certificate.match(/\d+/)?.[0] || '',
      certificate: u.certificate,
      checked: false
    }));
    setWorkers([...workers, ...newWorkers]);
    setModalSelectedUsers([]);
    setModalSelectAll(false);
    setIsWorkerModalOpen(false);
  };

  const deleteSelectedWorkers = () => {
    setWorkers(workers.filter(w => !w.checked));
    setSelectAll(false);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 max-w-full mx-auto">
      {/* Main Form Section */}
      <div className="flex-1 min-w-0">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>출입관리 부문</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">안전작업허가서</span>
      </div>

      {/* Page Title & Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-gray-900 mb-1">안전작업허가서</h1>
          <p className="text-sm text-gray-600">작업 시작 전 필수 안전 허가서를 작성해주세요</p>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 md:flex-none px-4 py-2.5 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
            <Save className="w-4 h-4" />
            <span>임시저장</span>
          </button>
          <button className="flex-1 md:flex-none px-4 py-2.5 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center justify-center gap-2">
            <Send className="w-4 h-4" />
            <span>제출</span>
          </button>
        </div>
      </div>

      {/* Form Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* 기본정보 Section */}
        <div className="p-4 md:p-6 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
            <h2 className="text-gray-900">기본정보</h2>
            <span className="text-xs text-[#FF6B35] bg-orange-50 px-2 py-1 rounded">필수</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/* 사업장명 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">
                사업장명 <span className="text-[#FF6B35]">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                  <option value="">선택하세요</option>
                  <option value="1">포항제철소</option>
                  <option value="2">당진제철소</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 발주부서 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">
                발주부서 <span className="text-[#FF6B35]">*</span>
              </label>
              <div className="relative">
                <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                  <option value="">선택하세요</option>
                  <option value="1">생산부</option>
                  <option value="2">설비부</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* 업체명 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">
                업체명 <span className="text-[#FF6B35]">*</span>
              </label>
              <input
                type="text"
                placeholder="협력업체명을 입력하세요"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
              />
            </div>

            {/* 작성자 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">작성자</label>
              <input
                type="text"
                value="홍길동"
                readOnly
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50 text-gray-600"
              />
            </div>

            {/* 작성일 */}
            <div>
              <label className="block text-sm text-gray-700 mb-2 font-medium">작성일</label>
              <div className="relative">
                <input
                  type="date"
                  defaultValue="2025-12-04"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                />
                <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* 할일 대상자 선택 */}
        <div className="p-4 md:p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-gray-50 rounded-lg border border-gray-300">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-[#FF6B35]" />
              <label className="text-sm text-gray-700 font-medium">할일 대상자 선택</label>
            </div>
            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Users className="w-4 h-4 text-gray-600" />
              <span className="text-sm">대상자 지정</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 bg-gray-50">
          <div className="flex overflow-x-auto">
            <button
              onClick={() => setActiveTab('basic')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'basic'
                  ? 'border-[#FF6B35] text-[#FF6B35] bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              작업허가서 정보(신청자)
            </button>
            <button
              onClick={() => setActiveTab('emergency')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'emergency'
                  ? 'border-[#FF6B35] text-[#FF6B35] bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              비일상 위험성평가 정보(단위부서)
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'documents'
                  ? 'border-[#FF6B35] text-[#FF6B35] bg-white'
                  : 'border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              사외수급업체 서류평가(안전환경팀)
            </button>
          </div>
        </div>

        {/* 안전작업허가서 정보 */}
        {activeTab === 'basic' && (
          <div className="p-4 md:p-6 space-y-8">
            {/* 안전작업허가서 정보 */}
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">안전작업허가서 정보</h2>
                <span className="text-xs text-[#FF6B35] bg-orange-50 px-2 py-1 rounded">필수</span>
              </div>

              <div className="space-y-6">
                {/* 공종명 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    공종명 <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="예: 배관공사, 전기공사 등"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>

                {/* 작업기간 그룹 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 font-medium">
                        작업 시작일 <span className="text-[#FF6B35]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                        />
                        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm text-gray-700 mb-2 font-medium">
                        작업 종료일 <span className="text-[#FF6B35]">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                        />
                        <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      작업장 명칭 <span className="text-[#FF6B35]">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="작업장 위치를 입력하세요"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                </div>

                {/* 작업장/관리자 정보 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">
                      작업장 구분 <span className="text-[#FF6B35]">*</span>
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                        <option value="">선택하세요</option>
                        <option value="1">실내</option>
                        <option value="2">실외</option>
                        <option value="3">고소</option>
                        <option value="4">밀폐공간</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium flex items-center gap-1">
                      산업안전관리자
                      <HelpCircle className="w-4 h-4 text-gray-400 cursor-help" title="작업을 감독하는 안전관리자" />
                    </label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                        <option value="">선택하세요</option>
                        <option value="1">김철수</option>
                        <option value="2">이영희</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm text-gray-700 mb-2 font-medium">작업책임자</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                        <option value="">선택하세요</option>
                        <option value="1">박현대</option>
                        <option value="2">최민수</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* 작업구역 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    작업구역 <span className="text-[#FF6B35]">*</span>
                  </label>
                  <div className="relative">
                    <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all appearance-none bg-white">
                      <option value="">선택하세요</option>
                      <option value="1">1공장 A구역</option>
                      <option value="2">1공장 B구역</option>
                      <option value="3">2공장 A구역</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* 공사/작업명 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    공사/작업명 <span className="text-[#FF6B35]">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="수행할 작업의 명칭을 입력하세요"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                </div>

                {/* 세부 작업내용 */}
                <div>
                  <label className="block text-sm text-gray-700 mb-2 font-medium">
                    세부 작업내용 <span className="text-[#FF6B35]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    placeholder="작업 내용을 상세히 입력해주세요&#10;- 작업 범위&#10;- 사용 장비&#10;- 안전 조치사항&#10;- 기타 특이사항"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all resize-none"
                  />
                </div>
              </div>
            </div>

            {/* 작업 계획 첨부자료 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업 계획 첨부자료</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* 근로계획 서류 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#FF6B35] transition-colors">
                  <label className="block text-sm text-gray-700 mb-3 font-medium">근로계획 서류</label>
                  <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#FF6B35] hover:bg-orange-50 transition-colors flex flex-col items-center gap-2">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-xs text-gray-500">파일 업로드</span>
                  </button>
                </div>

                {/* 산업안전보건관리비 사용계획서 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#FF6B35] transition-colors">
                  <label className="block text-sm text-gray-700 mb-3 font-medium">산업안전보건관리비<br/>사용계획서</label>
                  <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#FF6B35] hover:bg-orange-50 transition-colors flex flex-col items-center gap-2">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-xs text-gray-500">파일 업로드</span>
                  </button>
                </div>

                {/* 안전보건교육계획서 */}
                <div className="p-4 border border-gray-200 rounded-lg hover:border-[#FF6B35] transition-colors">
                  <label className="block text-sm text-gray-700 mb-3 font-medium">안전보건교육계획서</label>
                  <button className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#FF6B35] hover:bg-orange-50 transition-colors flex flex-col items-center gap-2">
                    <Upload className="w-5 h-5 text-gray-400" />
                    <span className="text-xs text-gray-500">파일 업로드</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 관리감독자 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">관리감독자</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* 안전책임자 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <label className="block text-sm text-gray-700 mb-3 font-medium">안전책임자</label>
                  <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-[#FF6B35] transition-colors flex items-center justify-center gap-2">
                    <UserPlus className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">담당자 선택</span>
                  </button>
                </div>

                {/* 안전관리자 */}
                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <label className="block text-sm text-gray-700 mb-3 font-medium">안전관리자</label>
                  <button className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg hover:border-[#FF6B35] transition-colors flex items-center justify-center gap-2">
                    <UserPlus className="w-5 h-5 text-gray-400" />
                    <span className="text-sm text-gray-600">담당자 선택</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 협조사항 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">협조사항</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <ol className="text-xs text-gray-700 space-y-2 list-decimal list-inside">
                    <li>공사업체는 공사착공 전 안전작업허가서를 수립하여 안전보건업무관리자에게 제출, 인증을받을 후 착공하여야 합니다.</li>
                    <li>안전작업허가서 발급 시 특별안전교육 실시확인서 및 공사업체 등록증 첨부하여야 하며, 각종공사 관련 자료 첨부가 필요합니다.</li>
                    <li>산업안전 기관 또는 대학 자격, 안전 교육이수증 등은, 안전보건 자격 면허자격이 필요하며 증빙 자료를 제출하여야 합니다.</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* 공지사항 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">공지사항</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35]" />
                      <span className="text-sm text-gray-700">
                        동국제강 안전 수칙을 숙지하고 준수하며, 관련 법규(산업안전보건법 등)를 준수합니다.
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35]" />
                      <span className="text-sm text-gray-700">
                        비상 연락망 및 작업 중지권한에 대한 교육을 이수하였으며, 비상 연락처를 숙지하였습니다. (대표번호: 041-XXX-XXXX / 응급콜센터: 119)
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" className="mt-1 w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35]" />
                      <span className="text-sm text-gray-700">
                        안전교육 이수 및 작업자 적격성을 담보하며, 작업 전 안전 점검을 수행하겠습니다.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 작업자 명단 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">공사인원</h2>
              </div>

              {/* 안내사항 */}
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-gray-700 mb-2">※안내</p>
                <p className="text-xs text-gray-700 mb-1">1. 중입건 편등시 수정등록 및 각 공작 인원 아래와 통보할 것</p>
                <p className="text-xs text-gray-700 mb-1 ml-4">- 인천공장 : 032-830-6347 / 포항공장 : 054-721-3232 / 당진공장 : 041-351-4621 / 중형기술연구소 : 054-271-2715</p>
                <p className="text-xs text-gray-700">2. 인원의 돌이때 경우 '일체추가'버튼을 이용하여 계속 추가할 수 있습니다.</p>
              </div>

              {/* 버튼 영역 */}
              <div className="flex justify-end gap-2 mb-4">
                <button 
                  onClick={addWorker}
                  className="px-4 py-2 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white rounded-lg text-sm hover:shadow-lg transition-all flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>항목추가</span>
                </button>
                <button 
                  onClick={deleteSelectedWorkers}
                  disabled={!workers.some(w => w.checked)}
                  className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>선택삭제</span>
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 border-b border-r">
                        <input 
                          type="checkbox" 
                          checked={selectAll}
                          onChange={toggleSelectAll}
                          className="w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35] cursor-pointer" 
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">No.</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">성명</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">직위(직책)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">생년월일(6자리)</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b">건설현 기초안전보건교육 수료증</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {workers.length === 0 ? (
                      <tr>
                        <td colSpan={6} className="px-4 py-8 text-center text-sm text-gray-500">
                          항목추가 버튼을 눌러 공사인원을 추가해주세요
                        </td>
                      </tr>
                    ) : (
                      workers.map((worker, index) => (
                        <tr key={worker.id} className="border-b border-gray-200 hover:bg-gray-50">
                          <td className="px-4 py-3 text-center border-r">
                            <input 
                              type="checkbox" 
                              checked={worker.checked}
                              onChange={() => toggleWorkerCheck(worker.id)}
                              className="w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35] cursor-pointer" 
                            />
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r">{index + 1}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r">{worker.name}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r">{worker.position}</td>
                          <td className="px-4 py-3 text-sm text-gray-700 border-r">{worker.birthDate}</td>
                          <td className="px-4 py-3 text-sm text-gray-700">{worker.certificate}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

              {/* 하단 정보 */}
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-600" />
                    <label className="text-sm text-gray-700 font-medium">총 인원</label>
                  </div>
                  <input 
                    type="text"
                    placeholder="0"
                    className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                  />
                  <div className="flex items-center gap-2 flex-1">
                    <label className="text-sm text-gray-700 font-medium">업체 비상연락처</label>
                    <input 
                      type="text"
                      placeholder="연락처 입력"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-2 focus:ring-[#FF6B35]/20 transition-all"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <label className="flex items-start gap-2 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 text-[#FF6B35] border-gray-300 rounded focus:ring-[#FF6B35]" />
                    <div>
                      <p className="text-sm text-gray-700 font-medium">출입/작업시 필수 안전조치</p>
                      <p className="text-xs text-gray-600 mt-1">(필수확인)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* 작업일정 */}
            <div className="pt-6 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full"></div>
                <h2 className="text-gray-900">작업일정</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <input type="radio" name="schedule" className="w-4 h-4 text-[#FF6B35]" defaultChecked />
                    <span>작업일정</span>
                  </label>
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm text-gray-700 mb-2">
                    <input type="radio" name="schedule" className="w-4 h-4 text-[#FF6B35]" />
                    <span>전체일시</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>

      {/* 사용자 검색 모달 */}
      {isWorkerModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col">
            {/* 모달 헤더 */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-50 to-white">
              <h2 className="text-gray-900">사용자 검색</h2>
              <button 
                onClick={() => {
                  setIsWorkerModalOpen(false);
                  setModalSelectedUsers([]);
                  setModalSelectAll(false);
                }}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            {/* 검색 영역 */}
            <div className="px-6 py-4 border-b border-gray-200 bg-gray-50">
              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-sm text-gray-700 font-medium whitespace-nowrap">검색조건</label>
                  <select 
                    value={searchType}
                    onChange={(e) => setSearchType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20 bg-white"
                  >
                    <option>이름</option>
                    <option>부서</option>
                    <option>소속팀</option>
                  </select>
                </div>
                <div className="flex items-center gap-2 flex-1">
                  <label className="text-sm text-gray-700 font-medium whitespace-nowrap">키워드</label>
                  <div className="relative flex-1">
                    <input 
                      type="text"
                      value={searchKeyword}
                      onChange={(e) => setSearchKeyword(e.target.value)}
                      placeholder="검색어를 입력하세요"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#4F46E5] focus:ring-2 focus:ring-[#4F46E5]/20"
                    />
                    <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>
                <button className="px-6 py-2 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white rounded-lg text-sm hover:shadow-lg transition-all whitespace-nowrap">
                  검색
                </button>
              </div>
            </div>

            {/* 테이블 영역 */}
            <div className="flex-1 overflow-auto px-6 py-4">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50 sticky top-0">
                  <tr>
                    <th className="px-4 py-3 text-center text-xs font-medium text-gray-700 border-b border-r w-12">
                      <input 
                        type="checkbox"
                        checked={modalSelectAll}
                        onChange={toggleModalSelectAll}
                        className="w-4 h-4 text-[#4F46E5] border-gray-300 rounded focus:ring-[#4F46E5] cursor-pointer"
                      />
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">사업장명</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">소속팀</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b border-r">부서명</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-700 border-b">이름</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {availableUsers.map((user) => (
                    <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 text-center border-r">
                        <input 
                          type="checkbox"
                          checked={modalSelectedUsers.includes(user.id)}
                          onChange={() => toggleModalUserSelect(user.id)}
                          className="w-4 h-4 text-[#4F46E5] border-gray-300 rounded focus:ring-[#4F46E5] cursor-pointer"
                        />
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r">{user.workplace}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r">{user.team}</td>
                      <td className="px-4 py-3 text-sm text-gray-700 border-r">{user.dept}</td>
                      <td className="px-4 py-3 text-sm text-gray-700">{user.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 페이지네이션 */}
            <div className="px-6 py-3 border-t border-gray-200 flex items-center justify-center gap-1">
              <button className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-30" disabled>
                <ChevronDown className="w-4 h-4 rotate-90" />
              </button>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((page) => (
                <button
                  key={page}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    page === 1
                      ? 'bg-[#4F46E5] text-white'
                      : 'hover:bg-gray-100 text-gray-700'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                <ChevronDown className="w-4 h-4 -rotate-90" />
              </button>
            </div>

            {/* 모달 푸터 */}
            <div className="px-6 py-4 border-t border-gray-200 bg-gray-50 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                <span className="font-medium text-[#4F46E5]">{modalSelectedUsers.length}</span> / 1387
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    setIsWorkerModalOpen(false);
                    setModalSelectedUsers([]);
                    setModalSelectAll(false);
                  }}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-colors"
                >
                  닫기
                </button>
                <button 
                  onClick={addSelectedUsersToWorkers}
                  disabled={modalSelectedUsers.length === 0}
                  className="px-6 py-2 bg-gradient-to-r from-[#4F46E5] to-[#6366F1] text-white rounded-lg text-sm hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  담기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}