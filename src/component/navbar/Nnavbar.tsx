import  { useState } from "react";

const listItems = [
  { label: "</home>", id: "home" },
  { label: "</about>", id: "about" },
  { label: "</projects>", id: "projects" },
  { label: "</experience>", id: "experience" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 桌面版 Navbar */}
      <div className="fixed bg-gray-500 hidden md:flex justify-between items-center gap-16 py-3 px-10 left-1/2 -translate-x-1/2 top-5 rounded-full backdrop-blur-md bg-opacity-60 text-white shadow-lg z-50">
        <ul className="flex gap-8 text-xl">
          {listItems.map((item) => (
            <li
              key={item.id}
              className="relative group cursor-pointer"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
              <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>

        {/* 桌面版 Contact 按鈕 */}
        <a
          href="mailto:lynn.cirous@gmail.com?subject=Lynn的工作通知&body=hihi我是從Lynn的履歷表過來的～訊息如下↓↓↓"
          className="bg-gradient-to-r from-blue-500 to-purple-400 py-1 px-6 rounded-3xl shadow-2xl text-white text-lg font-semibold hover:from-blue-600 hover:to-purple-500 hover:shadow-purple-500 shadow-blue-500"
        >
          Contact
        </a>
      </div>

      {/* 手機版 Navbar */}
      <div className="fixed md:hidden bg-gray-500 backdrop-blur-md bg-opacity-60 text-white shadow-lg z-50 top-5 left-5 right-5 rounded-2xl">
        <div className="flex justify-between items-center py-3 px-6">
          <div className="text-xl font-bold">Logo</div>

          {/* 漢堡選單按鈕 */}
          <button
            onClick={toggleMenu}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1.5"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* 手機版選單內容 */}
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-6 pb-4 space-y-1">
            <ul className="space-y-3">
              {listItems.map((item) => (
                <li
                  key={item.id}
                  className="relative group cursor-pointer"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                  <span className="absolute left-0 bottom-[-5px] w-0 h-1 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              {/* 手機版 Contact */}
              <a
                href="mailto:lynn.cirous@gmail.com?subject=Lynn的工作通知&body=hihi我是從Lynn的履歷表過來的～訊息如下↓↓↓"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-400 py-2 px-6 rounded-2xl shadow-xl text-white text-lg font-semibold hover:from-blue-600 hover:to-purple-500 transition-all duration-200"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
