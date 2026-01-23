import React from 'react';
import { Globe, Youtube, Github, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-100 bg-white pt-20 pb-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="mb-6 flex flex-col gap-1">
              <span className="text-xl font-bold tracking-tight text-gray-900">COMPARE</span>
              <p className="text-sm font-medium text-gray-400">Intelligence for Your Shopping.</p>
            </div>

            <div className="mb-6 space-y-1">
              <p className="text-2xl font-semibold tracking-tight text-gray-900">1588-0000</p>
              <div className="flex flex-col gap-1 text-xs text-gray-500">
                <p>평일 09:00 - 18:00 (점심 12:00 - 13:00)</p>
                <p>주말 및 공휴일은 휴무입니다.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <SocialButton icon={Globe} href="#" />
              <SocialButton icon={Youtube} href="#" />
              <SocialButton icon={Twitter} href="#" />
              <SocialButton icon={Github} href="#" />
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-3">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Platform</h3>
              <ul className="mt-4 space-y-3">
                <FooterLink href="#">토큰 충전소</FooterLink>
                <FooterLink href="#">AI 검색 연구소</FooterLink>
                <FooterLink href="#">판매자 센터</FooterLink>
                <FooterLink href="#">API 문서</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Support</h3>
              <ul className="mt-4 space-y-3">
                <FooterLink href="#">공지사항</FooterLink>
                <FooterLink href="#">자주 묻는 질문</FooterLink>
                <FooterLink href="#">안전 결제 안내</FooterLink>
                <FooterLink href="#">1:1 문의하기</FooterLink>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Company</h3>
              <ul className="mt-4 space-y-3">
                <FooterLink href="#">회사 소개</FooterLink>
                <FooterLink href="#">인재 채용</FooterLink>
                <FooterLink href="#">제휴 문의</FooterLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-100 pt-8 sm:mt-20 lg:mt-24">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-500 md:flex-row md:items-center">
            <p>© 2024 COMPARE Inc. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900 hover:underline">
                개인정보처리방침
              </a>
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900 hover:underline">
                이용약관
              </a>
              <a href="#" className="font-medium text-gray-600 hover:text-gray-900 hover:underline">
                법적 고지
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialButton = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    className="group flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition-colors hover:bg-black hover:text-white"
  >
    <Icon className="h-4 w-4" />
  </a>
);

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <a href={href} className="text-[13px] text-gray-500 transition-colors hover:text-indigo-600">
      {children}
    </a>
  </li>
);

export default Footer;
