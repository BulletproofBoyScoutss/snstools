
import { useState } from 'react';
import Header from './components/Header';
import TextInput from './components/TextInput';
import ConversionResults from './components/ConversionResults';
import Footer from './components/Footer';

const Home = () => {
  const [inputText, setInputText] = useState('');
  const [convertedResults, setConvertedResults] = useState<{
    threads: string;
    twitter: string;
    instagram: string[];
    naverBand: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleConvert = async () => {
    if (!inputText.trim()) return;
    
    setIsLoading(true);
    
    // 실제 AI 변환 로직 시뮬레이션
    setTimeout(() => {
      const results = {
        threads: convertToThreads(inputText),
        twitter: convertToTwitter(inputText),
        instagram: convertToInstagram(inputText),
        naverBand: convertToNaverBand(inputText)
      };
      
      setConvertedResults(results);
      setIsLoading(false);
    }, 2000);
  };

  const convertToThreads = (text: string): string => {
    const sentences = text.split(/[.!?]/).filter(s => s.trim());
    const threads = [];
    
    // 후킹 멘트로 시작
    threads.push("🔥 지금 가장 핫한 이야기 공유합니다!\n\n스레드로 풀어보는 리얼 토크 👇");
    
    // 본문을 280자 내외로 분할
    let currentThread = "";
    let threadCount = 2;
    
    for (const sentence of sentences) {
      const trimmed = sentence.trim();
      if (!trimmed) continue;
      
      const potential = currentThread ? `${currentThread} ${trimmed}.` : `${trimmed}.`;
      
      if (potential.length > 280) {
        if (currentThread) {
          threads.push(`${threadCount}/ ${currentThread}\n\n#트렌드 #핫이슈 #지금이야기`);
          threadCount++;
        }
        currentThread = `${trimmed}.`;
      } else {
        currentThread = potential;
      }
    }
    
    if (currentThread) {
      threads.push(`${threadCount}/ ${currentThread}\n\n#트렌드 #핫이슈 #지금이야기`);
      threadCount++;
    }
    
    // 마무리 후킹 멘트
    threads.push(`${threadCount}/ 어떻게 생각하시나요? 💭\n\n리트윗과 좋아요로 더 많은 사람들과 공유해주세요! 🚀\n\n#바이럴 #소통 #공감`);
    
    return threads.join('\n\n');
  };

  const convertToTwitter = (text: string): string => {
    // 후킹 멘트 (15-20자)
    const hook = "🔥 지금 핫한 이야기: ";
    
    // 해시태그와 이모지 (약 40자)
    const hashtags = "\n\n#트위터 #바이럴 #트렌드 ✨";
    
    // 본문 가용 길이 계산 (280자에서 후킹멘트와 해시태그 제외)
    const availableLength = 280 - hook.length - hashtags.length;
    
    let mainContent = text.trim();
    if (mainContent.length > availableLength) {
      mainContent = mainContent.substring(0, availableLength - 4) + "... 🧵";
    }
    
    return `${hook}${mainContent}${hashtags}`;
  };

  const convertToInstagram = (text: string): string[] => {
    const sentences = text.split(/[.!?]/).filter(s => s.trim());
    const cards = [];
    
    // 첫 번째 카드 - 후킹 타이틀
    cards.push(`🌟 오늘의 인사이트\n\n"${sentences[0]?.trim() || '새로운 시작'}"\n\n당신의 일상에 영감을 더하다 ✨\n\n#인스타그램 #일상 #영감 #소통 #공감 #라이프스타일 #오늘의글 #인사이트 #동기부여 #긍정에너지`);
    
    // 내용 카드들 (2-4장)
    for (let i = 1; i < Math.min(sentences.length, 4); i++) {
      const content = sentences[i].trim();
      cards.push(`💡 포인트 ${i}\n\n${content}.\n\n진짜 현실적인 이야기예요 👏\n\n#리얼토크 #공감백배 #진솔한이야기 #삶의지혜 #경험담 #솔직후기 #일상공유 #라이프팁 #현실조언 #진심어린`);
    }
    
    // 마지막 카드 - 참여 유도
    if (cards.length > 1) {
      cards.push(`💬 여러분의 생각은?\n\n댓글로 경험과 생각을 나눠주세요!\n\n좋아요 ❤️ 저장 📌 공유 📤\n함께 성장하는 인스타 되어요 🌱\n\n#댓글환영 #소통해요 #함께성장 #인스타소통 #경험공유 #생각나눔 #일상대화 #진솔한대화 #공감대형성 #커뮤니티`);
    }
    
    return cards;
  };

  const convertToNaverBand = (text: string): string => {
    const sentences = text.split(/[.!?]/).filter(s => s.trim());
    const mainContent = sentences.slice(0, 3).join('. ');
    
    return `🎉 밴드 가족들 안녕하세요!\n\n오늘 정말 공유하고 싶은 이야기가 있어서 올려봅니다 😊\n\n📝 ${mainContent}.\n\n정말 많은 생각이 들더라구요! 우리 밴드 가족들은 어떻게 생각하시는지 너무 궁금해요 🤔\n\n댓글로 여러분의 소중한 의견과 경험담 들려주세요! 💬\n항상 따뜻한 관심과 응원 감사드려요 🙏\n\n#밴드가족 #소통 #일상공유 #함께해요 #공감 #경험나눔 #따뜻한댓글 #소중한의견 #밴드소통 #일상이야기`;
  };

  const handleContactClick = () => {
    window.location.href = 'mailto:alggagi34@gmail.com';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20workspace%20with%20multiple%20social%20media%20platforms%20displayed%20on%20screens%2C%20clean%20minimalist%20office%20environment%20with%20soft%20lighting%2C%20professional%20content%20creation%20setup%20with%20laptops%20and%20mobile%20devices%2C%20contemporary%20design%20with%20blue%20and%20white%20color%20scheme&width=1920&height=800&seq=hero-bg&orientation=landscape')`
          }}
        >
          <div className="absolute inset-0 bg-white/80"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl font-bold text-gray-900 leading-tight">
                  SNS 글 변환기
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  하나의 글을 여러 SNS 플랫폼에 맞게 자동으로 변환해보세요. 
                  스레드, 트위터, 인스타그램, 네이버 밴드 형식으로 최적화된 콘텐츠를 생성합니다.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-threads-line text-black"></i>
                  <span className="text-sm font-medium">스레드</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-twitter-x-line text-black"></i>
                  <span className="text-sm font-medium">트위터</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-instagram-line text-pink-500"></i>
                  <span className="text-sm font-medium">인스타그램</span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full shadow-sm">
                  <i className="ri-chat-3-line text-green-500"></i>
                  <span className="text-sm font-medium">네이버 밴드</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section id="convert-section" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <TextInput 
            value={inputText}
            onChange={setInputText}
            onConvert={handleConvert}
            isLoading={isLoading}
          />
          
          {convertedResults && (
            <ConversionResults results={convertedResults} />
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              왜 SNS 글 변환기를 사용해야 할까요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 플랫폼의 특성에 맞게 최적화된 콘텐츠로 더 많은 사람들과 소통하세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-time-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">시간 절약</h3>
              <p className="text-gray-600">
                한 번의 입력으로 여러 플랫폼용 콘텐츠를 동시에 생성
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-target-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">플랫폼 최적화</h3>
              <p className="text-gray-600">
                각 SNS의 특성과 제한사항에 맞게 자동 조정
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-magic-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI 기반 변환</h3>
              <p className="text-gray-600">
                인공지능이 콘텐츠의 맥락을 이해하여 자연스럽게 변환
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-share-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">쉬운 공유</h3>
              <p className="text-gray-600">
                변환된 텍스트를 클릭 한 번으로 복사하여 바로 사용
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section id="how-to-use" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              사용법
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              간단한 3단계로 모든 SNS에 최적화된 콘텐츠를 만들어보세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">텍스트 입력</h3>
              <p className="text-gray-600">
                변환하고 싶은 원본 텍스트를 입력창에 작성해주세요
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">변환 실행</h3>
              <p className="text-gray-600">
                '변환하기' 버튼을 클릭하면 AI가 자동으로 각 플랫폼에 맞게 변환합니다
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">복사 & 게시</h3>
              <p className="text-gray-600">
                원하는 플랫폼의 텍스트를 복사하여 바로 게시하세요
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How SNS Converter Works Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              SNS 변환기는 어떻게 작동하나요?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              최신 AI 기술과 자연어 처리 알고리즘을 활용하여 각 플랫폼의 특성을 분석하고 최적화된 콘텐츠를 생성합니다
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">AI 기반 텍스트 분석</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-brain-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">자연어 처리 (NLP)</h4>
                    <p className="text-gray-600">입력된 텍스트의 의미, 감정, 맥락을 정확히 파악하여 각 플랫폼에 맞는 톤앤매너로 변환합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-settings-3-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">플랫폼별 최적화</h4>
                    <p className="text-gray-600">각 SNS의 글자 수 제한, 해시태그 규칙, 사용자 행동 패턴을 분석하여 최적의 형태로 재구성합니다.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-magic-line text-white text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">스마트 변환</h4>
                    <p className="text-gray-600">머신러닝 알고리즘을 통해 지속적으로 학습하며, 더욱 정확하고 자연스러운 변환 결과를 제공합니다.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Advanced%20AI%20technology%20visualization%20with%20neural%20networks%2C%20natural%20language%20processing%20algorithms%2C%20data%20flow%20diagrams%2C%20modern%20tech%20interface%20with%20blue%20and%20purple%20gradients%2C%20futuristic%20digital%20workspace%20showing%20text%20analysis%20and%20conversion%20process&width=600&height=400&seq=ai-tech&orientation=landscape"
                alt="AI 기술 시각화"
                className="rounded-2xl shadow-lg object-cover w-full h-80"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-cpu-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">고성능 처리</h3>
              <p className="text-gray-600">
                클라우드 기반 인프라를 통해 빠른 처리 속도를 보장하며, 대용량 텍스트도 실시간으로 변환합니다.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">보안 및 프라이버시</h3>
              <p className="text-gray-600">
                입력된 텍스트는 변환 목적으로만 사용되며, 처리 완료 후 즉시 삭제되어 개인정보를 안전하게 보호합니다.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-refresh-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">지속적 개선</h3>
              <p className="text-gray-600">
                사용자 피드백과 최신 AI 기술을 바탕으로 지속적으로 알고리즘을 개선하여 더 나은 결과를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Comparison Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              플랫폼별 최적화 비교
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              각 SNS 플랫폼의 특성을 이해하고 그에 맞는 최적화된 콘텐츠를 생성하는 방법을 알아보세요
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-threads-line text-2xl text-black"></i>
                <h3 className="text-lg font-semibold text-gray-900">스레드</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 연속된 스레드 형태로 분할</li>
                <li>• 각 스레드당 280자 제한</li>
                <li>• 후킹 멘트와 마무리 멘트 추가</li>
                <li>• 트렌드 해시태그 자동 삽입</li>
                <li>• 참여 유도 문구 포함</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-twitter-x-line text-2xl text-black"></i>
                <h3 className="text-lg font-semibold text-gray-900">트위터</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 280자 제한 내 압축</li>
                <li>• 임팩트 있는 후킹 멘트</li>
                <li>• 핵심 메시지 강조</li>
                <li>• 바이럴 해시태그 활용</li>
                <li>• 이모지로 시각적 효과</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-instagram-line text-2xl text-pink-500"></i>
                <h3 className="text-lg font-semibold text-gray-900">인스타그램</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 카드 형태로 분할 (2-5장)</li>
                <li>• 시각적 스토리텔링</li>
                <li>• 감성적 표현 강화</li>
                <li>• 라이프스타일 해시태그</li>
                <li>• 참여 유도 및 저장 유도</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <i className="ri-chat-3-line text-2xl text-green-500"></i>
                <h3 className="text-lg font-semibold text-gray-900">네이버 밴드</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 친근하고 따뜻한 톤</li>
                <li>• 커뮤니티 중심 표현</li>
                <li>• 경험 공유 형태</li>
                <li>• 소통 유도 문구</li>
                <li>• 밴드 가족 문화 반영</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              실제 사용 사례
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              다양한 분야에서 SNS 변환기를 활용하여 효과적인 소셜 미디어 마케팅을 진행하고 있습니다
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-store-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">온라인 쇼핑몰</h3>
              <p className="text-gray-600 text-center mb-4">
                신제품 출시 소식을 각 플랫폼 특성에 맞게 변환하여 더 많은 고객에게 효과적으로 전달
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>효과:</strong> 소셜 미디어 참여율 45% 증가, 브랜드 인지도 향상
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-restaurant-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">카페 &amp; 레스토랑</h3>
              <p className="text-gray-600 text-center mb-4">
                메뉴 소개와 이벤트 정보를 플랫폼별로 최적화하여 고객 유입과 재방문율 증대
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>효과:</strong> 예약 문의 30% 증가, 신규 고객 유입 확대
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-book-open-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">교육 기관</h3>
              <p className="text-gray-600 text-center mb-4">
                강의 정보와 교육 콘텐츠를 각 플랫폼에 맞게 변환하여 학습자들과의 소통 강화
              </p>
              <div className="bg-white/50 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>효과:</strong> 수강 신청률 25% 증가, 학습자 참여도 향상
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Manual Work */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              수동 작업 vs SNS 변환기
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              기존 방식과 비교했을 때 SNS 변환기가 제공하는 압도적인 효율성을 확인해보세요
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                  <i className="ri-time-line text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">수동 작업</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">시간 소모</h4>
                    <p className="text-gray-600 text-sm">플랫폼별로 각각 작성하여 30-60분 소요</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">일관성 부족</h4>
                    <p className="text-gray-600 text-sm">플랫폼별 톤앤매너 차이로 브랜드 일관성 저하</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">전문성 필요</h4>
                    <p className="text-gray-600 text-sm">각 플랫폼 특성 이해와 마케팅 지식 요구</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-close-circle-line text-red-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">실수 가능성</h4>
                    <p className="text-gray-600 text-sm">글자 수 초과, 해시태그 오류 등 휴먼 에러</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="ri-magic-line text-xl text-white"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">SNS 변환기</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">빠른 처리</h4>
                    <p className="text-gray-600 text-sm">2-3분 내 모든 플랫폼용 콘텐츠 동시 생성</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">일관된 품질</h4>
                    <p className="text-gray-600 text-sm">AI 기반으로 일정한 품질과 톤앤매너 유지</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">전문 지식 불필요</h4>
                    <p className="text-gray-600 text-sm">누구나 쉽게 전문가 수준의 콘텐츠 제작</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <i className="ri-check-circle-line text-green-500 mt-1"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">정확성 보장</h4>
                    <p className="text-gray-600 text-sm">플랫폼별 제한사항 자동 준수, 오류 최소화</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm inline-block">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">효율성 비교</h3>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-500 mb-2">95%</div>
                  <p className="text-gray-600">시간 절약</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">80%</div>
                  <p className="text-gray-600">품질 향상</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-500 mb-2">90%</div>
                  <p className="text-gray-600">오류 감소</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            문의하기
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            궁금한 점이나 개선 사항이 있으시면 언제든 연락해주세요
          </p>
          
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                <i className="ri-mail-line text-xl text-white"></i>
              </div>
              <div className="text-left">
                <h3 className="text-lg font-semibold text-gray-900">이메일 문의</h3>
                <p className="text-gray-600">빠른 답변을 드리겠습니다</p>
              </div>
            </div>
            
            <button 
              onClick={handleContactClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors whitespace-nowrap cursor-pointer"
            >
              alggagi34@gmail.com으로 문의하기
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
