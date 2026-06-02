import React from 'react';
import { FaWhatsapp, FaDiscord, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

function FooterComp() {
    const waText = encodeURIComponent("Halo, saya melihat portofolio Anda. Saya tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama atau proyek yang sedang kami kembangkan.");
    return (
        <footer className="text-white py-14 relative border-gray-800/50">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent -z-10"></div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="text-2xl font-bold tracking-wide mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                        Stay Connected
                    </h3>
                    <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                        Butuh bantuan, memiliki pertanyaan, atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami melalui platform berikut.
                    </p>

                    <div className="my-5 flex flex-wrap justify-center md:justify-start gap-5">
                        <button className="w-20 h-20 flex items-center justify-center rounded-full transition">
                            <a href="https://github.com/Elang64/" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="text-4xl" />
                            </a>
                        </button>
                        <button className="w-20 h-20 flex items-center justify-center rounded-full transition">
                            <a href="https://www.linkedin.com/in/air-langga-ali-syahbani-16590a385/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-4xl" />
                            </a>
                        </button>
                        <button className="w-20 h-20 flex items-center justify-center rounded-full transition">
                            <a href="https://www.instagram.com/air_langga.as/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-4xl" />
                            </a>
                        </button>
                        <button className="w-20 h-20 flex items-center justify-center rounded-full transition">
                            <a href href={`https://wa.me/6285810115955?text=${waText}`} target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="text-4xl" />
                            </a>
                        </button>
                    </div>

                    <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-gray-700/80 to-transparent mb-8"></div>
                    <div className="text-gray-500 text-xs md:text-sm tracking-wide">
                        <p className="mb-1">
                            © {new Date().getFullYear()} Air Langga Ali Syahbani. All rights reserved.
                        </p>

                    </div>

                </div>
            </div>
        </footer>
    );
}

export default FooterComp;