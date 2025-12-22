import { Bell, User, ChevronRight, Menu } from 'lucide-react';

export function Header({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-6 py-3 md:py-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <span className="hidden md:inline">안전환경통합전산시스템</span>
            <span className="md:hidden">HD-SAFE</span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2 md:gap-4">
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-5 h-5 text-gray-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B35] rounded-full"></span>
          </button>
          <div className="flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
            <User className="w-4 h-4 text-gray-600" />
            <div className="text-sm hidden md:block">
              <div className="text-gray-900 text-xs">화면</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}