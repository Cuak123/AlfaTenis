import React from 'react';
import { Star, Quote } from 'lucide-react';
import testimonial1 from '../assets/Testimonials/testimonial_1.png';
import testimonial2 from '../assets/Testimonials/testimonial_2.png';
import testimonial3 from '../assets/Testimonials/testimonial_3.png';

const testimonials = [
    {
        id: 1,
        name: "María Fernanda P.",
        role: "Mamá de Alumno (Mini Tenis)",
        image: testimonial1,
        quote: "Increíble la paciencia y metodología de los profes. Mi hijo de 5 años siempre quiere ir a sus clases, ha mejorado mucho su coordinación.",
        rating: 5
    },
    {
        id: 2,
        name: "Carlos Rodriguez",
        role: "Alumno Adulto",
        image: testimonial2,
        quote: "Empecé de cero y el ambiente es genial. No solo aprendes técnica, sino que te diviertes y haces ejercicio. ¡Totalmente recomendado!",
        rating: 5
    },
    {
        id: 3,
        name: "Andrea Vargas",
        role: "Competencia",
        image: testimonial3,
        quote: "La preparación física y mental que dan para los torneos es otro nivel. Me han ayudado a ganar confianza en mi juego.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-brand-dark border-t border-white/5 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-1/2 left-0 w-64 h-64 bg-brand-neon/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <span className="text-brand-blue font-bold tracking-widest text-sm uppercase mb-2 block">
                        Comunidad
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Voces de la <span className="text-brand-neon">Cancha</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-slate-900/50 p-8 rounded-3xl border border-white/5 relative hover:border-brand-neon/30 transition-all duration-300 hover:-translate-y-1 shadow-lg">
                            <Quote className="absolute top-8 right-8 text-white/5" size={48} />

                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-brand-neon/50"
                                />
                                <div>
                                    <h3 className="text-white font-bold">{testimonial.name}</h3>
                                    <p className="text-brand-blue text-xs font-bold uppercase">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-brand-neon text-brand-neon" />
                                ))}
                            </div>

                            <p className="text-gray-300 italic leading-relaxed relative z-10">
                                "{testimonial.quote}"
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
