
import { useState } from 'react';

interface ConversionResultsProps {
  results: {
    threads: string;
    twitter: string;
    instagram: string[];
    naverBand: string;
  };
}

const ConversionResults = ({ results }: ConversionResultsProps) => {
  const [copiedIndex, setCopiedIndex] = useState<string | null>(null);

  const copyToClipboard = async (text: string, index: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  const openSNSPlatform = (platform: string, text: string) => {
    const encodedText = encodeURIComponent(text);
    let url = '';
    
    switch (platform) {
      case 'threads':
        url = `https://threads.net/intent/post?text=${encodedText}`;
        break;
      case 'twitter':
        url = `https://twitter.com/intent/tweet?text=${encodedText}`;
        break;
      case 'instagram':
        // 인스타그램은 직접 포스팅 URL이 없으므로 앱으로 연결
        url = 'https://www.instagram.com/';
        break;
      case 'naverBand':
        url = 'https://band.us/';
        break;
    }
    
    window.open(url, '_blank');
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          🎉 변환 완료!
        </h2>
        <p className="text-gray-600">
          각 플랫폼 특성에 맞는 SEO 최적화된 콘텐츠가 준비되었습니다. 복사하거나 바로 게시해보세요!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* 스레드 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <i className="ri-threads-line text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">스레드 (Threads)</h3>
                <p className="text-sm text-gray-500">트렌드 반영 + 후킹 멘트</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(results.threads, 'threads')}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                <i className={`ri-${copiedIndex === 'threads' ? 'check' : 'file-copy'}-line text-sm`}></i>
                <span className="text-sm">{copiedIndex === 'threads' ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={() => openSNSPlatform('threads', results.threads)}
                className="flex items-center gap-2 px-3 py-2 bg-black text-white hover:bg-gray-800 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-external-link-line text-sm"></i>
                <span className="text-sm">게시</span>
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 max-h-80 overflow-y-auto">
            <pre className="whitespace-pre-wrap text-sm text-gray-700 font-sans">
              {results.threads}
            </pre>
          </div>
        </div>

        {/* 트위터 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <i className="ri-twitter-x-line text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">트위터 (X)</h3>
                <p className="text-sm text-gray-500">280자 완벽 최적화</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(results.twitter, 'twitter')}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                <i className={`ri-${copiedIndex === 'twitter' ? 'check' : 'file-copy'}-line text-sm`}></i>
                <span className="text-sm">{copiedIndex === 'twitter' ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={() => openSNSPlatform('twitter', results.twitter)}
                className="flex items-center gap-2 px-3 py-2 bg-blue-500 text-white hover:bg-blue-600 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-external-link-line text-sm"></i>
                <span className="text-sm">트윗</span>
              </button>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {results.twitter}
            </p>
            <div className="mt-2 flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {results.twitter.length}/280 글자
              </span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                results.twitter.length <= 280 ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {results.twitter.length <= 280 ? '✓ 적정' : '⚠ 초과'}
              </span>
            </div>
          </div>
        </div>

        {/* 인스타그램 카드뉴스 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <i className="ri-instagram-line text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">인스타그램 카드뉴스</h3>
                <p className="text-sm text-gray-500">{results.instagram.length}장의 SEO 최적화 카드</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(results.instagram.join('\n\n--- 다음 카드 ---\n\n'), 'instagram')}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                <i className={`ri-${copiedIndex === 'instagram' ? 'check' : 'file-copy'}-line text-sm`}></i>
                <span className="text-sm">{copiedIndex === 'instagram' ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={() => openSNSPlatform('instagram', results.instagram.join('\n\n'))}
                className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-external-link-line text-sm"></i>
                <span className="text-sm">게시</span>
              </button>
            </div>
          </div>
          <div className="space-y-4 max-h-80 overflow-y-auto">
            {results.instagram.map((card, index) => (
              <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded-full">
                    카드 {index + 1}
                  </span>
                  <span className="text-xs text-purple-600">
                    해시태그 최적화 ✓
                  </span>
                </div>
                <p className="text-sm text-gray-700 whitespace-pre-wrap">
                  {card}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 네이버 밴드 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <i className="ri-chat-3-line text-white"></i>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">네이버 밴드</h3>
                <p className="text-sm text-gray-500">친근한 커뮤니티 스타일</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => copyToClipboard(results.naverBand, 'naverBand')}
                className="flex items-center gap-2 px-3 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
              >
                <i className={`ri-${copiedIndex === 'naverBand' ? 'check' : 'file-copy'}-line text-sm`}></i>
                <span className="text-sm">{copiedIndex === 'naverBand' ? '복사됨' : '복사'}</span>
              </button>
              <button
                onClick={() => openSNSPlatform('naverBand', results.naverBand)}
                className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white hover:bg-green-600 rounded-lg transition-colors cursor-pointer"
              >
                <i className="ri-external-link-line text-sm"></i>
                <span className="text-sm">게시</span>
              </button>
            </div>
          </div>
          <div className="bg-green-50 rounded-xl p-4 max-h-80 overflow-y-auto">
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {results.naverBand}
            </p>
          </div>
        </div>
      </div>

      {/* 개선된 사용 팁 */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
        <h3 className="font-semibold text-blue-900 mb-4 flex items-center gap-2">
          <i className="ri-lightbulb-flash-line text-lg"></i>
          🚀 SNS 마케팅 꿀팁
        </h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
          <div className="flex items-start gap-2">
            <i className="ri-check-line text-blue-600 mt-0.5"></i>
            <span><strong>스레드:</strong> 트렌드 키워드와 후킹 멘트로 바이럴 효과 극대화</span>
          </div>
          <div className="flex items-start gap-2">
            <i className="ri-check-line text-blue-600 mt-0.5"></i>
            <span><strong>트위터:</strong> 280자 완벽 활용으로 알고리즘 최적화</span>
          </div>
          <div className="flex items-start gap-2">
            <i className="ri-check-line text-blue-600 mt-0.5"></i>
            <span><strong>인스타그램:</strong> 30개 해시태그로 노출도 최대화</span>
          </div>
          <div className="flex items-start gap-2">
            <i className="ri-check-line text-blue-600 mt-0.5"></i>
            <span><strong>네이버 밴드:</strong> 친근한 말투로 커뮤니티 참여율 향상</span>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/60 rounded-lg">
          <p className="text-xs text-blue-700 flex items-center gap-1">
            <i className="ri-fire-line"></i>
            <strong>PRO TIP:</strong> 각 플랫폼별 최적 게시 시간 - 스레드(오후 7-9시), 트위터(오후 12-3시), 인스타그램(오후 6-8시), 밴드(오후 8-10시)
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversionResults;