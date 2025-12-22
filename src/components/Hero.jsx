import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="inicio" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?q=80&w=2942&auto=format&fit=crop"
                    alt="Tennis Court Action"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/50 to-brand-dark"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center md:text-left">
                <div className="max-w-3xl">
                    <h2 className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-4 animate-fadeIn">
                        Alfa Tenis Academy
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg">
                        Domina la Cancha. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">
                            Tu Evolución Empieza Aquí.
                        </span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl leading-relaxed">
                        Formación integral de alto rendimiento para todas las edades.
                        Entrena con profesionales y lleva tu juego al siguiente nivel.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                        <a
                            href="https://wa.me/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-brand-neon hover:bg-brand-neon-hover text-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.4)]"
                        >
                            Inscríbete Ahora
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#profesores"
                            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg transition-all border border-white/20"
                        >
                            Conoce el Staff
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-dark to-transparent z-10"></div>
        </section>
    );
};

export default Hero;
