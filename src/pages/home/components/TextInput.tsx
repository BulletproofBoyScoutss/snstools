
interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  onConvert: () => void;
  isLoading: boolean;
}

const TextInput = ({ value, onChange, onConvert, isLoading }: TextInputProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          글을 입력하고 SNS 형식으로 변환해보세요
        </h2>
        <p className="text-gray-600">
          원하는 내용을 입력하면 각 플랫폼에 최적화된 형태로 자동 변환됩니다
        </p>
      </div>
      
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            원본 텍스트
          </label>
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="변환하고 싶은 글을 입력해주세요. 예: 오늘 새로운 프로젝트를 시작했습니다. 많은 준비와 계획이 필요하지만, 팀원들과 함께 열심히 노력하고 있습니다. 좋은 결과가 있기를 기대합니다."
            className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            maxLength={2000}
          />
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-gray-500">
              {value.length}/2000 글자
            </span>
            <span className="text-xs text-gray-500">
              💡 팁: 구체적이고 명확한 내용일수록 더 좋은 변환 결과를 얻을 수 있습니다
            </span>
          </div>
        </div>
        
        <div className="flex justify-center">
          <button
            onClick={onConvert}
            disabled={!value.trim() || isLoading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                변환 중...
              </>
            ) : (
              <>
                <i className="ri-magic-line"></i>
                SNS 형식으로 변환하기
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TextInput;
