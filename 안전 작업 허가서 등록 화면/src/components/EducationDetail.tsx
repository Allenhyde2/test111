import { Home, ChevronDown, Download } from 'lucide-react';
import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
}

export function EducationDetail({ onBack }: { onBack: () => void }) {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: '신한국',
      date: '2025-05-04 14:39:19',
      content: '신한국'
    }
  ]);

  return (
    <div className="max-w-[1400px] mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>자료실</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span>수금업체 교육자료</span>
        <ChevronDown className="w-3 h-3 rotate-[-90deg]" />
        <span className="text-[#FF6B35]">상세</span>
      </div>

      {/* Page Title */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-gray-900">수금업체 교육자료</h1>
        <button 
          onClick={onBack}
          className="px-4 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition-all bg-white"
        >
          목록
        </button>
      </div>

      {/* Main Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        {/* 수금업체 교육자료 Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <h2 className="text-gray-900">수금업체 교육자료</h2>
          </div>

          <div className="space-y-3">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-sm text-gray-600">제목</div>
              <div className="col-span-10 text-sm text-gray-900">TBM app 설치</div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-sm text-gray-600">작성자</div>
              <div className="col-span-10 text-sm text-gray-900">양두팀</div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-sm text-gray-600">작성일</div>
              <div className="col-span-10 text-sm text-gray-900">2025-03-27 13:00:37</div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-2 text-sm text-gray-600">내용</div>
              <div className="col-span-10 text-sm text-gray-900">
                <div className="space-y-1">
                  <p>1) 안드로이드 [링크 바로_클릭후 설치]</p>
                  <p>2) 아이폰 [링크 앱스토어 클릭_클릭후 설치]</p>
                  <p className="text-blue-600 break-all">
                    https://apps.apple.com/us/app/%EC%95%88%EC%A0%84%EB%84%A4%EB%82%B4%EB%B9%84-d%EA%B7%B8%EB%8B%88145
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 파일첨부 Section */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 bg-gray-800 rounded-full"></div>
            <h2 className="text-gray-900">파일첨부</h2>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-900">TBM App_안드로이드.zip</span>
                <span className="text-xs text-gray-500">(256231381 Bytes)</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                관련 1개 (256231381 Bytes)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 mb-4">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-gray-900">댓글목록 {comments.length}</h3>
        </div>

        {/* Comments List */}
        <div className="divide-y divide-gray-200">
          {comments.map((comment) => (
            <div key={comment.id} className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-300 rounded flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-sm text-gray-900 mr-3">{comment.author}</span>
                      <span className="text-xs text-gray-500">{comment.date}</span>
                    </div>
                    <button className="px-3 py-1 border border-gray-300 rounded text-xs hover:bg-gray-50 transition-all bg-white">
                      댓글
                    </button>
                  </div>
                  <p className="text-sm text-gray-700">{comment.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comment Input */}
        <div className="p-6 border-t border-gray-200">
          <div className="flex gap-3">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="댓글을 입력하세요"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#FF6B35] focus:ring-1 focus:ring-[#FF6B35]/20 resize-none"
              rows={3}
            />
            <button className="px-6 py-3 bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] text-white rounded-lg text-sm hover:shadow-lg transition-all whitespace-nowrap self-end">
              등록하기
            </button>
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
