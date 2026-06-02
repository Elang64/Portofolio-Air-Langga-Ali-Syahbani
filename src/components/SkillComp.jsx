import { 
    FaHtml5, FaCss3Alt, FaGitAlt, FaFigma 
} from "react-icons/fa";
import { FaFlutter, FaReact } from "react-icons/fa6";
import { 
    SiTailwindcss, SiMongodb, SiPostgresql, SiDart, SiLaravel, SiExpress 
} from "react-icons/si";

function SkillComp() {
    const skills = [
        { id: 1, name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { id: 2, name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { id: 3, name: "Flutter", icon: <FaFlutter className="text-blue-400" /> },
        { id: 4, name: "React", icon: <FaReact className="text-cyan-400" /> }, 
        { id: 5, name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
        { id: 6, name: "Express", icon: <SiExpress className="text-black" /> },
        { id: 7, name: "Dart", icon: <SiDart className="text-blue-900" /> },
        { id: 8, name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
        { id: 9, name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
        { id: 10, name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { id: 11, name: "Figma", icon: <FaFigma className="text-pink-400" /> },
        { id: 12, name: "Laravel", icon: <SiLaravel className="text-red-600" /> },
    ];

    const reversedSkills = [...skills].reverse();

    return (
        <section className="overflow-hidden">
            <div className="relative py-20">

                {/* Efek Cahaya Latar */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                </div>

                <div className="text-center mb-10">
                    <span className="px-4 py-1.5 border border-blue-500/70 rounded-full text-sm text-blue-400 tracking-[.25rem] uppercase">
                        Skills
                    </span>
                </div>

                <h2 className="text-5xl p-4 md:text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400 mb-4 reveal reveal-up">
                    Keahlian Saya
                </h2> 

                <div className="relative mx-auto overflow-hidden py-4">
                    {/* Efek Gradasi (Fade) */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-gray-950 to-transparent pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-gray-950 to-transparent pointer-events-none"></div>

                    {/* ======== BARIS 1 (Geser ke Kiri) ======== */}
                    <div className="flex w-max mb-5 infinite-scroll-left reveal reveal-left">
                        {/* Set Pertama */}
                        <div className="flex gap-5 pr-5">
                            {skills.map((skill) => (
                                <div
                                    key={`row1-origin-${skill.id}`}
                                    className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3.5 min-w-fit hover:border-blue-500/50 hover:shadow-[0_0_20px] hover:shadow-blue-500/20 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Set Kedua (Duplikat) */}
                        <div className="flex gap-5 pr-5">
                            {skills.map((skill) => (
                                <div
                                    key={`row1-clone-${skill.id}`}
                                    className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3.5 min-w-fit hover:border-blue-500/50 hover:shadow-[0_0_20px] hover:shadow-blue-500/20 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ======== BARIS 2 (Geser ke Kanan) ======== */}
                    <div className="flex w-max infinite-scroll-right reveal reveal-right">
                        {/* Set Pertama */}
                        <div className="flex gap-5 pr-5">
                            {reversedSkills.map((skill) => (
                                <div
                                    key={`row2-origin-${skill.id}`}
                                    className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3.5 min-w-fit hover:border-cyan-500/50 hover:shadow-[0_0_20px] hover:shadow-cyan-500/20 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                        {/* Set Kedua (Duplikat) */}
                        <div className="flex gap-5 pr-5">
                            {reversedSkills.map((skill) => (
                                <div
                                    key={`row2-clone-${skill.id}`}
                                    className="flex items-center gap-3 bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl px-6 py-3.5 min-w-fit hover:border-cyan-500/50 hover:shadow-[0_0_20px] hover:shadow-cyan-500/20 transition-all duration-300 group cursor-default"
                                >
                                    <span className="text-2xl group-hover:scale-110 transition-transform">
                                        {skill.icon}
                                    </span>
                                    <span className="text-gray-300 font-medium text-sm whitespace-nowrap group-hover:text-white transition">
                                        {skill.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CSS Animasi */}
                <style>{`
                .infinite-scroll-left {
                    animation: scrollLeft 30s linear infinite;
                }
                .infinite-scroll-right {
                    animation: scrollRight 35s linear infinite;
                }
                .infinite-scroll-left:hover,
                .infinite-scroll-right:hover {
                    animation-play-state: paused;
                }
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                `}</style>
            </div>
        </section>
    );
}

export default SkillComp;