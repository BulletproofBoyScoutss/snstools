
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const Feedback = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleEmailFeedback = () => {
    window.location.href = 'mailto:alggagi34@gmail.com?subject=SNS 변환기 피드백';
  };

  const feedbackCategories = [
    { id: 'feature', label: '기능 개선', icon: 'ri-tools-line', color: 'blue' },
    { id: 'bug', label: '버그 신고', icon: 'ri-bug-line', color: 'red' },
    { id: 'ui', label: 'UI/UX 개선', icon: 'ri-palette-line', color: 'purple' },
    { id: 'performance', label: '성능 개선', icon: 'ri-speed-line', color: 'green' },
    { id: 'content', label: '콘텐츠 품질', icon: 'ri-article-line', color: 'orange' },
    { id: 'other', label: '기타 의견', icon: 'ri-chat-3-line', color: 'gray' }
  ];

  const [selectedCategory, setSelectedCategory] = useState('feature');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            피드백
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            SNS 변환기를 더 나은 서비스로 만들어가는 데 여러분의 소중한 의견이 필요합니다
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleEmailFeedback}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line"></i>
              이메일로 피드백 보내기
            </button>
            <button
              onClick={() => document.querySelector('#feedback-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-feedback-line"></i>
              피드백 양식 작성
            </button>
          </div>
        </div>
      </section>

      {/* Feedback Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              어떤 피드백을 주고 싶으신가요?
            </h2>
            <p className="text-gray-600">
              카테고리별로 구체적인 피드백을 남겨주세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {feedbackCategories.map((category) => (
              <div key={category.id} className={`p-6 rounded-2xl border-2 transition-all cursor-pointer ${
                selectedCategory === category.id 
                  ? `border-${category.color}-500 bg-${category.color}-50` 
                  : 'border-gray-200 bg-white hover:border-gray-300'
              }`}
              onClick={() => setSelectedCategory(category.id)}
              >
                <div className={`w-12 h-12 bg-${category.color}-500 rounded-full flex items-center justify-center mb-4`}>
                  <i className={`${category.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {category.label}
                </h3>
                <p className="text-gray-600 text-sm">
                  {category.id === 'feature' && '새로운 기능 제안이나 기존 기능 개선 아이디어'}
                  {category.id === 'bug' && '발견한 오류나 문제점 신고'}
                  {category.id === 'ui' && '사용자 인터페이스 및 사용성 개선 제안'}
                  {category.id === 'performance' && '속도나 성능 관련 개선 사항'}
                  {category.id === 'content' && '변환 결과의 품질이나 정확도 관련'}
                  {category.id === 'other' && '기타 의견이나 제안사항'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Form */}
      <section id="feedback-form" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              피드백 보내기
            </h2>
            <p className="text-gray-600">
              여러분의 소중한 의견으로 더 나은 서비스를 만들어가겠습니다
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">피드백이 전송되었습니다!</h3>
                <p className="text-gray-600">소중한 의견 감사합니다. 더 나은 서비스로 보답하겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 (선택사항)
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 (선택사항)
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="답변받을 이메일 주소"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    피드백 유형
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {feedbackCategories.map((category) => (
                      <button
                        key={category.id}
                        type="button"
                        onClick={() => setSelectedCategory(category.id)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                          selectedCategory === category.id
                            ? 'bg-blue-500 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    서비스 만족도
                  </label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className={`text-2xl transition-colors cursor-pointer ${
                          star <= rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <i className="ri-star-fill"></i>
                      </button>
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      {rating > 0 && `${rating}점`}
                    </span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    피드백 내용 *
                  </label>
                  <textarea
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="구체적인 피드백이나 개선 제안을 자세히 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">최대 500자까지 입력 가능합니다.</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    사용 환경 (선택사항)
                  </label>
                  <div className="grid grid-cols-2 gap-4">
                    <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-8">
                      <option value="">브라우저 선택</option>
                      <option value="chrome">Chrome</option>
                      <option value="firefox">Firefox</option>
                      <option value="safari">Safari</option>
                      <option value="edge">Edge</option>
                      <option value="other">기타</option>
                    </select>
                    <select className="px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors pr-8">
                      <option value="">기기 선택</option>
                      <option value="desktop">데스크톱</option>
                      <option value="mobile">모바일</option>
                      <option value="tablet">태블릿</option>
                    </select>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  피드백 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              최근 업데이트
            </h2>
            <p className="text-gray-600">
              여러분의 피드백을 반영한 최근 개선사항들입니다
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-magic-line text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">AI 변환 품질 개선</h3>
                  <p className="text-gray-600 mb-2">
                    사용자 피드백을 바탕으로 각 플랫폼별 변환 알고리즘을 개선하여 더욱 자연스럽고 매력적인 콘텐츠를 생성합니다.
                  </p>
                  <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded-full">2024.01.15</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-speed-line text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">변환 속도 향상</h3>
                  <p className="text-gray-600 mb-2">
                    서버 최적화를 통해 변환 속도를 50% 향상시켜 더욱 빠른 서비스를 제공합니다.
                  </p>
                  <span className="text-xs text-green-600 bg-green-100 px-2 py-1 rounded-full">2024.01.10</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <i className="ri-palette-line text-white"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">UI/UX 개선</h3>
                  <p className="text-gray-600 mb-2">
                    사용자 인터페이스를 더욱 직관적으로 개선하고, 모바일 환경에서의 사용성을 향상시켰습니다.
                  </p>
                  <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded-full">2024.01.05</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            감사합니다
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            여러분의 소중한 피드백 덕분에 SNS 변환기가 계속 발전할 수 있습니다
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사용자 중심</h3>
              <p className="text-gray-600">
                사용자의 목소리에 귀 기울이며 지속적으로 개선합니다
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">빠른 반영</h3>
              <p className="text-gray-600">
                피드백을 신속하게 검토하고 서비스에 반영합니다
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">함께 성장</h3>
              <p className="text-gray-600">
                사용자와 함께 더 나은 서비스로 성장해나갑니다
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Feedback;
