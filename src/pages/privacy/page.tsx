
import Header from '../home/components/Header';
import Footer from '../home/components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            개인정보처리방침
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            SNS 변환기는 사용자의 개인정보 보호를 최우선으로 합니다
          </p>
          <p className="text-sm text-gray-500">
            최종 업데이트: 2024년 12월 19일
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            
            {/* 1. 개인정보 수집 및 이용 목적 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">1. 개인정보 수집 및 이용 목적</h2>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">수집하는 개인정보 항목</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>필수항목:</strong> 이메일 주소 (문의 및 지원 서비스 제공)</li>
                  <li>• <strong>선택항목:</strong> 이름, 문의 내용 (고객 지원 서비스 향상)</li>
                  <li>• <strong>자동 수집:</strong> IP 주소, 쿠키, 접속 로그, 서비스 이용 기록</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">개인정보 이용 목적</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 서비스 제공 및 운영</li>
                  <li>• 고객 문의 및 지원 서비스</li>
                  <li>• 서비스 개선 및 새로운 기능 개발</li>
                  <li>• 부정 이용 방지 및 보안 강화</li>
                  <li>• 법적 의무 이행</li>
                </ul>
              </div>
            </div>

            {/* 2. 개인정보 보유 및 이용 기간 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">2. 개인정보 보유 및 이용 기간</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <ul className="space-y-3 text-gray-600">
                  <li>• <strong>문의 관련 정보:</strong> 문의 처리 완료 후 1년간 보관</li>
                  <li>• <strong>서비스 이용 기록:</strong> 서비스 제공 기간 동안 보관</li>
                  <li>• <strong>쿠키 및 로그 데이터:</strong> 수집일로부터 1년간 보관</li>
                  <li>• <strong>법정 보존 의무:</strong> 관련 법령에 따른 보존 기간 준수</li>
                </ul>
              </div>
            </div>

            {/* 3. 개인정보 제3자 제공 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">3. 개인정보 제3자 제공</h2>
              <div className="bg-red-50 rounded-xl p-6">
                <p className="text-gray-700 font-medium mb-4">
                  SNS 변환기는 원칙적으로 사용자의 개인정보를 제3자에게 제공하지 않습니다.
                </p>
                <p className="text-gray-600 mb-4">
                  다만, 다음의 경우에는 예외로 합니다:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 사용자가 사전에 동의한 경우</li>
                  <li>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
                  <li>• 서비스 제공을 위해 필요한 경우 (단, 최소한의 정보만 제공)</li>
                </ul>
              </div>
            </div>

            {/* 4. 개인정보 처리 위탁 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">4. 개인정보 처리 위탁</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다:
                </p>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 px-4 py-2 text-left">수탁업체</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">위탁업무</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">보유기간</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">Google LLC</td>
                        <td className="border border-gray-300 px-4 py-2">웹사이트 분석, 광고 서비스</td>
                        <td className="border border-gray-300 px-4 py-2">서비스 제공 기간</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 px-4 py-2">클라우드 서비스 제공업체</td>
                        <td className="border border-gray-300 px-4 py-2">데이터 저장 및 처리</td>
                        <td className="border border-gray-300 px-4 py-2">서비스 제공 기간</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 5. 쿠키 및 광고 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">5. 쿠키 및 광고 서비스</h2>
              <div className="bg-yellow-50 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Google AdSense 사용</h3>
                <p className="text-gray-700 mb-4">
                  본 웹사이트는 Google AdSense를 통해 광고를 게재합니다. Google AdSense는 사용자의 관심사에 맞는 광고를 제공하기 위해 쿠키를 사용할 수 있습니다.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Google은 본 사이트 방문 기록을 바탕으로 광고를 게재할 수 있습니다</li>
                  <li>• 사용자는 Google 광고 설정에서 맞춤 광고를 비활성화할 수 있습니다</li>
                  <li>• 자세한 내용은 Google 개인정보처리방침을 참조하시기 바랍니다</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">쿠키 사용</h3>
                <p className="text-gray-700 mb-4">
                  SNS 변환기는 서비스 개선과 사용자 경험 향상을 위해 쿠키를 사용합니다:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>필수 쿠키:</strong> 서비스 기본 기능 제공</li>
                  <li>• <strong>분석 쿠키:</strong> 웹사이트 이용 통계 분석</li>
                  <li>• <strong>광고 쿠키:</strong> 맞춤형 광고 제공</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  브라우저 설정을 통해 쿠키 사용을 거부할 수 있으나, 일부 서비스 이용에 제한이 있을 수 있습니다.
                </p>
              </div>
            </div>

            {/* 6. 사용자 권리 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">6. 사용자의 권리</h2>
              <div className="bg-green-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  사용자는 언제든지 다음과 같은 권리를 행사할 수 있습니다:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• 개인정보 처리 현황 열람 요구</li>
                  <li>• 개인정보 수정·삭제 요구</li>
                  <li>• 개인정보 처리 정지 요구</li>
                  <li>• 손해 발생 시 구제 요구</li>
                </ul>
                <p className="text-gray-600 mt-4">
                  권리 행사는 이메일(alggagi34@gmail.com)을 통해 요청하실 수 있습니다.
                </p>
              </div>
            </div>

            {/* 7. 개인정보 보호 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">7. 개인정보 보호를 위한 기술적·관리적 대책</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">기술적 대책</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• SSL 암호화 통신</li>
                    <li>• 개인정보 암호화 저장</li>
                    <li>• 접근 권한 관리</li>
                    <li>• 보안 프로그램 설치 및 갱신</li>
                  </ul>
                </div>
                
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">관리적 대책</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 개인정보 처리 직원 최소화</li>
                    <li>• 정기적인 보안 교육</li>
                    <li>• 개인정보 처리 현황 점검</li>
                    <li>• 개인정보보호 책임자 지정</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 8. 개인정보보호 책임자 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">8. 개인정보보호 책임자</h2>
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">개인정보보호 책임자</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• <strong>이름:</strong> SNS 변환기 개발팀</li>
                      <li>• <strong>이메일:</strong> alggagi34@gmail.com</li>
                      <li>• <strong>처리시간:</strong> 평일 09:00-18:00</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">개인정보 고충처리</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 개인정보보호위원회</li>
                      <li>• privacy.go.kr / 국번없이 182</li>
                      <li>• 개인정보보호 종합지원 포털</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. 방침 변경 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">9. 개인정보처리방침 변경</h2>
              <div className="bg-orange-50 rounded-xl p-6">
                <p className="text-gray-700 mb-4">
                  이 개인정보처리방침은 2024년 12월 19일부터 적용됩니다.
                </p>
                <p className="text-gray-600">
                  개인정보처리방침이 변경되는 경우, 변경 사항을 웹사이트에 공지하거나 이메일을 통해 알려드립니다. 
                  중요한 변경사항의 경우 최소 7일 전에 사전 공지합니다.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacy;
