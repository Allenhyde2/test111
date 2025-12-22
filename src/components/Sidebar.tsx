import { useState } from 'react';
import { Home, LayoutDashboard, Users, FileText, ClipboardList, Shield, BarChart3, FileSearch, AlertTriangle, ChevronRight, Search, X } from 'lucide-react';

interface SidebarProps {
  onClose: () => void;
  onNavigate: (page: 'home' | 'dashboard' | 'permit' | 'permit-list' | 'external-work' | 'equipment-plan' | 'tbm-meeting' | 'contractor-education' | 'faq' | 'work-status' | 'monthly-education-report') => void;
  currentPage: 'home' | 'dashboard' | 'permit' | 'permit-list' | 'external-work' | 'equipment-plan' | 'tbm-meeting' | 'contractor-education' | 'faq' | 'work-status' | 'monthly-education-report';
}

export function Sidebar({ onClose, onNavigate, currentPage }: SidebarProps) {
  // 메뉴 열림/닫힘 상태 관리
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({
    1: true, // 대시보드 기본 열림
    2: true  // 출입관리 부문 기본 열림
  });
  
  // 서브메뉴 열림/닫힘 상태 관리
  const [openSubmenus, setOpenSubmenus] = useState<{ [key: string]: boolean }>({
    '2-1': true // 일 안전작업허가서 기본 열림
  });

  // 서브서브메뉴 열림/닫힘 상태 관리
  const [openSubSubmenus, setOpenSubSubmenus] = useState<{ [key: string]: boolean }>({});

  const toggleMenu = (index: number) => {
    setOpenMenus(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const toggleSubmenu = (key: string) => {
    setOpenSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSubSubmenu = (key: string) => {
    setOpenSubSubmenus(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const menuItems = [
    { 
      icon: Home, 
      label: 'Home', 
      active: currentPage === 'home',
      page: 'home' as const
    },
    { 
      icon: LayoutDashboard, 
      label: '대시보드', 
      active: currentPage === 'dashboard',
      hasSubmenu: true,
      submenu: [
        { label: '안전보건 운영현황', active: false, page: 'dashboard' as const },
        { label: '일 작업/장비 현황', active: currentPage === 'dashboard', page: 'dashboard' as const }
      ]
    },
    { 
      icon: Users, 
      label: '출입관리 부문', 
      active: currentPage === 'permit-list' || currentPage === 'external-work' || currentPage === 'equipment-plan' || currentPage === 'tbm-meeting',
      hasSubmenu: true,
      submenu: [
        { label: '안전작업허가서', active: currentPage === 'permit-list', page: 'permit-list' as const },
        { label: '일 안전작업허가서', active: false, hasSubmenu: true, submenu: [
          { label: '외부공사·작업', active: currentPage === 'external-work', page: 'external-work' as const }
        ]},
        { label: '일 장비사용 계획서', active: currentPage === 'equipment-plan', page: 'equipment-plan' as const },
        { label: '작업 전 안전점검회의(TBM)', active: currentPage === 'tbm-meeting', page: 'tbm-meeting' as const }
      ]
    },
    { icon: ClipboardList, label: '작업 및 안전점검측정(TBM)', active: false, hasSubmenu: true, page: null },
    { icon: Shield, label: '안전보건관리계획 구축 등', active: false, hasSubmenu: true, page: null },
    { 
      icon: BarChart3, 
      label: '산업안전보건법 부문', 
      active: currentPage === 'monthly-education-report',
      hasSubmenu: true,
      submenu: [
        { 
          label: '1) 안전부문', 
          active: currentPage === 'monthly-education-report',
          hasSubmenu: true,
          submenu: [
            { label: '교육관리', active: false, hasSubmenu: false },
            { label: '월별교육보고서', active: currentPage === 'monthly-education-report', page: 'monthly-education-report' as const }
          ]
        },
        { label: '2)보건부문', active: false, hasSubmenu: false }
      ]
    },
    { icon: FileSearch, label: '통계관리 부문', active: false, hasSubmenu: true, page: null },
    { 
      icon: AlertTriangle, 
      label: '자료실', 
      active: currentPage === 'contractor-education',
      hasSubmenu: true,
      submenu: [
        { label: '수금업체 교육자료', active: currentPage === 'contractor-education', page: 'contractor-education' as const }
      ]
    },
    { icon: FileText, label: '문서보관소 교육 결재하기', active: false, hasSubmenu: true, page: null },
    { 
      icon: ClipboardList, 
      label: '커뮤니티', 
      active: currentPage === 'faq',
      hasSubmenu: true,
      submenu: [
        { label: 'FAQ', active: currentPage === 'faq', page: 'faq' as const }
      ]
    },
    { icon: BarChart3, label: '메이터관리', active: false, hasSubmenu: true, page: null },
    { 
      icon: Users, 
      label: '마이페이지', 
      active: currentPage === 'work-status',
      hasSubmenu: true,
      submenu: [
        { label: '업무현황', active: currentPage === 'work-status', page: 'work-status' as const }
      ]
    }
  ];

  return (
    <div className="w-64 h-full bg-gradient-to-b from-[#1a2332] to-[#0f1419] text-white flex flex-col shadow-xl">
      {/* Logo */}
      <div className="p-4 border-b border-gray-700/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-[#FF6B35] to-[#F7931E] text-white px-2.5 py-1.5 rounded font-bold text-sm">
              DK
            </div>
            <div className="text-xs">
              <div className="font-medium">안전환경통합전산시스템</div>
              <div className="text-gray-400">(HD-SAFE)</div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="lg:hidden p-1 hover:bg-gray-700/50 rounded"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="메뉴검색"
            className="w-full bg-[#2a3544] border border-gray-600 rounded-lg px-3 py-2.5 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] transition-colors"
          />
          <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto px-2 pb-4">
        {menuItems.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => {
                if (item.hasSubmenu) {
                  toggleMenu(index);
                }
                if (item.page) {
                  onNavigate(item.page);
                }
              }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                item.active 
                  ? 'bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white shadow-lg' 
                  : 'text-gray-300 hover:bg-gray-700/30'
              }`}
            >
              <item.icon className="w-4 h-4 flex-shrink-0" />
              <span className="flex-1 text-left text-sm">{item.label}</span>
              {item.hasSubmenu && (
                <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${openMenus[index] ? 'rotate-90' : ''}`} />
              )}
            </button>
            
            {/* Submenu */}
            {item.submenu && openMenus[index] && (
              <div className="ml-6 mt-1 space-y-1">
                {item.submenu.map((subitem: any, subindex: number) => (
                  <div key={subindex}>
                    <button
                      onClick={() => {
                        if (subitem.hasSubmenu) {
                          toggleSubmenu(`${index}-${subindex}`);
                        }
                        if (subitem.page) {
                          onNavigate(subitem.page);
                        }
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                        subitem.active
                          ? 'bg-[#2a3544] text-white border-l-2 border-[#FF6B35]'
                          : 'text-gray-400 hover:bg-gray-700/20'
                      }`}
                    >
                      <ChevronRight className="w-3 h-3 flex-shrink-0" />
                      <span className="flex-1 text-left text-xs">{subitem.label}</span>
                      {subitem.hasSubmenu && (
                        <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform ${openSubmenus[`${index}-${subindex}`] ? 'rotate-90' : ''}`} />
                      )}
                    </button>
                    
                    {/* Sub-submenu */}
                    {subitem.submenu && openSubmenus[`${index}-${subindex}`] && (
                      <div className="ml-6 mt-1 space-y-1">
                        {subitem.submenu.map((subsubitem: any, subsubindex: number) => (
                          <div key={subsubindex}>
                            <button
                              onClick={() => {
                                if (subsubitem.hasSubmenu) {
                                  toggleSubSubmenu(`${index}-${subindex}-${subsubindex}`);
                                }
                                if (subsubitem.page) {
                                  onNavigate(subsubitem.page);
                                }
                              }}
                              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                subsubitem.active
                                  ? 'bg-[#2a3544] text-white border-l-2 border-[#FF6B35]'
                                  : 'text-gray-400 hover:bg-gray-700/20'
                              }`}
                            >
                              <ChevronRight className="w-3 h-3 flex-shrink-0" />
                              <span className="flex-1 text-left text-xs">{subsubitem.label}</span>
                              {subsubitem.hasSubmenu && (
                                <ChevronRight className={`w-3 h-3 flex-shrink-0 transition-transform ${openSubSubmenus[`${index}-${subindex}-${subsubindex}`] ? 'rotate-90' : ''}`} />
                              )}
                            </button>
                            
                            {/* Sub-sub-submenu (4th level) */}
                            {subsubitem.submenu && openSubSubmenus[`${index}-${subindex}-${subsubindex}`] && (
                              <div className="ml-6 mt-1 space-y-1">
                                {subsubitem.submenu.map((subsubsubitem: any, subsubsubindex: number) => (
                                  <button
                                    key={subsubsubindex}
                                    onClick={() => subsubsubitem.page && onNavigate(subsubsubitem.page)}
                                    className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                                      subsubsubitem.active
                                        ? 'bg-[#2a3544] text-white border-l-2 border-[#FF6B35]'
                                        : 'text-gray-400 hover:bg-gray-700/20'
                                    }`}
                                  >
                                    <ChevronRight className="w-3 h-3 flex-shrink-0" />
                                    <span className="text-left text-xs">{subsubsubitem.label}</span>
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}