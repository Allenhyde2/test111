import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { SafetyPermitForm } from './components/SafetyPermitForm';
import { SafetyPermitList } from './components/SafetyPermitList';
import { Dashboard } from './components/Dashboard';
import { ExternalWorkList } from './components/ExternalWorkList';
import { ExternalWorkDetail } from './components/ExternalWorkDetail';
import { DailyEquipmentPlan } from './components/DailyEquipmentPlan';
import { TBMMeeting } from './components/TBMMeeting';
import { ContractorEducation } from './components/ContractorEducation';
import { FAQ } from './components/FAQ';
import { WorkStatus } from './components/WorkStatus';
import { MonthlyEducationReport } from './components/MonthlyEducationReport';
import { MonthlyEducationReportNew } from './components/MonthlyEducationReportNew';
import { Menu } from 'lucide-react';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'dashboard' | 'permit' | 'permit-list' | 'external-work' | 'external-work-detail' | 'equipment-plan' | 'tbm-meeting' | 'contractor-education' | 'faq' | 'work-status' | 'monthly-education-report' | 'monthly-education-report-new'>('home');

  const handlePageChange = (page: 'home' | 'dashboard' | 'permit' | 'permit-list' | 'external-work' | 'external-work-detail' | 'equipment-plan' | 'tbm-meeting' | 'contractor-education' | 'faq' | 'work-status' | 'monthly-education-report' | 'monthly-education-report-new') => {
    setCurrentPage(page);
    setSidebarOpen(false); // 모바일에서 메뉴 선택시 사이드바 닫기
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`fixed lg:static inset-y-0 left-0 z-50 transform ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 transition-transform duration-300`}>
        <Sidebar onClose={() => setSidebarOpen(false)} onNavigate={handlePageChange} currentPage={currentPage} />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(true)} />
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            {currentPage === 'home' ? (
              <Home />
            ) : currentPage === 'dashboard' ? (
              <Dashboard />
            ) : currentPage === 'permit-list' ? (
              <SafetyPermitList onNavigate={handlePageChange} />
            ) : currentPage === 'external-work' ? (
              <ExternalWorkList onNavigate={handlePageChange} />
            ) : currentPage === 'external-work-detail' ? (
              <ExternalWorkDetail onBack={() => handlePageChange('external-work')} />
            ) : currentPage === 'equipment-plan' ? (
              <DailyEquipmentPlan />
            ) : currentPage === 'tbm-meeting' ? (
              <TBMMeeting />
            ) : currentPage === 'contractor-education' ? (
              <ContractorEducation />
            ) : currentPage === 'faq' ? (
              <FAQ />
            ) : currentPage === 'work-status' ? (
              <WorkStatus />
            ) : currentPage === 'monthly-education-report' ? (
              <MonthlyEducationReport onNavigate={handlePageChange} />
            ) : currentPage === 'monthly-education-report-new' ? (
              <MonthlyEducationReportNew />
            ) : (
              <SafetyPermitForm />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}