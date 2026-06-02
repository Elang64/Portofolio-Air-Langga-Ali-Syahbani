import { FaGithub } from "react-icons/fa";

import ticketAppImg from "../assets/ticket_app.png";
import daerahIndonesiaImg from "../assets/daerah_indonesia.png";
import majalahOnlineImg from "../assets/majalah_online.png";
import tixidImg from "../assets/tixid.png";
import jejakKarbonImg from "../assets/jejak_karbon.png";

function ProjectComp() {
    const items = [
        {
            id: 1,
            title: "Ticketing",
            highlight: "App",
            desc: "Aplikasi mobile pemesanan tiket bioskop yang dibangun menggunakan Flutter (Dart). Project ini fokus pada slicing UI/UX yang modern, yang meliputi pemilihan jadwal, pemilihan metode pembayaran, dan bukti pembayaran dengan desain yang clean serta responsif.",
            img: ticketAppImg,
            link: "https://github.com/Elang64/Ticket-App",
        },
        {
            id: 2,
            title: "Daerah",
            highlight: "Indonesia",
            desc: "Aplikasi React untuk mencari kode pos dan menampilkan daftar provinsi serta kabupaten/kota di Indonesia. Dibangun dengan React Vite, JavaScript, dan Tailwind CSS dengan fokus pada UI clean dan performa tinggi.",
            img: daerahIndonesiaImg,
            link: "https://github.com/Elang64/DaerahIndonesia",
        },
        {
            id: 3,
            title: "Majalah",
            highlight: "Online",
            desc: "Website modern yang dibangun menggunakan Laravel, fokus sepenuhnya pada jual beli majalah fisik maupun digital. Platform ini memudahkan pembeli mencari dan membeli berbagai majalah terbaru, majalah langka, edisi koleksi, hingga majalah digital (e-magazine) dari berbagai penerbit ternama.",
            img: majalahOnlineImg,
            link: "https://github.com/Elang64/Majalah_Online",
        },
        {
            id: 4,
            title: "Project",
            highlight: "TIXID",
            desc: "Website pemesanan tiket bioskop berbasis Laravel yang memungkinkan pengguna mencari film, memilih jadwal, dan memilih kursi secara interaktif.",
            img: tixidImg,
            link: "https://github.com/Elang64/Tixid",
        },
        {
            id: 5,
            title: "Jejak",
            highlight: "Karbon",
            desc: "Kalkulator penggunaan listrik dan emisi karbon berbasis web yang memungkinkan pengguna menghitung estimasi konsumsi kWh dan jejak karbon dari peralatan rumah tangga secara cepat dan mudah.",
            img: jejakKarbonImg,
            link: "https://github.com/Elang64/Jejak-Karbon",
        },
    ];

    return (
        <>
            <section className="my-15 mx-auto relative max-w-6xl px-4">
                <div className="text-center mb-16 reveal reveal-up">
                    <span className="px-4 py-1.5 border border-blue-500/70 rounded-full text-sm text-blue-400 tracking-[.25rem] uppercase project-badge">
                        Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-6 project-title">
                        Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Saya</span>
                    </h2>
                </div>

                <div className="relative z-10">
                    {/* Efek Latar Belakang Blob */}
                    <div className="absolute inset-0 -z-10 overflow-hidden blob-container">
                        <div className="absolute top-40 right-30 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] blob-blue"></div>
                        <div className="absolute bottom-20 left-150 w-40 h-56 bg-cyan-500/20 rounded-full blur-[90px] blob-cyan"></div>
                    </div>

                    {/* Garis Tengah Timeline (Hanya muncul di desktop/tablet) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500/20 -translate-x-1/2 hidden md:block timeline-line"></div>

                    {items.map((item, index) => {
                        // Cek apakah urutan indeks genap/ganjil untuk layout selang-seling
                        const isEven = index % 2 === 0;

                        return (
                            <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20 last:mb-0 timeline-item reveal reveal-up">
                                
                                {/* KOTAK GAMBAR: Menggunakan 'md:order-2' jika urutannya genap agar bertukar tempat */}
                                <div className={`w-full ${isEven ? "md:order-1 md:text-right" : "md:order-2"}`}>
                                    <img 
                                        src={item.img} 
                                        alt={item.title}
                                        className="rounded-xl shadow-lg shadow-blue-500/10 w-full h-auto max-h-72 object-cover border border-gray-800" 
                                    />
                                </div>

                                {/* KOTAK TEKS */}
                                <div className={`w-full flex flex-col ${isEven ? "md:order-2 md:pl-8" : "md:order-1 md:pr-8 md:items-end md:text-right"}`}>
                                    <h3 className="text-2xl font-bold text-white mb-3">
                                        {item.title} <br />
                                        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-cyan-400">
                                            {item.highlight}
                                        </span>
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed font-medium text-base mb-4 max-w-md">
                                        {item.desc}
                                    </p>

                                    <a 
                                        href={item.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-white flex items-center justify-center w-36 bg-gradient-to-r from-blue-500 to-cyan-400 font-semibold px-6 py-2.5 rounded-full hover:from-blue-600 hover:to-cyan-500 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 duration-300 focus:outline-none"
                                    >
                                        <FaGithub className="text-xl mr-2" /> GitHub
                                    </a>
                                </div>

                                {/* BULATAN NOMOR TIMELINE (Hanya muncul di desktop/tablet) */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 bg-gray-900 border-2 border-blue-500 rounded-full hidden md:flex items-center justify-center z-20 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                                    <span className="text-blue-400 font-bold text-xs">{item.id}</span>
                                </div>

                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default ProjectComp;