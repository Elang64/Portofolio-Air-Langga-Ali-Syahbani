import { useEffect } from 'react';
import '../index.css';
import NavbarComp from '../components/NavbarComp';
import HeroComp from '../components/HeroComp';
import ProjectComp from '../components/ProjectComp';
import SkillComp from '../components/SkillComp';
import CertificateComp from '../components/CertificateComp';
import FooterComp from '../components/FooterComp';
import ContactComp from '../components/ContactComp';

export default function App() {
  useEffect(() => {
    let observer;
    let revealElements = [];

    const observerOptions = {
      root: null,
      rootMargin: '0px -20px 0px -20px', 
      threshold: 0.1,
    };

    // Dibungkus dalam setTimeout (0ms) untuk melemparkannya ke ujung antrean event loop.
    // Ini menjamin seluruh sub-komponen anak (child components) telah selesai merender class '.reveal' mereka.
    const initObserver = () => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); 
          }
        });
      }, observerOptions);

      revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => observer.observe(el));
    };

    const timeoutId = setTimeout(initObserver, 100);

    // Pembersihan (Cleanup) Listener saat komponen dibongkar
    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        revealElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []); // Menggunakan array kosong agar fungsi ini murni berjalan sekali di awal pemuatan halaman

  return (
    <>
      {/* PERBAIKAN: text-gray diganti menjadi text-gray-300 agar warna font bawaan terlihat jelas */}
      <main className='antialiased text-gray-300 min-h-screen overflow-x-hidden'>

        <NavbarComp />

        <section id="home">
          <HeroComp />
        </section>

        <div className="flex-1 h-px my-16" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.05), #3b82f6, rgba(59,130,246,0.05))" }}></div>

        <section id='project' className="scroll-mt-32">
          <ProjectComp />
        </section>

        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.05), #3b82f6, rgba(59,130,246,0.05))" }}></div>

        <section id='skill' className="scroll-mt-18">
          <SkillComp />
        </section>

        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.05), #3b82f6, rgba(59,130,246,0.05))" }}></div>

        <section id='certificate' className="scroll-mt-18">
          <CertificateComp />
        </section>

        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.05), #3b82f6, rgba(59,130,246,0.05))" }}></div>

        <section id='contactme' className="scroll-mt-18">
          <ContactComp />
        </section>

        <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, rgba(59,130,246,0.05), #3b82f6, rgba(59,130,246,0.05))" }}></div>
        
        <FooterComp />
      </main>
    </>
  );
}