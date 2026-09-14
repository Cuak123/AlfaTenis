import React from 'react';
import { ShieldCheck, GraduationCap, Building2, Clock, MapPin, ArrowRight } from 'lucide-react';
import { brand, contact, waLink } from '../config/site';

const highlights = [
    {
        icon: ShieldCheck,
        title: 'Ambiente seguro y divertido',
        text: 'Un espacio donde niños y jóvenes disfrutan aprendiendo, con acompañamiento cercano en cada clase.',
    },
    {
        icon: GraduationCap,
        title: 'Entrenadores calificados',
        text: 'Metodología profesional enfocada en la técnica, la disciplina y el desarrollo de cada jugador.',
    },
    {
        icon: Building2,
        title: 'Magníficas instalaciones',
        text: 'Canchas de primer nivel en el Complejo Deportivo FAP Monterrico para entrenar con comodidad.',
    },
];

const About = () => {
    return (
        <section id="nosotros" className="py-20 bg-brand-dark/50 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block">
                        Nosotros
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Sobre <span className="text-brand-blue">{brand.name}</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        {brand.tagline}
                    </p>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {highlights.map((item) => (
                        <div
                            key={item.title}
                            className="bg-slate-800/40 p-8 rounded-3xl border border-white/5 hover:border-brand-neon/40 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="mb-5 bg-white/5 w-16 h-16 rounded-2xl flex items-center justify-center">
                                <item.icon size={32} className="text-brand-neon" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{item.text}</p>
                        </div>
                    ))}
                </div>

                {/* Schedule + location + CTA */}
                <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex-1 space-y-4">
                        <div className="flex items-start gap-3">
                            <Clock className="text-brand-blue shrink-0 mt-1" size={22} />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Horarios</p>
                                <p className="text-white font-medium">{contact.hours}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <MapPin className="text-brand-blue shrink-0 mt-1" size={22} />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">Ubicación</p>
                                <p className="text-white font-medium">{contact.address}</p>
                            </div>
                        </div>
                    </div>

                    <a
                        href={waLink('Hola, quiero solicitar una clase de prueba gratis en Alfa Tenis.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group shrink-0 bg-brand-neon hover:bg-brand-neon-hover text-brand-dark px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(204,255,0,0.35)]"
                    >
                        Clase de prueba gratis
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
