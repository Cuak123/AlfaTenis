import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, DollarSign, X, CheckCircle, Clock, Award } from 'lucide-react';

import champ from '../assets/Tournaments/alfa tenis Open/image copy.png';
import laver1 from '../assets/Tournaments/alfa tenis Open/image copy 4.png';
import next_gen from '../assets/Tournaments/Next Gen Series/next_gen.png';

const tournaments = [
    {
        id: 1,
        name: "Torneo Relampago",
        date: "15 Octubre 2025",
        status: "Finalizado",
        image: champ,
        categories: ["Singles Open"],
        location: "Sede Principal - Alfa Tenis",
        price: "S/. 80.00",
        schedule: "09:00 AM - 06:00 PM",
        points: {
            winner: 500,
            finalist: 300,
            semifinalist: 180,
            participation: 50
        }
    },
    {
        id: 2,
        name: "Torneo Laver Cup",
        date: "14 Diciembre 2025",
        status: "Finalizado",
        image: laver1,
        categories: ["Equipos Blanco", "Equipos Negro"],
        location: "El Polo",
        price: "S/. 100.00 ",
        schedule: "Domingo: 10:30 - 14:00",
        points: {
            winner: 1000,
            finalist: 600,
            semifinalist: 360,
            participation: 100
        }
    },
    {
        id: 3,
        name: "Next Gen Series",
        date: "10-12 Mar 2024",
        status: "Próximamente",
        image: next_gen,
        categories: ["Bola Roja", "Bola Naranja", "Bola Verde"],
        location: "Sede Menores",
        price: "S/. 60.00",
        schedule: "Mañanas (08:00 - 13:00)",
        points: {
            winner: 250,
            finalist: 150,
            semifinalist: 90,
            participation: 20
        }
    }
];

const Tournaments = () => {
    const [selectedTournament, setSelectedTournament] = useState(null);

    return (
        <section id="torneos" className="py-20 bg-brand-dark border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block">
                            Competición
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                            Torneos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">& Eventos</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <p className="text-gray-400">Click en el evento para ver detalles e inscribirte</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {tournaments.map((event) => (
                        <div
                            key={event.id}
                            className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-transparent hover:border-brand-neon/50 transition-all"
                            onClick={() => setSelectedTournament(event)}
                        >
                            <img
                                src={event.image}
                                alt={event.name}
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                            <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 border border-white/10">
                                <Calendar size={12} className="text-brand-neon" />
                                {event.date}
                            </div>

                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-xl font-bold text-white group-hover:text-brand-neon transition-colors">
                                    {event.name}
                                </h3>
                                <span className={`text-xs font-bold px-2 py-0.5 rounded uppercase ml-0 mt-2 inline-block ${event.status === 'Inscripciones Abiertas' ? 'bg-brand-neon text-black' : 'bg-gray-700 text-gray-300'}`}>
                                    {event.status}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Event Poster Modal */}
            {selectedTournament && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
                    onClick={() => setSelectedTournament(null)}
                >
                    <div
                        className="bg-brand-dark border border-white/10 rounded-3xl overflow-hidden max-w-4xl w-full flex flex-col md:flex-row shadow-2xl relative animate-scaleIn"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setSelectedTournament(null)}
                            className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 p-2 rounded-full text-white transition-colors"
                        >
                            <X size={24} />
                        </button>

                        {/* Left: Poster Image */}
                        <div className="w-full md:w-5/12 relative h-64 md:h-auto">
                            <img
                                src={selectedTournament.image}
                                alt={selectedTournament.name}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent md:bg-gradient-to-r"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="text-brand-neon font-bold text-lg tracking-wider">{selectedTournament.date}</p>
                                <h2 className="text-3xl font-extrabold leading-tight">{selectedTournament.name}</h2>
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-slate-900/50 overflow-y-auto max-h-[80vh] custom-scrollbar">

                            <div className="space-y-6">
                                {/* Status Badge */}
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedTournament.status === 'Inscripciones Abiertas' ? 'bg-brand-neon text-black' : 'bg-white/10 text-gray-400'}`}>
                                        {selectedTournament.status}
                                    </span>
                                    <span className="text-gray-400 text-sm flex items-center gap-1">
                                        <MapPin size={14} /> {selectedTournament.location}
                                    </span>
                                </div>

                                {/* Info Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                        <div className="flex items-center gap-2 mb-2 text-brand-blue">
                                            <Trophy size={18} />
                                            <span className="font-bold text-sm uppercase">Categorías</span>
                                        </div>
                                        <ul className="text-sm text-gray-300 space-y-1">
                                            {selectedTournament.categories.map(cat => <li key={cat}>• {cat}</li>)}
                                        </ul>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                                            <DollarSign className="text-brand-neon" size={20} />
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase font-bold">Inscripción</p>
                                                <p className="text-white font-bold">{selectedTournament.price}</p>
                                            </div>
                                        </div>
                                        <div className="bg-white/5 p-3 rounded-xl border border-white/5 flex items-center gap-3">
                                            <Clock className="text-brand-neon" size={20} />
                                            <div>
                                                <p className="text-xs text-gray-400 uppercase font-bold">Horario</p>
                                                <p className="text-white font-bold text-sm">{selectedTournament.schedule}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Points Distribution */}
                                <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                    <div className="flex items-center gap-2 mb-3 text-brand-neon">
                                        <Award size={18} />
                                        <span className="font-bold text-sm uppercase">Puntos del Ranking</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-sm">
                                        <div className="flex justify-between p-2 bg-white/5 rounded">
                                            <span className="text-gray-300">Campeón</span>
                                            <span className="font-bold text-brand-blue">+{selectedTournament.points.winner}</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-white/5 rounded">
                                            <span className="text-gray-300">Finalista</span>
                                            <span className="font-bold text-white">+{selectedTournament.points.finalist}</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-white/5 rounded">
                                            <span className="text-gray-300">Semifinal</span>
                                            <span className="font-bold text-gray-400">+{selectedTournament.points.semifinalist}</span>
                                        </div>
                                        <div className="flex justify-between p-2 bg-white/5 rounded">
                                            <span className="text-gray-300">Participación</span>
                                            <span className="font-bold text-gray-500">+{selectedTournament.points.participation}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Button */}
                            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
                                <p className="text-xs text-gray-500 max-w-[200px]">
                                    *Cupos limitados. Cierre de inscripciones 2 días antes del evento.
                                </p>
                                <a
                                    href={`https://api.whatsapp.com/send/?phone=51997222869&text=Hola, estoy interesado en participar en el torneo ${selectedTournament.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-full md:w-auto bg-brand-blue hover:bg-brand-blue-dark text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-brand-blue/20 flex items-center justify-center gap-2"
                                >
                                    <CheckCircle size={18} />
                                    Inscribirse Ahora
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Tournaments;
