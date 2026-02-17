import React, { useState } from 'react';
import {
    Trophy, Medal, AlertCircle, Calendar, MapPin,
    DollarSign, X, CheckCircle, Clock, Award, Users
} from 'lucide-react';

// Assets
import champ from '../assets/Tournaments/Generic Open/image copy.png';
import laver1 from '../assets/Tournaments/Generic Open/image copy 4.png';
import next_gen from '../assets/Tournaments/Next Gen Series/next_gen.png';

// --- DATA ---
const tournaments = [
    {
        id: 1,
        name: "Torneo Relampago",
        date: "15 Octubre 2025",
        status: "Finalizado",
        image: champ,
        categories: ["Singles Open"],
        location: "Sede Principal",
        price: "S/. 80.00",
        schedule: "09:00 AM - 06:00 PM",
        points: { winner: 500, finalist: 300, semifinalist: 180, participation: 50 }
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
        points: { winner: 1000, finalist: 600, semifinalist: 360, participation: 100 }
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
        points: { winner: 250, finalist: 150, semifinalist: 90, participation: 20 }
    }
];

const rankings = {
    "5ta A": [
        { rank: 1, name: "Diego Romero", points: 1200, wins: 15 },
        { rank: 2, name: "Brayan", points: 1150, wins: 14 },
        { rank: 3, name: "Diana", points: 1080, wins: 12 },
        { rank: 4, name: "Nicolas", points: 950, wins: 10 },
        { rank: 5, name: "Andre", points: 800, wins: 8 },
    ],
    "5ta B": [
        { rank: 1, name: "Marco Mendez", points: 5000, wins: 16 },
        { rank: 2, name: "Macarena Schwartz", points: 5000, wins: 15 },
        { rank: 3, name: "Gabriel Quiroz", points: 5000, wins: 13 },
        { rank: 4, name: "Paula Huaman", points: 5000, wins: 9 },
        { rank: 5, name: "Ivana Calderon", points: 4000, wins: 8 },
    ]
};

const Competition = () => {
    // Main View State
    const [activeTab, setActiveTab] = useState('tournaments'); // 'tournaments' | 'ranking'

    // Sub States
    const [selectedTournament, setSelectedTournament] = useState(null);
    const [rankingCategory, setRankingCategory] = useState("5ta A");

    const getRankIcon = (rank) => {
        if (rank === 1) return <Trophy className="text-yellow-400" size={20} />;
        if (rank === 2) return <Medal className="text-gray-300" size={20} />;
        if (rank === 3) return <Medal className="text-amber-600" size={20} />;
        return <span className="text-gray-500 font-bold">#{rank}</span>;
    };

    return (
        <section id="competicion" className="py-24 bg-brand-dark relative border-t border-white/5 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Unified Header */}
                <div className="text-center mb-12">
                    <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block animate-pulse">
                        Zona de Competición
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">
                        Competición <span className="text-brand-blue">Tennis Academy</span>
                    </h2>

                    {/* Main Switcher */}
                    <div className="inline-flex bg-slate-800/80 p-1.5 rounded-full border border-white/10 shadow-lg backdrop-blur-md">
                        <button
                            onClick={() => setActiveTab('tournaments')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'tournaments'
                                ? 'bg-brand-blue text-white shadow-lg scale-105'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Trophy size={18} />
                            Torneos
                        </button>
                        <button
                            onClick={() => setActiveTab('ranking')}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all duration-300 ${activeTab === 'ranking'
                                ? 'bg-brand-neon text-brand-dark shadow-lg scale-105'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            <Users size={18} />
                            Ranking
                        </button>
                    </div>
                </div>

                {/* --- TOURNAMENTS VIEW --- */}
                <div className={`transition-opacity duration-500 ${activeTab === 'tournaments' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fadeIn">
                        {tournaments.map((event) => (
                            <div
                                key={event.id}
                                className="group relative rounded-2xl overflow-hidden aspect-video cursor-pointer border border-transparent hover:border-brand-neon/50 transition-all shadow-lg hover:shadow-brand-neon/10"
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

                {/* --- RANKING VIEW --- */}
                <div className={`transition-opacity duration-500 ${activeTab === 'ranking' ? 'block opacity-100' : 'hidden opacity-0'}`}>
                    <div className="animate-fadeIn">
                        <div className="flex justify-center mb-8">
                            <div className="bg-slate-900/50 p-1 rounded-full border border-white/5 flex">
                                {Object.keys(rankings).map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setRankingCategory(cat)}
                                        className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${rankingCategory === cat
                                            ? 'bg-white/10 text-brand-neon border border-brand-neon/30'
                                            : 'text-gray-500 hover:text-gray-300'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl relative">
                            {/* Ranking Notice */}
                            <div className="absolute top-0 right-0 p-4">
                                <span className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 px-3 py-1 rounded-full text-xs font-bold">
                                    <AlertCircle size={12} /> Actualización quincenal
                                </span>
                            </div>

                            <div className="overflow-x-auto mt-8 md:mt-0">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-black/40 text-gray-400 uppercase text-xs font-bold tracking-wider">
                                            <th className="p-4 pl-8">#</th>
                                            <th className="p-4">Jugador</th>
                                            <th className="p-4 text-center">Wins</th>
                                            <th className="p-4 pr-8 text-right">Puntos</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        {rankings[rankingCategory].map((player, index) => (
                                            <tr key={index} className="hover:bg-white/5 transition-colors group">
                                                <td className="p-4 pl-8 font-bold">
                                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index < 3 ? 'bg-white/10' : ''}`}>
                                                        {getRankIcon(player.rank)}
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <span className={`font-bold text-lg ${index === 0 ? 'text-brand-neon' : 'text-white'}`}>
                                                        {player.name}
                                                    </span>
                                                </td>
                                                <td className="p-4 text-center text-gray-400 font-medium">
                                                    {player.wins}
                                                </td>
                                                <td className="p-4 pr-8 text-right">
                                                    <span className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-lg font-bold text-sm">
                                                        {player.points} pts
                                                    </span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <div className="p-4 bg-black/40 text-center border-t border-white/5">
                                <p className="text-gray-600 text-xs">
                                    * El ranking se basa en el desempeño oficial de los torneos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- TOURNAMENT MODAL (Global) --- */}
            {selectedTournament && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
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

                        <div className="w-full md:w-7/12 p-8 md:p-10 flex flex-col justify-between bg-slate-900/50 overflow-y-auto max-h-[80vh] custom-scrollbar">
                            <div className="space-y-6">
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${selectedTournament.status === 'Inscripciones Abiertas' ? 'bg-brand-neon text-black' : 'bg-white/10 text-gray-400'}`}>
                                        {selectedTournament.status}
                                    </span>
                                    <span className="text-gray-400 text-sm flex items-center gap-1">
                                        <MapPin size={14} /> {selectedTournament.location}
                                    </span>
                                </div>

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
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between">
                                <a
                                    href={`https://api.whatsapp.com/send/?phone=000000000&text=Hola, estoy interesado en participar en el torneo ${selectedTournament.name}`}
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

export default Competition;
