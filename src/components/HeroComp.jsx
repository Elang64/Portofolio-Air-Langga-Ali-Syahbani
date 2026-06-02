import { IoMdDownload } from "react-icons/io";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaDownload } from "react-icons/fa";

function HeroComp() {
    const waText = encodeURIComponent("Halo, saya melihat portofolio Anda. Saya tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama atau proyek yang sedang kami kembangkan.");
    return (
        <>

            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-transparent -z-10 rounded-b-[3rem]"></div>

            <section className="relative  mx-12 px-12 sm:px-8 lg:px-12 py-15 md:py-12">
                <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-12 my-10">
                    <div className="text-center md:text-left order-2 md:order-1 flex-1 reveal reveal-left">
                        <h1 className="text-xl sm:text-xl md:text-4xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
                            Air Langga Ali <br className="hidden sm:block" />Syahbani<br />
                            <span style={{ "--i": 4 }} data-text="Software Engineer">Software Engineer</span>
                            <span style={{ "--i": 3 }} data-text="Coder">Coder</span>
                            <span style={{ "--i": 2 }} data-text="Designer">Designer</span>
                            <span style={{ "--i": 1 }} data-text="Flutter Developer">Flutter Developer</span>
                        </h1>

                        <p className="max-w-xl mt-6 text-base md:text-xs lg:text-sm text-gray-400 leading-relaxed mx-auto md:mx-0">
                            Selamat datang di portofolio saya! Saya seorang yang passionate di bidang Flutter, di website ini berbagi tentang proyek-proyek
                            yang saya kerjakan, pencapaian melalui sertifikat yang sudah saya raih, dan cara mudah untuk terhubung dengan saya. Ayo jelajahi perjalanan saya!
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-5">
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
                    </div>


                    <div className="order-1 md:order-2 flex-shrink-0 reveal reveal-right delay-100">
                        <img
                            src="src/assets/profileair.png"
                            alt="Foto profile Air Langga Ali Syahbani"
                            className="w-35 h-35 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-[300px] lg:h-[300px] xl:w-[400px] xl:h-[400px] object-cover rounded-full md:rounded-2xl border-2 border-blue-500/30 shadow-[0_0_40px] shadow-blue-500/20"
                        />
                    </div>
                </div>

                <div className="flex justify-center w-full">
                    <a href="" target="_blank" className=" flex items-center text-center justify-center w-60 mt-20 bg-gradient-to-b from-blue-500 to-cyan-400  font-semibold px-10 py-3.5 rounded-4xl hover:from-blue-500 hover:to-cyan-400 hover:text-white transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 duration-300 focus:outline-none ">
                        <FaDownload className="text-4xl mr-3" /> Download CV
                    </a>
                </div>




            </section>
        </>
    );
}

export default HeroComp;