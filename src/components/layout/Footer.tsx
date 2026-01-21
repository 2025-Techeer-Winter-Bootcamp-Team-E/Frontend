import React from 'react';
import { Globe, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 text-2xl font-bold text-cyan-500">COMPARE</div>
            <div className="mb-4 text-3xl font-bold text-gray-900">1588-0000</div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>평일 09:00 - 18:00 (점심 12:00-13:00)</p>
              <p>주말 및 공휴일 휴무</p>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              PLATFORM
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-cyan-500">
                  토큰 충전소
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  AI 검색 연구소
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  판매자 센터
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              SUPPORT
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <a href="#" className="hover:text-cyan-500">
                  공지사항
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  안전 결제 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  1:1 문의
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
              SOCIAL
            </h3>
            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-cyan-500 hover:text-cyan-500">
                <Globe className="h-4 w-4" />
              </button>
              <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:border-cyan-500 hover:text-cyan-500">
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-gray-100 pt-6 text-xs text-gray-400">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p>© 2024 COMPARE. High-End AI-Powered Parts Comparison Ecosystem.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-cyan-500">
                개인정보처리방침
              </a>
              <a href="#" className="hover:text-cyan-500">
                이용약관
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
