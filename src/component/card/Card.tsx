import React, { useState } from "react";
import { FaHandPointer } from "react-icons/fa";

interface CardData {
    id: number;
    mediaSrc: string;
    isVideo?: boolean;
    frontText: string;
    backText: string;
    link: string;
}

const Card: React.FC<{ data: CardData }> = ({ data }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    // 支援完整 URL 或短網址
    // function getYouTubeID(url: string) {
    //     const regExp =
    //         /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    //     const match = url.match(regExp);
    //     return match ? match[1] : "";
    // }


    return (
        <div
            className="relative w-72 h-96 cursor-pointer transition-transform duration-700"
            style={{
                transformStyle: "preserve-3d",   // 保持 3D 效果
                perspective: "1000px",           // 視距，讓翻轉更自然
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
            onClick={handleFlip}
        >
            {/* 正面 */}
            <div
                className="absolute inset-0 bg-gray-900 border border-purple-500/70 rounded-xl shadow-lg overflow-hidden flex flex-col"
                style={{ backfaceVisibility: "hidden" }}
            >
                {/* 圖片 */}
                {data.isVideo ? (
                    // YouTube 影片
                    // <div className="w-full h-2/3 rounded-t-xl overflow-hidden">
                    //     <iframe
                    //         className="w-full h-full"
                    //         src={`https://www.youtube.com/embed/${getYouTubeID(data.mediaSrc)}`}
                    //         title={data.frontText}
                    //         frameBorder="0"
                    //         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    //         allowFullScreen
                    //     ></iframe>
                    // </div>
                    <video
                        src={data.mediaSrc}
                        className="w-100% h-2/3 object-fill rounded-t-xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                    />
                ) : (
                    // 圖片
                    <img
                        src={data.mediaSrc}
                        alt={data.frontText}
                        className="w-full h-2/3 object-fill rounded-t-xl"
                    />
                )}
                {/* 專案名稱 */}
                <div className="flex-1 w-full flex items-center justify-center text-center p-4 text-lg font-bold text-white tracking-wide">
                    {data.frontText}
                </div>

                {/* 右下角 CLICK 提示 */}
                <div className="absolute bottom-2 right-2 flex items-center text-xs text-white/80">
                    <span className="mr-1">CLICK</span>
                    <FaHandPointer className="animate-pulse" />
                </div>
            </div>

            {/* 背面 */}
            <div
                className="absolute inset-0 bg-gray-800 border border-purple-500/50 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 text-white text-sm leading-relaxed"
                style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
            >
                <p className="mb-4 text-center whitespace-pre-line">{data.backText}</p>
                <a
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-6 rounded-full transition-transform duration-300 hover:scale-105"
                >
                    View Project
                </a>
            </div>
        </div>
    );
};

export default Card;
