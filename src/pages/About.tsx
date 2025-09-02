import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  // 定義左右進出動畫
  const imageVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: -200, opacity: 0 },
  };

  const textVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
    exit: { x: 200, opacity: 0 },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="min-h-screen flex items-center bg-white overflow-hidden"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center">
        {/* 左邊圖片 */}
        <motion.img
          src="\src\img\headshot.jpg"
          alt="demo"
          className="w-80 rounded-xl shadow-lg"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "exit"}
          transition={{ duration: 0.8 }}
        />

        {/* 右邊文字 */}
        <motion.div
          className="text-left"
          variants={textVariants}
          initial="hidden"
          animate={isInView ? "visible" : "exit"}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gray-900 pl-4">自傳</h2>
          <p className="text-lg text-gray-700 m-4">
            您好，我是政琳，我的個性是能靜能動的並喜歡嘗試學習各種事物，處事態度是很積極並謹慎總希望能把事情做到最完美。
            <br /><br />
            累積的工作經驗中讓我學到溝通、協調、合作的重要性，對於自己與人溝通能力深具信心，也深知組織中團隊合作的重要性，更加學會了如何待人處事以及應對得宜，我的挫折容忍力也比一般人高出許多，能夠永遠保持積極進取的精神處理每一項迎面而來的挑戰。
            <br /><br />
            作為一名前端開發者，熟悉主流框架，並具備完整的從零打造頁面的經驗。我在專案中靈活應用相關技術，並在模組化開發與效能優化上展現了專業能力。
            <br /><br />
            此外，我積極參與 Code Review，確保程式碼品質穩定，並持續學習最新技術，力求成為全端工程師。
            <br /><br />
            貴公司的經營理念也一直讓本人非常嚮往，如今釋出招募人才之訊息，盼能為貴公司效力，秉持著積極和向上的心，必當全心全力貢獻己力在工作上，懇請貴公司給予面試機會！
          </p>
        </motion.div>
      </div>
    </section>
  );
}
