
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSNSConvertClick = () => {
    // 메인 변환 섹션으로 스크롤
    const convertSection = document.querySelector('#convert-section');
    if (convertSection) {
      convertSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    navigate('/support');
  };

  const handleFeedbackClick = () => {
    navigate('/feedback');
  };

  const handleAboutClick = () => {
    navigate('/about');
  };

  const handlePrivacyClick = () => {
    navigate('/privacy');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4 cursor-pointer" onClick={handleLogoClick}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-share-box-line text-white text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold" style={{ fontFamily: "Pacifico, serif" }}>
                SNS 변환기
              </h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              하나의 글을 여러 SNS 플랫폼에 맞게 자동으로 변환해주는 
              AI 기반 콘텐츠 최적화 도구입니다.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">서비스</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={handleSNSConvertClick} className="hover:text-white transition-colors cursor-pointer text-left">SNS 변환</button></li>
              <li><a href="#features" className="hover:text-white transition-colors cursor-pointer">콘텐츠 최적화</a></li>
              <li><a href="#features" className="hover:text-white transition-colors cursor-pointer">해시태그 생성</a></li>
              <li><a href="#features" className="hover:text-white transition-colors cursor-pointer">일정 관리</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">정보</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={handleAboutClick} className="hover:text-white transition-colors cursor-pointer text-left">회사 소개</button></li>
              <li><a href="#how-to-use" className="hover:text-white transition-colors cursor-pointer">사용 가이드</a></li>
              <li><button onClick={handleContactClick} className="hover:text-white transition-colors cursor-pointer text-left">고객 지원</button></li>
              <li><button onClick={handleFeedbackClick} className="hover:text-white transition-colors cursor-pointer text-left">피드백</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 SNS 변환기. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <button onClick={handlePrivacyClick} className="hover:text-white transition-colors cursor-pointer">개인정보처리방침</button>
            <a href="#" className="hover:text-white transition-colors cursor-pointer">이용약관</a>
            <a href="https://readdy.ai/?origin=logo" className="hover:text-white transition-colors cursor-pointer">Website Builder</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
