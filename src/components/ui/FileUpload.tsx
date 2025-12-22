import { Upload } from 'lucide-react';
import { InputHTMLAttributes, useRef } from 'react';

interface FileUploadProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  onFileSelect?: (file: File | null) => void;
}

export function FileUpload({ label, onFileSelect, className = '', ...props }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    onFileSelect?.(file);
  };

  return (
    <div className={`p-4 border border-gray-200 rounded-lg hover:border-[#FF6B35] transition-colors ${className}`}>
      {label && (
        <label className="block text-sm text-gray-700 mb-3 font-medium">{label}</label>
      )}
      <button
        type="button"
        onClick={handleClick}
        className="w-full px-4 py-3 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#FF6B35] hover:bg-orange-50 transition-colors flex flex-col items-center gap-2"
      >
        <Upload className="w-5 h-5 text-gray-400" />
        <span className="text-xs text-gray-500">파일 업로드</span>
      </button>
      <input
        ref={inputRef}
        type="file"
        className="hidden"
        onChange={handleChange}
        {...props}
      />
    </div>
  );
}
