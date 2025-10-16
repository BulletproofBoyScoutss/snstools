
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const Support = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleEmailContact = () => {
    window.location.href = 'mailto:alggagi34@gmail.com?subject=SNS 변환기 고객 지원 문의';
  };

  const faqData = [
    {
      question: "SNS 변환기는 어떻게 사용하나요?",
      answer: "원본 텍스트를 입력창에 작성하고 '변환하기' 버튼을 클릭하면 각 SNS 플랫폼에 최적화된 콘텐츠가 자동으로 생성됩니다."
    },
    {
      question: "변환된 텍스트를 수정할 수 있나요?",
      answer: "네, 변환된 결과를 복사한 후 원하는 대로 수정하여 사용하실 수 있습니다. AI가 생성한 내용을 기본으로 개인화하세요."
    },
    {
      question: "어떤 SNS 플랫폼을 지원하나요?",
      answer: "현재 스레드(Threads), 트위터(X), 인스타그램, 네이버 밴드를 지원합니다. 추가 플랫폼 지원도 계획 중입니다."
    },
    {
      question: "변환 결과가 마음에 들지 않으면 어떻게 하나요?",
      answer: "다시 변환하기 버튼을 클릭하거나, 원본 텍스트를 조금 수정한 후 재변환해보세요. 더 나은 결과를 얻을 수 있습니다."
    },
    {
      question: "개인정보는 안전한가요?",
      answer: "입력하신 텍스트는 변환 목적으로만 사용되며, 별도로 저장되지 않습니다. 개인정보 보호를 최우선으로 합니다."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            고객 지원
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            SNS 변환기 사용 중 궁금한 점이나 문제가 있으시면 언제든 도움을 요청하세요
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleEmailContact}
              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-mail-line"></i>
              이메일로 문의하기
            </button>
            <button
              onClick={() => document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium border border-gray-200 transition-colors whitespace-nowrap cursor-pointer"
            >
              <i className="ri-chat-3-line"></i>
              문의 양식 작성
            </button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              자주 묻는 질문
            </h2>
            <p className="text-gray-600">
              가장 많이 문의하시는 질문들을 모았습니다
            </p>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <i className="ri-question-line text-blue-500"></i>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              문의하기
            </h2>
            <p className="text-gray-600">
              아래 양식을 작성해주시면 빠르게 답변드리겠습니다
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-check-line text-2xl text-white"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">문의가 접수되었습니다!</h3>
                <p className="text-gray-600">빠른 시일 내에 답변드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="이름을 입력해주세요"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="이메일을 입력해주세요"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 유형
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {[
                      { id: 'general', label: '일반 문의' },
                      { id: 'bug', label: '버그 신고' },
                      { id: 'feature', label: '기능 제안' },
                      { id: 'other', label: '기타' }
                    ].map((category) => (
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
                    제목 *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="문의 제목을 입력해주세요"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    문의 내용 *
                  </label>
                  <textarea
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="문의하실 내용을 자세히 작성해주세요 (최대 500자)"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">최대 500자까지 입력 가능합니다.</p>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
                >
                  문의 보내기
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Quick Help Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              빠른 도움말
            </h2>
            <p className="text-gray-600">
              즉시 해결할 수 있는 문제들을 확인해보세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사용 가이드</h3>
              <p className="text-gray-600 mb-4">
                SNS 변환기 사용법을 단계별로 안내합니다
              </p>
              <button
                onClick={() => navigate('/#how-to-use')}
                className="text-blue-500 hover:text-blue-600 font-medium cursor-pointer"
              >
                가이드 보기 →
              </button>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사용 팁</h3>
              <p className="text-gray-600 mb-4">
                더 나은 변환 결과를 위한 꿀팁들
              </p>
              <button
                onClick={() => navigate('/#features')}
                className="text-green-500 hover:text-green-600 font-medium cursor-pointer"
              >
                팁 확인하기 →
              </button>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-mail-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">직접 문의</h3>
              <p className="text-gray-600 mb-4">
                이메일로 직접 문의하여 빠른 답변 받기
              </p>
              <button
                onClick={handleEmailContact}
                className="text-purple-500 hover:text-purple-600 font-medium cursor-pointer"
              >
                이메일 보내기 →
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Support;
