import React from 'react';
import { MapPin, Navigation, Clock } from 'lucide-react';
import { contact } from '../config/site';

// Real venue. Update the query if the academy moves.
const MAP_QUERY = 'Complejo Deportivo FAP Monterrico, Lima';
const MAP_URL = `https://www.google.com/maps/search/${encodeURIComponent(MAP_QUERY)}`;
const EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&z=15&output=embed`;

const Location = () => {
    return (
        <section id="ubicacion" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block">
                            Ubicación
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Nuestra <span className="text-brand-blue">Sede</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Entrenamos en canchas de primer nivel, con iluminación para turnos
                            nocturnos y estacionamiento seguro para las familias.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-brand-blue/30">
                                <div className="p-3 rounded-full bg-brand-blue text-white shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1 text-white">Complejo Deportivo FAP Monterrico</h3>
                                    <p className="text-gray-400">{contact.address}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4 p-4 rounded-xl border border-transparent">
                                <div className="p-3 rounded-full bg-brand-neon/20 text-brand-neon shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-xl mb-1 text-white">Horarios</h3>
                                    <p className="text-gray-400">{contact.hours}</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={MAP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            <Navigation size={20} />
                            Ver en Google Maps
                        </a>
                    </div>

                    {/* Map */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur">Ver Mapa Interactivo</span>
                        </div>

                        <iframe
                            title="Ubicación Alfa Tenis"
                            src={EMBED_URL}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
