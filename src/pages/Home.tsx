import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect } from 'react';

export default function Home() {
    const texts = ["Frontend Developer", "前端工程師"];
    const [currentText, setCurrentText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typingSpeed = isDeleting ? 80 : 150;
        const pauseTime = 2000;

        let timeout: ReturnType<typeof setTimeout>;

        if (!isDeleting && currentText === texts[index]) {
            timeout = setTimeout(() => setIsDeleting(true), pauseTime);
        } else if (isDeleting && currentText === "") {
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % texts.length);
        } else {
            timeout = setTimeout(() => {
                const nextLength = currentText.length + (isDeleting ? -1 : 1);
                setCurrentText(texts[index].slice(0, nextLength));
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, index, texts]);

    return (
        <div id="home" className="h-screen bg-black text-white flex flex-col justify-center items-center px-4 sm:px-8">
            {/* 標題 */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
                Hi, I'm{' '}
                <span className="hover:text-pink-500 hover:scale-110 hover:font-extrabold transition-all duration-300 inline-block">
                    Lynn
                </span>
            </h1>

            {/* 打字效果 */}
            <p className="mt-2 sm:mt-4 text-base sm:text-lg md:text-xl text-center font-mono">
                {currentText}
                <span className="border-r-2 border-white animate-pulse ml-1"></span>
            </p>

            {/* 技能標籤 */}
            <div className="mt-6 sm:mt-8 flex flex-wrap justify-center gap-2 sm:gap-3">
                {["React", "JavaScript", "HTML5", "Sass", "Tailwind", "Bootstrap", "RESTful API", "Git"].map((skill) => (
                    <div
                        key={skill}
                        className="bg-gradient-to-r from-pink-600 to-pink-200 py-1 sm:py-2 px-3 sm:px-4 rounded-3xl shadow-2xl text-white text-xs sm:text-sm md:text-base"
                    >
                        {skill}
                    </div>
                ))}
                <p className="pt-2 sm:pt-4 text-xs sm:text-sm md:text-base">... etc.</p>
            </div>

            {/* 社群圖示 */}
            <div className="mt-6 sm:mt-8 flex gap-4 justify-center">
                <a
                    href="https://www.linkedin.com/in/zheng-lin-chen-a90234291/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faSquareLinkedin}
                        size="2x"
                        style={{ color: "#7520ff" }}
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/zheng-lin-chen-a90234291/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FontAwesomeIcon
                        icon={faGitlab}
                        size="2x"
                        style={{ color: "#7520ff" }}
                    />
                </a>
            </div>
        </div>
    );
}
