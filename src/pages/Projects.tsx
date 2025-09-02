import React, { useRef } from "react";
import Card from "../component/card/Card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CardData {
  id: number;
  mediaSrc: string;
  isVideo?: boolean;
  frontText: string;
  backText: string;
  link: string;
}

export default function Projects() {
  const cardData: CardData[] = [
      {
    id: 1,
    mediaSrc: "/src/img/cirous.mp4",
    frontText: "React｜Bootstrap｜SCSS｜Axios｜ESLint｜Bitbucket｜Trello｜SEO",
    backText: "負責官方網站的前端開發與維護，優化用戶體驗。專注於 RWD 響應式設計，確保在桌機、手機上皆有流暢的操作體驗。\n\n主要功能開發：實作網站頁面佈局與互動功能，整合 API 動態載入資料。開發響應式設計，確保網站於各裝置尺寸下的呈現效果。",
    link: "https://stage.ncp.cirous.io/",
    isVideo: true, // 這是影片
  },
      {
    id: 2,
    mediaSrc: "/src/img/mitac.mp4",
    frontText: "Vue3｜jQuery｜Bootstrap｜JavaScript｜HTML5｜CSS3｜Web Accessibility｜ColdFusion｜GitHub",
    backText: "前台：修復系統前端頁面錯誤並改善瀏覽體驗。 優化 RWD 設計，確保多裝置的適配性。 配合後端開發人員，完成 API 串接與資料顯示。 依據政府無障礙標準進行前端改善 \n\n 後台：負責圖書館資訊系統後台的前端維護及功能優化，使用 Vue 3 框架進行現有後台功能的優化與維護。 改善使用者介面，提供直觀的資料管理功能。 修正 UI 顯示問題，優化操作流暢性。",
    link: "https://stage.ncp.cirous.io/",
    isVideo: true, // 這是影片
  },
      {
    id: 3,
    mediaSrc: "/src/img/iii.mp4",
    frontText: "HTML5｜CSS3｜JavaScript｜jQuery｜AJAX｜API 串接｜Figma｜AI克隆聲",
    backText: "在資策會的前端工程課程中，完成股票資訊為主題的網站。\n專案採用 Figma 進行設計構圖，從零到有完整實現。Mobile First 設計思維，以手刻 CSS 打造響應式網頁，並結合 jQuery AJAX 完成部分。 JavaScript 互動及基本 API 串接功能。",
    link: "https://stage.ncp.cirous.io/",
    isVideo: true, // 這是影片
  },
  {
    id: 4,
    mediaSrc: "/src/img/finshellpay.png",
    frontText: "React｜TypeScript｜SCSS｜Redux｜RESTful API｜Prettier",
    backText: "印度數位金融平台，提供帳單支付、個人貸款、虛擬信用卡等服務。\n負責前端開發與維護，使用 React + TypeScript + SCSS，整合 API 串接，提升用戶操作流暢度與體驗。",
    link: "https://play.google.com/store/apps/details?id=com.finshell.fin",
    isVideo: false, // 這是圖片
  },
  {
    id: 5,
    mediaSrc: "/src/img/finshellpayback.png",
    frontText: "React｜TypeScript｜SCSS｜Redux｜Ant Design｜RESTful API｜Prettier｜GitHub",
    backText: "finshellpay後台管理系統,負責前端維護與開發功能優化，使用 React + TypeScript + SCSS，提升資料管理效率與使用者操作流暢度。",
    link: "https://play.google.com/store/apps/details?id=com.finshell.fin",
    isVideo: false, // 這是圖片
  },
  {
    id: 6,
    mediaSrc: "/src/img/growhiz.png",
    frontText: "React｜TypeScript｜GitHub｜Jira｜Figma｜RWD｜Tailwind CSS｜Vite",
    backText: "FinShell Pay 官方網站/n負責前端開發與維護，使用 React + TypeScript，優化RWD響應式設計，確保桌機與手機端操作流暢，並整合 API 動態載入金融產品與合作夥伴資訊。",
    link: "https://www.finshellpay.com/",
    isVideo: false, // 這是圖片
  },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollRef.current.offsetWidth, behavior: "smooth" });
    }
  };

  return (
    <div id="projects" className="bg-gray-700 text-white py-12 px-6 relative">
      <h2 className="text-2xl font-bold text-center mb-8">My Projects</h2>

      {/* 卡片容器 */}
      <div
        ref={scrollRef}
        className="
          flex lg:grid lg:grid-cols-3 gap-6 
          overflow-x-auto lg:overflow-visible 
          snap-x snap-mandatory
          scroll-smooth
          no-scrollbar
        "
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="
              flex-shrink-0 
              w-[80%] sm:w-[60%] md:w-[50%] lg:w-auto 
              snap-center
              flex justify-center
            "
          >
            <Card data={card} />
          </div>
        ))}
      </div>

      {/* 左右箭頭，只在手機/小螢幕 */}
      <button
        onClick={scrollLeft}
        className="lg:hidden absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaChevronLeft size={20} />
      </button>
      <button
        onClick={scrollRight}
        className="lg:hidden absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full shadow-md hover:bg-gray-600"
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
}
