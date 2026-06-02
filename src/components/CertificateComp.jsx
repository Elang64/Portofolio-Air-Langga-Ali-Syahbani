import { useState } from "react";
import { FaAward, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

import pemograman_web from '../assets/certificates/pemograman_web.png';
import javascript from '../assets/certificates/javascript.png';
import frontend from '../assets/certificates/frontend.png';
import reactCert from '../assets/certificates/react.png';
import backend from '../assets/certificates/backend.png';
import logic from '../assets/certificates/logic.png';
import github from '../assets/certificates/github.png';
import financial_literacy from '../assets/certificates/financial_literacy.png';
import software from '../assets/certificates/software.png';
import k3 from '../assets/certificates/k3.png';
import web_dev from '../assets/certificates/web_dev.png';
import ai from '../assets/certificates/ai.png';

function CertificateComp() {
    const [selectedCert, setSelectedCert] = useState(null);

    const certificates = [
        {
            id: 1,
            title: "Belajar Dasar Pemrograman Web",
            issuer: "Dicoding Indonesia",
            date: "Februari 2026",
            desc: "Mempelajari dasar-dasar pengembangan web meliputi HTML, CSS, Flexbox, layout responsif, serta membangun proyek website sederhana secara langsung.",
            tech: ["HTML", "CSS"],
            image: pemograman_web,
        },
        {
            id: 2,
            title: "Belajar Dasar Pemrograman JavaScript",
            issuer: "Dicoding Indonesia",
            date: "Februari 2026",
            desc: "Membangun fondasi JavaScript modern yang kuat, meliputi penguasaan runtime environment (Node.js/Bun/Deno), struktur data adaptif, paradigma OOP dan Functional Programming, serta penanganan proses asynchronous. Melalui sertifikasi intensif ini, fokus utama ditekankan pada Code Quality untuk memastikan penulisan kode yang tidak hanya efisien, tetapi juga bersih, modular, aman, dan memenuhi standar industri.",
            tech: ["JavaScript"],
            image: javascript,
        },
        {
            id: 3,
            title: "Belajar Membuat Front-End Web untuk Pemula",
            issuer: "Dicoding Indonesia",
            date: "Februari 2026",
            desc: "Mempelajari DOM manipulation, event handling, dan Web Storage untuk membangun aplikasi web interaktif dengan penyimpanan data di browser. Menyelesaikan proyek akhir yang mengimplementasikan ketiga konsep tersebut.",
            tech: ["JavaScript", "HTML"],
            image: frontend,
        },
        {
            id: 4,
            title: "Belajar Membuat Aplikasi Web dengan React",
            issuer: "Dicoding Indonesia",
            date: "Februari 2026",
            desc: "Mempelajari fundamental React meliputi component, props, state, controlled component, serta berhasil menyelesaikan proyek akhir berupa Aplikasi Catatan menggunakan React.",
            tech: ["React", "JavaScript"],
            image: reactCert,
        },
        {
            id: 5,
            title: "Belajar Back-End Pemula dengan JavaScript",
            issuer: "Dicoding Indonesia",
            date: "Januari 2026",
            desc: "Mempelajari dasar Back-End Development menggunakan Node.js, membangun RESTful API dengan Hapi, serta melakukan deployment ke Amazon EC2. Menyelesaikan proyek pembuatan Web Service sesuai standar industri.",
            tech: ["Node.js", "JavaScript"],
            image: backend,
        },
        {
            id: 6,
            title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
            issuer: "Dicoding Indonesia",
            date: "Januari 2025",
            desc: "Membangun fondasi logika pemrograman, algoritma, dan computational thinking sebagai dasar penting dalam pengembangan software.",
            tech: [],
            image: logic,
        },
        {
            id: 7,
            title: "Belajar Dasar Git dengan GitHub",
            issuer: "Dicoding Indonesia",
            date: "Januari 2025",
            desc: "Mempelajari fundamental Version Control System menggunakan Git dan GitHub, termasuk repository management, branching strategy, serta best practices kolaborasi development.",
            tech: [],
            image: github,
        },
        {
            id: 8,
            title: "Financial Literacy",
            issuer: "Dicoding Indonesia",
            date: "Desember 2025",
            desc: "Mempelajari dasar-dasar literasi keuangan, pengelolaan keuangan pribadi, investasi, serta pengambilan keputusan keuangan yang bijak.",
            tech: [],
            image: financial_literacy,
        },
        {
            id: 9,
            title: "Dasar Pengembang Software",
            issuer: "Dicoding Indonesia",
            date: "Januari 2026",
            desc: "Membangun fondasi pemrograman yang solid, meliputi logika pemrograman, algoritma dasar, version control dengan Git, dan persiapan menjadi software developer.",
            tech: [],
            image: software,
        },
        {
            id: 10,
            title: "Keselamatan dan Kesehatan Kerja (K3)",
            issuer: "International Labour Organization (ILO)",
            date: "Agustus 2024",
            desc: "Menyelesaikan pelatihan e-learning Keselamatan dan Kesehatan Kerja yang diselenggarakan oleh International Labour Organization (ILO) dalam program “Safety + Health for All”. Sertifikasi ini membekali pemahaman komprehensif mengenai prinsip-prinsip keselamatan kerja, pencegahan risiko di tempat kerja, kesehatan kerja, serta standar internasional K3.",
            tech: [],
            image: k3,
        },
        {
            id: 11,
            title: "Web Development Fundamentals",
            issuer: "IBM SkillsBuild",
            date: "Oktober 2024",
            desc: "Menyelesaikan kursus resmi IBM yang membekali dasar-dasar pengembangan web, termasuk teknologi dan praktik terbaik dalam membangun aplikasi web.",
            tech: [],
            image: web_dev,
        },
        {
            id: 12,
            title: "Dasar dan Penggunaan Generatif AI",
            issuer: "Codepolitan",
            date: "Juli 2025",
            desc: "Menyelesaikan pelatihan resmi tentang Generative AI yang didukung oleh Google.org dan Asian Development Bank, mencakup dasar-dasar dan penerapan teknologi AI generatif.",
            tech: [],
            image: ai,
        },
    ];

    return (
        <section className="z-10">
            <div className="relative py-16">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-150 -left-0 w-[100px] h-[100px] bg-cyan-500/100 rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0  w-96 h-96 bg-blue-600/15 rounded-full blur-[100px]"></div>
                    <div className="absolute top-0 -right-2 w-120 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
                </div>

                <div className="text-center mb-14 reveal reveal-up">
                    <span className="px-4 py-1.5 border border-blue-500/70 rounded-full text-sm text-blue-400 tracking-[.25rem] uppercase">
                        Certificates
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-5">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                            Sertifikat
                        </span> Saya
                    </h2>

                </div>

                <div className=" mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {certificates.map((cert, index) => (
                        <div
                            key={cert.id}
                            onClick={() => setSelectedCert(cert)}
                            style={{ transitionDelay: `${(index % 3) * 120}ms` }}
                            className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-5 cursor-pointer hover:border-blue-500/40 hover:shadow-[0_0_30px] hover:shadow-blue-500/15 transition-all duration-300 hover:-translate-y-1 reveal reveal-up"
                        >

                            <div className="relative overflow-hidden rounded-xl mb-4 aspect-[4/3]">
                                <img
                                    src={cert.image}
                                    alt={cert.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-3">
                                    <span className="text-white text-sm flex items-center gap-1.5 bg-blue-500/80 px-4 py-1.5 rounded-full">
                                        <FaExternalLinkAlt className="text-xs" /> Lihat Sertifikat
                                    </span>
                                </div>
                            </div>


                            <div className="flex items-start gap-3 mb-3">

                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight">{cert.title}</h3>
                                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                                </div>
                            </div>


                            <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
                                {cert.desc}
                            </p>


                            <div className="flex flex-wrap gap-1.5">
                                {cert.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2.5 py-1 text-xs font-medium bg-blue-500/15 text-blue-300 border border-blue-500/25 rounded-full"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>


                {selectedCert && (
                    <div
                        className="fixed inset-0 z-50 flex items-center  justify-center p-100 bg-black/80 backdrop-blur-sm "
                        onClick={() => setSelectedCert(null)}
                    >
                        <div
                            className="relative bg-gray-900 border border-gray-700/60 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >

                            <button
                                onClick={() => setSelectedCert(null)}
                                className="absolute top-3 right-3 z-10 w-10 h-10 bg-transparent hover:bg-red-500/20 rounded-full flex items-center justify-center text-gray-400 hover:text-red-400 transition"
                            >
                                <FaTimes className="text-lg" />
                            </button>


                            <div className="aspect-[4/3] overflow-hidden rounded-t-2xl">
                                <img
                                    src={selectedCert.image}
                                    alt={selectedCert.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>


                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <div>
                                        <h3 className="text-white font-bold text-xl">{selectedCert.title}</h3>
                                        <p className="text-gray-400">{selectedCert.issuer} • {selectedCert.date}</p>
                                    </div>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-5">
                                    {selectedCert.desc}
                                </p>


                                <div className="flex flex-wrap gap-2 mb-6">
                                    {selectedCert.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1.5 text-sm font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}

export default CertificateComp;