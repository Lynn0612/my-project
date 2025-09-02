import React from "react";

export default function Experience() {
  const experiences = [
    {
      year: "2024/12 - Present",
      company: "Wiselink 智通科創",
      title: "Frontend React Developer",
      desc: "負責金融App前後台與官網的前端開發與維護，專注於效能優化及 API 整合。\n 使用工具Typescript、JavaScript、HTML5、SCSS、React框架",
    },
    {
      year: "2024/08 - 2024/12",
      company: "希洛斯數位開發有限公司",
      title: "Frontend Developer",
      desc: "形象網站建置相關 \n 1.網頁前端UI/UX設計 2.RWD網頁設計及切版 3.協同後端工程師串接API 4.無障礙網頁設計 5.系統開發及維護 \n 使用工具JavaScript、Typescript、Bootstrap、Scss、React框架",
    },
    {
      year: "2024/02 - 2024/08",
      company: "神通資訊科技股份有限公司",
      title: "Frontend Engineer",
      desc: "負責政府圖書館資訊網頁以及APP畫面頁面為主\n 1.網頁前端UI/UX設計 2.RWD網頁設計及切版 3.協同後端工程師開發串接API 4.無障礙網頁設計 5.統開發及維護 \n 使用工具Query、JavaScript、Bootstrap、coldfusion、HTML5、CSS3、Vue3.js框架",
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Experience
        </h1>

        <div className="relative border-l-4 border-gray-400 ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 ml-6">

              <div className="absolute -left-3.5 w-7 h-7 bg-blue-500 rounded-full border-4 border-white shadow-md"></div>


              <div className="bg-white p-6 rounded-xl shadow-md">
                <span className="text-sm text-gray-500">{exp.year}</span>
                <h3 className="text-xl font-bold text-gray-900">
                  {exp.company} – {exp.title}
                </h3>
                <p className="text-gray-700 mt-2 whitespace-pre-line">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
