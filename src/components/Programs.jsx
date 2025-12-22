import React from 'react';
import { Users, Zap, Baby, CheckCircle, ArrowRight } from 'lucide-react';

const programs = [
    {
        id: 1,
        title: "Mini Tenis & Kids",
        icon: <Baby size={40} className="text-brand-neon" />,
        description: "Para niños de 4 a 10 años. Desarrollamos coordinación, diversión y los fundamentos básicos del deporte.",
        features: ["Pelotas de baja presión", "Canchas adaptadas", "Metodología lúdica", "Evaluaciones trimestrales"],
        color: "border-brand-neon",
        bgHover: "hover:shadow-brand-neon/20",
        message: "Hola, me gustaría agendar una clase de prueba para el programa de Niños."
    },
    {
        id: 2,
        title: "Adultos & Social",
        icon: <Users size={40} className="text-brand-blue" />,
        description: "Mejora tu técnica, ponte en forma y conoce gente nueva. Clases grupales dinámicas para todos los niveles.",
        features: ["Clínicas de técnica", "Partidos de práctica", "Horarios flexibles (Noche/Mañana)", "Eventos sociales"],
        color: "border-brand-blue",
        bgHover: "hover:shadow-brand-blue/20",
        message: "Hola, me gustaría agendar una clase de prueba para el programa de Adultos."
    },
    {
        id: 3,
        title: "Alto Rendimiento",
        icon: <Zap size={40} className="text-purple-500" />,
        description: "Entrenamiento intensivo para jugadores de competición. Enfoque físico, táctico y mental.",
        features: ["Planificación personalizada", "Preparación física específica", "Acompañamiento en torneos", "Videoanálisis"],
        color: "border-purple-500",
        bgHover: "hover:shadow-purple-500/20",
        message: "Hola, estoy interesado en una clase de prueba / evaluación para el equipo de Alto Rendimiento."
    }
];

const Programs = () => {
    return (
        <section id="programas" className="py-20 bg-brand-dark/50 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Nuestros <span className="text-brand-neon">Programas</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Tenemos el plan perfecto para ti, sin importar tu edad o nivel de juego.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {programs.map((program) => (
                        <div
                            key={program.id}
                            className={`bg-slate-800/40 p-8 rounded-3xl border border-white/5 ${program.color} hover:border-opacity-100 border-opacity-30 transition-all duration-300 hover:-translate-y-2 shadow-xl ${program.bgHover} flex flex-col`}
                        >
                            <div className="mb-6 bg-white/5 w-20 h-20 rounded-2xl flex items-center justify-center">
                                {program.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">{program.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {program.description}
                            </p>

                            <ul className="mb-8 space-y-3 flex-grow">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-gray-300 text-sm">
                                        <CheckCircle size={16} className={`text-opacity-80 ${program.id === 1 ? 'text-brand-neon' : program.id === 2 ? 'text-brand-blue' : 'text-purple-500'}`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`https://api.whatsapp.com/send/?phone=51997222869&text=${encodeURIComponent(program.message)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 transition-all bg-white hover:bg-gray-100 text-brand-dark group transform hover:scale-[1.02]"
                            >
                                Agendar Clase de Prueba
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
