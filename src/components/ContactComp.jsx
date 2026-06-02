import React from 'react';
import { FaDownload, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';

const ContactComp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);

        const data = {
            access_key: "fbdf969a-af60-4b24-84da-50f00705ee92",
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        };
        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.innerText;
        btn.innerText = "Mengirim...";
        btn.disabled = true;
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const result = await response.json();
            if (response.ok) {
                alert("Pesan berhasil terkirim ke email Anda!");
                form.reset();
            } else {
                console.log(result);
                alert("Gagal mengirim pesan: " + result.message);
            }
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan jaringan.");
        } finally {
            btn.innerText = originalText;
            btn.disabled = false;
        }
    };

    const waText = encodeURIComponent("Halo, saya melihat portofolio Anda. Saya tertarik untuk berdiskusi lebih lanjut mengenai peluang kerja sama atau proyek yang sedang kami kembangkan.");

    return (
        <section className=" px-  z-10 font-sans">
            <div className="relative py-16">

                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-blue-600/15 rounded-full blur-[100px]"></div>
                    <div className="absolute -z-10 top-20 right-20 w-[100px] h-[300px] bg-cyan-600/28 rounded-full blur-[100px]"></div>
                </div>
                <div className="text-center mb-10 py-5 reveal reveal-up">
                    <span className="px-4 py-1.5 border border-blue-500/70 rounded-full text-sm text-blue-400 tracking-[.25rem] uppercase">
                        Contact Me
                    </span>
                </div>

                <div className="absolute max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">


                    <div className="space-y-8 reveal reveal-left">

                        <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-white tracking-wide mt-2">
                            Mari <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Berkolaborasi  </span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base lg:pr-8">
                            Saya percaya bahwa kolaborasi adalah kunci untuk menciptakan sesuatu yang luar biasa.
                            Jika Anda memiliki proyek yang ingin dikerjakan bersama atau membutuhkan bantuan
                            dalam bidang saya, saya akan dengan senang hati untuk bekerja sama.
                        </p>

                        <div className="space-y-6 pt-4">
                            <a
                                href={`https://wa.me/6285810115955?text=${waText}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 group cursor-pointer no-underline"
                            >
                                <div className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px] group-hover:shadow-blue-500/15 transition-all duration-300 group-hover:-translate-y-1">
                                    <FaWhatsapp className="text-blue-500 text-3xl" />
                                </div>
                                <div>
                                    <p className="text-blue-400 text-sm mb-0.5 font-medium">Phone</p>
                                    <p className="text-white font-medium tracking-wide group-hover:text-blue-400 transition-colors">(+62) 858 1011 5955</p>
                                </div>
                            </a>

                            <a
                                href="mailto:airlanggaalisyahbanie@gmail.com" target='_blank'
                                className="flex items-center gap-5 group cursor-pointer no-underline"
                            >
                                <div className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px] group-hover:shadow-blue-500/15 transition-all duration-300 group-hover:-translate-y-1">
                                    <FaEnvelope className="text-blue-500 text-2xl" />
                                </div>
                                <div>
                                    <p className="text-blue-400 text-sm mb-0.5 font-medium">Email</p>
                                    <p className="text-white font-medium tracking-wide group-hover:text-blue-400 transition-colors">airlanggaalisyahbanie@gmail.com</p>
                                </div>
                            </a>

                            <a
                                href="https://maps.google.com/?q=Kecamatan+Megamendung,+Kabupaten+Bogor"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-5 group cursor-pointer no-underline"
                            >
                                <div className="w-14 h-14 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl flex items-center justify-center shrink-0 group-hover:border-blue-500/40 group-hover:shadow-[0_0_20px] group-hover:shadow-blue-500/15 transition-all duration-300 group-hover:-translate-y-1">
                                    <FaMapMarkerAlt className="text-blue-500 text-2xl" />
                                </div>
                                <div>
                                    <p className="text-blue-400 text-sm mb-0.5 font-medium">Address</p>
                                    <p className="text-white font-medium tracking-wide group-hover:text-blue-400 transition-colors">Kab. Bogor, Kec. Megamendung.</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 md:p-10 shadow-2xl relative z-10 reveal reveal-right delay-100">
                        <h2 className="text-3xl font-bold text-white text-center mb-8">
                            Kontak <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Saya!</span>
                        </h2>

                        <form className="space-y-6 z-10" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Full Name"
                                    className="w-full bg-gray-900/60 text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm border border-gray-700/50 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 sm:col-span-2"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="Email Address"
                                    className="w-full bg-gray-900/60 text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm border border-gray-700/50 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300"
                                />

                                <input
                                    type="number"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="w-full bg-gray-900/60 text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm border border-gray-700/50 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 "
                                />
                            </div>

                            <textarea
                                name="message"
                                required
                                placeholder="Your Message"
                                rows="5"
                                className="w-full bg-gray-900/60 text-gray-200 placeholder-gray-500 rounded-xl px-4 py-3.5 text-sm border border-gray-700/50 focus:outline-none focus:border-blue-500/70 focus:ring-1 focus:ring-blue-500/70 transition-all duration-300 resize-none"
                            ></textarea>

                            <div className="flex justify-center pt-2">
                                <button
                                    type="submit"
                                    className="inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold px-10 py-3.5 rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 duration-300 focus:outline-none disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="flex justify-center w-full mb-15">
                <a href="" target="_blank" className=" flex items-center text-center justify-center w-60 bg-gradient-to-b from-blue-500 to-cyan-400  font-semibold px-10 py-3.5 rounded-4xl hover:from-blue-500 hover:to-cyan-400 hover:text-white transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 duration-300 focus:outline-none ">
                    <FaDownload className="text-4xl mr-3" /> Download CV
                </a>
            </div>
        </section>
    );
};

export default ContactComp;