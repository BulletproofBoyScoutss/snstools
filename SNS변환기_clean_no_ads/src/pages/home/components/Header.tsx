
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/');
    // 페이지 최상단으로 스크롤
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer" onClick={handleLogoClick}>
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-share-box-line text-white text-xl"></i>
            </div>
            <h1 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "Pacifico, serif" }}>
              SNS 변환기
            </h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              기능
            </a>
            <a href="#how-to-use" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              사용법
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors cursor-pointer">
              문의
            </a>
          </nav>
          
          <button className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer">
            <i className="ri-menu-line text-xl text-gray-600"></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
