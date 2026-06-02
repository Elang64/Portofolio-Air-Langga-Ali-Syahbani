import { FaGithub } from "react-icons/fa";

function ProjectComp() {
    const items = [
        {
            id: 1,
            title: "Ticketing",
            highlight: "App",
            desc: "Aplikasi mobile pemesanan tiket bioskop yang dibangun menggunakan Flutter (Dart). Project ini fokus pada slicing UI/UX yang modern, yang meliputi pemilihan jadwal, pemilihan metode pembayaran, dan bukti pembayaran  dengan desain yang clean serta responsif.",
            img: "src/assets/ticket_app.png",
            link: "https://github.com/Elang64/Ticket-App",
        },
        {
            id: 2,
            title: "Daerah",
            highlight: "Indonesia",
            desc: "Aplikasi React untuk mencari kode pos dan menampilkan daftar provinsi serta kabupaten/kota di Indonesia. Dibangun dengan React Vite, JavaScript, dan Tailwind CSS dengan fokus pada UI clean dan performa tinggi.",
            img: "src/assets/daerah_indonesia.png",
            link: "https://github.com/Elang64/DaerahIndonesia",
        },
        {
            id: 3,
            title: "Majalah",
            highlight: "Online",
            desc: "Website modern yang dibangun menggunakan Laravel, fokus sepenuhnya pada jual beli majalah fisik maupun digital. Platform ini memudahkan pembeli mencari dan membeli berbagai majalah terbaru, majalah langka, edisi koleksi, hingga majalah digital (e-magazine) dari berbagai penerbit ternama.",
            img: "src/assets/majalah_online.png",
            link: "https://github.com/Elang64/Majalah_Online",
        },
        {
            id: 4,
            title: "Project",
            highlight: "TIXID",
            desc: "Website pemesanan tiket bioskop berbasis Laravel yang memungkinkan pengguna mencari film, memilih jadwal, dan memilih kursi secara interaktif.",
            img: "src/assets/tixid.png",
            link: "https://github.com/Elang64/Tixid",
        },
        {
            id: 5,
            title: "Jejak",
            highlight: "Karbon",
            desc: "Kalkulator penggunaan listrik dan emisi karbon berbasis web yang memungkinkan pengguna menghitung estimasi konsumsi kWh dan jejak karbon dari peralatan rumah tangga secara cepat dan mudah.",
            img: "src/assets/jejak_karbon.png",
            link: "https://github.com/Elang64/Jejak-Karbon",
        },
    ];

    return (
        <>
            <section className=" my-15 mx-auto relative">
                <div className="text-center mb-16 reveal reveal-up">
                    <span className="px-4 py-1.5  border border-blue-500/70 rounded-full text-sm text-blue-400 tracking-[.25rem] uppercase project-badge">
                        Projects
                    </span>
                    <h2 className="text-4xl md:text-5xl  font-bold text-white mt-6 project-title">
                        Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Saya</span>
                    </h2>
                </div>

                <div className="relative z-10">
                    <div className="absolute inset-0 -z-10 overflow-hidden blob-container">
                        <div className="absolute top-40 right-30 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] blob-blue"></div>
                        <div className="absolute bottom-20 left-150 w-40 h-56 bg-cyan-500/20 rounded-full blur-[90px] blob-cyan"></div>
                    </div>

                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-400 to-blue-500/20 -translate-x-1/2 timeline-line"></div>

                    {items.map((item) => (
                        <div key={item.id} className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20 last:mb-0 timeline-item reveal reveal-up">


                            <div className="md:pr-16 pl-30 timeline-image-left">
                                <img src={item.img} alt={item.title}
                                    className="rounded-xl shadow-lg shadow-blue-500/20 w-full h-full object-cover timeline-image" />
                            </div>


                            <div className="text-left md:pl-16">
                                <h3 className="text-2xl font-bold text-white mb-3 timeline-text ">
                                    {item.title} <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                                        {item.highlight}
                                    </span>
                                </h3>
                                <p className="text-gray-300 leading-relaxed max-w-md font-medium text-xl">
                                    {item.desc}
                                </p>


                                <a href={item.link} target="_blank" className="text-white flex items-center w-40 my-5 bg-gradient-to-r from-blue-500 to-cyan-400  font-semibold px-10 py-3.5 rounded-4xl hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 duration-300 focus:outline-none ">
                                    <FaGithub className="text-4xl mr-3" /> Link
                                </a>


                            </div>


                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gray-900 border-2 border-blue-500 rounded-full flex items-center justify-center z-20 shadow-[0_0_20px] shadow-blue-500 timeline-circle">
                                <span className="text-blue-400 font-bold text-sm">{item.id}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <style>
                {`
/* ===== RESPONSIVE ===== */

/* Tablet */
@media (min-width: 768px) {
    .project-section {
        padding: 4rem 2rem;
    }

    .project-title {
        font-size: 3rem;
    }

    .timeline-item {
        grid-template-columns: 1fr 1fr;
    }

    /* Teks kiri rata kanan */
    .timeline-text-left {
        text-align: right;
        padding-right: 4rem;
    }

    .timeline-text-left p {
        margin-left: auto;
    }

    /* Teks kanan rata kiri */
    .timeline-text-right {
        text-align: left;
        padding-left: 4rem;
    }

    /* Gambar kiri */
    .timeline-image-left {
        padding-right: 4rem;
    }

    /* Gambar kanan */
    .timeline-image-right {
        padding-left: 4rem;
    }

    .blob-cyan {
        right: -2rem;
        width: 24rem;
        height: 24rem;
    }
}

/* Desktop */
@media (min-width: 1024px) {
    .project-section {
        max-width: 80rem;
        padding: 5rem 2rem;
    }

    .project-title {
        font-size: 3.5rem;
    }

    .timeline-text h3 {
        font-size: 1.875rem;
    }
}

/* Mobile kecil */
@media (max-width: 767px) {
    /* Sembunyikan garis vertikal & circle */
    .timeline-line,
    .timeline-circle {
        display: none;
    }

    .timeline-item {
        gap: 1.5rem;
        margin-bottom: 4rem;
    }

    /* Gambar di atas, teks di bawah */
    .timeline-image {
        order: -1;
        height: 14rem;
    }

    .timeline-text {
        text-align: left;
        padding: 0;
    }

    .timeline-text p {
        font-size: 1rem;
        max-width: 100%;
    }

    .project-title {
        font-size: 1.875rem;
    }

    .blob-blue,
    .blob-cyan {
        right: -5rem;
        width: 16rem;
        height: 16rem;
    }
}`}
            </style>
        </>
    );
}

export default ProjectComp;