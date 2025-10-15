
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SNS 변환기 소개
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            AI 기반 콘텐츠 최적화 도구를 통해 더 나은 소셜 미디어 경험을 제공합니다
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                우리의 미션
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                SNS 변환기는 콘텐츠 크리에이터와 마케터들이 각 플랫폼의 특성에 맞는 최적화된 콘텐츠를 쉽고 빠르게 제작할 수 있도록 돕는 것을 목표로 합니다.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                하나의 원본 텍스트로 스레드, 트위터, 인스타그램, 네이버 밴드 등 다양한 플랫폼에 최적화된 콘텐츠를 자동 생성하여, 사용자의 시간을 절약하고 더 효과적인 소셜 미디어 마케팅을 가능하게 합니다.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full">
                  <i className="ri-time-line text-blue-500"></i>
                  <span className="text-sm font-medium text-blue-700">시간 절약</span>
                </div>
                <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
                  <i className="ri-target-line text-green-500"></i>
                  <span className="text-sm font-medium text-green-700">플랫폼 최적화</span>
                </div>
                <div className="flex items-center gap-2 bg-purple-50 px-4 py-2 rounded-full">
                  <i className="ri-magic-line text-purple-500"></i>
                  <span className="text-sm font-medium text-purple-700">AI 기반</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20team%20working%20on%20social%20media%20content%20creation%20in%20modern%20office%20environment%2C%20multiple%20screens%20showing%20different%20social%20platforms%2C%20collaborative%20workspace%20with%20laptops%20and%20mobile%20devices%2C%20clean%20contemporary%20design%20with%20natural%20lighting%20and%20plants&width=600&height=400&seq=about-mission&orientation=landscape"
                alt="팀 작업 환경"
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              기술과 혁신
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 AI 기술과 자연어 처리 알고리즘을 활용하여 각 플랫폼의 특성을 이해하고 최적화된 콘텐츠를 생성합니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-brain-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">자연어 처리</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                고급 NLP 알고리즘을 사용하여 텍스트의 맥락과 의미를 정확히 파악하고, 각 플랫폼에 맞는 톤앤매너로 변환합니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-settings-3-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">플랫폼 최적화</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                각 SNS 플랫폼의 글자 수 제한, 해시태그 규칙, 사용자 행동 패턴을 분석하여 최적의 형태로 콘텐츠를 재구성합니다.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-rocket-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">실시간 처리</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                클라우드 기반 인프라를 통해 빠른 처리 속도를 보장하며, 사용자가 기다리는 시간을 최소화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              개발팀 소개
            </h2>
            <p className="text-xl text-gray-600">
              소셜 미디어와 AI 기술 전문가들이 모여 만든 혁신적인 도구입니다
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-3xl text-white"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">SNS 변환기 개발팀</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-2xl mx-auto">
                우리는 소셜 미디어 마케팅의 복잡성을 이해하고, 콘텐츠 크리에이터들이 겪는 어려움을 해결하기 위해 이 도구를 개발했습니다. 
                지속적인 연구와 사용자 피드백을 통해 더 나은 서비스를 제공하기 위해 노력하고 있습니다.
              </p>
              <div className="flex justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <i className="ri-code-line text-blue-500"></i>
                  <span>AI/ML 엔지니어</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-palette-line text-green-500"></i>
                  <span>UX/UI 디자이너</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="ri-share-line text-purple-500"></i>
                  <span>소셜미디어 전문가</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              우리의 가치
            </h2>
            <p className="text-xl text-gray-600">
              사용자 중심의 혁신적인 서비스를 제공하기 위한 핵심 가치들입니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-user-heart-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">사용자 중심</h3>
              <p className="text-gray-600 text-sm">
                사용자의 니즈를 최우선으로 고려한 직관적이고 편리한 서비스 제공
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">신뢰성</h3>
              <p className="text-gray-600 text-sm">
                안정적이고 정확한 변환 결과를 통해 사용자의 신뢰를 얻는 서비스
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">혁신</h3>
              <p className="text-gray-600 text-sm">
                최신 기술을 활용한 지속적인 개선과 새로운 기능 개발
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-global-line text-2xl text-white"></i>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">접근성</h3>
              <p className="text-gray-600 text-sm">
                누구나 쉽게 사용할 수 있는 간단하고 직관적인 인터페이스 제공
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            연락처 정보
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            궁금한 점이나 제안사항이 있으시면 언제든 연락해주세요
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-xl text-white"></i>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">이메일</h3>
                <p className="text-gray-600">alggagi34@gmail.com</p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6">
              운영시간: 평일 09:00 - 18:00 (주말 및 공휴일 제외)<br/>
              문의 답변: 영업일 기준 24시간 이내 답변
            </p>
            
            <button 
              onClick={() => window.location.href = 'mailto:alggagi34@gmail.com'}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              이메일로 문의하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
